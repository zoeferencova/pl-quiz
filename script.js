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
		correct: 1
	},
	{
		question: 'Which of these teams did not win a title during the first 16 seasons of the Premier League (1992-93 to 2007-08)?',
		answers: [
			'Liverpool',
			'Manchester United',
			'Blackburn Rovers',
			'Chelsea'
		],
		correct: 0
	},
	{
		question: 'Which club was the first to score 1,000 goals in the Premiership?',
		answers: [
			'Tottenham',
			'Chelsea',
			'Manchester United',
			'Arsenal'
		],
		correct: 2
	},
	{
		question: 'Which player has played for the most Premier League clubs?',
		answers: [
			'Rivaldo',
			'John Burridge',
			'Nicolas Anelka',
			'Peter Crouch'
		],
		correct: 1
	},
	{
		question: 'Which club has been promoted and relegated the most times?',
		answers: [
			'Birmingham City',
			'Brighton & Hove Albion',
			'Hull City',
			'Leicester City'
		],
		correct: 0
	},
	{
		question: 'What is the main component of the body of the premiership trophy?',
		answers: [
			'Gold',
			'Diamonds',
			'Sterling silver',
			'Platinum'
		],
		correct: 2
	},
	{
		question: 'How much money did Roman Abramovich buy Chelsea for in 2003?',
		answers: [
			'£140',
			'£290',
			'£100',
			'£350'
		],
		correct: 0
	},
	{
		question: 'Who has scored the most goals in the Premier League?',
		answers: [
			'Frank Lampard',
			'Wayne Rooney',
			'Andrew Cole',
			'Alan Shearer'
		],
		correct: 3
	},
	{
		question: 'Which two teams compete in the North London derby?',
		answers: [
			'Chelsea and Arsenal',
			'Arsenal and Tottenham',
			'Fulham and Chelsea',
			'West Ham and Tottenham'
		],
		correct: 1
	},
	{
		question: 'As of the 2019 summer transfer window, who became the most expensive defender in Premier League history?',
		answers: [
			'Virgil van Dijk',
			'Harry Maguire',
			'Matthijs de Ligt',
			'Aymeric Laporte'
		],
		correct: 1
	}
];

let qnumber = 0;
let score = 0;

function incrementQNumber() {
	qnumber++;
	$('.qnumber').text(qnumber);
}

function incrementScore() {
	score++;
	$('.score').text(score);
}

function hideContents() {
	$('.quiz-box').children().hide();
}

function findQuestionAtIndex(index) {
	return STORE[index];
}

function getResponses() {
	const responseArray = findQuestionAtIndex(qnumber).answers;
	const responseString = responseArray.map(e => `<div><input type="radio" value=${responseArray.indexOf(e)} name="options" id="option${responseArray.indexOf(e)}" class="option"><label for="option${responseArray.indexOf(e)}">${e}</label></div>`).join('');
	return responseString;
}

function questionMaker() {
	const responseHTML = getResponses();
	const questionHTML = `<form class="quiz-questions"><fieldset class="question-field"><legend class="question">${findQuestionAtIndex(qnumber).question}</legend>${responseHTML}</fieldset><button role="button" type="button" class="btn submit-btn">Submit</button></form>`
	return questionHTML;
}

function renderQuestion() {
	//hide html from previous page
	//set html to question using object from findQuestionAtIndex function
	//increment question number
	hideContents()
	$('.quiz-box').html(questionMaker())
}

function startQuiz() {
	//listen for click on start button
	//render question page
	//use information from index 0 on STORE array to populate question page
	$('.start-btn').click(function(e) {
		e.preventDefault();
		renderQuestion()
		$('.qnumber').text(1);
	});
}

function correctResult() {
	//show html for correct answer
	//increment score
	hideContents()
	$('.quiz-box').html(`<h2>That's the right answer!</h2><img class="response-image" src="images/quiz-app-eden.jpg" alt="Soccer player celebrating goal."><p>Option 1</p><button role="button" type="button" class="btn next-btn">Next</button>`)
	incrementScore();
}

function wrongResult() {
	//show html for incorrect answer
	hideContents()
	$('.quiz-box').html(`<h2>That's the wrong answer!</h2><img class="response-image" src="images/quiz-app-sadmou.jpg" alt="A disappointed Jose Mourinho."><p>Correct Answer: ${STORE[qnumber].answers[STORE[qnumber].correct]}</p><button role="button" type="button" class="btn next-btn">Next</button>`)
}

function showResult() {
	//listen for click on submit button
	//hide html from question
	//use checkResult and then correctResult or wrongResult depending on whether it is true/false
	$('.quiz-box').on('click', '.submit-btn', function(e) {
		e.preventDefault();
		let choice = $('input[name="options"]:checked').val();
		if (choice == findQuestionAtIndex(qnumber).correct) {
			correctResult();
		} else {
			wrongResult();
		}
	})
}


function nextButton() {
	//listen for click on next button
	//hide result page
	//increment qnumber
	//call renderQuestion function
	$('.quiz-box').on('click', '.next-btn', function(e) {
		e.preventDefault();
		hideContents();
		incrementQNumber();
		renderQuestion();
	})

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

function functionHandler() {
	startQuiz();
	showResult();
	nextButton()
}

$(functionHandler);


