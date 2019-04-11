import React from 'react';
import './QuestionBlock.css'

class AnswerKey extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            keyBlockClass: 'key_block'
        };
    }

    clickOnAnswer = () => {
        let key = this.props.answerIndex;
        if(this.props.selectFunc(key)){
            console.log("this is answer key and I am correct")
            this.setState({
                keyBlockClass: 'correct_block'
            });
        }
        else{
            this.setState({
                keyBlockClass: 'wrong_block'
            });
        }
    }
    render() {
        return (
            <div className={this.state.keyBlockClass} onClick={this.clickOnAnswer}>
                {this.props.answerText}
            </div>
        );
    }
}

export default AnswerKey;