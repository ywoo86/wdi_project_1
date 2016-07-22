"use strict";
$(function(){

  // ****************** pseucode ******************
  // ----------------------------------------------
  // - minimal viable product
  // ----------------------------------------------
  // - randomly select 4 colors from an array - DONE
  // - user selects four (4) colors in order (this is their guess) - DONE
  // - computer checks if user array is same as random array - DONE
  // - if a color & position correct then white_peg++ - DONE
  // - if a color correct & position incorrect then black_peg++ - DONE
  // - show number of each white_peg and black_peg - DONE
  // - if all color & position correct then win - DONE
  // - push down users choice with shown pegs - DONE
  // - if not all color & position correct then attempt++
  // - clear board and repeat process until 10 attempts
  // ----------------------------------------------
  // >> sprint two
  // ----------------------------------------------
  // >> possible to not duplicate pegs - DONE
  // >> track and show all attempts
  // >> track and show all pegs with associated attempts - DONE
  // >> if click again then remove the image and clear its content
  // ----------------------------------------------
  // +++ sprint three
  // ----------------------------------------------
  // +++ imagery - DONE
  // +++ artwork - DONE
  // +++ drag and drop of image - ?????? mousedown/mouseup

  // Global Variables
  var randomPattern = [];
  var userGuess = ['', '', '', ''];
  var $choices = $('.choices');
  var $board = $('#board');
  var $guessColor = $('.active .guessColor');



  // Selects non-duplicated color pattern
  var randomColor = function(){
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink'];
    var colorIndex = 0;

    for (var i = 0; i < 4; i++){
      colorIndex = Math.floor(Math.random() * colors.length);
      randomPattern.push(colors[colorIndex]);
      colors.splice(colorIndex, 1);
    };
  }; // end of randomColor function


  // Listens for mouse click and prints out which one you clicked
  var clickListener = function(){
    var colorPicked = '';
    var posPicked = '';
    var counter = 0;

    $choices.on('click', function(){
      colorPicked = $(this).attr('id');
      $(this).off('click');
      counter++;
    });
    $guessColor.on('click', function(){
      posPicked = parseInt($(this).attr('data-num'));
      $(this).attr('id', colorPicked);
      userGuess[posPicked] = colorPicked;
      colorPicked = '';
      console.log(userGuess); // this is temp print out of array after every click
      if (counter === 4){
        $choices.off();
        $guessColor.off();
        checkPattern();
      };
    });
  }; // end of checkListener function



  // checkPattern function to see if things exist or correct
  // also calls fillStatus function to fill the tiny pegs
  var checkPattern = function(){
    console.log('inside checkPattern');
    var white_peg = 0;
    var black_peg = 0;

    console.log(randomPattern);
    for (var i = 0; i < userGuess.length; i++){
      console.log('in for loop');
      if (randomPattern.indexOf(userGuess[i]) > -1){
        console.log('first color check: '+randomPattern.indexOf(userGuess[i]));
        if (randomPattern.indexOf(userGuess[i]) === i){
          white_peg++;
          console.log('white peg ++');
        } else {
          black_peg++;
          console.log('black peg ++');
        }
      } else {
        // wrong color entirely
      }
    }
    if (white_peg === 4){
      winnersCircle();
    } else {
      console.log('calling fillStatus fxn');
      fillStatus(white_peg, black_peg);
      nextAttempt();
    };
  }; // end of checkPattern function



  // nextAttempt function appends new guess section
  // also removes active class from old guess
  // and add active class to new guess
  var nextAttempt = function(){
    var $div = $('<div id="guess" class="active"></div>');
    for (var i = 0; i < 4; i++){
      $div.append('<div class="guessColor" data-num='+i+'></div>');
    };

    var $divStatus = $('<div id="status">');
    for (i = 0; i < 4; i++){
      $divStatus.append('<div class="guessStatus"></div>');
    };

    $div.append($divStatus);
    $div.addClass('active');
    $('.active').removeClass('active');
    $board.prepend($div);
    resetForGuess();
  };



  // resetForGuess
  var resetForGuess = function(){
    // reset global variables but NOT original pattern
    userGuess = ['', '', '', ''];
    $guessColor = $('.active .guessColor');
    // turn click back on
    clickListener();
  };



  // fillStatus fills the status pegs to let you know how you did
  var fillStatus = function(white, black){
    var $guessStatus = $('.guessStatus');
    $guessStatus.each(function(){
      if (white > 0){
        $(this).addClass('whitePeg');
        white--;
      } else if (black > 0){
        $(this).addClass('blackPeg');
        black--;
      } else {
        // leave it alone
      };
    });
  }; // end of fillStatus function



  // temp function to let you know you won
  var winnersCircle = function(){
    alert('winner!!!!!!');
  }; // end of winnersCircle function





  $(document).ready(function(){
    randomColor();
    clickListener();
  });



}); // end of script.js file
