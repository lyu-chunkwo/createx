$(function () {

  var location = window.location.href;
  var cur_url = '/' + location.split('/').pop();
  // alert(cur_url);
  $('.menu__item').each(function () {
    var link = $(this).find('a').attr('href');

    if (cur_url == link) {
      $(this).addClass('current');
    }
  });


  $('.popup__select').styler();
  $('.popup__input-file').styler();
  $('.contact__select').styler();




  $(function () {
    $(".gotop").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
    });
  });

  $(".accordion__content").css("display", "none");


  $(".accordion__title").click(function () {

    $(".accordion__title").not(this).removeClass("open");

    $(".accordion__title").not(this).next().slideUp(300);

    $(this).toggleClass("open");

    $(this).next().slideToggle(300);
  });


  $(document).scroll(function () {

    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 50) {
      $('.header').addClass("scroll");
    }
    else {
      $('.header').removeClass("scroll");
    }
  });

  $(document).scroll(function () {

    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 1550) {
      $('.menu-scroll').addClass("scroll");
    }
    else {
      $('.menu-scroll').removeClass("scroll");
    }
  });



  $('.hero__items').slick({
    infinite: false,
    dots: true,
    prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="22" height="24"><use xlink: href="images/svg-sprite/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="22" height="24"><use xlink: href="images/svg-sprite/sprite.svg#next"></use></svg></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      }
    ]
  });



  $('.projects__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="24" height="26"><use xlink: href="images/svg-sprite/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="24" height="26"><use xlink: href="images/svg-sprite/sprite.svg#next"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1225,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 833,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          infinite: true,
        }
      },
    ]
  });


  $('.clients__slider').slick({
    asNavFor: '.clients__img-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="24" height="24"><use xlink: href="images/svg-sprite/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="24" height="24"><use xlink: href="images/svg-sprite/sprite.svg#next"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          infinite: true,
        }
      },
    ]
  });

  $('.clients__img-slider').slick({
    asNavFor: '.clients__slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
  });



  $('.our__slider-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    fade: true,
    prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="24" height="24"><use xlink: href="images/svg-sprite/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="24" height="24"><use xlink: href="images/svg-sprite/sprite.svg#next"></use></svg></button>',
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          infinite: false,
        }
      },
    ]
  });




  $('.work-slider__basic').slick({
    asNavFor: '.work-slider__sync',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,

    prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="24" height="24"><use xlink: href="images/svg-sprite/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="24" height="24"><use xlink: href="images/svg-sprite/sprite.svg#next"></use></svg></button>'
  });

  $('.work-slider__sync').slick({
    asNavFor: '.work-slider__basic',
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    infinite: true
  });

  const circles = document.querySelectorAll('.facts-element__circle');
  circles.forEach(el => {

    if (el.dataset.percentage == 'true') {
      let progress = el.querySelector('.progress__upper');
      let valueBlock = el.querySelector('.facts-element__value');
      let radius = progress.getAttribute('r');
      let circleLength = 2 * Math.PI * radius;
      let full = el.dataset.full;
      let value = el.dataset.value;
      let percentageProgress = Math.floor(value / full * 100);
      valueBlock.textContent = value;
      progress.setAttribute('stroke-dasharray', circleLength);
      progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);

    } else {
      let progress = el.querySelector('.progress__upper');
      let valueBlock = el.querySelector('.facts-element__value');
      let radius = progress.getAttribute('r');
      let circleLength = 2 * Math.PI * radius;
      let percent = el.dataset.percent;
      let percentageProgress = Math.floor(percent);
      valueBlock.textContent = percent + '%';
      progress.setAttribute('stroke-dasharray', circleLength);
      progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
    }

  });


  $('.menu__btn').on('click', function () {
    $('.menu__btn, .menu__list, .header__contacts').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });



  $('.work-offer__button').on('click', function (e) {
    e.preventDefault();
    $('.work-offer__button').removeClass('active');
    $(this).addClass('active');
  });

  $('.news__btn').on('click', function (e) {
    e.preventDefault();
    $('.news__btn').removeClass('active');
    $(this).addClass('active');
  });



  $('.our__controls').on('click', function (e) {
    e.preventDefault();
    $('.our__controls').removeClass('active');
    $(this).addClass('active');

    $('.our__slider-box').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });



  const mix1 = document.querySelector('.projects__work-offer');
  const mix2 = document.querySelector('.news__list');

  if (mix1) {
    mixitup('.projects__work-offer', {
      selectors: {
        control: '.filter1'
      }
    });
  }

  if (mix2) {
    mixitup('.news__list', {
      selectors: {
        control: '.filter2'
      }
    });
  }


  new WOW().init();
});