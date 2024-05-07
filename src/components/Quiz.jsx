import { useCallback, useEffect, useState } from "react"
import quizQuestions from "../questions.js"
import Question from "./Question.jsx";


export default function Quiz() {

    const [answerPickedByUser, setPickedAnswerByUser] = useState([]);

    const activeQuestionIndex = answerPickedByUser.length;
    const questionIsOver = activeQuestionIndex === quizQuestions.length;

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        setPickedAnswerByUser(prevsAnswer => { 
            return [...prevsAnswer, selectedAnswer] 
        });
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer])

    if (questionIsOver) {
        return 
    }



    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelect={handleSelectedAnswer}
                onTimeout={handleSkipAnswer}
            />
        </div>
    )
}
