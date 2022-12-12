let togglebutton = document.getElementsByClassName('totoggle')[0];
let navlink = document.getElementsByClassName('subnav')[0];

togglebutton.addEventListener("click",function(){
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