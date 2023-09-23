const landingPagesBtn = document.querySelector(".landing-page-btn");
const javascriptBtn = document.querySelector(".javascript-btn");
const reactBtn = document.querySelector(".react-btn");
const allBtns = document.querySelectorAll(".project-select-btn");

const landingPageContainer = document.querySelector(".landing-projects");
const javascriptContainer = document.querySelector(".javascript-projects");
const reactContainer = document.querySelector(".react-projects");

const displayProjects = () => {
  const activeContainer = document.querySelector(".active-container");

  activeContainer.classList.remove('active-container');

  if (landingPagesBtn.classList.contains("active-btn")) {
    landingPageContainer.classList.add("active-container");
  } else if (javascriptBtn.classList.contains("active-btn")) {
    javascriptContainer.classList.add("active-container");
  } else if (reactBtn.classList.contains("active-btn")) {
    reactContainer.classList.add("active-container");
  }
};

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const currentActive = document.querySelector(".active-btn");
    currentActive.classList.remove("active-btn");
    const currentBtn = event.target.closest(".project-select-btn");
    currentBtn.classList.add("active-btn");
    displayProjects();
  });
});