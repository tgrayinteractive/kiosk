var gameStatus = "open";

$('.refresh').click(function(){

  location.reload(true);

});

$('img').attr('draggable', false);


var score = 0;
var winningscore = 6;
var $lastobj = null;

function updateIcon(_pastObj){
  var $notice = $('#notice');
  var $pastObj = $(_pastObj)
  var posX = ($notice.position().left + $notice.width())-$pastObj.width()/2 -10;
  var posY = $notice.position().top + 50;
console.log(posX, posY);

  TweenLite.to($pastObj, 1, {x: posX, y: posY, 
    onComplete:function(){
      gameStatus = "open";
    }
  });

  TweenLite.to($("#notice .content"), .5, {
    opacity: 0,
    onComplete: function() {
      $("#notice .content").html($pastObj.data("mytips"));
      TweenLite.to($("#notice .content"), .25, {opacity: 1}); 
    }
  }) 
  
  $(".circle").css({"display":"block"})
  gameStatus = "hitting"
  //-------- prob.
  if($lastobj != null){
    $lastobj.css({'opacity':0});
    console.log($lastobj);
  }
  $lastobj = $pastObj;
  score = score+1;
  if(score === winningscore){
    $(".congrats").css("display","block");
  }
}

Draggable.create("#claw", {
  type: "y",
  minY:"-100px",
  maxY:"300px",
  bounds:{
    top:-200,
    left:0,
    width:0,
    height:1000
  },
  onDrag: function() {

    $("#rope").css({"height":$("#claw").position().top})

    if (this.hitTest(".bottle") && $('.bottle').data("hit") == false && gameStatus!="hitting") {
      bottleAnimation.kill();
      updateIcon('.bottle');
      $('.bottle').data("hit", true);
    }

    if (this.hitTest(".spoon") && $('.spoon').data("hit") == false && gameStatus!="hitting") {
      spoonAnimation.kill();
      updateIcon('.spoon');
      $('.spoon').data("hit", true);
    }
    if (this.hitTest(".straw") && $('.straw').data("hit") == false && gameStatus!="hitting") {
      strawAnimation.kill();
      updateIcon('.straw');
      $('.straw').data("hit", true);
    }
    if (this.hitTest(".solocup") && $('.solocup').data("hit") == false && gameStatus!="hitting") {
      solocupAnimation.kill();
      updateIcon('.solocup');
      $('.solocup').data("hit", true);
    }
    if (this.hitTest(".grocerybag") && $('.grocerybag').data("hit") == false && gameStatus!="hitting") {
      grocerybagAnimation.kill();
      updateIcon('.grocerybag');
      $('.grocerybag').data("hit", true);
    }
    if (this.hitTest(".plasticcap") && $('.plasticcap').data("hit") == false && gameStatus!="hitting") {
      plasticcapAnimation.kill();
      updateIcon('.plasticcap');
      $('.plasticcap').data("hit", true);
    }              
    if(this.hitTest(".fish1")){
      var warning = new TimelineMax();
      
      warning.add(TweenLite.to($('#two_fish_2_'), .25, {'fill':'rgb(0,0,0)', scale:.85}));
      warning.add(TweenLite.to($('#two_fish_2_'), .25, {'fill':'rgb(255,255,255)', scale:1}));
  
      warning.play();
    
    }
    if(this.hitTest(".fish2")){
      var warning = new TimelineMax();
      
      warning.add(TweenLite.to($('#one_fish_1_'), .25, {'fill':'rgb(0,0,0)', scale:.85}));
      warning.add(TweenLite.to($('#one_fish_1_'), .25, {'fill':'rgb(255,255,255)', scale:1}));
  
      warning.play();
    
    }
  }
});


$('.bottle').css({
  'transform':'translate(-500px,'+getRandomNumber(600, 950)+'px)'
})

var bottleAnimation = TweenMax.to($('.bottle'), getRandomNumber(5, 15), 
{
  repeat:-1,
  yoyo:true,
  x:"1920px",
  // onComplete: function(){
  //   console.log("jon");
  //   myAnimation.restart();
  // }

});

$('.spoon').css({
  'transform':'translate(-500px,'+getRandomNumber(600, 950)+'px)'
})


var spoonAnimation = TweenMax.to($('.spoon'), getRandomNumber(5, 7), 
{
  repeat:-1,
  yoyo:true,
  x:"1920px",
  // onComplete: function(){
  //   console.log("jon");
  //   myAnimation.restart();
  // }

});

$('.straw').css({
  'transform':'translate(-500px,'+getRandomNumber(600, 950)+'px)'
})

var strawAnimation = TweenMax.to($('.straw'),getRandomNumber(5, 20), 
{
  repeat:-1,
  yoyo:true,
  x:"1920px",
  // onComplete: function(){
  //   console.log("jon");
  //   myAnimation.restart();
  // }

});

$('.solocup').css({
  'transform':'translate(-500px,'+getRandomNumber(600, 950)+'px)'
})

var solocupAnimation = TweenMax.to($('.solocup'),getRandomNumber(5, 16), 
{
  repeat:-1,
  yoyo:true,
  x:"1920px",
  // onComplete: function(){
  //   console.log("jon");
  //   myAnimation.restart();
  // }

});

$('.grocerybag').css({
  'transform':'translate(-500px,'+getRandomNumber(600, 950)+'px)'
})

var grocerybagAnimation = TweenMax.to($('.grocerybag'),getRandomNumber(5, 12), 
{
  repeat:-1,
  yoyo:true,
  x:"1920px",
  // onComplete: function(){
  //   console.log("jon");
  //   myAnimation.restart();
  // }

});

$('.plasticcap').css({
  'transform':'translate(-500px,'+getRandomNumber(600, 950)+'px)'
})

var plasticcapAnimation = TweenMax.to($('.plasticcap'),getRandomNumber(5, 8), 
{
  repeat:-1,
  yoyo:true,
  x:"1920px",
  // onComplete: function(){
  //   console.log("jon");
  //   myAnimation.restart();
  // }

});



function getRandomNumber(_min, _max){
  var max = _min;
  var min = _max;
  var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
  return randomNumber;
}
$("#rope").css({"height":$("#claw").position().top});
//console.log(getRandomNumber(5, 300));