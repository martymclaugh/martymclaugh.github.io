$( document ).ready(function() {
  firstProject();
  showFirstProject();
  showSecondProject();
  showThirdProject();
});

var firstProject = function(){
  $('.first-project').addClass('active');
};

var showSecondProject = function(){
  $('.second-project').on('click', function (event){
    event.preventDefault();
    $(this).addClass('active');
    $('.first-project, .third-project').removeClass('active');
    $('.myta-box, .forked-box').hide();
    $('.intramural-box').show();
  });
}

var showThirdProject = function(){
  $('.third-project').on('click', function (event){
    event.preventDefault();
    $(this).addClass('active');
    $('.first-project, .second-project').removeClass('active');
    $('.intramural-box, .forked-box').hide();
    $('.myta-box').show();
  });
}
var showFirstProject = function(){
  $('.first-project').on('click', function (event){
    event.preventDefault();
    $(this).addClass('active');
    $('.third-project, .second-project').removeClass('active');
    $('.intramural-box, .myta-box').hide();
    $('.forked-box').show();
  });
}
