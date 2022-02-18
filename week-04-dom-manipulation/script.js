
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  // Get the output container element
  const outputDiv = document.getElementById('output1');
  // Make the output container element visible
  outputDiv.style.display = 'block';

}

function fillVerbOutput() {
	
	const verbOneInput = document.getElementById('verb-one-input');
	const verbOne = verbOneInput.value
		
	const verbOneOutput = document.getElementById('verb-one-output');
	verbOneOutput.innerText = verbOne;
	
	const output2Div = document.getElementById('output2');
	output2Div.style.display = 'block';
	
}

function fillAnimalOutput() {
	
	const animalOneInput = document.getElementById('animal-one-input');
	const animalOne = animalOneInput.value
		
	const animalOneOutput = document.getElementById('animal-one-output');
	animalOneOutput.innerText = animalOne;
	
	const output3Div = document.getElementById('output3');
	output3Div.style.display = 'block';
	
}

function fillAdjectiveTwoOutput() {
	
	const adjectiveTwoInput = document.getElementById('adjective-two-input');
	const adjectiveTwo = adjectiveTwoInput.value
		
	const adjectiveTwoOutput = document.getElementById('adjective-two-output');
	adjectiveTwoOutput.innerText = adjectiveTwo;
	
	const output4Div = document.getElementById('output4');
	output4Div.style.display = 'block';
	
}

function fillPlaceOutput() {
	
	const placeOneInput = document.getElementById('place-one-input');
	const placeOne = placeOneInput.value
		
	const placeOneOutput = document.getElementById('place-one-output');
	placeOneOutput.innerText = placeOne;
	
	const output5Div = document.getElementById('output5');
	output5Div.style.display = 'block';
	
}