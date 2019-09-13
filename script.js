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

//set question number and score number variables
let qnumber = 0;
let score = 0;

//increment the question number variable and update the HTML count
function incrementQNumber() {
	qnumber++;
	$('.qnumber').text(qnumber+1);
}

//increment the score variable and update the HTML count
function incrementScore() {
	score++;
	$('.score').text(score);
}

//reset counters when restarting the quiz
function resetCounters() {
	$('.qnumber').text(0);
	$('.score').text(0);
	qnumber = 0;
	score = 0;
}

//randomize the choice of 2 images in the result pages
function randomImage(img1, img2) {
	let num = Math.floor(Math.random()*2);
	return num === 0 ? img1 : img2;
}

//hide current quiz box contents
function hideContents() {
	$('.quiz-box').children().hide();
}

//functionality for the initial "Kickoff" button to show the first question
function startQuiz() {
	$('.start-btn').click(function(e) {
		e.preventDefault();
		showNewQuestion();
		$('.qnumber').text(1);
	});
}

//format question page HTML, display questions and radio inputs
function showNewQuestion() {
	const responseArray = STORE[qnumber].answers;
	const newArray = [];
	for (i=0; i < responseArray.length; i++) {
		newArray.push(`<div><input type="radio" value=${i} name="options" id="option${i}" class="option" required /><label for="option${i}">${responseArray[i]}</label></div>`);
	}
	const responseHTML = newArray.join('');
	const questionHTML = `<form class="quiz-questions"><fieldset class="question-field"><legend class="question">${STORE[qnumber].question}</legend>${responseHTML}</fieldset><button role="button" type="button" class="btn submit-btn">Shoot</button></form>`;
	hideContents();
	$('.quiz-box').html(questionHTML);
}

//listen for "Shoot" submit button and compare user's response choice with correct response
//display either positive or negative feedback
//alert if no option is selected
//increment score if user choice is correct
function showResult() {
	$('.quiz-box').on('click', '.submit-btn', function(e) {
		e.preventDefault();
		let choice = Number($('input[name="options"]:checked').val());
		if (isNaN(choice)) {
			alert('Please pick an option!');
		} else if (choice === STORE[qnumber].correct) {
			hideContents();
			$('.quiz-box').html(`<h2>You scored!</h2><img class="response-image" src=${randomImage("images/quiz-app-eden.jpg", "images/quiz-app-lamps.jpg")} alt="Soccer player celebrating goal."><p>${STORE[qnumber].answers[STORE[qnumber].correct]}</p><button role="button" type="button" class="btn next-btn">Next</button>`);
			incrementScore();
		} else {
			hideContents();
			$('.quiz-box').html(`<h2>You missed!</h2><img class="response-image" src=${randomImage("images/quiz-app-sadmou.jpg", "images/quiz-app-lukaku.jpg")} alt="A disappointed soccer player."><p>Correct Answer: ${STORE[qnumber].answers[STORE[qnumber].correct]}</p><button role="button" type="button" class="btn next-btn">Next</button>`);
		}
	});
}

//functionality for "Next" button
//call final function when question number reaches 10
function nextButton() {
	$('.quiz-box').on('click', '.next-btn', function(e) {
		e.preventDefault();
		hideContents();
		incrementQNumber();
		if (qnumber < 10) {
			showNewQuestion();
		} else {
			showFinal();
		}
	});
}


//display final score and positive or negative feedback depending on score
function showFinal() {
	if (score > 5) {
		hideContents();
		$('.quiz-box').html(`<h2>All of those early Saturday mornings paid off!<br> You know your stuff.</h2><img class="final-image" src="images/quiz-app-chelsea-win.JPG" alt="Chelsea FC win the Premier League."><p>You scored ${score}/10</p><button role="button" type="button" class="btn end-btn">Rematch</button>`);
	} else {
		hideContents();
		$('.quiz-box').html(`<h2>That was a worse display than Liverpool's Premier League title efforts. Better luck next time!</h2><img class="final-image" src="images/quiz-app-liverpool-loss.jpg" alt="Liverpool after losing a soccer match."><p>You scored ${score}/10</p><button role="button" type="button" class="btn end-btn">Rematch</button>`);
	}
	$('.qnumber').text(10);
}

//functionality for "Rematch" button to restart the quiz
function tryAgain() {
	$('.quiz-box').on('click', '.end-btn', function() {
		hideContents();
		$('.quiz-box').html(`<h2 class="quiz-subtitle">How much do you know about the Premier League?</h2><img src="images/quiz-app-players.jpg"><button role="button" type="button" class="btn start-btn">Kickoff</button>`);
		resetCounters();
		startQuiz();
	});
}

function functionHandler() {
	startQuiz();
	showResult();
	nextButton();
	tryAgain();
}

$(functionHandler);