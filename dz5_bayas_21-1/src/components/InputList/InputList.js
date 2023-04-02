import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addInput, clearInp, update} from "../../redux/actions/actions";
import {Button, TextField} from "@mui/material";

const InputList = () => {
    const dispatch = useDispatch()
    const {input, list} = useSelector(state => state.inputReducer)

    const addInp = () => {
        dispatch(addInput(input))
    }

    const handleChange = ({target}) => {
        dispatch(update(target.value))
    }

    const clearInput = () => {
        dispatch(clearInp())
    }


    return (
        <div>
            <TextField value={input} onChange={handleChange}/>
            <hr/>
            <br/>
            <Button variant='contained' onClick={addInp}>Add</Button>
            <Button variant='contained' onClick={clearInput}>Clear</Button>
            <hr/>
            <ul>
                {
                    list.map((i,k) => <li key={k}>{i}</li>)
                }
            </ul>
        </div>
    );
};

export default InputList;