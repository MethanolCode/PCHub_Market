import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {addToBasket, fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`))
    }

    return (
        <Container className="device_page">
            <Row>
                <Row>
                    <Image src={process.env.REACT_APP_API_URL + device.img}/>
                    <div>
                        <h2>{device.name}</h2>
                        <p>Цена: {device.price} руб.</p>
                        <Button className='bask_button' variant={"outline-success"} onClick={add}>Добавить в корзину</Button>
                    </div>
                </Row>
            </Row>
            <h4>Характеристики товара:</h4>
            <Row className="d-flex flex-column">   
                {device.info.map((info, index) =>
                    <Row key={info.id} className='device_character'>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
