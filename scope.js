(function setup(){
var utilities = getUtilities();
var settings = getLocalStorageSettings();
if(settings === undefined){
settings = getDefaultSettings();

}
window.app = {
utilities: utilities,
settings: settings

}
}());