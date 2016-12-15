$( document ).ready(function() {
  firstProject();
  showFirstProject();
  showSecondProject();
  showThirdProject();
  showForkedProject();
});

var firstProject = function(){
  $('.first-project').addClass('active');
};

var showSecondProject = function(){
  $('.second-project').on('click', function (event){
    event.preventDefault();
    $(this).addClass('active');
    $('.first-project, .third-project, .forked-project').removeClass('active');
    $('.myta-box, .forked-box, .ifives-box').hide();
    $('.intramural-box').show();
  });
}

var showThirdProject = function(){
  $('.third-project').on('click', function (event){
    event.preventDefault();
    $(this).addClass('active');
    $('.first-project, .second-project, .forked-project').removeClass('active');
    $('.intramural-box, .forked-box, .ifives-box').hide();
    $('.myta-box').show();
  });
}
var showFirstProject = function(){
  $('.first-project').on('click', function (event){
    event.preventDefault();
    $(this).addClass('active');
    $('.third-project, .second-project, .forked-project').removeClass('active');
    $('.intramural-box, .myta-box, .forked-box').hide();
    $('.ifives-box').show();
  });
}
var showForkedProject = function(){
  $('.forked-project').on('click', function (event){
    event.preventDefault();
    $(this).addClass('active');
    $('.third-project, .second-project, .first-project').removeClass('active');
    $('.intramural-box, .myta-box, .ifives-box').hide();
    $('.forked-box').show();
  });
}
