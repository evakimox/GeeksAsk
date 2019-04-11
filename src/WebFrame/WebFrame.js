import React from 'react';
import './WebFrame.css';
import '../QuestionBlock/AskingBlock';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AskingBlocks from '../AskingBlocks/AskingBlocks';
import AnswerBlocks from '../AnswerBlocks/AnswerBlocks';


class WebFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedQuestionnaire: []
        };
    }

    componentDidMount() {
        document.title = "Geeks Ask";
    }

    updateQuestionnaire = (data) => {
        this.setState({
            savedQuestionnaire: data
        })
    }

    asking = () => {
        return (
            <div>
                <AskingBlocks updateQuestionnaire={this.updateQuestionnaire}/>
            </div>
        );
    }

    answering = () => {
        console.log("answering gets called");
        console.log(this.state.savedQuestionnaire)
        return (
            <div>
                <AnswerBlocks content={this.state.savedQuestionnaire}/>
            </div>
        );
    }

    render() {
        return (
            <div name='layout'>
                <div className='header_bar'>
                    Geeks ask
                </div>
                <div className='content_area'>
                    <Router>
                        <div>
                            <Route path='/' exact component={this.asking}/>
                            <Route path='/ask' exact component={this.asking}/>
                            <Route path='/ans/:questionnaireId' exact component={this.answering}/>
                            <Route path='/ans' exact component={this.answering} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default WebFrame;