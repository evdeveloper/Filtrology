$(document).ready(function () {
  let selector = {
    html: "html",
    favorites: ".favorites__icon",
    countercard: ".counterSale",
    selectChoise: "[data-select]",
    dataScroll: "[data-scroll]",
    dataTargetMobile: "[data-target-mobile]",
    headerDropDown: ".header-dropdown",
    questions: ".questions__top",
    mobileMenuItem: "[data-mobile-menu-item]",
    mobileMenuShow: ".show-menu",
    mobileMenu: ".mobileMenu",
    mobileMenuClose: ".mobileMenu__close",
    overlay: ".popup__overlay",
    overlayFilter: ".filter__overlay",
    lockedClass: "is-locked",
    toggleBtnMenu: ".m-dropdown__btn",
    productList: "[data-list]",
    productListClass: ".productList",
    locationLink: ".location__popup a",
    menuDropDown: ".m-dropdown__inner",
    inputTypeTel: "input[type=tel]",
    buttonUp: ".button-up",
    mMenuLocation: ".mobileMenu_location",
    filterItemTop: ".filter-menu__top",
    filterTop: ".filter__top",
    sortCount: ".c-sort__count",
    sortDropDown: ".c-sort__dropdown",
    sortDToolsItem: ".c-sort-tools__item",
    catalogInner: ".catalog__inner",
    filterBtn: "[data-filter-btn]",
    filterToggle: ".filterMobile",
    filterClose: ".filterMobile__close",
  };

  // $('[data-map-thumbs]').slick({
  //   vertical: true,
  //   infinite: true,
  //   verticalSwiping: true,
  //   slidesPerRow: 4,
  //   arrows: false,
  //   slidesToShow: 4,
  //   asNavFor: '[data-map-slider]',
  //   focusOnSelect: true,
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         vertical: false,
  //         variableWidth: true,
  //       }
  //     },
  //     {
  //       breakpoint: 450,
  //       settings: {
  //         vertical: false,
  //         slidesPerRow: 3,
  //         slidesToShow: 3,
  //       }
  //     },
  //   ]
  // });
  // $('[data-map-slider]').slick({
  //   vertical: true,
  //   infinite: true,
  //   slidesPerRow: 1,
  //   slidesToShow: 1,
  //   asNavFor: '[data-map-thumbs]',
  //   arrows: false,
  //   draggable: false,
  //   responsive: [
  //     {
  //       breakpoint: 414,
  //       settings: {
  //         vertical: false
  //       }
  //     },
  //   ]
  // });



  // function pagination() {
  //   let paginationCount = $('.pagination ul li');
  //   console.log(paginationCount);
  //   if($(paginationCount).length > 5) {
  //     $(paginationCount).hide();
  //     $('.pagination ul li:first').show().after('<span class="pageList__ellipses">...</span>');
  //     $('.pagination ul li:last').show();
  //   }
  // }

  // pagination();




$(selector.sortDToolsItem).on('click', function(e) {
    e.preventDefault();
    let data = $(this).data('tab');
    $(this).addClass('_active').siblings().removeClass('_active');
    if (data === "list") {
        $(selector.catalogInner).addClass('catalog--list')
    } else {
        $(selector.catalogInner).removeClass('catalog--list')
    }
});


$(selector.sortCount).on('click',function(){
  $(this).toggleClass('_active');
  $(this).next(selector.sortDropDown).fadeToggle();
  return false;
});

$(document).on('click', function(e){
  let sort = $(selector.sortDropDown).parent();
  if (sort.has(e.target).length == 0 && !sort.is(e.target)) {
      $(selector.sortDropDown).fadeOut();
      $(selector.sortCount).removeClass('_active');
    }
});

$(selector.sortDropDown).find('.c-sort__item').on('click',function(){
  let dropCount = $(this).text();
  $(this).closest(selector.sortDropDown).prev(selector.sortCount).removeClass('_active').find('span').text(dropCount);
  $(this).closest(selector.sortDropDown).fadeOut();
  return false;
});

$('.productDay').on('click',function(){
  $('.productDay .buyersCard').toggle();
  return false;
});

  function toggleFilter(item) {
    $(document).on('click', item, function(){
      $(this).toggleClass('_active').next().slideToggle();
      return false;
    });
  }

toggleFilter(selector.filterItemTop);
toggleFilter(selector.filterTop);


  

  if ($(selector.inputTypeTel)) {
    $(selector.inputTypeTel).keyup(function(e) {
        if (e.keyCode === 17 || e.keyCode === 65 || e.keyCode === 97) { return false; }
        if ($(this).val() == "") {
            let inputMask = new Inputmask("+999999999999999",{ "placeholder": "" });
            inputMask.mask($(this));
        }
        if (($(this).val().substring(0, 2) == "+7") || ($(this).val().substring(0, 1) == "7") || ($(this).val().substring(0, 2) == "+8") || ($(this).val().substring(0, 1) == "8")) {
            let inputMask = new Inputmask('+9 (999) 999-99-99',{ "placeholder": "_" });
            inputMask.mask($(this));
        } else {
            let inputMask = new Inputmask("+999999999999999",{ "placeholder": "" });
            inputMask.mask($(this));
        }
        if (($(this).val().substring(0, 1) == "+") && ($(this).val().substring(0, 2) != "+7")) {
            let inputMask = new Inputmask("999999999999999",{ "placeholder": "" });
            inputMask.mask($(this));
        }
        if (($(this).val().substring(0, 1) == "8")) {
            let inputMask = new Inputmask("9 (999) 999-99-99",{ "placeholder": "_" });
            inputMask.mask($(this));
        }
    })
}

  $(document).on("click", selector.locationLink, function (e) {
    e.preventDefault();
    let city = $(this).text();
    $(selector.locationLink).closest(".location__popup").prev(".location__city").find("a").text(city);
    $(selector.mMenuLocation).find('span').text(city);
    return false;
  });

  $(document).on("click", selector.mobileMenuItem, function () {
    $(this).toggleClass("_active");
    $(this).next().slideToggle();
    return false;
  });

  function closeFilter(target) {
    $(document).on("click", target, function () {
      $(selector.filterToggle).removeClass("_active");
      $(selector.overlayFilter).fadeOut();
      $(selector.html).removeClass(selector.lockedClass);
      return false;
    });
  }

  closeFilter(selector.filterClose);
  closeFilter(selector.overlayFilter);


  $(document).on("click", selector.mobileMenuShow, function () {
    $(selector.mobileMenu).addClass("_active");
    $(selector.overlay).fadeIn(300);
    $(selector.html).addClass(selector.lockedClass);
    return false;
  });

  $(document).on("click", selector.filterBtn, function () {
    $(selector.filterToggle).addClass("_active");
    $(selector.overlayFilter).fadeIn(300);
    $(selector.html).addClass(selector.lockedClass);
    return false;
  });

  $(document).on("click", selector.mobileMenuClose, function () {
    $(selector.mobileMenu).removeClass("_active");
    $(selector.overlay).fadeOut();
    $(selector.html).removeClass(selector.lockedClass);
    return false;
  });

  function mobileTop(item) {
    $(document).on("click", item, function () {
      let idHeaderTop = $(this).data("targetMobile");
      $('[data-mobile="' + idHeaderTop + '"]').slideToggle().siblings(selector.headerDropDown).slideUp();
      return false;
    });
  }

  mobileTop(selector.dataTargetMobile);

$(document).mouseup(function (e) {
  let mobileTopClose = $(selector.headerDropDown);
  let divTarget = $(".header-mobile__item");
  if (!mobileTopClose.is(e.target) && mobileTopClose.has(e.target).length === 0 && !divTarget.is(e.target) && divTarget.has(e.target).length === 0) {
    mobileTopClose.slideUp();
    e.stopPropagation();
  }
});
  

$(document).on("click", selector.toggleBtnMenu, function () {
    $(this).next().toggleClass("_active");
    return false;
});

  function hideBlock(item) {
    $(document).mouseup(function(e){
      let container = $(item);
      let targetClick = $(selector.toggleBtnMenu);
      if ($(container).has(e.target).length === 0 && !$(e.target).is(targetClick)) {
        $(container).removeClass("_active");
      }
    });
  }
  
  hideBlock(selector.menuDropDown);

  $(document).on("click", selector.favorites, function () {
    $(this).toggleClass("_active");
    return false;
  });

  // Инициализация Select

  $(selector.selectChoise).each(function (i, item) {
    if (!item) return;
    new Choices(item, {
      searchEnabled: false,
      position: "bottom",
      itemSelectText: "",
      shouldSort: false,
    });
  });

  // Счетчик в карточке

  $(selector.countercard)
    .countdown("2021/11/10 0:01:16")
    .on("update.countdown", function (event) {
      $(this).text(event.strftime("%H:%M:%S"));
    })
    .on("finish.countdown", function (event) {
      $(this).html("This offer has expired!").parent().addClass("disabled");
    });

  // Показ меню при скроле вниз

  $(
    (function () {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 200) {
          $(".header-fixed").addClass("_active");
        } else {
          $(".header-fixed").removeClass("_active");
          $(".header-fixed .m-dropdown__inner").removeClass("_active");
        }
      });
    })()
  );


  // Инициализация скролла

  if ($(selector.dataScroll)) {
    $(selector.dataScroll).each(function (i, item) {
      new SimpleBar(item, {
        autoHide: false,
      });
    });
  }

  $(document).on("click", selector.questions, function () {
    $(this).toggleClass("_active").next().slideToggle();
    return false;
  });

  $("[data-slider-card]").each(function (i, item) {
    let SliderList = "slider-card-" + i;
    $(item).addClass(SliderList);
    let SelectorList = "." + SliderList;
    $(SelectorList).slick({
      slidesToScroll: 1,
      slidesToShow: 4,
      arrows: true,
      variableWidth: true,
      infinite: false,
      prevArrow: $(".slickSlider__next")[i],
      nextArrow: $(".slickSlider__prev")[i],
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            variableWidth: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            variableWidth: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 360,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  $("[data-slider-news]").slick({
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "50px",
    dotsClass: "slider-dots",
    prevArrow: ".sliderNews__prev",
    nextArrow: ".sliderNews__next",
    dots: true,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          centerMode: true,
          infinite: true,
        },
      },
    ],
  });

  $("[data-slider-top]").slick({
    slidesToScroll: 1,
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "0px",
    dotsClass: "slider-dots",
    prevArrow: ".bslider__prev",
    nextArrow: ".bslider__next",
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          variableWidth: false,
        },
      },
    ],
  });

  $("[data-slider-brand]").slick({
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    slidesToShow: 4,
    variableWidth: true,
    dotsClass: "slider-dots",
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 9000,
        settings: "unslick",
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          variableWidth: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
    ],
  });

  $(document).on("click", ".product__title", function () {
    $(this).closest(".product__item").toggleClass("_active");
    return false;
  });

  if (selector.buttonUp) {
      const scrollTrigger = 400;
      const backToTop = function() {
          let scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $(selector.buttonUp).addClass('is-active')
          } else {
              $(selector.buttonUp).removeClass('is-active')
          }
      };
      backToTop();
      $(window).on('scroll', function() {
          backToTop();
      });
      $(selector.buttonUp).on('click', function(e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700)
          return false;
      });
  }

  let keypressSlider = document.querySelectorAll(".price-slider");
  keypressSlider.forEach(function(item){
    noUiSlider.create(item, {
      start: [0, 2500],
      connect: true,
      range: {
        'min': 0,
        'max': 2500
      }
  });
    item.noUiSlider.on("update", function(values) {
        item.parentElement.querySelector('.range-from').value = parseInt(values[0]);
        item.parentElement.querySelector('.range-to').value = parseInt(values[1]);
        
    });
    item.parentElement.querySelector('.range-from').addEventListener('change', function () {
      item.noUiSlider.set([parseInt(this.value), null]);
    });
    item.parentElement.querySelector('.range-to').addEventListener('change', function () {
        item.noUiSlider.set([null, parseInt(this.value)]);
    });
     
});

