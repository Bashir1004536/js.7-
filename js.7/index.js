// Arrays for questions and correct answers
const questions = [
    "What is the capital of Pakistan?",
    "What is 2 + 2?",
    "What is the largest planet in our solar system?"
  ];
  const correctAnswers = ["Islamabad", "4", "Jupiter"];
  
  // Variables to keep track of the score
  let score = 0;
  let totalQuestions = questions.length;
  
  // Loop through the questions and capture user's answers
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]); // Get user answer
  
    // Compare the user's answer with the correct one
    if (userAnswer.trim().toLowerCase() === correctAnswers[i].toLowerCase()) {
      score++; // Increment score for a correct answer
      alert("Correct!");
    } else {
      alert("Wrong! The correct answer is: " + correctAnswers[i]);
    }
  }
  
  // Provide feedback based on the score
  if (score === totalQuestions) {
    alert("Excellent! You scored " + score + "/" + totalQuestions + ". Grade: A");
  } else if (score === totalQuestions - 1) {
    alert("Good job! You scored " + score + "/" + totalQuestions + ". Grade: B");
  } else if (score >= totalQuestions / 2) {
    alert("You passed! You scored " + score + "/" + totalQuestions + ". Grade: C");
  } else {
    alert("Better luck next time. You scored " + score + "/" + totalQuestions + ". Grade: F");
  }
  