import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navigation/Navbar";
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Messages}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
