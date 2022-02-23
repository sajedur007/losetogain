(function ($) {
  "use strict";

  // function call
  $(window).on("load", function () {
    singleProductCarousel();
    teamCarousel();
    videoPopupInit();
    isotopeMasonry();
    StoryFilter();

    // custom tab
    $(".tab-switcher").click(function () {
      var tabid = $(this).data("tab");
      $(".tab-content").removeClass("show").addClass("hide");
      $("#" + tabid)
        .addClass("show")
        .removeClass("hide");
    });
  });

  // image before after
  // function beforeAfter() {
  //   $(".twentytwenty-image").twentytwenty();
  // }

  // singleProductCarousel init
  function singleProductCarousel() {
    $(".single-product-slider").slick({
      autoplay: false,
      infinite: true,
      arrows: false,
      dots: true,
      customPaging: function (slider, i) {
        var image = $(slider.$slides[i]).data("image");
        return '<img src="' + image + '" alt="product-image">';
      },
    });
  }

  // teamCarousel init
  function teamCarousel() {
    $(".team-carousel-wrap").slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".team-slick-prev"),
      nextArrow: $(".team-slick-next"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  // videoPopupInit
  function videoPopupInit() {
    var $videoSrc;
    $(".video-play-btn").click(function () {
      $videoSrc = $(this).data("src");
    });
    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#showVideo").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });
    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#showVideo").attr("src", $videoSrc);
    });
  }

  // isotope filter
  function isotopeMasonry() {
    $(".filter-wrapper").isotope({
      itemSelector: ".filter-item",
    });

    $(".filter-list").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $(".filter-wrapper").isotope({
        filter: filterValue,
      });
      $(".filter-list li").removeClass("active");
      $(this).addClass("active");
    });
  }

  // init Isotope

  function StoryFilter() {
    var $grid = $(".story-filter-wrapper").isotope({
      itemSelector: ".story-item",
    });

    // store filter for each group
    var filters = {};

    $(".filters").on("click", ".button", function (event) {
      var $button = $(event.currentTarget);
      // get group key
      var $buttonGroup = $button.parents(".button-group");
      var filterGroup = $buttonGroup.attr("data-filter-group");
      // set filter for group
      filters[filterGroup] = $button.attr("data-filter");
      // combine filters
      var filterValue = concatValues(filters);
      // set filter for Isotope
      $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $(".button-group").each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on("click", "button", function (event) {
        $buttonGroup.find(".is-checked").removeClass("is-checked");
        var $button = $(event.currentTarget);
        $button.addClass("is-checked");
      });
    });

    // flatten object by concatting values
    function concatValues(obj) {
      var value = "";
      for (var prop in obj) {
        value += obj[prop];
      }
      return value;
    }
  }
})(jQuery);
