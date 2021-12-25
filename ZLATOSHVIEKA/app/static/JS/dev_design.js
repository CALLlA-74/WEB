let isVisible_desc = false;
let isVisible_tech = false;
let isVisible_clrs = false;
let isVisible_format = false;
let isVisible_material = false;

function showDescription() {
    const article = document.getElementById('idDescription');
    if (isVisible_desc) {
        article.style.display = "none";
        isVisible_desc = false;
    }
    else {
        article.style.display = "block";
        isVisible_desc = true;
    }
}

function showListTech() {
    const list_tech = document.getElementById('idList_tech');
    if (isVisible_tech) {
        list_tech.style.display = "none";
        isVisible_tech = false;
    }
    else {
        list_tech.style.display = "block";
        isVisible_tech = true;
    }
}

function showListColors() {
    const list_clrs = document.getElementById('idList_clrs');
    if (isVisible_clrs) {
        list_clrs.style.display = "none";
        isVisible_clrs = false;
    }
    else {
        list_clrs.style.display = "block";
        isVisible_clrs = true;
    }
}

function showListFormat() {
    const list_clrs = document.getElementById('idList_format');
    if (isVisible_format) {
        list_clrs.style.display = "none";
        isVisible_format = false;
    }
    else {
        list_clrs.style.display = "block";
        isVisible_format = true;
    }
}

function showListMaterial() {
    const list_clrs = document.getElementById('idList_material');
    if (isVisible_material) {
        list_clrs.style.display = "none";
        isVisible_material = false;
    }
    else {
        list_clrs.style.display = "block";
        isVisible_material = true;
    }
}

function checkList(key, idInp, idList) {
    const inp = document.getElementById(idInp);
    const lst = document.getElementById(idList);
    inp.value = key;
    lst.style.display = "none";
    if (idList === 'idList_tech') isVisible_tech = false;
    if (idList === 'idList_clrs') isVisible_clrs = false;
    if (idList === 'idList_format') isVisible_format = false;
    if (idList === 'idList_material') isVisible_material = false;
}

function outOfList(idList) {
    const lst = document.getElementById(idList);
    lst.style.display = "none";
    if (idList === 'idList_tech') isVisible_tech = false;
    if (idList === 'idList_clrs') isVisible_clrs = false;
    if (idList === 'idList_format') isVisible_format = false;
    if (idList === 'idList_material') isVisible_material = false;
}