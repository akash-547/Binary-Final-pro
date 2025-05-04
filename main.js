const menu=document.getElementById("nav-menu1");
const toogle=document.getElementById("navbar-toggle1");
function clickbar (){
    if(menu.style.left==="0px"){
        menu.style.left='-500px';
    }
    else{
        menu.style.left='0px';
    }
}
toogle.addEventListener('click',clickbar);