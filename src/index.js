import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import quizService from "./quizService";
import "./assets/style.css";
import QuestionBox from './components/QuestionBox';
import Result from './components/Result'


class QuizBee extends Component{
    state ={
        questionBank:[],
        score:0,
        response:0
    };
    getQuestion =()=>{
        quizService().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    };
    computerAnswer = (answer,correctAnswer)=>{
        if(answer ===correctAnswer){
            this.setState({
                score:this.state.score+1
            });
        }
        this.setState({
            response:this.state.response <5 ? this.state.response+1:5
        });
    };

    playAgain=()=>{
        this.getQuestion();
        this.setState({
            score:0,
            response:0
        });

    }
    componentDidMount(){
        this.getQuestion();
    }
    render(){
        return (
            <div className="container">
                <div className="title">Shout My Code</div>
            {this.state.questionBank.length>0 &&
            this.state.response <5 
            && this.state.questionBank.map(
                ({question,answers,correct,questioID})=>(
                    <QuestionBox 
                    question={question} 
                    options={answers}
                    key={questioID}
                    selected={answer=> this.computerAnswer(answer,correct)}
                    />
                ))}
                {this.state.response === 5 ?(<Result score={this.state.score} playAgain={this.playAgain} />):null}
            </div>
        );
    }
}

ReactDOM.render(<QuizBee />,document.getElementById("root"));