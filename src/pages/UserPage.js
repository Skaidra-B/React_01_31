import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import mainContext from "../context/mainContext";

const UserPage = () => {

    const {getUsers} = useContext(mainContext)

    const {username} = useParams()

    const currentUser = getUsers.filter(x => x.name === username)

    return (
        <div>
            {currentUser.map((x, i) => <div key={i}>
                <h1>{x.name}</h1>
                <img src={x.photo} alt=""/>
            </div>)}
        </div>
    );
};

export default UserPage;