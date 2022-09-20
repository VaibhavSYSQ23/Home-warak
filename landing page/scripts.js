// slick slider jQuery
$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    infinite: true,
   useTransform: true,
    speed: 150,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
       }
        }]
    });
  $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});      

// counter up solved



(function( $ ){
    "use strict";
  
    $.fn.counterUp = function( options ) {
  
      // Defaults
      var settings = $.extend({
          'time': 400,
          'delay': 10,
          'total': 0,
      }, options);
  
      return this.each(function(){
  
          // Store the object
          var $this = $(this);
          var $settings = settings;
          var $originalText = $this.text();
          var toptotal = $settings.total;
          // added this line based on solution by russelcole
          // https://github.com/bfintal/Counter-Up/issues/28#issue-132097963
  
          if (toptotal == 0) {
            toptotal = $this.text();
          }
          var toptotal = String(toptotal);
  
          var counterUpper = function() {
              var nums = [];
              var divisions = $settings.time / $settings.delay;
  //          var num = $this.text();
              // removed this line based on solution by russelcole
              // https://github.com/bfintal/Counter-Up/issues/28#issue-132097963
              var num = toptotal;
  
              var isComma = /[0-9]+,[0-9]+/.test(num);
              num = num.replace(/,/g, '');
              var isInt = /^[0-9]+$/.test(num);
              var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
              var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
  
              // Generate list of incremental numbers to display
              for (var i = divisions; i >= 1; i--) {
  
                  // Preserve as int if input was int
                  var newNum = parseInt(num / divisions * i);
  
                  // Preserve float if input was float
                  if (isFloat) {
                      newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                  }
  
                  // Preserve commas if input had commas
                  if (isComma) {
                      while (/(\d+)(\d{3})/.test(newNum.toString())) {
                          newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                      }
                  }
  
                  nums.unshift(newNum);
              }
  
              $this.data('counterup-nums', nums);
              $this.text('0');
  
              // Updates the number until we're done
              var f = function() {
                  $this.text($this.data('counterup-nums').shift());
                  if ($this.data('counterup-nums').length) {
                      setTimeout($this.data('counterup-func'), $settings.delay);
                  } else {
                      delete $this.data('counterup-nums');
                      $this.data('counterup-nums', null);
                      $this.data('counterup-func', null);
                  }
              };
              $this.data('counterup-func', f);
  
              // Start the count up
              setTimeout($this.data('counterup-func'), $settings.delay);
          };
  
          // Perform counts when the element gets into view
          $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
      });
  
    };
  
  })( jQuery );

  //text display on hover function
  $(document).ready(
    $('#default').text('Technology-Expert')
  )
$('.border-s').hover( function() {
$('.hover-text').eq($('.border-s').index($(this))).show(100);
$('#default').text('Technology-Experties').hide(100);
} , function() { 
$('.hover-text').eq($('.border-s').index($(this))).hide(100);
$('#default').text('Technology-Experties').show(100);      
});  
//onhover image display
$(document).ready(function(){
    $(".list-group-item").mouseenter(function(){
     
       $(".display-img").eq($('.list-group-item').index($(this))).show();

      });
     
     $(".list-group-item").mouseleave(function(){
     $(".display-img").eq($('.list-group-item').index($(this))).hide();
     
    });
});

//mouse scroller
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    });
    return false;
    });