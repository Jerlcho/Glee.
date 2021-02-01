$(function () {

  $('.details-item__num').styler();

  $('.details-slide__thumb').slick({
    asNavFor: '.details-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false
  });

  $('.details-slide__big').slick({
    asNavFor: '.details-slide__thumb',
    arrows: false,
    draggable: false,
    fade: true
  });

  $('.star').rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "13px"
  });

  $('.filter-recent__content-rating').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px"
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from + '.00');
      $('.filter-price__to').text(data.to + '.00');
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from + '.00');
      $('.filter-price__to').text(data.to + '.00');
    },
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.product__filter-btn').on('click', function () {
    $('.product__btn').removeClass('product__btn--active');
    $(this).addClass('active');
  });

  $('.design__filter-btn').on('click', function () {
    $('.design__btn').removeClass('design__btn--active');
    $(this).addClass('active');
  });

  var containerEl1 = document.querySelector('[data-ref="mix1"]');
  var containerEl2 = document.querySelector('[data-ref="mix2"]');

  var mixer1 = mixitup(containerEl1, {
    selectors: {
      control: '.filter-1'
    },
    animation: {
      effects: 'scale fade',
      duration: 800
    }
  });


  var mixer2 = mixitup(containerEl2, {
    selectors: {
      control: '.filter-2'
    },
    animation: {
      effects: 'scale fade',
      duration: 800
    }
  });
});