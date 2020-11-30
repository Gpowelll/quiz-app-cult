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
      imgSrc: './images/the-peoples-temple.jpg'
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
      imgSrc: './images/heavens-gate.jpeg'
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
      imgSrc: './images/rajneesh.jpg'
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
      imgSrc: './images/aum-shinrikyo-.jpg'
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
      imgSrc: './images/manson-family.jpg'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
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

function generateStartPage() {
  return `
    <div class='mainPage'>
    <h2>Cult Quiz</h2>
    <p>This is a quiz about some of the most notorious cult's in American history.</p>
    <button type='submit' id='startquiz'>Start Quiz</button>
    </form>
    </div>`;
}


function generateQuestionPage() {

}

function generateEndPage() {

}

function generateIncorrectPage() {

}







/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderPage(isCorrect) {
  let html = ''


}



/********** EVENT HANDLER FUNCTIONS **********/

//These functions handle events (submit, click, etc)

function handleBeginClick() {

}

function handleSubmitQuestion() {

}

function handleNextQuestion() {

}

function handleTryAgain() {

}




function main() {
  renderPage();
  handleSubmitQuestion();
  handleBeginClick();
  handleNextQuestion();
  handleTryAgain();
}


$(main)