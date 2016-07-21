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
  var userGuess =['', '', '', ''];
  var $choices = $('.choices');
  var $guessColor = $('.guessColor');


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

    $choices.on('click', function(){
      colorPicked = $(this).attr('id');
    })

    $guessColor.on('click', function(){
      posPicked = parseInt($(this).attr('data-num'));
      $(this).addClass(colorPicked);
      userGuess[posPicked] = colorPicked;
      console.log(userGuess); // this is temp print out of array after every click
    });
  };


  randomColor();
  $(document).ready(function(){
    clickListener();
  });



}); // end of script.js file
