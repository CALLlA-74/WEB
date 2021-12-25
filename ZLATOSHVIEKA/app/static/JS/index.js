const nav_bar = document.getElementById('idNav_bar');
const logo = document.getElementById('idImgLogo');
const brand_name = document.getElementById('idBrand_name');
const bt_to_top = document.getElementById('idBt_to_top');

let isFirstLoad = true;
funcOnScroll();
window.addEventListener("resize", function () {
    nav_bar.style.transition = "0s";
    brand_name.style.transition = "0s";
    logo.style.transition = "0s";
    document.getElementById('idLogo').style.transition = "0s";
    document.getElementById('idNav_panel').style.transition = "0s";    
// изменение положения списка меню
    if (document.body.clientWidth < 1014) {
        document.getElementById('idUl_sections').style.visibility = "collapse";
        document.getElementById('idUl_sections').style.left = "-500px";
    }
    else {
        document.getElementById('idUl_sections').style.transition = "0s";
        document.getElementById('idUl_sections').style.left = "15%";
        document.getElementById('idUl_sections').style.visibility = "visible";
    }
});

function funcOnScroll() {
    if (!isFirstLoad) {
        nav_bar.style.transition = "0.3s";
        brand_name.style.transition = "0.3s";
        logo.style.transition = "0.3s";
        document.getElementById('idLogo').style.transition = "0.3s";
        document.getElementById('idNav_panel').style.transition = "0.3s";
    }

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        nav_bar.style.height = "6.875rem";                 
        logo.setAttribute("width", "44.07");
        logo.setAttribute("height", "67");
        brand_name.style.fontSize = "2.5rem";      
        brand_name.style.height = "45px";
        brand_name.style.marginLeft = "65px";
        bt_to_top.style.visibility = "visible";
        bt_to_top.style.opacity = "0.4";
    }
    else {
        nav_bar.style.height = "11.25rem";        
        logo.setAttribute("width", "80");
        logo.setAttribute("height", "121.6");
        brand_name.style.fontSize = "4rem";      
        brand_name.style.height = "67px";
        brand_name.style.marginLeft = "110px";
        bt_to_top.style.visibility = "collapse";
    }
}

bt_to_top.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    bt_to_top.style.visibility = "collapse";
});

bt_to_top.addEventListener("mouseover", function () {
    bt_to_top.style.opacity = "1";
});
bt_to_top.addEventListener("mouseout", function () {
    bt_to_top.style.opacity = "0.4";
});

document.addEventListener("DOMContentLoaded", function () {
    isFirstLoad = false;
    nav_bar.style.transition = "0.3s";
    brand_name.style.transition = "0.3s";
    logo.style.transition = "0.3s";
    document.getElementById('idLogo').style.transition = "0.3s";
    document.getElementById('idNav_panel').style.transition = "0.3s";
});

let sidebar = function (event) {
    if (event.target.id == 'idUl_sections') return;
    document.getElementById('idUl_sections').style.visibility = "collapse";
    document.getElementById('idUl_sections').style.left = "-500px";
    //document.getElementById('idUl_sections').removeEventListener("click", sidebar);
    document.removeEventListener("click", sidebar, true);
}

function onClick_btSideBar() {
    document.getElementById('idUl_sections').style.visibility = "visible";
    document.getElementById('idUl_sections').style.left = "0";
    //document.getElementById('idUl_sections').addEventListener("click", sidebar);
    document.addEventListener("click", sidebar, true);
}

document.getElementById("idSideBar_bt").addEventListener("mouseover", function () {
    document.getElementById("idSideBar_bt").style.opacity = "1";
    document.getElementById('idUl_sections').style.transition = "0.3s";
});

document.getElementById("idSideBar_bt").addEventListener("mouseout", function () {
    document.getElementById("idSideBar_bt").style.opacity = "0.4";
});

function onClick_input(){
    $.ajax({
            url: '/onClick_input',
            method: 'get',
            dataType: 'json',
            data: {},
            success: function(response){
                if (response.status == 1004) {
                    window.open('login.html', '_self');
                }
                else if (response.status == 1000){
                    window.location.reload();
                }
            }
        });
}
