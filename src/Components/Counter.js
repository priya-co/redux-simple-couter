import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount, resetCount} from '../actions/counterActions.js';
import '../styles/counter.css'


const Counter = () => {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <button className='btn' onClick={() => dispatch(addCount())}>+</button>
            <div className='count'>{count}</div>
            <button className='btn' onClick={() => dispatch(subCount())}>-</button>
            <button className='reset-button' onClick={() => dispatch(resetCount())}>Reset</button>
        </Fragment>
    )
}



export default Counter;
