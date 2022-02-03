import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import mainContext from "../context/mainContext";

const UserAgePage = () => {

    const {getUsers} = useContext(mainContext)

    const {age} = useParams()

    const currentUser = getUsers.filter(x => x.age === age)

    return (
        <div>
            {currentUser.map((x, i) => <div key={i}>
                <h1>{x.name}</h1>
                <h1>{x.age}</h1>
                <img src={x.photo} alt=""/>
            </div>)}
        </div>
    );
};

export default UserAgePage;