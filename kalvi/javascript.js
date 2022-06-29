(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    
    const myQuestions = [
      {

        

        question: "1) Kalvi company offers which placement?",
        answers: {
          a: "Dream placement",
          b: "Super dream placement",
          c: "Day 1/2",
          d: "Marquee placement"
        },
        correctAnswer: "b"
      },
      {
        question: "2) The job profile CTC of Kalvi is?",
        answers: {
          a: "10LPA",
          b: "5LPA",
          c: "7LPA",
          d: "8LPA"
        },
        correctAnswer: "a"
      },
      
      {
        question: "3) Where is the Head quarter of Kalvi?",
        answers: {
          a: "Banglore",
          b: "Hydrabad",
          c: "Chennai",
          d: "Delhi"
        },
        correctAnswer: "a"
      },
      {
        question: "4) Kalvi was founded in which year",
        answers: {
          a: "2019",
          b: "2020",
          c: "2021",
          d: "2022"
        },
        correctAnswer: "c"
      },
      {
        question: "5) Kalvi recently partnered with which University?",
        answers: {
          a: "Parul University",
          b: "Ahmedabad University",
          c: "Sharda University",
          d: "Amity University"
        },
        correctAnswer: "a"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();