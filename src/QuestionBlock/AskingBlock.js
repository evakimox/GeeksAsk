import React from 'react';
import './QuestionBlock.css'
import AskingKey from './AskingKey';


class AskingBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correctAns: -1
        };
    }

    answerSelected = (ans) => {
        //console.log("Question " + this.props.questionIndex + " answer is: "+ ans);
        this.setState({
            correctAns: parseInt(ans),
        })
        let originalQuestion = JSON.parse(JSON.stringify(this.props));
        originalQuestion.correct = parseInt(ans);
        //console.log(originalQuestion);
        this.props.updateAnswers(this.props.questionIndex, originalQuestion)
    }

    render() {
        let answerList = []
        let ansListFromJson = this.props.keys
        for(let i = 0; i < ansListFromJson.length; i++){
            let answerText = ansListFromJson[i]
            if(i === this.state.correctAns) {
                answerList.push(
                    <AskingKey
                        key={i}
                        answerIndex={i}
                        answerText={answerText}
                        selectFunc={this.answerSelected}
                        isCorrectAns={true}
                    />
                );
            }
            else{
                answerList.push(
                    <AskingKey
                        key={i}
                        answerIndex={i}
                        answerText={answerText}
                        selectFunc={this.answerSelected}
                        isCorrectAns={false}
                    />
                );
            }
        }
        return (
            <div className="question_block">
                <b>{this.props.question}</b>
                <div style={{paddingTop:10}}>
                    {answerList}
                </div>
            </div>
        );
    }
}

export default AskingBlock;