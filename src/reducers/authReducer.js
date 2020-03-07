import {SIGN_IN, SIGN_OUT} from '../actions/types'
const INITIAL_STATE={
    isSignedin:null,
    userId:null
}
export default(state=INITIAL_STATE,action)=>{
switch (action.type){
    case SIGN_IN: return {...state,isSignedin:true,userId:action.payload}
    case SIGN_OUT:return {...state,isSignedin:false,userId:null}
    default: return state
}

}