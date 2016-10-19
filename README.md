# Linux-Application-List
Node module for parsing /usr/share/application to get a list of the installed/launchable applications and their info.

# Usage 
```
const linux_apps = require('linux-app-list')();
if(linux_apps == undefined){
    console.error("Failed to load apps module.");
    return;
}

linux_apps.list().forEach(function(app){
    var data = linux_apps.data(app);
    if(data == undefined){
        console.log("    " + app + " - Unable to get info");
    }else{
        console.log("    " + app);
        console.log(data);
    }
});
```

# Functions

`#.list()`

Gets a list of all the applications. Returns a string array of the filenames.

`#.data(<string app>)`

Get the data for the passed app. The string should be the name of the file without the extension, as returned from `#.list()`. Returns a JSON object.

