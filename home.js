var metaTag = $('meta[name="theme-color"]');
// variables
let customEase =
  "M0,0 C0.126,0.382 0.304,0.334 0.462,0.482 0.654,0.662 0.634,1 1,1 ";
let counter = {
  value: 0
};
let loaderDuration = 4;

// If not a first time visit in this tab
if (sessionStorage.getItem("visited") == null) {
  $(".e_loader").css("display", "flex");
  $(".splash-wrapper").css("display", "flex");
  $(".splash-underlay").css("display", "flex");
  document.querySelector("body").style.background = "#544bf5";

  // Copyright start
  // © Code by T.RICKS, https://www.tricksdesign.com/
  // You have the license to use this code in your projects but not redistribute it to others
  // Find all text with .tricks class and break each letter into a span

  var tricksWord = document.getElementsByClassName("tricks");
  for (var i = 0; i < tricksWord.length; i++) {
    var wordWrap = tricksWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(
      /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
      '$1<span class="tricksword">$2</span>'
    );
  }

  var tricksLetter = document.getElementsByClassName("tricksword");
  for (var i = 0; i < tricksLetter.length; i++) {
    var letterWrap = tricksLetter.item(i);
    letterWrap.innerHTML = letterWrap.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  }
  // Copyright end

  //loader circles animation
  var circlesTimeline = gsap.timeline({});

  circlesTimeline.to(".circle-one", {
    scale: 0.8,
    duration: 1,
    ease: "power1.inOut"
  });
  circlesTimeline.to(".circle-one", {
    scale: 1.8,
    duration: 1.5,
    ease: "power1.inOut"
  });
  circlesTimeline.to(".circle-one", {
    scale: 1,
    duration: 1.5,
    ease: "power4.inOut"
  });

  // Fade Up Animation
  var fadeUp = anime.timeline({
    loop: false,
    autoplay: false
  });

  fadeUp.add({
    targets: ".fade-up .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 300 + 30 * i
  });

  $(".go-to-game").on("click", function () {
    loadAnim1();
    document.querySelector("body").style.background = "#ffd0f9";
  });

  // Wait before playing animation
  setTimeout(() => {
    // Put the play below this line
    fadeUp.play();
  }, 4700);

  //animation of category titles on main page

  function updateLoaderText() {
    let progress = Math.round(counter.value);
    $(".loader_number").text(progress + "%");
  }

  function clickTrigger() {
    $(".trigger").click();
  }

  function endLoaderAnimation() {
    let outroTimeline = gsap.timeline({
      onComplete: clickTrigger
    });
    outroTimeline.to(".circle-one", {
      width: "300vw",
      height: "300vw",
      duration: 1.2,
      ease: "power4.in"
    });
    outroTimeline.to(
      ".circle-two",
      {
        width: "300vw",
        height: "300vw",
        delay: 0.1,
        duration: 1.2,
        ease: "power4.in"
      },
      0
    );
    outroTimeline.to(
      ".splash-screen-1",
      {
        opacity: 1,
        delay: 1,
        duration: 0.3,
        ease: "power2.in",
        onComplete: splashIntrod
      },
      0
    );
    outroTimeline.to(
      ".loader_content",
      {
        scale: 0.8,
        delay: 0.1,
        duration: 1,
        ease: "power4.in"
      },
      0
    );
  }

  function splashIntrod() {
    document.querySelector("body").style.background = "#295548";
  }

  let tl = gsap.timeline({
    onComplete: endLoaderAnimation
  });
  tl.to(counter, {
    value: 100,
    onUpdate: updateLoaderText,
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase)
  });
  tl.to(
    ".loader_block",
    {
      width: "100%",
      duration: loaderDuration,
      ease: CustomEase.create("custom", customEase)
    },
    0
  );
}

//switching to how to play

