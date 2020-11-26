let hamburger = document.getElementById("hamburgerMenu");
let toggleMenu = document.getElementById("mobileMenu");
let returnToPort = document.getElementById("closeMenu");
let docsBody = document.getElementById("body");

let returnHome = document.getElementById("vlLogo");
let goToProjects = document.getElementById("mobileProject");

let mobileMenuDisplay = () => {
  toggleMenu.classList.add("show");
  docsBody.classList.add("hideOverflow");
  console.log("This works");
};

let removeMenu = () => {
  toggleMenu.classList.remove("show");
  docsBody.classList.remove("hideOverflow");

  console.log("removed");
};

hamburger.addEventListener("click", mobileMenuDisplay);
returnToPort.addEventListener("click", removeMenu);
vlLogo.addEventListener("click", removeMenu);
goToProjects.addEventListener("click", removeMenu);

// Click on project to send to projects
let mobileItemProj = document.getElementById("sendToProjects");

let goToProj = () => {
  toggleMenu.classList.remove("showMenu", "show");
  docsBody.classList.remove("hideOverflow");
  console.log("projects");
};

mobileItemProj.addEventListener("click", goToProj);
