import React from 'react';
import './QuestionBlock.css'

class AskingKey extends React.Component {
    clickOnAnswer = () => {
        let key = this.props.answerIndex;
        this.props.selectFunc(key);
    }
    render() {
        let keyStyle = 'key_block'
        if(this.props.isCorrectAns){
            keyStyle = 'correct_block'
        }
        return (
            <div className={keyStyle} onClick={this.clickOnAnswer}>
                {this.props.answerText}
            </div>
        );
    }
}

export default AskingKey;