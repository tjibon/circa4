(function ($) {
  "use strict";
  $(document).ready(function () {

    

// Language Dropdown
    const $langSelector = $('#langSelector');
    const $langToggle = $('#langToggle');
    const $selectedLang = $('#selectedLang');
    const $langOptions = $('#langOptions');
    const $upArrow = $('.up-arrow');
    const $downArrow = $('.down-arrow');

    $langToggle.on('click', function (e) {
      e.stopPropagation();
      $langSelector.toggleClass('open');

      if ($langSelector.hasClass('open')) {
        $upArrow.show();
        $downArrow.hide();
      } else {
        $upArrow.hide();
        $downArrow.show();
      }
    });

    $langOptions.on('click', 'li', function () {
      const newLang = $(this).data('lang');
      $selectedLang.text(newLang);

      $langOptions.find('li').removeClass('active');
      $(this).addClass('active');

      $langSelector.removeClass('open');
      $upArrow.hide();
      $downArrow.show();

      // Optional: redirect to /en or /es
      // window.location.href = '/' + newLang.toLowerCase();
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest('#langSelector').length) {
        $langSelector.removeClass('open');
        $upArrow.hide();
        $downArrow.show();
      }
    });

    // Phone Number Dropdown Toggle
    const $numberSelector = $('#numberSelector');
    const $numberToggle = $('#numberToggle');
    const $selectedNumber = $('#selectedNumber');
    const $numberOptions = $('#numberOptions');

    $numberToggle.on('click', function (e) {
      e.stopPropagation(); // Prevent bubbling
      $numberSelector.toggleClass('active');
    });

    $numberOptions.find('li').on('click', function () {
      const selected = $(this).data('lang');
      $selectedNumber.text(selected);
      $numberSelector.removeClass('active');
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
      if (!$numberSelector.is(e.target) && $numberSelector.has(e.target).length === 0) {
        $numberSelector.removeClass('active');
      }


      $numberOptions.find('li').on('click', function () {
  const selected = $(this).data('lang');
  $selectedNumber.text(selected);
  $numberSelector.removeClass('active');

  // Highlight the selected option
  $numberOptions.find('li').removeClass('selected'); 
  $(this).addClass('selected'); 
});
    });

// FeaturedProduct sldier
  $('.singleProduct_details').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.singleProduct_box',
    infinite: true,
    speed: 400
  });

  // Thumbnail slider
  $('.singleProduct_box').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.singleProduct_details',
    dots: false,
    arrows: true,
     prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '0',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  // Add active class to current slide
  $('.singleProduct_box').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.singleProduct_box .slick-slide').removeClass('is-active');
    $('.singleProduct_box .slick-slide[data-slick-index="'+nextSlide+'"]').addClass('is-active');
  });

  
  $('.singleProduct_box .slick-slide[data-slick-index="0"]').addClass('is-active');
  // Repeat the same for reviews...
    $('.singleReview_details').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      infinite: true,
      useTransform: true,
      centerPadding: '100px',
      speed: 400,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }, {
          breakpoint: 420,
          settings: {
           slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px'
          }
        }]
    });

    $('.singleReview_box')
      .on('init', function (event, slick) {
        $('.singleReview_box .slick-slide.slick-current').addClass('is-active');
      })
      .slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        dots: false,
        arrows: false,
        focusOnSelect: false,
        infinite: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        }, {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        }]
      });

    $('.singleReview_details').on('afterChange', function (event, slick, currentSlide) {
      $('.singleReview_box').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.singleReview_box .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.singleReview_box .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });

    $('.singleReview_box').on('click', '.slick-slide', function (event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');
      $('.singleReview_details').slick('slickGoTo', goToSingleSlide);
    });

  });


  /******** client **********/


$('.logo_list').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,      
  dots: false,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024, // tablets and small desktops
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768, // tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480, // mobile phones
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});







})(jQuery);
