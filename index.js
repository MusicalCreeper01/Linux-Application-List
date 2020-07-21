
const path = require('path');
const fs = require('fs');

/* === https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html#recognized-keys === */
/* May be used for later features for re-mapping the key names */
const desktop_entries_mapping = {
    /*"Type": "type", // type of application [Application, Link, Directory]
    "Version": "version",
    "Name": "name", //Specific  name, e.g "Mozilla"
    "GenericName": "genericName", // Generic name, e.g "Web Browser".
    "NoDisplay": "noDisplay", // Don't display in menus
    "Comment": "tooltip", // Tooltip
    "Icon": "icon",
    "Hidden": "deleted", // Equivalent to the .desktop file not existing
    "OnlyShowIn": "showIn",
    "NotShowIn": "notShowIn",
    "DBusActivatable": "DBusActivatable",

    "TryExec": "tryExec",
    "Exec": "Exec" ,
    "Path": "Path", // cwd type == Application
    "Terminal": "terminal",

    "Actions": "actions", // basically sub-applications for sub-items
    "MimeType": "mimeTypes", // MIME types supported
    "Categories": "categories",

    "Implements": "implements", //?
    "Keywords": "keywords",
    "StartupNotify": "startupNotify",
    "StartupWMClass": "startupWMClass",
    "URL": "url" // If Link, the URL of the link*/
};

const app_paths = ["/usr/share/applications", "/usr/local/share/applications", "~/.local/share/applications"]

var app_path = undefined

const app_ext = ".desktop";

const mimeinfo_file = "mimeinfo.cache"

module.exports = function() {

    /* Check for which application path to use */
    app_paths.some(function(folder){
        if (fs.existsSync(folder)) {
            app_path = folder
            return true
        }
        return false
    })

    if(app_path == undefined){
        console.error(" \n ===== ERROR ===== \n Could not find application path! Either you are not on Linux, or your are running an unsupported Distro. Please file a bug report! \n ==================== \n")
        return undefined;
    }

    return {
        path: app_path,
        list: app_list,
        data: app_data

    }
}

function parse_keypair (keypair){
    var key = keypair.split('=')[0].replace(' ', ''); // extract the key and remove any spaces that might have been before the =

    var lang = undefined;
    if(key.indexOf('[') > -1 && key.indexOf(']') > -1){
        lang = key.replace(/(.*\[)|(\].*)/g, ' ') //  extract the lang indentifier https://regex101.com/r/PJHOzw/1
        key = key.split("[")[0];
    }

    key = desktop_entries_mapping[key] != undefined ? desktop_entries_mapping[key] : key;

    var value = keypair.substring(keypair.indexOf('=') + 1);
    if(value != undefined){
        if(value.indexOf(';') > -1){
            value = value.split(';');
            value.pop(); // Entries contain a trailing semi-colon which creates an empty element. Remove that!
        }
    }

    return {"key": key, "value": value, "lang": lang};
}

function app_list (){
    var files = fs.readdirSync(app_path);

    var apps = [];
    files.forEach(function(file){
        var p = path.parse(file);
        if(p.ext == app_ext)
        apps.push(p.name);
    });
    return apps;
}

function app_data (app) {
    app += app_ext;
    var the_app_path = path.join(app_path, app);
    //console.log(the_app_path);

    var data = undefined;

    try {
        data = fs.readFileSync(the_app_path, 'utf8');
    } catch (err) {
        console.log("Error reading " + the_app_path);
        console.error(err);
    }

    if(data == undefined){
        return undefined;
    }

    var app_dat = {absolutepath: the_app_path, lang:{}};
    var seen_head = false;
    data.split('\n').some(function(line){
        if(!line.startsWith('#') && line.indexOf('=') > -1){
            var p = parse_keypair(line);
            if(p.lang != undefined){
                if(app_dat.lang[p.lang] == undefined)
                    app_dat.lang[p.lang] = {};
                app_dat.lang[p.lang][p.key] = p.value;
            }else{
                app_dat[p.key] = p.value;
            }
        }else if(line.indexOf('[') > -1 && line.indexOf(']') > -1){
            /* Skip past any actions - TODO: Add action parsing
              https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html#extra-actions */
            if(!seen_head){
                seen_head = true;
            }else{
                return true;
            }
        }
        return false;
    });

    return app_dat;
}
