import React from 'react';
import AnswerBlock from "../QuestionBlock/AnswerBlock";

const myQuestions = [
    {
        "question": "What is your favorite Linux brand?",
        "keys": [
            "Kali",
            "CentOS",
            "Ubuntu"
        ],
        "correct":0
    },
    {
        "question": "What is your favorite Linux command?",
        "keys": [
            "pwd",
            "cd",
            "mkdir"
        ],
        "correct":0
    },
    {
        "question": "What is your favorite data structure?",
        "keys": [
            "Hash table",
            "Stack",
            "Queue"
        ],
        "correct":0
    },
    {
        "question": "What is your favorite database system?",
        "keys": [
            "MySQL",
            "postgreSQL",
            "MongoDB",
            "Cassandra"
        ],
        "correct":0
    },
    {
        "question": "What is your favorite imperative programming language?",
        "keys": [
            "Java",
            "Javascript",
            "C++"
        ],
        "correct":0
    },
    {
        "question": "What is your favorite non imperative programming language?",
        "keys": [
            "Haskell",
            "Prolog",
            "Lisp"
        ],
        "correct":0
    },
    {
        "question": "What is your most admired scientist?",
        "keys": [
            "Ada Lovelace",
            "Alan Turing",
            "John von Neumann"
        ],
        "correct":0
    },
    {
        "question": "What is your favorite text editor?",
        "keys": [
            "Sublime",
            "XCode",
            "JetBrain Series"
        ],
        "correct":0
    },
    {
        "question": "What is your favorite entertainment website?",
        "keys": [
            "Stack Overflow",
            "Github",
            "Reddit"
        ],
        "correct":0
    },
]

class AnswerBlocks extends React.Component {

    render() {
        console.log(this.props);
        let questions = this.props.content;

        let blocks = []
        for(let i = 0; i < questions.length; i++) {
            let questionTitle = "Question " + i + ': ' + questions[i].question
            blocks.push(
                <AnswerBlock
                    key={i}
                    questionIndex={i}
                    question={questionTitle}
                    keys={questions[i].keys}
                    correctAns={questions[i].correct}
                />);
        }
        return (
            <div>{blocks}</div>
        );
    }
}

export default AnswerBlocks;