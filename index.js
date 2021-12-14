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


///////////////////// Gallery Modal Light Box
const gallery = document.querySelectorAll('.gallery-pictures_content .image')
const previewBox = document.querySelector('.preview-box');
const previewImg = previewBox.querySelector('img')
const closeIcon = previewBox.querySelector('.icon');
const currentImg = previewBox.querySelector('.current-img');
const totalImg = previewBox.querySelector('.total-img');
const shadow = document.querySelector('.shadow');

window.onload = () => {
    for(let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; // passing gallery images length to totalImg
        let newIndex = i; // padding i value to newIndex variable
        let clickImgIndex;
        gallery[i].onclick = ()=> {
            clickImgIndex = newIndex; //padding clicked img index to clickimgIndex variable
            console.log(i);
            
            function preview() {
                currentImg.textContent = newIndex + 1; //passing newIndex value to currentImg by adding +1
                let selectedImgUrl = gallery[newIndex].querySelector('img').src; //getting user clicked image url
                previewImg.src = selectedImgUrl // passing user clicked img url to previewImg source

            }

            // previous and Next button
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            if(newIndex == 0) {
                prevBtn.style.display = 'none';
            }
            if(newIndex >= gallery.length - 1) {
                nextBtn.style.display = 'none';
            }
            prevBtn.onclick = () => {
                newIndex--; // decrement newIndexvalue
                if(newIndex == 0) {
                    preview();
                    prevBtn.style.display = 'none';
                } else {
                    preview(); // calling again above function to image
                    nextBtn.style.display = 'block'
                }
            }

            nextBtn.onclick = () => {
                newIndex++; // decrement newIndexvalue
                if(newIndex >= gallery.length - 1) {
                    preview();
                    prevBtn.style.display = 'none';
                } else {
                    preview(); // calling again above function to image
                    nextBtn.style.display = 'block'
                }
            }


            preview(); //calling above function
            previewBox.classList.add('show');
            shadow.style.display = 'block';
            document.querySelector('body').style.overflow = 'hidden';

            closeIcon.onclick = () => {
                newIndex  = clickImgIndex; //assigning users first click img index to newIndex varialbe
                prevBtn.style.display = 'block'
                nextBtn.style.display = 'block'
                previewBox.classList.remove('show');
                shadow.style.display = 'none';
                document.querySelector('body').style.overflow = 'auto';
            }
        }
    }
}

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

