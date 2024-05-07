import QuestionTimer from "./QuestionTimer"
import quizQuestions from "../questions.js"
import Answer from "./Answer"
import { useState } from "react"

export default function Question({onSelect,onTimeout,index}) {
    const[answer,setAnswer]=useState({
        selectedAnswer:"",
        isCorrect:null,
    });

    let timer=10000;
    if(answer.selectedAnswer){
        timer=1000;
    }
    if(answer.isCorrect!==null){
        timer=2000;
    }

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null  
        });
        
        setTimeout(() => {
            setAnswer({
                selectedAnswer:answer,
                isCorrect: quizQuestions[index].answers[0]===answer
            });
            setTimeout(()=>{
                onSelect(answer);
            },2000);
        },1000);
    }

    let answerState="";
    if(answer.selectedAnswer && answer.isCorrect!==null){
        answerState=answer.isCorrect ? "correct" : "wrong";
    }else if(answer.selectedAnswer){
        answerState="answered";
    }

    return (
        <div id="question">
            <QuestionTimer key={timer} timeOut={timer} onTimeout={answer.selectedAnswer==="" ? onTimeout : null} mode={answerState} />
            <h2>{quizQuestions[index].text}</h2>
            <Answer
                answers={quizQuestions[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}
