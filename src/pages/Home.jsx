import React from "react";

import Product from "../components/Product";

const Home = ({searchValue, searchInput, products, addToBasket, cleanSearchInput, addToFavorire}) => {
    return (
        <section className='s- s-section'>
            <div className='h1-block'>
                <h1>
                    {searchValue ? `Пошук по: ${searchValue}` : "Все кроссовки"}
                </h1>
                <div className='search'>
                    <img
                        width='14'
                        height='14'
                        src='/img/search.svg'
                        alt='pic'
                    />
                    <input
                        onInput={searchInput}
                        value={searchValue}
                        type='text'
                        placeholder='Поиск'
                    />
                    <img
                        onClick={() => cleanSearchInput("")}
                        className='close'
                        width='32'
                        height='32'
                        src='/img/close.svg'
                        alt='close'
                    />
                </div>
            </div>
            <div className='wrap-items row'>
                {products
                    .filter((el) =>
                        el.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    )
                    .map((item) => {
                        return (
                            <Product
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                url={item.url}
								addToBasket={ () => addToBasket(item) } // передаем весь объект для вызова в продукте
								addToFavorire={ () => addToFavorire(item) } // аналогично, берем все и передаем или из продукта придется эти данные брать {id, title и тд }
								loading={false}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default Home;
