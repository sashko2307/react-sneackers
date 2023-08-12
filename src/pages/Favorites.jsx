import React from "react";

import Product from "../components/Product";

const Favorites = ({ items = [], addToBasket, addToFavorire }) => {
    return (
        <section className='s- s-section'>
            <div className='h1-block'>
                <h1>
				Мої закладки
                </h1>
            </div>
            <div className='wrap-items row'>
                {items && items.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                url={item.url}
                                addToBasket={() => addToBasket(item)} // передаем весь объект для вызова в продукте
								addToFavorire={ () => addToFavorire(item) } // передаем весь объект для вызова в продукте
								isFavorite={true}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default Favorites;
