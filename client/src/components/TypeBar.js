import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup className='lister'>
            <ListGroup.Item className="brand_item">Все</ListGroup.Item>
            {device.types.map(type =>
                <ListGroup.Item className="brand_item" active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
