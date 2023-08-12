import React from "react";

const Minibacket = ({ onShowBasket, items, removeProduct }) => {
    return (
        <div className='overlay'>
            <div className='mini-basket'>
                <div className='h2'>
                    Кошик
                    <img
                        onClick={onShowBasket}
                        className='close'
                        width='32'
                        height='32'
                        src='/img/close.svg'
                        alt='pic'
                    />
                </div>
                {items.length ? (
                    <div className='mini-basket_items'>
                        {items &&
                            items.map((item, index) => {
                                return (
                                    <div
                                        className='mini-basket_item'
                                        data-n={item.id}
                                        key={item.id}
                                    >
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
                                                    <strong>
                                                        {item.price} грн.
                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                        <img
                                            onClick={() =>
                                                removeProduct(item.id)
                                            }
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
                ) : (
                    <div className='empty-basket'>
                        <div className='img'>
                            <img
                                width={120}
                                height={120}
                                src='/img/empty-basket.jpg'
                                alt='empty-basket'
                            />
                        </div>
                        <div className='ttl'>
                            <p className='h3'>Кошик пустий</p>
                            <p>
                                Додайте хоча б одну пару кросівок, щоб зробити
                                замовлення.
                            </p>
                        </div>
                        <button onClick={onShowBasket} className='button'>
                            Повернутися назад
                        </button>
                    </div>
				) }
				
				{items.length ? <div className='mini-basket_bottom'>
                    <p className='mini-basket_total'>
                        Итого: <span className='dotts'></span>{" "}
                        <strong>21 498 грн.</strong>
                    </p>
                    <p className='mini-basket_total'>
                        Налог 5%: <span className='dotts'></span>{" "}
                        <strong>1 111 грн.</strong>
                    </p>
                    <button className='button'>Оформить заказ</button>
                </div> : null}

                
            </div>
        </div>
    );
};

export default Minibacket;
