let togglebutton = document.getElementsByClassName('totoggle')[0];
let navlink = document.getElementsByClassName('subnav')[0];

togglebutton.addEventListener("click",function(){
    navlink.classList.toggle('active');
});


let toclose = document.querySelector('.toggle_click');
toclose.addEventListener("click",function(){
    navlink.classList.toggle('active');
});

const scrollProjects = document.querySelector("#websites");
scrollProjects.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollProjects.scrollLeft += evt.deltaY;
});

const scrollServices = document.querySelector("#service_des");

scrollServices.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollServices.scrollLeft += evt.deltaY;
});

function openResume(){
    window.open("https://drive.google.com/file/d/10Pbz_sipt-qR3D8dyCI8dGdtBWOjIl1z/view?usp=sharing", "_blank")
}