import actionTypes from '../actions/actionTypes';
import {getAllCodeSevice} from "../../services/useService"



const initialState = {
    isLoadingGender:false,
    genders:[],
    roles:[],
    positions:[],
    users:[]
      
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START: 
        let copyState={...state}
        copyState.isLoadingGender=true
            return {
               ...copyState
            }  
            case actionTypes.FETCH_GENDER_SUCCESS: 
            state.genders=action.data
            state.isLoadingGender=false
            return {
                ...state,
            }  
            case actionTypes.FETCH_GENDER_FAIL: 
            state.isLoadingGender=false
            state.genders=[]

            return {
                ...state
            }  
            case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions=action.data

            return {
                ...state
            }  
            case actionTypes.FETCH_POSITION_FAIL: 
            state.positions=[]

            return {
                ...state
            }  
            case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles=action.data

            return {
                ...state
            }  
            case actionTypes.FETCH_ROLE_FAIL: 
            state.roles=[]

            return {
                ...state
            }  
            case actionTypes.FETCH_ALL_USERS_SUCCESS:
                state.users=action.users

            return {
                ...state
            }  
            case actionTypes.FETCH_ALL_USERS_FAIL:
                state.users=[]
    
                return {
                    ...state
                }  
            

            
        default:
            return state;
    }
}

export default adminReducer;