const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.mobile-nav-toggle');

//////////////////// Gallery Section

const tabContainer = document.querySelector('.tab-container');

const pictureTab = document.querySelector('.gallery__picture');

const videoTab = document.querySelector('.gallery__video');

const galleryPictures = document.querySelector('.gallery-pictures_content');

const galleryVideos = document.querySelector('.gallery-videos_content');

///////////////////// User Account Section

const userProfileSection = document.querySelector('.user-detail__list');

const coursePurchased = document.querySelector('.user-details__course');

const profileDetails = document.querySelector('.user-details__profile');

const proLogin = document.querySelector('.user-details__pro-login');

const userHelp = document.querySelector('.user-details__help');


const purchased = document.querySelector('.user-details__content_course')

const details = document.querySelector('.user-details__content_profile')

const loginss = document.querySelector('.user-details__content_pro-login')

const helppp = document.querySelector('.user-details__content_help')


////////////////////////// FAQ Section

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

///////////////////////// Menu Section

function toggleNav() {
    nav.classList.toggle('show');  
}



///////////////////////// Gallery Section


function toggleTab(e) {

   if(e.target == videoTab ) {
       videoTab.classList.add('current-gallery');
       pictureTab.classList.remove('current-gallery');
       galleryVideos.classList.add('gallery-active');
       galleryPictures.classList.remove('gallery-active');
       console.log('yes');

   } else if(e.target == pictureTab ) {

       pictureTab.classList.add('current-gallery');
       videoTab.classList.remove('current-gallery');
       galleryPictures.classList.add('gallery-active');
       galleryVideos.classList.remove('gallery-active');
       onsole.log('false');
   };
}



////////////////////// User Account Section


function toggleUserSection(e) {
    if(e.target == coursePurchased ) {
        coursePurchased.classList.add('current');
        profileDetails.classList.remove('current');
        proLogin.classList.remove('current');
        userHelp.classList.remove('current');

        purchased.classList.add('user-active')
        details.classList.remove('user-active');
        loginss.classList.remove('user-active');
        helppp.classList.remove('user-active');

    } else if(e.target == profileDetails) {
        profileDetails.classList.add('current');
        coursePurchased.classList.remove('current');
        proLogin.classList.remove('current');
        userHelp.classList.remove('current');

        details.classList.add('user-active');
        purchased.classList.remove('user-active')
        loginss.classList.remove('user-active');
        helppp.classList.remove('user-active');

    } else if(e.target == proLogin) {
        proLogin.classList.add('current');
        profileDetails.classList.remove('current');
        coursePurchased.classList.remove('current');
        userHelp.classList.remove('current');

        loginss.classList.add('user-active');
        details.classList.remove('user-active');
        purchased.classList.remove('user-active')
        helppp.classList.remove('user-active');

    }  else if(e.target == userHelp) {
        userHelp.classList.add('current');
        proLogin.classList.remove('current');
        profileDetails.classList.remove('current');
        coursePurchased.classList.remove('current');

        helppp.classList.add('user-active');
        loginss.classList.remove('user-active');
        details.classList.remove('user-active');
        purchased.classList.remove('user-active')
    } 
}






toggleBtn.addEventListener('click', toggleNav);

if(document.getElementById('gallery')) {
    tabContainer.addEventListener('click', toggleTab);
}

if(document.getElementById('my-account')) {
    userProfileSection.addEventListener('click', toggleUserSection);
}

