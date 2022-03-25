// Array of objects representing a todo list.
// Modify this array to contain your own list.
const movieArray = [
	{label: 'A New Hope', year: 1977, time: 121, money: 775.4},
	{label: 'Empire Strikes Back', year: 1980, time: 127, money: 538.4},
	{label: 'Return of the jedi', year: 1983, time: 131, money: 475.1},
	{label: 'The Phantom Menace', year: 1999, time: 136, money: 924.3},
	{label: 'Attack of the Clones', year: 2002, time: 142, money: 653.8},
	{label: 'Revenge of the Sith', year: 2005, time: 140, money: 868.4},
	{label: 'The Force Awakens', year: 2015, time: 136, money: 2069.5},
	{label: 'Rogue One', year: 2016, time: 133, money: 1056.1},
	{label: 'The Last Jedi', year: 2017, time: 152, money: 1332.5},
	{label: 'Solo', year: 2018, time: 135, money: 392.9},
	{label: 'Rise of Skywalker', year: 2019, time: 142, money: 1074.1}
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  movieArray.sort((a, b) => compare(a.year, b.year));

  loadTable();
  loadBestEarn();
  loadAverageRun();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
  const newTaskLabel = document.getElementById('label-input').value;
  const newTaskYear = document.getElementById('year-input').value;
  const newTaskTime = document.getElementById('time-input').value;
  const newTaskMoney = document.getElementById('money-input').value;
  const newTask = {label: newTaskLabel, year: newTaskYear, time: newTaskTime, money: newTaskMoney };
  movieArray.push(newTask);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Title'));
  headerRowElement.appendChild(createElement('th', 'Year'));
  headerRowElement.appendChild(createElement('th', 'Runtime'));
  headerRowElement.appendChild(createElement('th', 'Earnings'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < movieArray.length; i++) {
    const movie = movieArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', movie.label));
    rowElement.appendChild(createElement('td', movie.year));
    rowElement.appendChild(createElement('td', movie.time));
    rowElement.appendChild(createElement('td', movie.money));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the movie with most income (not adjusted for inflation).
function loadBestEarn(){
  // Assume the first task is shortest
  let bestEarn = movieArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < movieArray.length; i++) {
    const task = movieArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.money > bestEarn.money) {
      bestEarn = task;
    }
  }
  document.getElementById('best-earn').innerText = bestEarn.label;
}

//Finds the Average Runtime
function loadAverageRun(){
    let total = 0;
    for(let i = 0; i < movieArray.length; i++){
        console.log (total);
        const movie = movieArray[i];
        total += Number(movie.time);

    }
    let average = total / movieArray.length;
        console.log (average);
        document.getElementById('average-runtime').innerText = average
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}