$(".go-to-level-selector").on("click", function () {
  $(".splash-screen-2").css("opacity", "1");

  gsap.fromTo(
    ".splash-screen-1",
    {
      x: "0px",
      opacity: 1
    },
    {
      x: "-=50px",
      opacity: 0,
      duration: 1.3,
      delay: 0.09,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    ".splash-screen-2",
    {
      x: "+=50px",
      opacity: 0
    },
    {
      x: "0px",
      opacity: 1,
      duration: 1.3,
      delay: 0.09,
      ease: "power4.out",
      onComplete: splashScreenChange
    }
  );
});

function splashScreenChange() {
  $(".splash-screen-1").css("display", "none");
}

//go to game button animation of initial
//function
let loadInTimeline = gsap.timeline({});
function loadAnim1() {
  loadInTimeline.fromTo(
    ".animation-wrapper",
    {
      scale: 0.4
    },
    {
      scale: 1,
      delay: 0.5,
      duration: 1.5,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".slider-container",
    {
      scale: 0.5,
      delay: 0,
      duration: 0
    },
    {
      scale: 1,
      delay: 0.5,
      duration: 1,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".tag-1-container, .tag-2-container",
    {
      y: "+=20",
      scale: 0.8,
      opacity: 0
    },
    {
      y: "-=20",
      opacity: 1,
      delay: 0,
      duration: 1,
      scale: 1,
      stagger: 0.2,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".e_bodycopy",
    {
      y: "+=32",
      delay: 0,
      duration: 0
    },
    {
      y: "-=32",
      delay: 1.2,
      duration: 1.5,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".category-title-wrapper",
    {
      y: "+=48",
      delay: 0,
      duration: 0
    },
    {
      y: "-=48",
      delay: 1,
      duration: 1.5,
      ease: "power4.out"
    },
    0
  );
  loadInTimeline.fromTo(
    ".category-subtitle-wrapper",
    {
      y: "+=32",
      duration: 0
    },
    {
      y: "-=32",
      delay: 0.9,
      duration: 1.5,
      ease: "power4.out"
    },
    0
  );
}

if (sessionStorage.getItem("visited") !== null) {
  $(".e_loader").hide();
  $(".splash-wrapper").hide();
  $(".splash-underlay").hide();
  $(".e_loader").css("z-index", 0);
  $(".splash-wrapper").css("z-index", 0);
  $(".splash-underlay").css("z-index", 0);
  document.querySelector("body").style.background = "#ffd0f9";
}
sessionStorage.setItem("visited", "true");

// Tap option level
let levelOneItem = document.querySelectorAll(".leveloneitem");
let levelTwoItem = document.querySelectorAll(".leveltwoitem");
let levelThreeItem = document.querySelectorAll(".levelthreeitem");
let selectedLevel = 1;
let popupSecondaryColor = null;
let popupPrimaryColor = null;

$(".continue-to-levels").on("click", function () {
  gsap.to(".popup_back", {
    opacity: "1",
    duration: 0.3
  });
  if (selectedLevel == 1) {
    $(levelOneItem).css("backgroundColor", popupSecondaryColor);
    $(".e-level1-heading").css("color", popupPrimaryColor);
    $(levelTwoItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
    $(levelThreeItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
  }
  if (selectedLevel == 2) {
    $(levelTwoItem).css("backgroundColor", popupSecondaryColor);
    $(".e-level2-heading").css("color", popupPrimaryColor);
    $(levelOneItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
    $(levelThreeItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
  }
  if (selectedLevel == 3) {
    $(levelThreeItem).css("backgroundColor", popupSecondaryColor);
    $(".e-level3-heading").css("color", popupPrimaryColor);
    $(levelOneItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
    $(levelTwoItem).css("backgroundColor", "rgba(0, 0, 0, 0.0)");
  }
});

let levelButtonAnimation = "power4.out";
let levelButtonDuration = 0.3;

//if level 1 function
function levelOneSelected() {
  if (selectedLevel !== 1) {
    gsap.to(levelOneItem, {
      height: "124px",
      backgroundColor: popupSecondaryColor,
      border: 0,
      padding: 24,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-heading", {
      fontSize: 20,
      color: popupPrimaryColor,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-body-copy", {
      opacity: 1,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to([levelTwoItem, levelThreeItem], {
      height: "56px",
      backgroundColor: "rgba(255, 208, 249, 0)",
      border: 2,
      paddingTop: 16,
      paddingBottom: 16,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-heading, .e-level3-heading", {
      fontSize: 16,
      color: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-body-copy, .e-level3-body-copy", {
      opacity: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-lv, .e-level3-lv", {
      backgroundColor: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    selectedLevel = "1";
    //$(".level-1-trigger").click();
  }
}

//if level 2 selected
function levelTwoSelected() {
  if (selectedLevel !== 2) {
    gsap.to(levelTwoItem, {
      height: "124px",
      backgroundColor: popupSecondaryColor,
      padding: 24,
      border: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-heading", {
      fontSize: 20,
      color: popupPrimaryColor,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level2-body-copy", {
      opacity: 1,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to([levelOneItem, levelThreeItem], {
      height: "56px",
      backgroundColor: "rgba(255, 208, 249, 0)",
      border: 2,
      paddingTop: 16,
      paddingBottom: 16,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-heading, .e-level3-heading", {
      fontSize: 16,
      lineHeight: "24px",
      color: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-body-copy, .e-level3-body-copy", {
      opacity: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-lv, .e-level3-lv", {
      backgroundColor: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    selectedLevel = "2";
    //$(".level-1-trigger").click();
  }
}

//if level 3 selected
function levelThreeSelected() {
  if (selectedLevel !== 3) {
    gsap.to(levelThreeItem, {
      height: "124px",
      backgroundColor: popupSecondaryColor,
      padding: 24,
      border: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level3-heading", {
      fontSize: 20,
      color: popupPrimaryColor,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level3-body-copy", {
      opacity: 1,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to([levelOneItem, levelTwoItem], {
      height: "56px",
      backgroundColor: "rgba(255, 208, 249, 0)",
      border: 2,
      paddingTop: 16,
      paddingBottom: 16,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-heading, .e-level2-heading", {
      fontSize: 16,
      lineHeight: "24px",
      color: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-body-copy, .e-level2-body-copy", {
      opacity: 0,
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    gsap.to(".e-level1-lv, .e-level2-lv", {
      backgroundColor: "#ffffff",
      duration: levelButtonDuration,
      ease: levelButtonAnimation
    });
    selectedLevel = "3";
    //$(".level-1-trigger").click();
  }
}

$(".leveloneitem").on("click", function () {
  levelOneSelected();
});

$(".leveltwoitem").on("click", function () {
  levelTwoSelected();
});

$(".levelthreeitem").on("click", function () {
  levelThreeSelected();
});

// rules swiper

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

// category swiper

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

// swiper background transitions

swiper.on("slideChangeTransitionStart", function (e) {
  if (this.activeIndex == 0) {
    document.querySelector("body").style.background = "#FFD0F9";
    gsap.fromTo(
      ".category-title-wrapper",
      {},
      {
        y: "0px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
    gsap.fromTo(
      ".category-subtitle-wrapper",
      {},
      {
        y: "0px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
  }
  if (this.activeIndex == 1) {
    document.querySelector("body").style.background = "#C7F1FF";
    gsap.fromTo(
      ".category-title-wrapper",
      {},
      {
        y: "-48px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
    gsap.fromTo(
      ".category-subtitle-wrapper",
      {},
      {
        y: "-32px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
  }
  if (this.activeIndex == 2) {
    $(".e_bodycopy").css("color", "#111111");
    // $(".category-subtitle").css("color", "#111111");
    $(".swiper-pagination-bullet").css("background", "#222222");
    document.querySelector("body").style.background = "#FFDC5C";
    gsap.fromTo(
      ".category-title-wrapper",
      {},
      {
        y: "-96px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
    gsap.fromTo(
      ".category-subtitle-wrapper",
      {},
      {
        y: "-64px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
  }
  if (this.activeIndex == 3) {
    document.querySelector("body").style.background = "#222222";
    $(".e_bodycopy").css("color", "#ffffff");
    $(".swiper-pagination-bullet").css("background", "#ffffff");
    // $(".category-subtitle").css("color", "#ffffff");
    gsap.fromTo(
      ".category-title-wrapper",
      {},
      {
        y: "-144px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
    gsap.fromTo(
      ".category-subtitle-wrapper",
      {},
      {
        y: "-98px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
  }
  if (this.activeIndex == 4) {
    gsap.fromTo(
      ".category-title-wrapper",
      {},
      {
        y: "-194px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
    gsap.fromTo(
      ".category-subtitle-wrapper",
      {},
      {
        y: "-130px",
        delay: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    );
  }
});

let titleTimeline = gsap.timeline({});
let subtitleTimeline = gsap.timeline({});

//slideNextTransitionStart forward only
//slidePrevTransitionStart back only

// animations for title moving

////////////////////////////////////////////////////////////
// POPUP CODE HERE
// get the relative size & position values to apply to an image
function getDifference(cardBG, popupBG) {
  let cardWidth = cardBG.innerWidth();
  let cardHeight = cardBG.innerHeight();
  let offsetLeft = cardBG.offset().left - popupBG.offset().left;
  let offsetTop = cardBG.offset().top - popupBG.offset().top;
  // return transformValue
  return [offsetLeft, offsetTop, cardWidth, cardHeight];
}

// OPEN POPUP
$(".category-card-link").on("click", function () {
  $("html, body").css("overflow", "hidden");
  // get images to animate to & from
  let myIndex = $(this).parent().index();
  let cardBG = $(this).find(".category-card");
  let popupBG = $(".popup_item").eq(myIndex).find(".popup_background");
  // let popupFrame = $(".popup_item").eq(myIndex).find(".popup_bg");
  let popupBackgroundColor = document.querySelector(".popup_background").style
    .background;
  let closeContainer = $(".popup_item")
    .eq(myIndex)
    .find(".popup_close_container");
  let popupTitle = $(".popup_item").eq(myIndex).find(".category-popup-title");
  let popupBody = $(".popup_item").eq(myIndex).find(".category_popup_body");
  let popupContentBottom = $(".popup_item")
    .eq(myIndex)
    .find(".popup-content-bottom");
  let popupButton = $(".popup_item").eq(myIndex).find(".continue-to-levels");
  let anim1 = $(".popup_item").eq(myIndex).find(".animation-wrapper");
  let anim2 = $(".popup_item").eq(myIndex).find(".animation-wrapper-2");
  let anim3 = $(".popup_item").eq(myIndex).find(".animation-wrapper-3");
  let anim4 = $(".popup_item").eq(myIndex).find(".animation-wrapper-4");
  let levelsContainer = $(".popup_item").eq(myIndex).find(".levels-container");
  let tagContainer = $(".popup_item").eq(myIndex).find(".tag-wrapper");

  let secondaryColor = $(popupTitle).css("color");
  popupSecondaryColor = secondaryColor;
  let primaryBGColor = $(".popup_item").eq(myIndex).find(".popup_background");
  let primaryColor = $(primaryBGColor).css("backgroundColor");
  popupPrimaryColor = primaryColor;

  metaTag.attr("content", popupBackgroundColor);

  // set initial display states
  $(".popup_item").removeClass("active");
  $(".popup_item").eq(myIndex).addClass("active");
  $(".popup").css("display", "block");
  $("body").addClass("no-scroll");
  $("body").addClass("popup-open");
  cardBG.css("opacity", 0);

  let transformValue = getDifference(cardBG, popupBG);

  // animations
  gsap.fromTo(
    popupBG,
    {
      x: transformValue[0],
      y: transformValue[1],
      width: transformValue[2],
      height: transformValue[3],
      borderRadius: "100%"
    },
    {
      x: 0,
      y: 0,
      width: "100vw",
      height: "100vh",
      duration: 0.8,
      delay: 0.05,
      ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 "),
      borderRadius: "0%"
    }
  );
  gsap.fromTo(
    [
      closeContainer,
      popupTitle,
      popupBody,
      popupContentBottom,
      popupButton,
      levelsContainer
    ],
    {
      opacity: 0,
      y: "+=40"
    },
    {
      y: "0",
      opacity: 1,
      duration: 1.4,
      delay: 0.3,
      stagger: 0.08,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    tagContainer,
    {
      opacity: 1
    },
    {
      opacity: 0,
      duration: 0.2,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    [anim1, anim2, anim3, anim4],
    {
      scale: 1
    },
    {
      scale: 1.2,
      duration: 0.8,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    ".content-wrapper-categories",
    {
      scale: 1,
      filter: "blur(0px)"
    },
    {
      scale: 0.8,
      filter: "blur(8px)",
      duration: 0.9,
      delay: 0,
      ease: "power4.out"
    }
  );
  gsap.to(".content-wrapper-categories", {
    scale: 1,
    duration: 0,
    delay: 1.4,
    ease: "power4.out"
  });
});

// CLOSE POPUP
$(".popup_close").on("click", function () {
  // get images to animate to & from
  let myIndex = $(".popup_item.active").index();
  let popupBG = $(".popup_item.active .popup_background");
  // let popupFrame = $(".popup_item").eq(myIndex).find(".popup_bg");
  let cardBG = $(".category-card-link").eq(myIndex).find(".category-card");
  let closeContainer = $(".popup_item")
    .eq(myIndex)
    .find(".popup_close_container");
  let popupTitle = $(".popup_item").eq(myIndex).find(".category-popup-title");
  let popupBody = $(".popup_item").eq(myIndex).find(".category_popup_body");
  let popupContentBottom = $(".popup_item")
    .eq(myIndex)
    .find(".popup-content-bottom");
  let popupButton = $(".popup_item").eq(myIndex).find(".continue-to-levels");
  let anim1 = $(".popup_item").eq(myIndex).find(".animation-wrapper");
  let anim2 = $(".popup_item").eq(myIndex).find(".animation-wrapper-2");
  let anim3 = $(".popup_item").eq(myIndex).find(".animation-wrapper-3");
  let anim4 = $(".popup_item").eq(myIndex).find(".animation-wrapper-4");
  let levelsContainer = $(".popup_item").eq(myIndex).find(".levels-container");
  let tagContainer = $(".popup_item").eq(myIndex).find(".tag-wrapper");

  let popupScreen1 = $(".popup_item")
    .eq(myIndex)
    .find(".popup_content_wrapper_1");
  let popupScreen2 = $(".popup_item")
    .eq(myIndex)
    .find(".popup_content_wrapper_2");

  let transformValue = getDifference(cardBG, popupBG);
  $("body").removeClass("popup-open");

  function closePopup() {
    $("html, body").css("overflow", "visible");
    $(".popup").css("display", "none");
    cardBG.css("opacity", 1);
    popupBG.css("transform", "none");
    $("body").removeClass("no-scroll");
  }
  $(".popup_content_wrapper_1").css("transform", "none");

  function popupClosed() {
    $(".popup_content_wrapper_1").css("opacity", "1");
    $(".popup_content_wrapper_2").css("display", "none");
    $(".popup_content_wrapper_2").css("transform", "none");
    $(".popup_back").css("opacity", "0");
  }

  // animations
  gsap.fromTo(
    popupBG,
    {
      x: 0,
      y: 0,
      width: "100vw",
      height: "100vh",
      borderRadius: "0%"
    },
    {
      x: transformValue[0],
      y: transformValue[1],
      width: transformValue[2],
      height: transformValue[3],
      borderRadius: "100%",
      onComplete: closePopup,
      duration: 0.8,
      delay: 0.05,
      ease: CustomEase.create("custom", "M0,0 C0.11,0.494 0.1,1 1,1 ")
    }
  );
  gsap.fromTo(
    [
      closeContainer,
      popupTitle,
      popupBody,
      popupContentBottom,
      popupButton,
      levelsContainer
    ],
    {
      opacity: 1
    },
    {
      opacity: 0,
      duration: 0.6,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    [anim1, anim2, anim3, anim4],
    {
      scale: 1.2
    },
    {
      scale: 1,
      duration: 0.8,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    tagContainer,
    {
      opacity: 0
    },
    {
      opacity: 1,
      delay: 0.3,
      duration: 0.3,
      ease: "power4.out"
    }
  );
  gsap.to(popupScreen1, {
    opacity: 1,
    duration: 1,
    ease: "power4.out"
  });
  gsap.fromTo(
    popupScreen2,
    {
      opacity: 1
    },
    {
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    ".content-wrapper-categories",
    {
      scale: 0.8,
      filter: "blur(8px)"
    },
    {
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.09,
      ease: "power4.out",
      onComplete: popupClosed
    }
  );
});

//// code to animate between category popup pages ////

$(".continue-to-levels").on("click", function () {
  $(".popup_content_wrapper_2").css("display", "grid");
  gsap.fromTo(
    ".popup_content_wrapper_1",
    {
      x: "0px",
      opacity: 1
    },
    {
      x: "-=50px",
      opacity: 0,
      duration: 1,
      delay: 0.09,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    ".popup_content_wrapper_2",
    {
      x: "+=50px",
      opacity: 0
    },
    {
      x: "0px",
      opacity: 1,
      duration: 1,
      delay: 0.09,
      ease: "power4.out"
    }
  );
});

$(".popup_back").on("click", function () {
  gsap.to(".popup_back", {
    opacity: "0",
    duration: 0.3
  });
  gsap.fromTo(
    ".popup_content_wrapper_1",
    {
      x: "-=50px",
      opacity: 0
    },
    {
      x: "0px",
      opacity: 1,
      duration: 1,
      delay: 0.09,
      ease: "power4.out"
    }
  );
  gsap.fromTo(
    ".popup_content_wrapper_2",
    {
      opacity: 1,
      x: "0px"
    },
    {
      x: "+=50px",
      opacity: 0,
      duration: 1,
      delay: 0.09,
      ease: "power4.out",
      onComplete: popupBackFunction
    }
  );
});

function popupBackFunction() {
  $(".popup_content_wrapper_2").css("display", "none");
}

/////Code for animating to gameplay page/////

let nextPageLink;

$(".play-game-button").on("click", function (e) {
  e.preventDefault();
  nextPageLink = $(this).attr("href");
  pagePreparationTransition();

  //AJAX code
  $.ajax({
    url: nextPageLink,
    success: function (response) {
      let element = $(response).find(".gameplay-wrapper");
      $("body").append(element);
    },
    complete: function () {
      pageTransition();
    }
  });
});

let preparationTl = gsap.timeline({});

function pagePreparationTransition() {
  let myIndex = $(".popup_item.active").index();
  let popupScreen1 = $(".popup_item")
    .eq(myIndex)
    .find(".popup_content_wrapper_1");
  let popupScreen2 = $(".popup_item")
    .eq(myIndex)
    .find(".popup_content_wrapper_2");

  $(".overlay").css("z-index", 3);
  preparationTl.to(
    ".overlay",
    {
      opacity: 0.5,
      duration: 0.3,
      ease: "power1.out"
    },
    0
  );
  preparationTl.to(
    [popupScreen1, popupScreen2],
    {
      scale: 0.9,
      duration: 0.3,
      ease: "power1.out"
    },
    0
  );
}

function pageTransition() {
  let tl = gsap.timeline({
    onComplete: updatePage
  });

  tl.from(".gameplay-wrapper", {
    y: "100vh",
    duration: 0.8,
    ease: CustomEase.create("custom", "M0,0 C0,0.5 0,1 1,1 ")
  });
}

function updatePage() {
  window.location = nextPageLink;
}
