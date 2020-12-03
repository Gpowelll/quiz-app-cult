'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required

  questions: [
    {
      question: 'What cult drank a cyanide-laced beverage in 1978 in a mass suicide after being visited by a U.S congressmen?',
      answers: [
        'Children of God',
        'The People\'s Temple',
        'The Drum People of Doom',
        'Hollywood United'
      ],
      correctAnswer: 'The People\'s Temple',
      imgName: 'the-peoples-temple.jpg'
    },

    {
      question: 'Which cults ideology was based on UFO\'s and the \'Hale-Bopp\' comet that ended in tragedy ?',
      answers: [
        'NASA',
        'Children of God',
        'Russian Doomsday Cult',
        'Heaven\'s Gate'
      ],
      correctAnswer: 'Heaven\'s Gate',
      imgName: 'heavens-gate.jpeg'
    },

    {
      question: 'What cult\'s garb was maroon and often robes?',
      answers: [
        'Children of God',
        'The Manson Family',
        'The Rajneesh Movement',
        'Heaven\'s gate'
      ],
      correctAnswer: 'The Rajneesh Movement',
      imgName: 'rajneesh.jpg'
    },

    {
      question: 'What cult is known for their terrorist attack on a popular subway system using sarin gas?',
      answers: [
        'The Rajneesh',
        'Aum Shinrikyo',
        'Heaven\'s gate',
        'The Manson Family'
      ],
      correctAnswer: 'Aum Shinrikyo',
      imgName: 'aum-shinrikyo.jpg'
    },

    {
      question: 'Which cult was known for their ideology of The Helter Skelter scenario which would result in a race war?',
      answers: [
        'Aum Shinrikyo',
        'Russian Doomsday Cult',
        'Heaven\'s Gate',
        'The Manson Family'
      ],
      correctAnswer: 'The Manson Family',
      imgName: 'manson-family.jpg'
    }
  ],
  feedbackGiven: true,
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  currentAnswer: ''
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function generateMainPage() {
  return `
    <div class='mainPage'>
    <img src="./images/clouds.jpg" alt="clouds">
    <h2>Cult Quiz</h2>
    <p>This is a quiz about some of the most notorious cult's in American history.</p>
    <button type='submit' id='startQuiz'>Start Quiz</button>
    </form>
    </div>`;
}


function generateQuestionPage() {
  const question = store.questions[store.questionNumber];
  const answers = question.answers.map(function (answer, index) {
    return `<input type="radio" id="answer${index}" name="answer" value="${answer}" required>
    <label for="answer${index}">${answer}</label></br>`;
  });
  return `
  <div class="mainPage">
    <form id="question">
      <h2>${question.question}</h2>
      ${answers.join('')}
      <button type="form">Submit Answer</button>
    </form>

    <div class="quiz-info">
      <p>${store.questionNumber + 1}/5</p>
      <p>${store.score}/${store.questionNumber} Correct</p>
    </div>
  `;
}

function generateFeedbackPage() {
  let feedback = '';
  if(store.currentAnswer===store.questions[store.questionNumber].correctAnswer) {
    feedback = 'That is correct!';
  } else {
    feedback = 'No, sorry you are incorrect.';
  }
  return`
  <div class="mainPage">
      <h2>Feedback Question ${store.questionNumber+1}</h2>
      <img src="images/${store.questions[store.questionNumber].imgName}" alt="${store.questions[store.questionNumber].correctAnswer}">
      <p>The correct Answer was: ${store.questions[store.questionNumber].correctAnswer}.</p>
      ${feedback}
      <p>You have gotten ${store.score}/${store.questionNumber+1} questions right so far.</p>
      <button type='submit' id="continue">Continue</button>
      </form>
    </div>
    `;
}

function generateFinalPage() {
  let feedback = '';
  if (store.currentAnswer === store.questions[store.questionNumber].correctAnswer) {
    feedback = 'That is correct!';
  } else {
    feedback = 'No, sorry you are incorrect.';
  }
  return`
  <div class="mainPage">
      <h2>Feedback Question ${store.questionNumber+1}</h2>
      <img src="images/${store.questions[store.questionNumber].imgName}" alt="${store.questions[store.questionNumber].correctAnswer}">
      <p> The correct answer was: ${store.questions[store.questionNumber].correctAnswer}</p>
      ${feedback}
      <p>You have completed my quiz!</p>
      <p>You ended up getting ${store.score}/${store.questionNumber+1} questions right.</p>
      <button type='submit' id="try-again">Try Again</button>
      </form>
    </div>
    `;
}


// EVENT HANDLER FUNCTIONS 

//These functions handle events (submit, click, etc)

function handleStartButton() {
  $('main').on('click','#startQuiz', function(e) {
    store.quizStarted = true;
    renderPage();
  });
}

function handleTryAgainButton() {
  $('main').on('click','#try-again', function (e) {
    store.currentAnswer = '';
    store.score = 0;
    store.questionNumber = 0;
    store.feedbackGiven = true;
    store.quizStarted = false;
    renderPage();
  });
}

function handleHomeButton() {
  $('main').on('click','#home', function(e) {
    store.currentAnswer = '';
    store.score = 0;
    store.questionNumber = 0;
    store.feedbackGiven = true;
    store.quizStarted = false;
    renderPage();
  });

}

function handleSubmitButton() {
  $('main').on('submit','#question', function(e) {
    e.preventDefault();
    // eslint-disable-next-line quotes
    store.currentAnswer = $(`input[name='answer']:checked`).val();
    store.feedbackGiven = false;
    if(store.currentAnswer===store.questions[store.questionNumber].correctAnswer) {
      store.score++;
    }
    renderPage();
  });
}

function handleContinueButton(){
  $('main').on('click','#continue', function(e){
    store.feedbackGiven = true;
    store.currentAnswer = '';
    store.questionNumber++;
    renderPage();
  });
}


//RENDER FUNCTION(S)

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderPage() {
  let html = '';
  if (store.quizStarted === false) {
    html = generateMainPage();
  } else if (store.feedbackGiven === true) {
    html = generateQuestionPage();
  } else if (store.feedbackGiven === false && store.questionNumber === store.questions.length-1) {
    html = generateFinalPage();
  } else{
    html = generateFeedbackPage();
  }
  $('main').html(html);
}


function main() {
  renderPage();
  handleStartButton();
  handleSubmitButton();
  handleContinueButton();
  handleTryAgainButton();
  handleHomeButton();
  
}
// eslint-disable-next-line no-undef
$(main);