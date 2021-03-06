// design pattern: module pattern
let PortfolioModule = (function() {
    'use stict';

    function anchorScroll() {
        // smooth anchor scrolling
        document.querySelectorAll('a[href^="#"][href$="Anchor"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                // remove all underline from a links
                document.querySelectorAll('a').forEach(link => {
                    link.classList.remove('active-nav');
                })

                this.classList.add('active-nav');

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    function navChangeOnScroll() {
        // change css of navbar when reaching certain anchors
        window.addEventListener('scroll', function(e) {
            e.preventDefault();

            // only applies if window size is greater than 768 pixels; otherwise, ignore the below
            if (window.innerWidth > 768) {
                if (window.pageYOffset === 0) {
                    removeAllActiveNavClasses();
                    document.querySelector('.homeNav').classList.add('active-nav');
                } else if (window.pageYOffset >= 594 && window.pageYOffset < 1324) {
                    removeAllActiveNavClasses();
                    document.querySelector('.aboutNav').classList.add('active-nav');
                } else if (window.pageYOffset >= 1325 && window.pageYOffset < 1971) {
                    removeAllActiveNavClasses();
                    document.querySelector('.projectsNav').classList.add('active-nav');
                } else if (window.pageYOffset >= 1972 && window.pageYOffset < 2700) {
                    removeAllActiveNavClasses();
                    document.querySelector('.photosNav').classList.add('active-nav');
                } else if (window.pageYOffset >= 2701) {
                    removeAllActiveNavClasses();
                    document.querySelector('.contactNav').classList.add('active-nav');
                }
            } 
        })
    }

    function removeAllActiveNavClasses() {
        document.querySelectorAll('a').forEach(link => {
            link.classList.remove('active-nav');
        })
    }

    function changePicOnClick() {
        let mainSlide = document.querySelector('#mainSlide');
        let photoGalleryPics = document.getElementsByClassName('pgPic');

        for (let i = 0; i < photoGalleryPics.length; i++) {
            photoGalleryPics[i].addEventListener('click', function(e) {
                e.preventDefault();        
                mainSlide.src='images/photo_gallery/' + (i + 1) + '.jpg';
            })
        }
    }

    function manipulateNav() {
        let burger = document.querySelector('.burger');
        let nav = document.querySelector('.nav-li-items');
        let navLinks = document.querySelectorAll('.nav-li-items li a');

        // closes and expands burger nav
        burger.addEventListener('click', function(e) {
            e.preventDefault();

            nav.classList.toggle('nav-active');
        })

        // shows and hides horizontal nav depending on browser window width
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && nav.classList.contains('nav-active')) {
                nav.classList.toggle('nav-active');
            } else if (window.innerWidth <= 768 && !(nav.classList.contains('nav-active'))) {
                nav.classList.toggle('nav-active');
            }
        })

        // nav bar is originally hidden, and shows when window size is greater than 768 pixels
        window.onload = function() {
            if (window.innerWidth > 768) {
                nav.classList.toggle('nav-active');
            }
        }

        // remove dropdown of navbar when clicking on a navbar link
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function(e) {
                e.preventDefault();
            
                if (window.innerWidth <= 768) {
                    nav.classList.toggle('nav-active');
                }
            })
        }
    }

    function adjustAnchorPosition() {
        let contactAnchor = document.querySelector('#contactAnchor');

        // adjust padding to contact anchor when window sizing is <= 768
        if (window.innerWidth <= 768) {
            contactAnchor.style.paddingTop = "80px";
        }
    }

    return {
        anchorScroll,
        navChangeOnScroll,
        removeAllActiveNavClasses,
        changePicOnClick,
        manipulateNav,
        adjustAnchorPosition
    };
})();

PortfolioModule.anchorScroll();
PortfolioModule.navChangeOnScroll();
PortfolioModule.removeAllActiveNavClasses();
PortfolioModule.changePicOnClick();
PortfolioModule.manipulateNav();
PortfolioModule.adjustAnchorPosition();

// contact page JS
// source of code/help: https://www.youtube.com/watch?v=FWCCML17raI&list=PLouOhxoIAdHr8ljfrEYUJN0hqzOUbptLa&index=3&t=5s
function submitToAPI(e) {
    e.preventDefault();

    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let subject = document.getElementById("subject-input").value;
    let desc = document.getElementById("description-input").value;
    if (name=="" || email=="" || subject=="" || desc=="") {
        alert("Please Fill All Required Field");
        return false;
    }
    
    nameRE = /^[A-Z]{1}[a-z]{2,20}[ ]{1}[A-Z]{1}[a-z]{2,20}/;
    if(!nameRE.test(name)) {
        alert("Name entered is not valid!");
            return false;
    }
    
    emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailRE.test(email)) {
        alert("Email address entered is not valid!");
            return false;
    }
    let data = {
    name : name,
    email : email,
    subject : subject,
    desc : desc
    };

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://szxjxwan0d.execute-api.us-east-2.amazonaws.com/prod/email");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            let response = JSON.parse(xmlhttp.responseText);
            if (xmlhttp.status === 200 ) {
                console.log('successful');
                document.getElementById("contact-form").innerHTML = 
                        `<div style="text-align:center">
                            <h1>Thank you for your message.<br>I will get back to you soon!</h1>
                        </div>`;
            } else {
                console.log('failed');
            }
        }
    }
}