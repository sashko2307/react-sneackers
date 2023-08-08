import React from "react";

const Minibacket = () => {
    return (
        <div style={{ display: "none" }} className='overlay'>
            <div className='mini-basket'>
                <div className='h2'>Корзина</div>
                <div className='mini-basket_items'>
                    <div className='mini-basket_item'>
                        <div className='img'>
                            <img
                                width='70'
                                height='70'
                                src='/img/s1.jpg'
                                alt='pic'
                            />
                        </div>
                        <div className='mini-basket_info'>
                            <div className='tt'>
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </div>
                            <div className='price-block'>
                                <p>
                                    <strong>1000 грн.</strong>
                                </p>
                            </div>
                        </div>
                        <img
                            className='close'
                            width='32'
                            height='32'
                            src='/img/close.svg'
                            alt='pic'
                        />
                    </div>
                    <div className='mini-basket_item'>
                        <div className='img'>
                            <img
                                width='70'
                                height='70'
                                src='/img/s1.jpg'
                                alt='pic'
                            />
                        </div>
                        <div className='mini-basket_info'>
                            <div className='tt'>
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </div>
                            <div className='price-block'>
                                <p>
                                    <strong>1000 грн.</strong>
                                </p>
                            </div>
                        </div>
                        <img
                            className='close'
                            width='32'
                            height='32'
                            src='/img/close.svg'
                            alt='pic'
                        />
                    </div>
                    <div className='mini-basket_item'>
                        <div className='img'>
                            <img
                                width='70'
                                height='70'
                                src='/img/s1.jpg'
                                alt='pic'
                            />
                        </div>
                        <div className='mini-basket_info'>
                            <div className='tt'>
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </div>
                            <div className='price-block'>
                                <p>
                                    <strong>1000 грн.</strong>
                                </p>
                            </div>
                        </div>
                        <img
                            className='close'
                            width='32'
                            height='32'
                            src='/img/close.svg'
                            alt='pic'
                        />
                    </div>
                    <div className='mini-basket_item'>
                        <div className='img'>
                            <img
                                width='70'
                                height='70'
                                src='/img/s1.jpg'
                                alt='pic'
                            />
                        </div>
                        <div className='mini-basket_info'>
                            <div className='tt'>
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </div>
                            <div className='price-block'>
                                <p>
                                    <strong>1000 грн.</strong>
                                </p>
                            </div>
                        </div>
                        <img
                            className='close'
                            width='32'
                            height='32'
                            src='/img/close.svg'
                            alt='pic'
                        />
                    </div>
                </div>
                <div className='mini-basket_bottom'>
                    <p className='mini-basket_total'>
                        Итого: <span className='dotts'></span>{" "}
                        <strong>21 498 грн.</strong>
                    </p>
                    <p className='mini-basket_total'>
                        Налог 5%: <span className='dotts'></span>{" "}
                        <strong>1 111 грн.</strong>
                    </p>
                    <button className='button'>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};

export default Minibacket;
