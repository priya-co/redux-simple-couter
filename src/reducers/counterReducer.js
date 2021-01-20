import { actionsTypes} from '../actions/counterActions';

const initialState = {
    count:0
}

const counterReducer = (state = initialState , action) => {
   switch(action.type){
        case actionsTypes.INCREMENT_COUNTER : 
            return {
                    count : state.count +1,
            }
        case actionsTypes.DECREMENT_COUNTER : 
            return {
                            count : state.count -1,
                    }
        case actionsTypes.RESET_COUNTER : 
            return {
                    count : 0,
            }

       default: 
           return state
       
   } 
}

export default counterReducer;