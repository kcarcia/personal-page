$(document).ready(function () {
  // "Get to know me" button on the landing page
  $('#enter').click(function () {
    $('.introduction').fadeOut('slow', function () {
     $('.bio, nav, footer').slideDown('slow');
   });
  });

  // Contact form validation
  // "hiddenRecaptcha" verifies the form isn't submitted unless the recaptcha is used
  $('#contact').validate({
    ignore: [],
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 256
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10,
        maxlength: 1000
      },
      "hiddenRecaptcha": {
       required: function() {
         if(grecaptcha.getResponse() == '') {
           return true;
         } else {
           return false;
         }
       }
     }
   },
   messages: {
    name: {
      required: "Please enter your name.",
      minlength: "Your name must consist of at least 2 characters.",
      maxlength: "Your name must be less than 256 characters."
    },
    email: {
      required: "Please enter your email."
    },
    message: {
      required: "Please enter a message.",
      minlength: "Your message must consist of at least 10 characters.",
      maxlength: "Your message must be less than 1000 characters."
    }
  },
  success: function(label){
    // Show success indicator, hide error indicator
    $(label).parent().children('i.success-indicator').show();
    $(label).parent().children('i.error-indicator').hide();
  },
  errorPlacement: function(error, element) {
    $(element).parent().children('div.error').html(error);
  },
  highlight: function(element, errorClass) {
    // Show error indicator, hide success indicator
    $(element).parent().children('i.success-indicator').hide();
    $(element).parent().children('i.error-indicator').show();
  },
  unhighlight: function(element, errorClass) {
    // Show success message, hide error message
    $(element).parent().children('i.success-indicator').show();
    $(element).parent().children('i.error-indicator').hide();
  },
  submitHandler: function(form) {
    $(form).ajaxSubmit({
      type:"POST",
      data: $(form).serialize(),
      url:"scripts/contact_form.php",
      success: function() {
        $('.contact form').hide();
        $('.message-sent').fadeIn();
      }
    });
  }
});

  // Changing active link on scroll
  $(document).on('scroll', onScroll);

  // Smooth scrolling
  // Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// Change active link on scroll
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  var whatSection = $('#what').position().top;
  var whereSection = $('#where').position().top;
  if (scrollPos <= whatSection) {
   $('nav a').removeClass('active').blur();
   $('.who').addClass('active');
 } else if (scrollPos > whatSection && scrollPos <= whereSection) {
   $('nav a').removeClass('active').blur();
   $('.what').addClass('active');
 } else if (scrollPos > whereSection) {
   $('nav a').removeClass('active').blur();
   $('.where').addClass('active');
 }
}

