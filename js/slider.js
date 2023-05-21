 $('.about-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  initialSlide: 0,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});