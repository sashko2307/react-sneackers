import React from "react";

const Minibacket = ({ onShowBasket, items, removeProduct }) => {
    return (
        <div className='overlay'>
            <div className='mini-basket'>
                <div className='h2'>
                    Корзина
                    <img
                        onClick={onShowBasket}
                        className='close'
                        width='32'
                        height='32'
                        src='/img/close.svg'
                        alt='pic'
                    />
                </div>
                <div className='mini-basket_items'>
                    {items &&
                        items.map((item) => {
                            return (
                                <div className='mini-basket_item' key={item.id}>
                                    <div className='img'>
                                        <img
                                            width='70'
                                            height='70'
                                            src={item.url}
                                            alt='pic'
                                        />
                                    </div>
                                    <div className='mini-basket_info'>
                                        <div className='tt'>
                                            {item.title}
                                        </div>
                                        <div className='price-block'>
                                            <p>
                                                <strong>{item.price} грн.</strong>
                                            </p>
                                        </div>
                                    </div>
									<img
										onClick={() => removeProduct(item.id)}
                                        className='close'
                                        width='32'
                                        height='32'
                                        src='/img/close.svg'
                                        alt='close'
                                    />
                                </div>
                            );
                        })}
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
