var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 0
  });
  
  var swiperRules = new Swiper(".swiper-rules", {
    grabCursor: true,
    initialSlide: 0,
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
      el: ".swiper-dots",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      }
    }
  });
  
  // function howToPlayIntro() {
  //   let rulesTl = gsap.timeline({});
  //   $(".rules-container").css("display", "flex");
  //   $(".rules-modal").css("display", "flex");
  //   $(".rules-overlay").css("display", "block");
  //   rulesTl.fromTo(
  //     ".rules-container",
  //     {
  //       opacity: 0,
  //       y: "+=40"
  //     },
  //     {
  //       opacity: 1,
  //       y: "-=40",
  //       duration: 0.8
  //     }
  //   );
  //   rulesTl.fromTo(
  //     ".rules-overlay",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.5,
  //       duration: 0.8
  //     }
  //   );
  //   rulesTl.fromTo(
  //     ".rules-title",
  //     {
  //       opacity: 0,
  //       y: "+=40"
  //     },
  //     {
  //       opacity: 1,
  //       delay: 0.6,
  //       y: "-=40",
  //       duration: 0.8
  //     },
  //     0
  //   );
  //   rulesTl.fromTo(
  //     ".swiper-rules",
  //     {
  //       opacity: 0,
  //       y: "+=40"
  //     },
  //     {
  //       opacity: 1,
  //       y: "-=40",
  //       delay: 0.8,
  //       duration: 0.8
  //     },
  //     0
  //   );
  //   rulesTl.fromTo(
  //     ".swiper-dots",
  //     {
  //       opacity: 0,
  //       y: "+=40"
  //     },
  //     {
  //       opacity: 1,
  //       y: "-=40",
  //       delay: 1,
  //       duration: 0.8
  //     },
  //     0
  //   );
  // }
  
  //theme gameplay dependant on category
  
  //gameplay-wrapper - background color
  //gameplay-title - text should change
  //swiper-slide - card color should match
  //gameplay-card-copy - color of text should change
  // variable to determine activeCategory
  // if activeCategory is 'x', then set the correct cms category colors, text and title text
  
  // level selector
  //open level selector
  
  $(".in-game-level-button").on("click", function () {
    $(".in-game-level-selection").css("display", "flex");
    $(".level-selector-container").show();
    $(".level-overlay").show();
    gsap.to(".in-game-level-selection", {
      top: 0,
      duration: 0.6,
      ease: "power3.out"
    });
    gsap.to(".level-overlay", {
      opacity: 0.5,
      duration: 0.6,
      ease: "power3.out"
    });
    gsap.to(".gameplay-wrapper", {
      scale: 0.9,
      duration: 0.6,
      ease: "power3.out"
    });
  });
  
  $(".level-overlay, .save-level").on("click", function () {
    let closeTl = gsap.timeline({
      onComplete: hideLevelDivs
    });
    closeTl.to(".in-game-level-selection", {
      top: "100vh",
      duration: 0.6,
      ease: "power3.out"
    });
    closeTl.to(
      ".level-overlay",
      {
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      },
      0
    );
    closeTl.to(
      ".gameplay-wrapper",
      {
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
      },
      0
    );
  });
  
  function hideLevelDivs() {
    $(".in-game-level-selection").hide();
    $(".level-selector-container").hide();
    $(".level-overlay").hide();
  }
  
  // close gameplay
  
  /////Code for animating back to cat page/////
  
  let nextPageLink;
  
  $(".close-gameplay").on("click", function (e) {
    e.preventDefault();
    nextPageLink = $(this).attr("href");
  
    //AJAX code
    $.ajax({
      url: nextPageLink,
      success: function (response) {
        let element = $(response).find(".content-wrapper-categories");
        $("body").append(element);
      },
      complete: function () {
        pageTransition();
        catSwiper();
        $(".return-overlay").show();
      }
    });
  });
  
  function pageTransition() {
    let tl = gsap.timeline({
      onComplete: updatePage
    });
    tl.to(".content-container", {
      y: "110vh",
      scale: 1,
      duration: 0.8,
      ease: "power3.out"
    });
    tl.to(
      ".content-wrapper-categories",
      {
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      0
    );
    tl.to(
      ".return-overlay",
      {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      0
    );
    // tl.to(
    //   "body",
    //   {
    //     background: "#ffd0f9",
    //     duration: 0.8,
    //     ease: "power3.out"
    //   },
    //   0
    // );
  }
  
  function updatePage() {
    window.location = nextPageLink;
  }
  
  ///code for cat swiper////
  
  function catSwiper() {
    var swiper = new Swiper(".swiper.swiper-category", {
      //slidesPerView: 4,
      initialSlide: 0,
      loop: false,
      speed: 500,
      pagination: {
        el: ".swiper-dots",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        }
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: "auto",
          centeredSlides: true
        },
        // when window width is >= 640px
        640: {
          slidesPerView: "auto",
          centeredSlides: true
        }
      }
    });
  }
  