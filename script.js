// Define questions and answers
const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: " Mars", correct:  true},
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "Whatis the square root of 144?",
      answers: [
        { text: "12", correct: true },
        { text: "11", correct: false },
        { text: "14", correct: false },
        { text: "2", correct: false }
      ]
    },
    {
      question: "Which is the longest river in the world?",
      answers: [
        { text: "Kaveri", correct: false },
        { text: "Yamuna", correct: false },
        { text: "Amazon River", correct: false },
        { text: "Nile River", correct: true }
      ]
    },
    {
       question: "Which company created the Android operating system?",
       answers: [
          { text: "Apple", correct: false },
          { text: "Google", correct: true },
          { text: "Microsoft", correct: false },
          { text: "Samsung", correct: false }
       ]   
    },
    {
       question: "What is the captial of italy?",
       answers: [
          { text: "Berlin", correct: false },
          { text: "Rome", correct: true },
          { text: "Lisbon", correct: false },
          { text: "Madrid", correct: false }
       ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Select DOM elements
  const questionElement = document.getElementById('question');
  const answersContainer = document.getElementById('answers');
  const nextButton = document.getElementById('next-btn');
  const scoreElement = document.getElementById('score');
  
  // Start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next';
    showQuestion();
  }
  
  // Display the current question
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer.text;
      answersContainer.appendChild(button);
  
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      
      button.addEventListener('click', selectAnswer);
    });
  }
  
  // Reset buttons for the next question
  function resetState() {
    nextButton.style.display = 'none';
    while (answersContainer.firstChild) {
      answersContainer.removeChild(answersContainer.firstChild);
    }
  }
  
  // Handle answer selection
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
  
    if (isCorrect) {
      selectedButton.classList.add('correct');
      score++;
    } else {
      selectedButton.classList.add('wrong');
    }
  
    Array.from(answersContainer.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct) {
        button.classList.add('correct');
      }
    });
  
    nextButton.style.display = 'block';
    scoreElement.textContent = `Score: ${score}`;
  }
  
  // Move to the next question
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      alert(`Quiz Over! Your score is ${score}/${questions.length}`);
      startQuiz();
    }
  });
  
  // Initialize the quiz
  startQuiz();
