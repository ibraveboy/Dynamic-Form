import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionForm from '../QuestionForm/QuestionForm'
import { getQuestions } from '../../../../Helpers/helperMethods'
import shortid from 'shortid';

class QuestionsList extends Component {
    render() {
        console.log(this.props);
        
        let questions = getQuestions()
        let questionsList = this.props.questions.map((question,index) => {
            return <QuestionForm
                key={shortid.generate()}
                name={question.name}
                index={index}
                answer={question.answer}
                question={questions[question.name]}
                errors={this.props.errors}
                    />
        })
        return (
            <ol>
                {questionsList}
            </ol>
        )
    }
}

const mapStateToProps = (state) => {
    return state.addProductReducer
}

export default connect(mapStateToProps,null)(QuestionsList)