$(document).ready(function() {
  
  // Wow init
  new WOW().init();
  
  
  //Waypoints init
  $('#skills').waypoint(function(direction){
    if (direction == 'down'){
      $('nav').addClass('sticky')
    }else {
      $('nav').removeClass('sticky')
    }
  }, {
  offset: '25%'
  });

  
});