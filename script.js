const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", ()=>{
if (menu.classList.contains("disp")==true) {
    menu.classList.remove("disp");
} else {
    menu.classList.add("disp");
}
})


const categor = document.querySelector("#categor");
const categ_menu = document.querySelector("#categ_menu");

categor.addEventListener("click", ()=>{
if (categ_menu.classList.contains("disps")==true) {
    categ_menu.classList.remove("disps");
} else {
    categ_menu.classList.add("disps");
}
})