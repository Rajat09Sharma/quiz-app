
import quizCompletedImg from "../assets/quiz-complete.png"

export default function Summary() {
    return (
        <div id="summary">
            <img src={quizCompletedImg} alt="A trophy image" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number"></span>
                    <span className="text"></span>
                </p>
                <p>
                    <span className="number"></span>
                    <span className="text"></span>
                </p>
                <p>
                    <span className="number"></span>
                    <span className="text"></span>
                </p>
            </div>
            <ol>
                <li>
                    <h3>qnum</h3>
                    <p className="question"></p>
                    <p className="user-answer"></p>
                </li>
            </ol>
        </div>
    )
}