// Счетчик в карточках

  $(document).on('click','[data-counter-min]', function () {
      let $input = $(this).parent().find('[data-counter-val]');
      let count = parseInt($input.text()) - 1;
      count = count < 1 ? 1 : count;
      $input.text(count);
      $input.change();
      return false;
  });
  $(document).on('click','[data-counter-max]', function () {
      let $input = $(this).parent().find('[data-counter-val]');
      $input.text(parseInt($input.text()) + 1);
      $input.change();
      return false;
  });


  $(document).on('click', '.mapOptions .mapOptions__tab', function() {
    $(".mapOptions .mapOptions__tab").addClass('_active').siblings().removeClass('_active').eq($(this).index()).addClass("_active");
  $(".mapOptions .mapOptions__item").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("_active");



const galleryTop = new Swiper(".mapCard-sliders", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  arrows: false,
  keyboard: {
      enabled: true,
      onlyInViewport: false
  }
});
const galleryThumbs = new Swiper(".mapCard-thumbs", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  slideToClickedSlide: true,
  keyboard: {
      enabled: true,
      onlyInViewport: false
  },
  breakpoints: {
      0: { 
        spaceBetween: 20,
      },
      600: {
        direction: 'vertical',
        spaceBetween: 10
      },
      450: {
        spaceBetween: 10,
        slidesPerView: 3
      },
      414: {
        spaceBetween: 10
      },
      320: {
        direction: 'horizontal',
        spaceBetween: 10,
        slidesPerView: 2,
        centeredSlides: true
      }
  }
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop; 

});






