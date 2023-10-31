import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ListGroup className='lister'>
            <ListGroup.Item className="brand_item">Все</ListGroup.Item>
            {device.brands.map(brand =>
            <ListGroup.Item key={brand.id} active={brand.id === device.setSelectedBrand.id} 
                className="brand_item" onClick={() => device.setSelectedBrand(brand)}>{brand.name}</ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default BrandBar;
