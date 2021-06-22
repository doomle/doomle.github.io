/*

    Code is not canon
    House of Arson is not canon

    Produced and funded by House of Arson


*/

page = 1;

function search() {

    document.getElementById("main").style.display = "none";
    document.getElementById("results").style.display = "block";

    document.getElementById("none").style.display = "none";
    document.getElementById("wds").style.display = "none";

    var searched = document.getElementById('searchme').value;

    if(page == 1){
        var searched = document.getElementById('searchme').value;
    } else if(page == 2){
        var searched = document.getElementById('searched').value;
    }

    document.getElementById("searched").value = searched;
    searched = searched.toLowerCase()

    found = false;

    if(searched.includes("web")||searched.includes("development")||searched.includes("simulator")){
        document.getElementById("wds").style.display = "block";
        found = true;
    }
    if(searched.includes("kaleb")||searched.includes("rubio")||searched.includes("twitter")){
        document.getElementById("kr").style.display = "block";
        found = true;
    }
    if(!found){
        document.getElementById("none").style.display = "block";
    }

    page = 2;
}