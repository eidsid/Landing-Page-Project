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

/**Display UI*/

class UI {


    /* add new section */
    static add_new_section(id) {
            /* get the document element */
            const main = document.querySelector('main');
            const div = document.createElement('div');
            div.classList.add('section_container');
            /* get the document element */
            // bgcolor = UI.getRandomInt();
            // creat  section content 
            const section_content = `<section id="section${id}"><div class="landing__container">
               <h2>Section ${id}</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. </p>
               <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div>
               </section> `;

            div.innerHTML = section_content;
            main.insertAdjacentElement('beforeend', div);

        }
        /* add new section !*/
        /* add new navbar item */
    static add_new_navitem(id) {
        const navbar = document.querySelector('#navbar_list');
        let link = document.createElement('li');
        link.innerHTML = `<a href="#section${id}">section${id}</a>`;
        navbar.append(link);
    }

    /* add new navbar item ! */


}

// EVENTS :

/* add event to creat section and nav link */
let id = 0;

function add_new() {
    id++;
    UI.add_new_section(id);
    UI.add_new_navitem(id);
}
/* add event to creat section and nav link! */

/*add active class */



onscroll = function() {
    // get all sections in page
    let sections = document.querySelectorAll("section");
    let section1 = document.querySelector("#section1");
    let nav = document.querySelector(".navbar_menu");
    let add_in_nav = document.querySelector(".add_in_nav");
    // get the scroll position
    let scrollPosition = document.documentElement.scrollTop;

    //add stacky for nave bar and display add_in_nav
    if (scrollPosition > section1.offsetTop + 300) {
        nav.classList.add('stacky');
        add_in_nav.style.display = "block";
    } else {
        add_in_nav.style.display = "none";

        nav.classList.remove('stacky');
    }

    // make loob in sections and get the position of it
    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight &&
            scrollPosition < section.offsetTop * 1.7
        ) {

            // add and remove 
            document.querySelectorAll('section').forEach(el => {
                el.style.color = 'black';
            })
            let currentId = section.attributes.id.value;
            class_satat.remove_active();
            class_satat.addActiveClass(currentId);

            /* add and remove hightlight */
            class_satat.removehighlight();
            section.style.opacity = 1;
            section.style.color = 'white';


        }
    });
};

class class_satat {
    // add active class to links
    static addActiveClass(id) {
        let selector = `nav a[href="#${id}"]`;
        document.querySelector(selector).classList.add("active");
    }

    // remove all class
    static remove_active() {
            document.querySelectorAll("nav a").forEach((link) => {
                link.classList.remove("active");
            });


        }
        // remove highlight
    static removehighlight() {
        document.querySelectorAll("section").forEach((section) => {
            section.style.opacity = 0.5;
        });

    }
}




//add three section with links in start
add_new();
add_new();
add_new();

let section1 = document.querySelector("#section1");
section1.style.color = "white";

/* back to top */
const goToTopElement = document.getElementById('scrollToTop');

function goToTop() {
    goToTopElement.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        })
    });
}
goToTop();
/* back to top! */