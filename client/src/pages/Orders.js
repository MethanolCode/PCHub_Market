import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
import { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID } from "../utils/consts";
import { observer } from 'mobx-react-lite';


const Orders = observer(() => {
    const location = useLocation();
    const price = location.state.params;
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    let mail = "loginer.inner@mail.ru"
    return (
      <Container className='order'>
        <form className="contact-form" onSubmit={sendEmail}>
          <h2>Сумма заказа: {price} рублей.</h2>
          <h3>Спасибо за покупку! Уведомление будет выслано вам после подтверждения заказа!</h3>
          <label>Ваше имя</label>
          <input type="text" name="user_name" />
          <label>Email*</label>
          <input type="text" name="subject" />
          <label>Сумма заказа</label>
          <input type="text" value={price} name="sum" readOnly='true'/>
          <input type="submit" value="Подтвердить заказ" />
        </form>
      </Container>
  );
})

export default Orders;
