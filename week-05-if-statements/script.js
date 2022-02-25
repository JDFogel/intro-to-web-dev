// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'Potato Roll') {
    alert("Good enough!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'Kaiser Roll') {
    alert('Perfect choice!');
	hide('question-one');
    show('question-two');
  } else {
    alert('Wrong, sorry! Maybe try something related to the leader of Germany before World War I?')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 'Chicken') {
    alert("That's spot on!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == 'Beef') {
    alert('Hmm. Try a smaller animal.');
  } else if(answerTwo == 'Pork') {
    alert('A good choice, but not quite the best. Maybe try an even smaller animal?')
  } else {
  	alert("That's an interesting choice, but I'm thinking of something that goes 'cluck.'")
  }
}

function submitAnswerThree() {
	
	const answerThreeInput = document.getElementById('answer-three-input');
	const answerThree = answerThreeInput.value
		
	if(answerThree == 'Pepperjack') {
		alert('Amazing option!');
		hide('question-three');
		show('question-four');
	} else {
		alert('Sorry, not quite. Maybe try something with a little more spice?')
	}
}

function submitAnswerFour() {
	
	const answerFourInput = document.getElementById('answer-four-input');
	const answerFour = answerFourInput.value
		
	if(answerFour == 'Chipotle Mayo') {
		alert("That's what I was thinking!");
		hide('question-four');
		show('done');
	} else if(answerFour == 'Mayo') {
		alert('Uh, no. But close! Maybe a mayo-based sauce with a bit of a kick?')
	} else if(answerFour == 'Ketchup' || 'Mustard') {
		alert('Solid option, but try something a little more interesting!')
	} else {
		alert('Sorry, not quite. Maybe try something with a little more spice?')
	}
	
}


// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}