import React from "react";
import { Field, reduxForm } from 'redux-form';
import formValues from "redux-form/lib/formValues";
class StreamForm extends React.Component{
    
    renderInput = (formProps) => {

            console.log(formProps);
            // console.log({input, label, meta});
            //valid new syntax equivalent ot the below return statement take the input object and pass it as a props to the input element.
            // return <input {...formProps.input } />
        return(
            <div className="field">
                <label>{formProps.label}</label>
                <input onChange={formProps.input.onChange} value={formProps.input.value} />
                {this.renderError(formProps.meta)}
                {/* <div>{formProps.meta.error}</div> */}
            </div>
        );
    }

    renderError({ touched, error }) {
        if(touched && error)
        {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }
    //onSubmit helper function will be called when from get submitted by onClick handler it receives the input values in the form field.
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    //handleSubmit function is  provided by the reduxForm through props and we pass our callback function innto handleSubmit.
    render() {
        // console.log(this.props)
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name = "title" component = {this.renderInput} label = "Enter the title"/>
                <Field name = "description" component = {this.renderInput} label = "Enter the description" />
                <button className="ui form submit">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title)
    {
        errors.title = "Please enter the title"
    }
    if(!formValues.description)
    {
        errors.description = "Please enter the description"
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);