import React from 'react';
import {Card, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className='device_item' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card className='device_item_content'>
                <img src={process.env.REACT_APP_API_URL + device.img}/><br/>
                <h6>{device.name}</h6>
                <p>Цена: {device.price} руб.</p>
            </Card>
        </Col>
    );
};

export default DeviceItem;
