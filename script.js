//question storage array
const STORE = [
	{
		question: 'What happens to teams that finish in the bottom of the Premier League table at the end of each season?',
		answers: [
			'They sack their manager',
			'They are relegated',
			'They are given money to spend on better players',
			'The team ceases to exist'
		],
		correct: 'They are relegated'
	},
	{
		question: 'Which of these teams did not win a title during the first 16 seasons of the Premier League (1992-93 to 2007-08)?',
		answers: [
			'Liverpool',
			'Manchester United',
			'Blackburn Rovers',
			'Chelsea'
		],
		correct: 'Liverpool'
	},
	{
		question: 'Which club was the first to score 1,000 goals in the Premiership?',
		answers: [
			'Tottenham',
			'Chelsea',
			'Manchester United',
			'Arsenal'
		],
		correct: 'Manchester United'
	},
	{
		question: 'Which player has played for the most Premier League clubs?',
		answers: [
			'Rivaldo',
			'John Burridge',
			'Nicolas Anelka',
			'Peter Crouch'
		],
		correct: 'John Burridge'
	},
	{
		question: 'Which club has been promoted and relegated the most times?',
		answers: [
			'Birmingham City',
			'Brighton & Hove Albion',
			'Hull City',
			'Leicester City'
		],
		correct: 'Birmingham City'
	},
	{
		question: 'What is the main component of the body of the premiership trophy?',
		answers: [
			'Gold',
			'Diamonds',
			'Sterling silver',
			'Platinum'
		],
		correct: 'Sterling silver'
	},
	{
		question: 'How much money did Roman Abramovich buy Chelsea for in 2003?',
		answers: [
			'£140',
			'£290',
			'£100',
			'£350'
		],
		correct: '£140'
	},
	{
		question: 'Who has scored the most goals in the Premier League?',
		answers: [
			'Frank Lampard',
			'Wayne Rooney',
			'Andrew Cole',
			'Alan Shearer'
		],
		correct: 'Alan Shearer'
	},
	{
		question: 'Which two teams compete in the North London derby?',
		answers: [
			'Chelsea and Arsenal',
			'Arsenal and Tottenham',
			'Fulham and Chelsea',
			'West Ham and Tottenham'
		],
		correct: 'Arsenal and Tottenham'
	},
	{
		question: 'As of the 2019 summer transfer window, who became the most expensive defender in Premier League history?',
		answers: [
			'Virgil van Dijk',
			'Harry Maguire',
			'Matthijs de Ligt',
			'Aymeric Laporte'
		],
		correct: 'Harry Maguire'
	};
];

let qnumber = 0;
let score = 0;

function incrementQNumber() {
	//increment qnumber in html
	//increment qnumber in js
}

function incrementScore() {
	//increment score in html
	//increment score in js
}

function findQuestionAtIndex(index) {
	//find question and responses at given index in the STORE array
	//return question object
}

function renderQuestion() {
	//hide html from previous page
	//show html for question page using object from findQuestionAtIndex function
	//increment question number
}

function startQuiz() {
	//listen for click on start button
	//render question page
	//use information from index 0 on STORE array to populate question page
}

function checkResult() {
	//check to see if result matches the correct result in the object
}

function correctResult() {
	//show html for correct answer
	//increment score
}

function wrongResult() {
	//show html for incorrect answer
}

function showResult() {
	//listen for click on submit button
	//hide html from question
	//use checkResult and then correctResult or wrongResult depending on whether it is true/false
}

function nextButton() {
	//listen for click on next button
	//hide result page
	//increment qnumber
	//call renderQuestion function
}

function checkFinal() {
	//check to see if question is the final question
}

function showFinal() {
	//if checkFinal comes back true
	//hide result page
	//if score is greater than or equal to 6
		//show good final html
	//if score is less than 6
		//show bad final html
}

function tryAgain() {
	//listen for click on try again button
	//figure out how to get back to original state
}


