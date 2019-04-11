import React from 'react';
import AskingBlock from "../QuestionBlock/AskingBlock";
import LinkImg from '../WebFrame/link.png'
import '../WebFrame/WebFrame.css';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

const myQuestions = [
    {
        "question": "What is your favorite Linux brand?",
        "keys": [
            "Kali",
            "CentOS",
            "Ubuntu"
        ]
    },
    {
        "question": "What is your favorite Linux command?",
        "keys": [
            "pwd",
            "cd",
            "mkdir"
        ]
    },
    {
        "question": "What is your favorite data structure?",
        "keys": [
            "Hash table",
            "Stack",
            "Queue"
        ]
    },
    {
        "question": "What is your favorite database system?",
        "keys": [
            "MySQL",
            "postgreSQL",
            "MongoDB",
            "Cassandra"
        ]
    },
    {
        "question": "What is your favorite imperative programming language?",
        "keys": [
            "Java",
            "Javascript",
            "C++"
        ]
    },
    {
        "question": "What is your favorite non imperative programming language?",
        "keys": [
            "Haskell",
            "Prolog",
            "Lisp"
        ]
    },
    {
        "question": "What is your most admired scientist?",
        "keys": [
            "Ada Lovelace",
            "Alan Turing",
            "John von Neumann"
        ]
    },
    {
        "question": "What is your favorite text editor?",
        "keys": [
            "Sublime",
            "XCode",
            "JetBrain Series"
        ]
    },
    {
        "question": "What is your favorite entertainment website?",
        "keys": [
            "Stack Overflow",
            "Github",
            "Reddit"
        ]
    },
]

class AskingBlocks extends React.Component {
    constructor(props) {
        super(props);
        let savedQuestionnaire = []
        for(let i = 0; i < myQuestions.length; i++){
            savedQuestionnaire.push({});
        }
        this.state = {
            askPage: true,
            savedQuestionnaire: savedQuestionnaire
        };
    }
    jumpToAns = () => {
        this.props.updateQuestionnaire(this.state.savedQuestionnaire)
        this.setState({
            askPage: false
        })
    }
    updateAnswers = (index, json) => {
        let questionnaire = this.state.savedQuestionnaire;
        questionnaire[index] = json;
        this.setState({
            savedQuestionnaire: questionnaire
        });
    }
    render() {
        let questions = myQuestions;
        let blocks = []
        for(let i = 0; i < questions.length; i++) {
            let questionTitle = "Question " + i + ': ' + questions[i].question
            blocks.push(
                <AskingBlock
                    key={i}
                    questionIndex={i}
                    question={questionTitle}
                    keys={questions[i].keys}
                    updateAnswers={this.updateAnswers}
                />);
        }
        return (
            <div>
                <div>{blocks}</div>

                    <div className='custom_button' onClick={this.jumpToAns}>
                        Generate my link
                    </div>
                    {this.state.askPage ? null:<Redirect to='/ans' hellp='itsme'/>}

                <div className='link_ico' >
                    <img src={LinkImg} style={{height:'70px', width:'auto'}}/>
                </div>
            </div>
        );
    }
}

export default AskingBlocks;