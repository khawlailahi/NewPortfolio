(function ($) {
  "use strict";
 
    emailjs.init("JPvdDxKKf8IRsrA7D");

  // Smooth scrolling on the navbar links
  $(".navbar-nav a, #navbarCollapse a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Typed Initiate
  if ($(".typed-text-output").length == 1) {
    var typed_strings = $(".typed-text").text();
    var typed = new Typed(".typed-text-output", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Scroll to Bottom
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-bottom").fadeOut("slow");
    } else {
      $(".scroll-to-bottom").fadeIn("slow");
    }
  });

  // Skills

  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  //projects
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    console.log($(this).data("filter"));
    $(".portfolio-container .portfolio-item")
      .filter(":not(" + $(this).data("filter") + ")")
      .hide();
    $(".portfolio-container .portfolio-item")
      .filter($(this).data("filter"))
      .show();
    if ($(this).data("filter") === "*") {
      $(".portfolio-container .portfolio-item").show();
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1,
  });

    function showSnackbar(text, newStatus, oldStatus) {
        $('#snackbar').removeClass(oldStatus);
        $('#snackbar').addClass(newStatus);
        $('#snackbar').text(text);
        $('#snackbar').addClass("show");
        setTimeout(function() { $('#snackbar').removeClass('show'); }, 3000);
    }

  $("#contactForm").submit(function (event) {
        event.preventDefault();
        emailjs.sendForm('service_x32szp9', 'template_m2jwonw', '#contactForm')
            .then(function(response) {
                showSnackbar("Thank you for you email!  I will get in touch soon.", "right", "wrong")

            }, function(error) {
                showSnackbar("Somthing went wrong, please contact me directly through gmail, Thank you!", "wrong", "right")
        });
        $(this)[0].reset();
    });
    
})(jQuery);
