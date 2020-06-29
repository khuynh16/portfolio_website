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

for (let i = 0; i < 9; i++) {
    var modal = document.getElementById("mod" + (i + 1));

    var img = document.getElementById("img" + (i + 1));
    var modalImg = document.getElementById("modalImg" + (i + 1));
    var captionText = document.getElementById("cap" + (i + 1));

    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
// for some reason, value in brackets has to be one less than total number of pics in photo gallery 
// to have close button work
var span = document.getElementsByClassName("close")[9];
console.log(span);

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


