(function() {

  var postitClicked = 0;
  var postitTitle = ""; // If it's empty lateron -> don't roll in Tagesmenu

  // Debug
  /*
  $(window).resize(function() {
    $(".logo").text(window.innerWidth);
  });
  */

  /* Tagesmenü */
  var newNodeTitle = document.createElement('div');
  var newNodeDescr = document.createElement('div');
  var newNodePrice = document.createElement('div');
  newNodeTitle.classList.add("postit-title");
  newNodeDescr.classList.add("postit-descr");
  newNodePrice.classList.add("postit-price");

  var myHeaders = new Headers();
  myHeaders.append('pragma', 'no-cache');
  myHeaders.append('cache-control', 'no-cache');

  var myInit = {
    method: 'GET',
    headers: myHeaders,
  };

  fetch('./tagesmenu.json', myInit)
  .then(resp => resp.json())
  .then(resp => {
    postitTitle = document.createTextNode(resp.title); // If this is empty, don't roll in Tagesmenu
    var postitDescr = document.createTextNode(resp.descr);
    var postitPrice = document.createTextNode(resp.price);
    newNodeTitle.appendChild(postitTitle);
    newNodeDescr.appendChild(postitDescr);
    newNodePrice.appendChild(postitPrice);
    document.getElementsByClassName("postit-text")[0].appendChild(newNodeTitle);
    document.getElementsByClassName("postit-text")[0].appendChild(newNodeDescr);
    document.getElementsByClassName("postit-text")[0].appendChild(newNodePrice);
  });


  /* Tagesmenu end ******************************/

  $(window).scroll(function() {
    var top = $(this).scrollTop();
    //$(".logo").text(top); // Debug

    if(top > 5) {
      $(".navi").addClass("active");
    }
    else if(top == 0) {
      $(".navi").removeClass("active");
    }


    /* Tagesmenü postit */
    if(postitTitle.length != 0) {
      if(top > ($("#section2").offset().top -89) && postitClicked == 0) {
        postitClicked = 1;
        setTimeout(function() {
          $(".pin").addClass("toggle");
        },500);
        $(".postit").addClass("toggle");
      }
    }
  });


  $(document).ready(function() {

    // Close popup
    $("#closePopup").on("click", function(e) {
      e.preventDefault();
      $(".popup").css("display", "none");
    });

    /* Checkbox Kontaktformular */
    $("#checkSubmit").on("click", function() {
      var ischecked = document.getElementById("checkSubmit").checked;
      if(ischecked === true) {
        $("#submit").prop('disabled', false);
        document.getElementById("submit").classList.add("submitToggle");
      }
      else {
        document.getElementById("submit").classList.remove("submitToggle");
        $("#submit").prop('disabled', true);
      }
    });




    /* Zusatzstoffe */
    var zusatzClick = 0;
    $("#zusatzClick").on("click", function(e) {
      e.preventDefault();
      if(zusatzClick === 0) {
        $(".show-hidden-zusatz").slideDown("slow");
        zusatzClick = 1;
      }
      else {
        $(".show-hidden-zusatz").slideUp("slow");
        zusatzClick = 0;
      }
    });

    /* Zusatzstoffe end ****************************/

    $(".closepostit").on("click", function(e) {
      e.preventDefault();
      //postitClicked = 0;
      $(".pin").removeClass("toggle");
      $(".postit").removeClass("toggle");
    });

    $(".tabs").tabslet({
      container: '#tabs_container',
      animation: false
    });

    $(".spezial-tabs").tabslet({
      container: '#spezialTabsContainer',
      animation: false
    });

    $("#homeClick, #homeClickMob, .logo").on("click", function(e) {
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: 0
      }, 1250, "easeInOutExpo");
      if(menuToggle === true) {
        $(".burgerMenu").trigger("click");
      }
    });

    $("#aboutClick, #aboutClickMob, .gotobio").on("click", function(e) {
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: ($('#sectionAbout').offset().top)
      }, 1250, "easeInOutExpo");
      if(menuToggle === true) {
        $(".burgerMenu").trigger("click");
      }
    });

    $("#karteClick, #karteClickMob").on("click", function(e) {
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: ($('#section2').offset().top -70)
      }, 1250, 'easeInOutExpo');
      if(menuToggle === true) {
        $(".burgerMenu").trigger("click");
      }
    });
    $("#zeitenClick, #zeitenClickMob").on("click", function(e) {
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: ($('#section3').offset().top)
      }, 1250, 'easeInOutExpo');
      if(menuToggle === true) {
        $(".burgerMenu").trigger("click");
      }
    });
    $("#galerieClick, #galerieClickMob").on("click", function(e) {
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: ($('#section4').offset().top)
      }, 1250, 'easeInOutExpo');
      if(menuToggle === true) {
        $(".burgerMenu").trigger("click");
      }
    });
    $("#spezialClick, #spezialClickMob").on("click", function(e) {
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: ($('#section3').offset().top)
      }, 1250, 'easeInOutExpo');
      if(menuToggle === true) {
        $(".burgerMenu").trigger("click");
      }
    });
    $("#contactClick, #contactClickMob").on("click", function(e) {
      e.preventDefault();
      $("html, body").stop().animate({
        scrollTop: ($('#section5').offset().top -67)
      }, 1250, 'easeInOutExpo');
      if(menuToggle === true) {
        $(".burgerMenu").trigger("click");
      }
    });

    /* Isotope */
    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    /* Isotope end */


    /* Swiper */
    var myswiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 800,
    });

    $('.swiper-button-next').on("click", function() {
      myswiper.slideNext();
    });
    $('.swiper-button-prev').on("click", function() {
      myswiper.slidePrev();
    });


    /* Mobile menu */
    var menuToggle = false;
    $(".burgerMenu").on("click", function() {
      if(menuToggle === false) {
        $(this).toggleClass("active");
        $(".mobile-menu").addClass("menu-toggle");
        menuToggle = true;
        $(".burgerMenu span").css("background", "#333");
      }
      else {
        $(this).toggleClass("active");
        $(".mobile-menu").removeClass("menu-toggle");
        menuToggle = false;
        $(".burgerMenu span").css("background", "#eee");
      }
    });

    /* Contact */
    /******************* Transform contact ***********************/
    var clTimer_started = null;
    var clTimer;


    $("#toggleCform").on("click", function(e) {
      /* Prevent double click */
      clTimer = setTimeout(function() { clTimer_started = null; }, 1000);

      if(clTimer_started === null) {
        clTimer_started = true;
        e.preventDefault();
        $(".contactform").toggleClass("toggle");
        $(".anfahrt").toggleClass("toggle");
        $(".googlemap-overlay").animate({
          opacity : 0
        }, 1000, function() {
          $(this).css("display", "none");
          $(".mapclose").css("display", "block").animate({
            "top" : "13px",
            "opacity" : "1"
          }, 500);
          $(".burgerBun").animate({"opacity" : 0}, 500, function() {
            $(this).css("display", "none");
            $(".arrow-up").css("display", "none");
          });
        });
      }
      else {
        e.preventDefault();
        clearTimeout(clTimer);
        clTimer = setTimeout(function() { clTimer_started = null; }, 1000);
      }
    });

    $(".mapclose").on("click", function(e) {
      e.preventDefault();
      $(".googlemap-overlay").css("display", "block").animate({
        opacity : 1
      }, 500, function() {
        $(".contactform").toggleClass("toggle");
        $(".anfahrt").toggleClass("toggle");
      });
      $(".mapclose").animate({
        "opacity" : "0",
        "top" : "-100"
      }, 500).css("display", "none");
      if(window.innerWidth <= 450) {  // Mobile
        $(".burgerBun").css("display", "block").animate({
          "opacity" : "0.8"
        }, 500);
        $(".arrow-up").css("display", "block");
      }
    });

    /***************** Transform contact END ********************/

  });
})();

function sendMail() {
  var name = $("#name").val();
  var email = $("#email").val();
  var msg = $("#msg").val();

  $.get('./sendmail.php?name=' + name + '&email=' + email + '&msg=' + msg, function(data) {
    if(data == "Versendet") {
      $("#name").val("");
      $("#email").val("");
      $("#msg").val("");
    }
    $("#submit").val(data);
  });

  setTimeout(function() {
    $("#submit").val("Senden");
  }, 3000);
}

/* Green Sock Animation */

$(document).ready(function() {

(function() {
  var isIE = false;
  var ua = navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident');
  var edge = ua.indexOf('Edge');

  if(msie > 0 | trident > 0 | edge > 0) {
    isIE = true;
    $(".logo").html("La Lanterna");
  }

  if(!isIE) {
    var paths = $('path:not(defs path)');
    paths.each(function(i, e) {
      e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
    });
    var tl = new TimelineMax();
    tl.add([
      TweenLite.to(paths.eq(0), 3, {strokeDashoffset: 0, delay: 3.5}),
    ]);
  }
})();

});
