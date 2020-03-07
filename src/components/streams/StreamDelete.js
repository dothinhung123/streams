import React from 'react';
import Model from '../Model'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream,deleteStream} from '../../actions/index'
class StreamDelete extends React.Component{
componentDidMount(){

    this.props.fetchStream(this.props.match.params.id)
}
 renderActions(){
    
     return(
        <React.Fragment>
        <button onClick ={()=>this.props.deleteStream(this.props.match.params.id)}className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
  </React.Fragment>
    

     )
 }
 
    render(){
        
        return(
            <div>
                StreamDelete
                <Model actions ={this.renderActions()}
                onDismiss={()=>history.push('/')}></Model>
            </div>
        )
    }
}
const mapStateToProps =(state,ownProps)=>{
    return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete)