//#region "Récupération des conteneurs"
let contentInputPlaylist = document.getElementById('contentInputPlaylist');
let contentInputClip = document.getElementById('contentInputClip');
let contentDeletePlaylist = document.getElementById('contentDeletePlaylist');
let contentDeleteClip = document.getElementById('contentDeleteClip');
//#endregion
//#region "Récupération des inputs"
let inputPlaylist = document.getElementById('inputPlaylist');
let inputClip = document.getElementById('inputClip');
let deleteInputPlaylist = document.getElementById('deleteInputPlaylist');
let deleteInputClip = document.getElementById('deleteInputClip');
//#endregion
//#region "Récupération des boutons"
let btnCreatePlaylist = document.getElementById('btnCreatePlaylist');
let btnCreateClip = document.getElementById('btnCreateClip');
let btnDeletePlaylist = document.getElementById('btnDeletePlaylist');
let btnDeleteClip = document.getElementById('btnDeleteClip');
//#endregion


//#region Appel des fonctions
init();
//#endregion

//#region Fonctions
//#region "Initialisation des éléments"
function init(){
    contentInputClip.classList.add('hide');
    contentDeletePlaylist.classList.add('hide');
    contentDeleteClip.classList.add('hide');
}
//#endregion

//#region "Afficher un élément"
function displayElement(el){
    
}
//#endregion
//#endregion