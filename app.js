// When the user clicks #start, render the quiz questions and only
// show the first question. When the user completes the 
// final question, show the results screen and ask if they want to 
// redo.
var curQuestion = 0;
var numCorrect = 0;
var questions = [{
  prompt: "Which hero emotes I'm ready when swinging with their weapon?",
  answers: [
    'Magni Bronzebeard',
    'Jaina Proudmoore',
    'Gul\'dan',
    'Anduin Wrynn',
    'Tyrande Whisperwind'
  ],
  solution: 'Jaina Proudmoore'
}, {
  prompt: 'Which player won the first Hearthstone championship at Blizzcon?',
  answers: [
    'Firebat',
    'Chakki',
    'Kripparrian',
    'Reynad',
    'Forsen'
  ],
  solution: 'Firebat'
}, {
  prompt: 'Cairne Bloodhoof says \'For Honor\' much like when this minion enters the field',
  answers: [
    'Deathlord',
    'Mana Wyrm',
    'Stormwind Knight',
    'Warsong Commander',
    'Blood Knight'
  ],
  solution: 'Stormwind Knight'
}, {
  prompt: 'What is the minimum amount of rare of greater cards that you are allowed to pick in arena?',
  answers: [
    '0',
    '1',
    '2',
    '3',
    '4'
  ],
  solution: '3'
}, {
  prompt: 'What logic determines the order that deathrattles will trigger? ',
  answers: [
    'Randomness',
    'Smaller health total triggers first(RNG is a tiebreaker)',
    'Larger health total triggers first(RNG is a tiebreaker)',
    'Last minion to first',
    'First come first serve'
  ],
  solution: 'First come first serve'
}, {
  prompt: 'This player is known for exclusively playing Priest',
  answers: [
    'Chakki',
    'Hafu',
    'Eloise',
    'Zetalot',
    'Gaara'
  ],
  solution: 'Zetalot'
}, {
  prompt: 'Unlike the Cabal shadow priest, instead of saying \'No!\', this minion says \'Yes!\' when he dies',
  answers: [
    'Acolyte of Pain',
    'Yogg-Saron',
    'Water Elemental',
    'Bluegill Warrior ',
    'Coldlight Oracle'
  ],
  solution: 'Acolyte of Pain'
}, {
  prompt: 'Best known as the \'Prince of Miracoli\' , this player popularized a deck archetype known as miracle rogue ',
  answers: [
    'Firebat',
    'Chakki',
    'Kripparrian',
    'Reynad',
    'Forsen'
  ],
  solution: 'Forsen'
}, {
  prompt: 'Hearthstone is a game of tug of war, and this dragon gives rope burn',
  answers: [
    'Azure Drake',
    'Nefarian',
    'Nozdormu',
    'Ysera',
    'Deathwing'
  ],
  solution: 'Nozdormu'
}, {
  prompt: 'This is the total gold you earn from quests \'Total Dominance\' and \'Destroy Them all!\'',
  answers: [
    '150',
    '140',
    '160',
    '200',
    '190'
  ],
  solution: '140'
}];

var generateAnswers = function(curQuestion) {
  var questionObj = questions[curQuestion];
  var questionAnswers = questionObj.answers;
  questionAnswers.forEach(function(element) {
    $('.container').append('<br><label><input type = "radio"' +
      'name = "choice" value ="' + element + '">' +
      element + '</br></label>');
  })
  $('.container').append('<button type = "button" "id = "next" onclick="nextQuestion()">NEXT QUESTION' + '</button>');
}

var generateQuestion = function(curQuestion) {
  var questionObj = questions[curQuestion];
  var containerHTML = '<div class = "question">' + questionObj.prompt +
    '</div>' + '<div class = "qNum">Question' + ' ' + curQuestion +   ' of 10</div>';
  $('.container').html(containerHTML);


  // First, we want to return the question according to 
  // current question index and then we want to use
  // question object and create an HTML object with the
  // question data and pass it into container as a jQuery
  // HTML element.
}

var init = function() {
  // When the user clicks start, it will add hide class to the 
  // start class and add it to the container
  $('.submit').on('click', function() {
    $('.start').addClass('hidden');
    $('.container').removeClass('hidden');
  })
}

var handleLogic = function(curQuestion) {
  var questionObj = questions[curQuestion - 1];
  var playerInput = $('input[name=' + 'choice' + ']:radio:checked').val();
  console.log(playerInput);
  console.log(questionObj.solution);
  if (playerInput == questionObj.solution) {
    numCorrect++;
    $('.feedback').html("Legendary! You got it correct.");
    $('.feedback').removeClass('hidden');

  } else {
    $('.feedback').html("That wasn't right. The correct answer was" + " " + questionObj.solution + ".");
 	$('.feedback').removeClass('hidden');
  }
  if (curQuestion == 10) {
  	handleEnd();
  }
}

var handleEnd =function() {
	$('.feedback').addClass('hidden');
	$('.container').addClass('hidden');

	$('.finalresults').removeClass('hidden');
	$('.finalresults').html("<p>Thanks for taking the quiz.</p>" +
							'<p>You got ' + ' ' + numCorrect +  ' of 10 questions correctly</p>' +
							'<p>Ready to test your mettle again?</p>' +
							'<button type = "reset" button id = "reset" onclick = "location.reload()">Play Again</button>'	);
}

var reset = function() {
	location.reload();
}

var nextQuestion = function() {
  curQuestion++;
  handleLogic(curQuestion);
  generateQuestion(curQuestion);
  generateAnswers(curQuestion);
}


$(document).ready(function() {
  init();
  generateQuestion(curQuestion);
  generateAnswers(curQuestion);
});