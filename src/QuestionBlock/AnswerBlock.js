import React from 'react';
import './QuestionBlock.css'
import AnswerKey from "./AnswerKey";

class AnswerBlock extends React.Component {
    answerSelected = (ans) => {
        console.log("Question " + this.props.questionIndex + " I choose: "+ ans);
        let diff = parseInt(ans) - parseInt(this.props.correctAns)
        if(diff <= 0.5 && diff >= -0.5){
            return true;
        }
        return false;
    }
    render() {
        let answerList = []
        let ansListFromJson = this.props.keys
        for(let i = 0; i < ansListFromJson.length; i++){
            let answerText = ansListFromJson[i]
            answerList.push(
                <AnswerKey
                    key={i}
                    answerIndex={i}
                    answerText={answerText}
                    selectFunc = {this.answerSelected}
                />
            );
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

export default AnswerBlock;