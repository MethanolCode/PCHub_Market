import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, PCFAQ_ROUTE, SHOP_ROUTE, BASKET_ROUTE, AFISH_ROUTE} from "../utils/consts";
import { BiSolidShoppingBag } from "react-icons/bi";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom';
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    let body = document.querySelector('body');

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    const themeChanger = () => {
        let theme_btn = document.getElementById('theme');
        if(theme_btn.textContent == "Темная тема"){
            body.classList.remove('light');
            body.classList.add('dark');
            theme_btn.textContent = "Светлая тема";
        } 
        else if(theme_btn.textContent == "Светлая тема"){
            body.classList.remove('dark');
            body.classList.add('light');
            theme_btn.textContent = "Темная тема";
        }
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Главная - PCHub</NavLink>
                <Button variant={"outline-light"} onClick={() => history.push(ABOUT_ROUTE)} className="ml-2">О нас</Button>
                <Button variant={"outline-light"} onClick={() => history.push(AFISH_ROUTE)} className="ml-2">Акции</Button>
                <Button variant={"outline-light"} onClick={() => history.push(PCFAQ_ROUTE)} className="ml-2">Гайд по Комплектующим</Button>
                <Button variant={"outline-success"} onClick={themeChanger} className="ml-2" id='theme'>Темная тема</Button>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <BiSolidShoppingBag onClick={() => history.push(BASKET_ROUTE)} className='basket'/>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >Admin</Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >Выход</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
