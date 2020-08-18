$('.main-toggle').click(function(){
  $('.first').toggleClass('top');
  $('.second').toggleClass('toggle-hide');
  $('.third').toggleClass('bottom');
});
$(window).on('scroll',function(){
  if($(window).scrollTop()){
    $('header').addClass('pop');
  }
  else{
    $('header').removeClass('pop');
  }
});

/*top nav bar*/
$('.nav li').click(function(){
  $('.nav li').removeClass('active');
  $(this).addClass('active');
  
});

/*our classes*/
 $('.class-list li').click(function(){
   $('.class-list li').removeClass('active1');
   $(this).addClass('active1');
   
});

$('.tab1').click(function(){
  $('.main-class article').removeClass('opacity');
  $('#tab1').addClass('opacity');
});
$('.tab2').click(function(){
  $('.main-class article').removeClass('opacity');
  $('#tab2').addClass('opacity');
});
$('.tab3').click(function(){
  $('.main-class article').removeClass('opacity');
  $('#tab3').addClass('opacity');
});
$('.tab4').click(function(){
  $('.main-class article').removeClass('opacity');
  $('#tab4').addClass('opacity');
});

/* schedule*/
$('.day-schedule li').click(function(){
  $('.day-schedule li').removeClass('active');
  $(this).addClass('active');
});

$('.day-schedule li#mon').click(function(){
  $('.schedule-table td').removeClass('opacity');
  $('.mon').addClass('opacity');
});
$('.day-schedule li#tue').click(function(){
  $('.schedule-table td').removeClass('opacity');
  $('.tue').addClass('opacity');
});
$('.day-schedule li#wed').click(function(){
  $('.schedule-table td').removeClass('opacity');
  $('.wed').addClass('opacity');
});
$('.day-schedule li#thu').click(function(){
  $('.schedule-table td').removeClass('opacity');
  $('.thu').addClass('opacity');
});
$('.day-schedule li#fri').click(function(){
  $('.schedule-table td').removeClass('opacity');
  $('.fri').addClass('opacity');
});
