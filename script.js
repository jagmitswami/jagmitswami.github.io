let togglebutton = document.getElementsByClassName('totoggle')[0];
let navlink = document.getElementsByClassName('subnav')[0];
let flagIntro = true;
togglebutton.addEventListener("click",function(){
    navlink.classList.toggle('active');
    if(flagIntro==true){
        document.querySelector('.bodyy').style.paddingTop='250px';
        flagIntro = false;
    }else{
        document.querySelector('.bodyy').style.paddingTop='10px';
        flagIntro = true;
    }
});