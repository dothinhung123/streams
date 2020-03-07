import React from 'react';
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions/index'
import { Link } from 'react-router-dom';
import streams from '../../api/streams';

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams()
    }
    renderAdmin(stream){
   

        if(stream.userId ===this.props.currentUserId){
            return <div className="right floadted content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                <Link to ={`/streams/delete/${stream.id}`}>Delete</Link>

            </div>
        }

    }
    renderCreate(){
        console.log(this.props +'this is form stream lsi')
        if(this.props.currentUserId){
            return (
                <div style={{textAlign:"right"}}>
                    <Link to="/streams/new" className="ui button blue primary">Create Stream</Link>
                </div>
            )
        }

    }
    renderList(){
    

        return this.props.streams.map((stream)=>{
            return (
                <div className="item" key ={stream.id}>
                <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    <div>{this.renderAdmin(stream)}</div>

                    </div>

                </div>
            )
        })
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    
    console.log(Object.values(state.streams) +'wh')
    return {streams:Object.values(state.streams),
    currentUserId:state.auth.userId,isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{fetchStreams})(StreamList)
