"use strict";
$(function(){

// ****************** pseucode ******************
// ----------------------------------------------
// - minimal viable product
// ----------------------------------------------
// - randomly select 4 colors from an array
// - user selects four (4) colors in order (this is their guess)
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
// >> possible to not duplicate pegs
// >> track and show all attempts
// >> track and show all pegs with associated attempts
// ----------------------------------------------
// +++ sprint three
// ----------------------------------------------
// +++ imagery
// +++ artwork

// Global Variables
var selectedPattern = [];

// Selects non-duplicated color pattern
var randomColor = function(){
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
  var colorIndex = 0;

  for (var i = 0; i < 4; i++){
    colorIndex = Math.floor(Math.random() * colors.length);
    selectedPattern.push(colors[colorIndex]);
    colors.splice(colorIndex, 1);
  }
}

randomColor();











});
