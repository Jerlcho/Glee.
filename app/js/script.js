$(function () {
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