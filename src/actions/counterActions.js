export const actionsTypes = {
    INCREMENT_COUNTER : 'INC',
    DECREMENT_COUNTER : 'DEC',
    RESET_COUNTER : 'RESET'
}

 export const addCount = () => {
        return {
            type:actionsTypes.INCREMENT_COUNTER
        }
     }


    export const subCount = () => {
        return {
            type:actionsTypes.DECREMENT_COUNTER
        }
    }

    
    export const resetCount = () => {
        return {
            type:actionsTypes.RESET_COUNTER
        }
    }