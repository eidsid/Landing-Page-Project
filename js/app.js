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


/* start class Display UI */
class UI {

    /* start mothed section content  */
    static content(id) {
            // creat section content and with id
            const section_content =
                `<section id="section${id}">
            <div class="landing__container">
            <h2>Section ${id}</h2>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus minima, blanditiis odit iste hic tempore ea repudiandae odio unde vitae aspernatur. Eos, officiis perferendis fugit natus inventore magni sint eum facere debitis nostrum adipisci tenetur?
            At dolor natus pariatur ducimus repudiandae, quam cupiditate consequuntur tempore nemo culpa neque iste non explicabo quasi ullam a id eaque nostrum numquam porro placeat alias eos sequi. Aliquam, natus ipsa nobis laborum neque deserunt eos
            libero quis praesentium minima illum iusto. Quidem, natus eius.
            </p>        
            </section> `;
            return section_content;

        }
        /* end mothed section content  */

    /* start mothed add new section */
    static add_new_section(id) {
            // get the document element
            const main = document.querySelector('main');
            const div = document.createElement('div');
            div.classList.add('section_container');

            // creat  section content and add id
            div.innerHTML = UI.content(id);
            main.insertAdjacentElement('beforeend', div);

        }
        /* end add new section */


    /* start mothed add new navbar item */
    static add_new_navitem(id) {

            //seclect nav-bar list and creat new nav-link

            const navbar = document.querySelector('#navbar_list');
            let link = document.createElement('li');
            link.innerHTML = `<a href="#section${id}">section${id}</a>`;
            navbar.append(link);

        }
        /* end add new navbar item  */


}
/* end  class Display UI */


// EVENTS :-

// add event to creat section and nav link 

let id = 0;

function add_new() {
    id++;
    UI.add_new_section(id);
    UI.add_new_navitem(id);
}




// add event when user scroll

onscroll = function() {

    // get elements  in page
    let sections = document.querySelectorAll("section");
    let section1 = document.querySelector("#section1");
    let nav = document.querySelector(".navbar_menu");
    let add_in_nav = document.querySelector(".add_in_nav");

    // get the scroll position
    let scrollPosition = document.documentElement.scrollTop;

    // add stacky for nave bar and display add_in_nav
    if (scrollPosition > section1.offsetTop + 300) {
        nav.classList.add('stacky');
        add_in_nav.classList.add('add_in_nav_active');
    } else {
        add_in_nav.classList.remove('add_in_nav_active');
        nav.classList.remove('stacky');
    }

    // make loop in sections and get the position of it and controll classs
    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop -
            section.offsetHeight * 0.5 &&
            scrollPosition < section.offsetTop * 1.1
        ) {
            // remove  hightlight from all section  
            class_manage.removehighlight();

            /* add  hightlight */
            class_manage.addhighlight(section);

            // remove all active class from links
            class_manage.remove_active_link();

            // get the id of section add add active class to link 
            let currentId = section.attributes.id.value;
            class_manage.addActiveClass_link(currentId);

        }
    });
};


/* start class manage */
class class_manage {

    // add active class to links
    static addActiveClass_link(id) {
        let selector = `nav a[href="#${id}"]`;
        document.querySelector(selector).classList.add("active");

    }

    // remove all class from links
    static remove_active_link() {
        document.querySelectorAll("nav a").forEach((link) => {
            link.classList.remove("active");
        });


    }

    // add highlight
    static addhighlight(section) {
        section.classList.add('hightlight');
    }

    // remove highlight
    static removehighlight() {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            section.classList.remove('hightlight');
        });

    }
}
/* end class manage */


// add three sections with their links in start
add_new();
add_new();
add_new();


// add hightlight to the frist section
let section1 = document.querySelector("#section1");
section1.classList.add('hightlight');

// add active class to navbar in start
let frist_link = 'nav a[href="#section1"]';
document.querySelector(frist_link).classList.add("active");