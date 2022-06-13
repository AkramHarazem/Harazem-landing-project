/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll('section');
let h2s = document.querySelectorAll('h2');
let list = document.getElementById('navbar__list');
// let liS = document.querySelectorAll('li');
// let aList = document.querySelectorAll('a');
/*Set a variable for top button element.*/
const scrollToTopButton = document.getElementById('js-top');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */



/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// Build menu
/* function to generate navigation bar and link for each section */
function createNavBar() {

  sections.forEach((section, index) => {
    const listItem = document.createElement('li');
    // const sectionLink = document.createElement('a');
    const sectionName = "section " + (index + 1);

    // sectionLink.setAttribute('href', `#${sectionName}`);
    listItem.innerText = sectionName;
    listItem.setAttribute ('id', 'li'+(index+1) )
    listItem.addEventListener("click", function() {
      scrollToSection(index + 1)
    });

    // listItem.appendChild(sectionLink);
    list.appendChild(listItem);

  })

};
createNavBar();


// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
/* function to scroll to choosen section */
function scrollToSection(sectionNumber) {
  const sectionItem = document.getElementById('section' + sectionNumber);
  sectionItem.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
  event.preventDefault();
};



// Add class 'active' to section when near top of viewport
/* function to add and remove 'your-active-class' class to section and
add and remove yellow color class to Nav bar item and section head h2 */

function addActiveClass(section) {
  const sectionId = section.getAttribute('id');
  document.getElementById(sectionId).classList.add('your-active-class');
}

function removeActiveClass(section) {
  const sectionId = section.getAttribute('id');
  document.getElementById(sectionId).classList.remove('your-active-class');
}

function activeSection() {
  const BOUNDING_OFFSET = 200
    sections.forEach((section,index) => {
    let sectionElements = section.getBoundingClientRect();
    const li= document.getElementById ("li"+ (index+1));
    const h2Id = document.getElementById ("h2_"+ (index+1))
    if (sectionElements.top <= BOUNDING_OFFSET && sectionElements.bottom >= BOUNDING_OFFSET) {
      addActiveClass(section);
      li.classList.add ("active_Nav");
      h2Id.classList.add ("yellowActive");
    } else {
      removeActiveClass(section);
      li.classList.remove ("active_Nav");
      h2Id.classList.remove ("yellowActive");
    }
  });
}
document.addEventListener('scroll', activeSection);


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menuToggle() {
  const headerUll = document.getElementById("navbar__list");
  if (headerUll.className == "topnav") {
    headerUll.setAttribute('class', 'topnav responsive');
  } else {
    headerUll.setAttribute('class', 'topnav');
  }
};
menuToggle();


/*----- TOP BUTTON------*/

/*a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.*/
function scrollFunc() {
  /* Get the current scroll value*/
  let y = window.scrollY;

  /* If the scroll value is greater than the window height, add a class to the scroll-to-top button to show it */
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener('scroll', scrollFunc);


function scrollBtn() {
  // set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  /* If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  We'll also animate that scroll with requestAnimationFrame:
  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame*/
  if (c > 0) {
    window.requestAnimationFrame(scrollBtn);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

/* When the button is clicked, run our ScrolltoTop function above  */
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollBtn();
};

/**
 * End Main Functions
 * Begin Events
 *
 */