import React from 'react';
import {reduxForm,Field} from 'redux-form'

class StreamForm extends React.Component{
    renderError({error,touched}){
    if(touched && error){
        return (
            <div className="ui error message">
                <div className="header">{error}</div>

            </div>
        )
    }
    }
    renderInput=({input,label,meta})=>{
        // console.log(meta)
        const className=`field ${meta.error && meta.touched?'error' :''}`

        // console.log(formProps)
        // return <input onChange={formProps.input.onChange} 
        // value={formProps.input.value}></input>
        // return<input {...formProps.input}></input>
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"></input>
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }
    onSubmit=(formValues)=>{
    this.props.onSubmit(formValues)
    }
    render(){
        // console.log(this.props)
        return(
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                
                <Field name="title" component={this.renderInput} label="Enter Title"></Field>
                <Field name="description" component={this.renderInput} label="Enter Description"></Field>
            <button className="ui button primary">Submit</button>
            </form>
        )
    }
}
const validate=(formValues)=>{
    
    const errors={}
    if(!formValues.title){
// only ran if user enter value 
errors.title='You must enter a title'
    }
    if(!formValues.description){
        errors.description = 'You must enter a description'
    }
    return errors

}
export default reduxForm({
    form:'StreamForm',
    validate
})(StreamForm)
