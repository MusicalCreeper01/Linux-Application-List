const xorg_apps = require('./')();

if(xorg_apps == undefined){
    console.error("Failed to load apps module.");
    return;
}

console.log(" Using app path " + xorg_apps.path);
console.log(" === All Valid Applications === ");

xorg_apps.list().forEach(function(app){
    var data = xorg_apps.data(app);
    if(data == undefined){
        console.log("    " + app + " - Unable to get info");
    }else{
        console.log("    " + app);
        console.log(data);
    }
});
