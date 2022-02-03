import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import mainContext from "./context/mainContext";
import UserAgePage from "./pages/UserAgePage";
import UserPage from "./pages/UserPage";
import {useState} from "react";
import CreatePage from "./pages/CreatePage";
import Toolbar from "./comps/Toolbar";

function App() {

    const [getUsers, setUsers] = useState([])

    return (
        <div className="App">
            <mainContext.Provider value={{getUsers, setUsers}}>
                <BrowserRouter>
                    <Toolbar/>
                    <Routes>
                        <Route path="/" element={<CreatePage/>}/>
                        <Route path="/user/:username" element={<UserPage/>}/>
                        <Route path="/userAge/:age" element={<UserAgePage/>}/>
                    </Routes>
                </BrowserRouter>
            </mainContext.Provider>
        </div>
    );
}

export default App;
