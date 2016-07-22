"use strict";
$(function(){

  // ****************** pseucode ******************
  // ----------------------------------------------
  // - minimal viable product
  // ----------------------------------------------
  // - randomly select 4 colors from an array - DONE
  // - user selects four (4) colors in order (this is their guess) - DONE
  // - computer checks if user array is same as random array
  // - if a color & position correct then white_peg++
  // - if a color correct & position incorrect then black_peg++
  // - show number of each white_peg and black_peg
  // - if all color & position correct then win
  // - if not all color & position correct then attempt++
  // - push down users choice with shown pegs
  // - clear board and repeat process until 10 attempts
  // ----------------------------------------------
  // >> sprint two
  // ----------------------------------------------
  // >> possible to not duplicate pegs - DONE
  // >> track and show all attempts
  // >> track and show all pegs with associated attempts
  // >> if click again then remove the image and clear its content
  // ----------------------------------------------
  // +++ sprint three
  // ----------------------------------------------
  // +++ imagery
  // +++ artwork
  // +++ drag and drop of image

  // Global Variables
  var randomPattern = [];
  var userGuess = ['', '', '', ''];
  var $choices = $('.choices');
  var $guessColor = $('.guessColor');


  // Reset function
  var resetVariables = function(){
    randomPattern = [];
    userGuess = ['', '', '', ''];
  }


  // Selects non-duplicated color pattern
  var randomColor = function(){
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    var colorIndex = 0;

    for (var i = 0; i < 4; i++){
      colorIndex = Math.floor(Math.random() * colors.length);
      randomPattern.push(colors[colorIndex]);
      colors.splice(colorIndex, 1);
    }
  }


  // Listens for mouse click and prints out which one you clicked
  var clickListener = function(){
    var colorPicked = '';
    var posPicked = '';
    var counter = 0;

    $choices.on('click', function(){
      colorPicked = $(this).attr('id');
      console.log($(this));
      $(this).off('click');
      counter++;
      console.log('counter: '+counter);
    })
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
      }
    });
  }; // end of checkListener function


  // checkPattern function to see if things exist or correct
  // also calls fillStatus function to fill the tiny pegs
  var checkPattern = function(){
    console.log('you are now entering the pattern check function');

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
      winnersCircle();
    } else {
      fillStatus(white_peg, black_peg);
    };
  }; // end of checkPattern function

  // temp function to let you know you won
  var winnersCircle = function(){
    console.log('winner!!!!!!');
  }; // end of winnersCircle function


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






  $(document).ready(function(){
    randomColor();
    clickListener();
  });



}); // end of script.js file
