const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.mobile-nav-toggle');



accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {

        // Check if any accordion tab is open
        const currentlyActiveAccordionItemHeader = document.querySelector('.accordion-item-header.show');
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('show');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        // Toggle the show class
        accordionItemHeader.classList.toggle('show');

        // Generate the height for the accordion Body
        const accordionBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains('show')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            accordionItemHeader.style.borderBottomLeftRadius = '0';
            accordionItemHeader.style.borderBottomRightRadius = '0';


        } else {
            accordionBody.style.maxHeight = 0;
            accordionItemHeader.style.borderBottomLeftRadius = '10px';
            accordionItemHeader.style.borderBottomRightRadius = '10px';

        }
    });
});


function toggleNav(e) {
    nav.classList.toggle('show');  
}


toggleBtn.addEventListener('click', toggleNav);