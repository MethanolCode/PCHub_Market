import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Button, Spinner} from "react-bootstrap";
import Footer from './components/Footer';
import "./style/style.css";
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './chatBot/ActionProvider';
import MessageParser from './chatBot/MessageParser';
import config from './chatBot/config';
const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    let isVisible = true;
    let isVisible_btn = true;

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    const setBot = () => {
        if(isVisible){
            document.getElementById('botik').remove();
        } else{
            let str = '<Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} id="botik" />'
            document.getElementById('bot_id').insertAdjacentHTML( 'beforeend', str )
        }
        isVisible = !isVisible;
        console.log(isVisible);
    }

    const scrollup = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
            {isVisible &&
            <div className='bot' id='bot_id'>
                <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} id='botik'/>
            </div>
            }
            {isVisible_btn && <Button className='bot_visible' onClick={setBot}>X</Button>}
            <Button className='up' onClick={scrollup}>^</Button>
            <Footer />
        </BrowserRouter>
    );
});

export default App;
