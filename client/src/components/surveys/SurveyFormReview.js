// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
//import {submitSurvey} from "../../actions";



const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return(
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>


        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
            className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                className="green white-text btn-flat right"
            >
                 Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state){
    return{ formValues: state.form.surveyForm.values };  // how we access the values of the form in the confirmform values

}
export default connect(mapStateToProps, actions) (withRouter(SurveyFormReview));
// when mapStateToProps is passed to the connect function
// whatever we return will show up as props to our component