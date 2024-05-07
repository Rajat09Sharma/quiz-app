import React from 'react';
import quizAppLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
        <img src={quizAppLogo} alt="Quiz app logo" />
        <h1>ReactQuiz</h1>
    </header>
  )
}
