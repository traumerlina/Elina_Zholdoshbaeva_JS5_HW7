import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUser, inputAction } from "../../store/PostSlice";

function PostPages(){
    const dispatch = useDispatch();

    const input = useSelector(state => state.postReducer.input);

    const getUserFunc = () => {
        dispatch(getUser(input))
    }

    const onChange = (e) => {
        dispatch(inputAction(e.target.value))
    }
    return(
        <div>
            <input type = "number" onChange={onChange}/>
            <button onClick={getUserFunc}>Info</button>

            <div>
                <h1>Information about user</h1>
                <h2>Name: {input.name}</h2>
                <h3>Username: {input.username}</h3>
                <h3>Email: {input.email}</h3>
                <h4>Phone: {input.phone}</h4>
                <h4>Website: {input.website}</h4>
            </div>
            
        </div>
        
    )
}

export default PostPages;