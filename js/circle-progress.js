(function($){
    'use strict';   

   jQuery(document).ready(function($){
    
 
    // skill circle progress bar
    var skillLevel1 = $('.skill-item .first').data('skill-level');
    var skillLevel2 = $('.skill-item .second').data('skill-level');
    var skillLevel3 = $('.skill-item .third').data('skill-level');
    var skillLevel4 = $('.skill-item .fourth').data('skill-level');
    var skillLevel5 = $('.skill-item .fifth').data('skill-level');
    var skillLevel6 = $('.skill-item .sixth').data('skill-level');
    //first.circle
    $('.first.circle').circleProgress({
      value: '0.' + skillLevel1,
      size: 80,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#000"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html('HTML<br>' + Math.round(95 * progress) + '<span>%</span>');
    });

    //second.circle
    $('.second.circle').circleProgress({
      value: '0.' + skillLevel2,
      size: 80,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#000"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html('CSS<br>' + Math.round(85 * progress) + '<span>%</span>');
    });

    //third.circle
    $('.third.circle').circleProgress({
      value: '0.' + skillLevel3,
      size: 80,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#000"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html('JS<br>Jquery<br>' + Math.round(65 * progress) + '<span>%</span>');
    });

    //fourth.circle
    $('.fourth.circle').circleProgress({
      value: '0.' + skillLevel4,
      size: 80,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#000"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html('Ps<br>' + Math.round(90 * progress) + '<span>%</span>');
    });

    //fifth.circle
    $('.fifth.circle').circleProgress({
      value: '0.' + skillLevel5,
      size: 80,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#000"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html('Ai<br>' + Math.round(95 * progress) + '<span>%</span>');
    });

    //sixth.circle
    $('.sixth.circle').circleProgress({
      value: '0.' + skillLevel6,
      size: 80,
      emptyFill: "#f2f2f2",
      fill: {
        color: "#000"
      }
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('h2').html('Xd<br>' + Math.round(75 * progress) + '<span>%</span>');
    });

   });
  
})(jQuery);	 