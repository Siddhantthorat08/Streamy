import React from "react";
import { connect } from 'react-redux';
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
import formValues from "redux-form/lib/formValues";

class StreamCreate extends React.Component{
    

    //onSubmit helper function will be called when from get submitted by onClick handler it receives the input values in the form field.
    
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }
    //handleSubmit function is  provided by the reduxForm through props and we pass our callback function innto handleSubmit.
    render() {
        // console.log(this.props)
        return( 
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream } )(StreamCreate);