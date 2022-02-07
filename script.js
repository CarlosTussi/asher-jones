// JavaScript Document

const menuIcon = document.querySelector(".menu-icon");
const closeMenuIcon = document.querySelector(".close-icon");
const dropDownMenu = document.querySelector(".side-nav");


menuIcon.addEventListener("click", 
							 () => {
	dropDownMenu.style.height = "100vh";
	menuIcon.style.display = "none";
										
})

closeMenuIcon.addEventListener("click",
							  ()=> {
	menuIcon.style.display = "block";
	dropDownMenu.style.height = "0";
})
