import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Context } from '../index';
import { getBasket } from '../http/deviceAPI';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import {useParams} from 'react-router-dom'
import {delFromBasket, fetchOneDevice} from "../http/deviceAPI";
import {ORDERS_ROUTE, PCFAQ_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom';


const Basket = observer(() => {
    const history = useHistory()
    const {device} = useContext(Context)
    const [reload, setReload] = useState(false);
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let [totalPrice, discontTotalPrise, isDiscont, day, isPromo, promoTotalPrice] = [0, 0, false, days[new Date().getDay()], false, 0];
    useEffect(() => {getBasket().then(data => device.setBaskets(data))}, [])
    {device.basket.map(price => totalPrice += Number(price.device.price))}
    if(day === 'Пятница'){
        isDiscont = true;
        discontTotalPrise = totalPrice;
        totalPrice = 0;
        totalPrice += Math.ceil(discontTotalPrise*90/100)
    }

    const promo = () => {
        if(document.getElementById("promocode").value === "SANECHEK2003"){
            isPromo = true; 
            promoTotalPrice = totalPrice;
            totalPrice = 0;
            totalPrice += Math.ceil(promoTotalPrice*85/100)
            document.getElementById("cost").replaceWith('Скидка по промокоду: ' + promoTotalPrice + '-15% = ' + totalPrice + ' рублей')
            document.getElementById('promocode').remove()
            document.getElementById('promo_btn').remove()
        }
        else {alert("Неверный промокод!")}
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const remove = async (id) => {
        console.log('маслину поймал')
        delFromBasket({deviceId: id})
        await sleep(500);
        window.location.reload();
    }
    return (
        <Container className="basket_page">
            <h2 className="pb-2">Корзина</h2>
            <Button className='order_btn' onClick={() => history.push(ORDERS_ROUTE, {params: totalPrice})}>ЗАКАЗАТЬ</Button>
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="promocode" placeholder="promocode"/>
                <div className="input-group-append"><button id='promo_btn' className="btn btn-outline-success" onClick={promo} type="button">Применить</button></div>
            </div>
            <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                <h2 className="pr-2">Итого:</h2>
                {isDiscont && <h3 className="pl-2" id="cost">{'Сегодня акция: ' + discontTotalPrise + '-10% = ' + totalPrice + ' рублей'}</h3>}
                {isDiscont || <h3 className="pl-2" id="cost">{totalPrice + ' рублей'}</h3>}
            </Card>
            {device.basket.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img src={process.env.REACT_APP_API_URL + product.device.img}/>
                                <h2 className="pl-3">{product.device.name}</h2>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{product.device.price} рублей</h2>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <Button variant='outline-danger' className='del_btn' onClick={() => remove(product.device.id)}>Удалить</Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            )}
        </Container>
    );
});

export default Basket;
