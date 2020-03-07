import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions'
class GoogleAuth extends React.Component{
    // state={isSignedIn:null};
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'683233447411-6m6sno6a6cvrvoqd4esshlmpv3ign17s.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth =window.gapi.auth2.getAuthInstance()
                // this.setState({isSignedIn:this.auth.isSignedIn.get()})
                // this.onAuthChange(isSignedIn)
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })

    }

    onAuthChange=(isSignedIn)=>{
        // this.setState({isSignedIn:this.auth.isSignedIn.get()})
console.log(isSignedIn)
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }
        else {
            this.props.signOut()
        }
    }
    onSignIn=()=>{
        this.auth.signIn();
    }
    onSignOut =()=>{
        this.auth.signOut()

    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null
        }
        else if(this.props.isSignedIn){
            return <div>
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon">Sign Out</i>
                </button>
            </div>
        }
        else {
            return <div>
                <button onClick={this.onSignIn}className="ui red google button">
                    <i className="google icon">Sign In</i>
                </button>
                 </div>
        }
    }
    render(){
        
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )

    }
}
const maptStateToProps=(state)=>{
   
    return {
        isSignedIn:state.auth.isSignedin
    }
}
export default connect(maptStateToProps,{signIn,signOut})(GoogleAuth)