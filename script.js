let togglebutton = document.getElementsByClassName('totoggle')[0];
let navlink = document.getElementsByClassName('subnav')[0];
togglebutton.addEventListener("click",function(){
    navlink.classList.toggle('active');
});