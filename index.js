const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.mobile-nav-toggle');

const tabContainer = document.querySelector('.button-container');

const pictureTab = document.querySelector('.gallery__picture');
const videoTab = document.querySelector('.gallery__video');

const galleryPictures = document.querySelector('.gallery-pictures_content')

const galleryVideos = document.querySelector('.gallery-videos_content')



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


function toggleTab(e) {
   if(e.target == videoTab ) {
       pictureTab.classList.remove('current-gallery');
       videoTab.classList.add('current-gallery');
       galleryPictures.classList.remove('gallery-active');
       galleryVideos.classList.add('gallery-active');
   } else if(e.target == pictureTab ) {
       videoTab.classList.remove('current-gallery');
       pictureTab.classList.add('current-gallery');
       galleryVideos.classList.remove('gallery-active');
       galleryPictures.classList.add('gallery-active');
   };


}





toggleBtn.addEventListener('click', toggleNav);

tabContainer.addEventListener('click', toggleTab);

