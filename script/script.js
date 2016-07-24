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
  // - if not all color & position correct then attempt++ - DONE
  // - add new element to board and repeat process until 10 attempts - DONE
  // ----------------------------------------------
  // >> sprint two
  // ----------------------------------------------
  // >> possible to not duplicate pegs - DONE
  // >> track and show all attempts - DONE
  // >> track and show all pegs with associated attempts - DONE
  // >> imagery - DONE
  // >> artwork - DONE
  // >> new game - DONE
  // >> directions text - DONE
  // >> read me file
  // ----------------------------------------------
  // +++ sprint three
  // ----------------------------------------------
  // +++ high score log
  // +++ drag and drop of image
  // +++ if click again then remove the image and clear its content
  // +++ 3d shaped pegs

  // Global Variables
  var randomPattern = [];
  var userGuess = ['', '', '', ''];
  var $choices = $('.choices');
  var $board = $('#board');
  var $guessColor = $('.active .guessColor');
  var guessCount = 1;



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

    for (var i = 0; i < userGuess.length; i++){
      if (randomPattern.indexOf(userGuess[i]) > -1){
        if (randomPattern.indexOf(userGuess[i]) === i){
          white_peg++;
        } else {
          black_peg++;
        }
      } else {
        // wrong color entirely
      }
    }
    if (white_peg === 4){
      fillStatus(white_peg, black_peg);
      winnersCircle();
    } else if (guessCount < 10) {
      guessCount++;
      fillStatus(white_peg, black_peg);
      nextAttempt();
    } else {
      fillStatus(white_peg, black_peg);
      losersLounge();
    }
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
  }; // end of nextAttempt function



  // resetForGuess function
  var resetForGuess = function(){
    // reset global variables but NOT original pattern
    userGuess = ['', '', '', ''];
    $guessColor = $('.active .guessColor');
    // turn click back on
    clickListener();
  };


  // full reset function for new game
  var fullReset = function(){
    // reset global variables and the original pattern
    randomPattern = [];
    userGuess = ['', '', '', ''];
    guessCount = 1;

    $('div#guess').remove();

    var $div = $('<div id="guess" class="active"></div>');
    for (var i = 0; i < 4; i++){
      $div.append('<div class="guessColor" data-num='+i+'></div>');
    };

    var $divStatus = $('<div id="status">');
    for (i = 0; i < 4; i++){
      $divStatus.append('<div class="guessStatus"></div>');
    };

    $div.append($divStatus);
    $board.prepend($div);

    var $subtitle = $('#subtitle');
    $subtitle.text('Ninja Edition');
    $subtitle.removeClass('blink');

    $choices = $('.choices');
    $board = $('#board');
    $guessColor = $('.active .guessColor');

    randomColor();
    clickListener();
  }



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



  // winnersCircle function to let you know you won
  // source: https://www.kapadiya.net/snippets/how-to-make-blinking-flashing-text-with-css3-and-jquery/
  var winnersCircle = function(){
    var $subtitle = $('#subtitle');
    $subtitle.text('WINNER!!!!!');
    $subtitle.addClass('blink');
    var playAgain = confirm('Do you want to play again?');
    if (playAgain) {
      fullReset();
    }
  }; // end of winnersCircle function

  // losersLounge function if you run out of tries
  var losersLounge = function(){
    var $subtitle = $('#subtitle');
    $subtitle.text('OUT OF TRIES - WHOMP!');
    $subtitle.addClass('blink');
    var playAgain = confirm('Do you want to play again?');
    if (playAgain) {
      fullReset();
    };
  }; // end of losers lounge function



  $(document).ready(function(){
    randomColor();
    clickListener();
  });



}); // end of script.js file
