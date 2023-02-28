let togglebutton = document.getElementsByClassName('totoggle')[0];
let navlink = document.getElementsByClassName('subnav')[0];

togglebutton.addEventListener("click",function(){
    navlink.classList.toggle('active');
});


let toclose = document.querySelector('.toggle_click');
toclose.addEventListener("click",function(){
    navlink.classList.toggle('active');
});

const scrollSkills = document.querySelector("#skillsimg");
scrollSkills.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollSkills.scrollLeft += evt.deltaY;
});

const scrollSkills2 = document.querySelector("#skillsimg2");
scrollSkills2.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollSkills2.scrollLeft += evt.deltaY;
});

const scrollTools = document.querySelector("#toolsimg");
scrollTools.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollTools.scrollLeft += evt.deltaY;
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