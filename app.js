/* DATE */
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", (e) => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//FIXED NAV
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.scrollY;
  const navbarHeight = navbar.getBoundingClientRect().height;
  //Convert nav to nav fixed
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  //add btn top
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//Scroll to the exactly section
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //calculate heights
    const navbarHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navbarHeight;
    //console.log(position);
    if (!fixedNav) {
      position = position - navbarHeight;
    }
    if (navbarHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
