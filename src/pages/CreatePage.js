import React, {useRef, useContext} from 'react';
import mainContext from "../context/mainContext";


const CreatePage = () => {

    const {getUsers, setUsers} = useContext(mainContext)

    const nameRef = useRef()
    const ageRef = useRef()
    const photoRef = useRef()

    function createUser() {
        const user = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            photo: photoRef.current.value
        }
        console.log(user)
        setUsers([...getUsers, user])
        console.log(getUsers)
    }

    return (
        <div className="d-flex column">
            <input type="text" ref={nameRef} placeholder="name"/>
            <input type="text" ref={ageRef} placeholder="age"/>
            <input type="text" ref={photoRef} placeholder="photo"/>
            <button onClick={createUser}>Create</button>
        </div>
    );
};

export default CreatePage;