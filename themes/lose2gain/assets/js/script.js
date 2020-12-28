(function ($) {
  'use strict';

  // function call
  $(window).on('load', function () {
    beforeAfter();
    singleProductCarousel();
    teamCarousel();
    testimonialsCarousel();
    certificateCarousel();
    videoPopupInit();
  });

  // image before after
  function beforeAfter(){
    $('.twentytwenty-image').twentytwenty();
  }

  // singleProductCarousel init
  function singleProductCarousel() {
    $('.single-product-slider').slick({
      autoplay: false,
      infinite: true,
      arrows: false,
      dots: true,
      customPaging: function (slider, i) {
        var image = $(slider.$slides[i]).data('image');
        return '<img src="' + image + '" alt="product-image">';
      }
    });
  }


  // teamCarousel init
  function teamCarousel() {
    $('.team-carousel-wrap').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.team-slick-prev'),
      nextArrow: $('.team-slick-next'),
      responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }


  // certificateCarousel init
  function certificateCarousel() {
    $('.certificate-carousel-wrap').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 400,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.certificate-slick-prev'),
      nextArrow: $('.certificate-slick-next'),
      responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }


  // testimonialsCarousel init
  function testimonialsCarousel() {
    $('.testimonials-carousel-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.testimonials-slick-prev'),
      nextArrow: $('.testimonials-slick-next'),
      dots: false,
      asNavFor: '.testimonials-carousel-nav',
      centerMode: true
    });
    $('.testimonials-carousel-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      asNavFor: '.testimonials-carousel-wrap',
      focusOnSelect: true,
      centerMode: true
    });
  }

  // videoPopupInit
  function videoPopupInit() {
    var $videoSrc;
    $('.video-play-btn').click(function () {
      $videoSrc = $(this).data('src');
    });
    $('#videoModal').on('shown.bs.modal', function (e) {
      $('#showVideo').attr('src', $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0');
    });
    $('#videoModal').on('hide.bs.modal', function (e) {
      $('#showVideo').attr('src', $videoSrc);
    });
  }

})(jQuery);