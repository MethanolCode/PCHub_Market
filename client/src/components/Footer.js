import React from 'react';

const Footer = () => {
  return (
    <footer className="text-lg-start bg-dark text-white">
        <hr />
        <section>
            <div className="container text-center text-md-start mt-4">
                <div className="row mt-2">
                    <div className='footer_item'>
                        <h6 className="fw-bold mb-4">НЕМНОГО О НАС</h6>
                        <p>
                            Мы продаем комплектующие для пк <br/>
                            по ценам немецкого Computeruniv-<br/>
                            erse, чтобы сократить популяцию <br/>
                            горе-сборщиков на зеонах и 775  <br/>
                            сокетах. Несем в общество доступ-<br/>
                            ные комплектующие и <br/>
                            хорошее настроение.
                        </p>
                    </div>
                    <div className="footer_item">
                        <h6 className="fw-bold mb-4">НАШЕ ПРИСУТСТВИЕ НА РЫНКАХ:</h6>
                        <p>Россия<br/>Казахстан<br/>Беларусь<br/>Сербия<br/>Парагвай<br/>Скоро и в Китае!</p>
                    </div>
                    <div className="footer_item">
                        <h6 className="fw-bold mb-4">POWERED BY</h6>
                        <p><a href="https://react.dev/" target='blank' className="text-reset">React JS</a></p>
                        <p><a href="https://react-bootstrap.github.io/" target='blank' className="text-reset">Bootstrap</a></p>
                        <p><a href="https://nodejs.org/ru" target='blank' className="text-reset">Node JS</a></p>
                        <p><a href="https://www.postgresql.org/" target='blank' className="text-reset">PostgreSQL</a></p>
                    </div>
                    <div className="footer_item">
                        <h6 className="fw-bold mb-4">КОНТАКТЫ</h6>
                        <p>Kaluga, ул.Баумана, д.23</p>
                        <p>+7 (967) 500 43 60</p>
                        <p>+7 (967) 500 43 64</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="text-center p-3">© 2023-2023 Copyright: PCHub.ru</div>
    </footer>
  );
}

export default Footer;
