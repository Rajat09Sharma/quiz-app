import { useRef } from "react";


export default function Answer({onSelect,answers,selectedAnswer,answerState}) {
    const shuffledAnswers=useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);    
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map(answer => {
                let isSelectedAnswer = answer === selectedAnswer;
                let cssClass = "";

                if (answerState === "answered" && isSelectedAnswer) {
                    cssClass = "selected";
                }

                if ((answerState === "correct" || answerState === "wrong") && isSelectedAnswer) {
                    cssClass = answerState;
                }

                return (<li className="answer" key={answer}>
                    <button className={cssClass} onClick={() => onSelect(answer)} disabled={answerState !==""}>{answer}</button>
                </li>)
            }

            )}
        </ul>
    )
}
