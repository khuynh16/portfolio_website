// for contact.html
function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }

// for photography.html

// for (let i = 0; i < 9; i++) {
//     var modal = document.getElementById("mod" + (i + 1));

//     var img = document.getElementById("img" + (i + 1));
//     var modalImg = document.getElementById("modalImg" + (i + 1));
//     var captionText = document.getElementById("cap" + (i + 1));

//     img.onclick = function(){
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     }
// }

// Get the <span> element that closes the modal
// for some reason, value in brackets has to be one less than total number of pics in photo gallery 
// to have close button work
// var span = document.getElementsByClassName("close")[9];
// console.log(span);

// When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//     modal.style.display = "none";
// }

// FOR CONTACT FORM
// document.getElementById('status').innerHTML = "Sending...";
// formData = {
// 'name'     : $('input[name=name]').val(),
// 'email'    : $('input[name=email]').val(),
// 'subject'  : $('input[name=subject]').val(),
// 'message'  : $('textarea[name=message]').val()
// };


// $.ajax({
// url : "mail.php",
// type: "POST",
// data : formData,
// success: function(data, textStatus, jqXHR)
// {

// $('#status').text(data.message);
// if (data.code) //If mail was sent successfully, reset the form.
// $('#contact-form').closest('form').find("input[type=text], textarea").val("");
// },
// error: function (jqXHR, textStatus, errorThrown)
// {
// $('#status').text(jqXHR);
// }
// });

// smooth anchor scrolling
document.querySelectorAll('a[href^="#"][href$="Anchor"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        console.log(this);


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

// change css of navbar when reaching certain anchors
window.addEventListener('scroll', function(e) {

    e.preventDefault();
    console.log(window.pageYOffset);

    if (window.pageYOffset === 0) {
        removeAllActiveNavClasses();
        document.querySelector('.homeNav').classList.add('active-nav');
    } else if (window.pageYOffset >= 620 && window.pageYOffset < 1400) {
        removeAllActiveNavClasses();
        document.querySelector('.aboutNav').classList.add('active-nav');
    } else if (window.pageYOffset >= 1400 && window.pageYOffset < 2000) {
        removeAllActiveNavClasses();
        document.querySelector('.projectsNav').classList.add('active-nav');
    } else if (window.pageYOffset >= 2000 && window.pageYOffset < 2710) {
        removeAllActiveNavClasses();
        document.querySelector('.photosNav').classList.add('active-nav');
    } else if (window.pageYOffset >= 2710) {
        removeAllActiveNavClasses();
        document.querySelector('.contactNav').classList.add('active-nav');
    }
    
})

function removeAllActiveNavClasses() {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active-nav');
    })
}

// for photo gallery

let mainSlide = document.querySelector('#mainSlide');

let pic1 = document.querySelector('.slide1');
let pic2 = document.querySelector('.slide2');
let pic3 = document.querySelector('.slide3');
let pic4 = document.querySelector('.slide4');
let pic5 = document.querySelector('.slide5');
let pic6 = document.querySelector('.slide6');
let pic7 = document.querySelector('.slide7');
let pic8 = document.querySelector('.slide8');
let pic9 = document.querySelector('.slide9');
let pic10 = document.querySelector('.slide10');

pic1.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/1.jpg';
})
pic2.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/2.jpg'; 
})
pic3.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/3.jpg'; 
})
pic4.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/4.jpg'; 
})
pic5.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/5.jpg'; 
})
pic6.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/6.jpg'; 
})
pic7.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/7.jpg'; 
})
pic8.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/8.jpg'; 
})
pic9.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/9.jpg'; 
})
pic10.addEventListener('mouseover', function(e) {
    e.preventDefault();
    mainSlide.src = 'images/photo_gallery/10.jpg'; 
})



