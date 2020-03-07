// import React from 'react';
// import {reduxForm,Field} from 'redux-form'
// import {connect} from 'react-redux';
// import {createStream} from '../../actions'
// class StreamCreate extends React.Component{
//     renderError({error,touched}){
//     if(touched && error){
//         return (
//             <div className="ui error message">
//                 <div className="header">{error}</div>

//             </div>
//         )
//     }
//     }
//     renderInput=({input,label,meta})=>{
//         // console.log(meta)
//         const className=`field ${meta.error && meta.touched?'error' :''}`

//         // console.log(formProps)
//         // return <input onChange={formProps.input.onChange} 
//         // value={formProps.input.value}></input>
//         // return<input {...formProps.input}></input>
//         return (
//             <div className={className}>
//                 <label>{label}</label>
//                 <input {...input} autoComplete="off"></input>
//                 <div>{this.renderError(meta)}</div>
//             </div>
//         )
//     }
//     onSubmit=(formValues)=>{
//     this.props.createStream(formValues)
//     }
//     render(){
//         // console.log(this.props)
//         return(
//             <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                
//                 <Field name="title" component={this.renderInput} label="Enter Title"></Field>
//                 <Field name="description" component={this.renderInput} label="Enter Description"></Field>
//             <button className="ui button primary">Submit</button>
//             </form>
//         )
//     }
// }
// const validate=(formValues)=>{
    
//     const errors={}
//     if(!formValues.title){
// // only ran if user enter value 
// errors.title='You must enter a title'
//     }
//     if(!formValues.description){
//         errors.description = 'You must enter a description'
//     }
//     return errors

// }
// const fromWrapped =reduxForm({
//     form:'StreamCreate',
//     validate
// })(StreamCreate)
// export default connect(null,{createStream})(fromWrapped)
import React from 'react';
import {reduxForm,Field} from 'redux-form'
import {connect} from 'react-redux';
import {createStream} from '../../actions'
import StreamForm  from './StreamForm'
class StreamCreate extends React.Component{
 
    onSubmit=(formValues)=>{
    this.props.createStream(formValues)
    }
    render(){
        // console.log(this.props)
        return(
           <div>Create a Stream
               <StreamForm onSubmit = {this.onSubmit}></StreamForm>
           </div>
        )
    }
}


export default connect(null,{createStream})(StreamCreate)