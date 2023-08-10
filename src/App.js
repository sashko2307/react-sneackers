import React from "react";
import Header from "./components/Header";
import Minibacket from "./components/Minibacket";
import Product from "./components/Product";
import axios from "axios";

function App() {
    const [products, setProducts] = React.useState([]);
    const [productsBasket, setProductsBasket] = React.useState([]);
    const [isShowMinibacket, setShowMinibacket] = React.useState(false);

    React.useEffect(() => {
        axios
            .get("https://64d383f467b2662bf3dc5a00.mockapi.io/items")
            .then((resp) => {
                setProducts(resp.data);
            });
    }, []);

    const onShowBasket = () => {
        setShowMinibacket(!isShowMinibacket);
	};
	
	const addToBasket = (obj) => {
		console.log(productsBasket)
		console.log(obj.id)
		const isItemInBasket = productsBasket.some(prod => prod.id === obj.id);

// Если элемента с таким id еще нет в корзине, добавляем его
if (!isItemInBasket) {
  setProductsBasket(prev => [...prev, obj]);
}
	}

	const removeProduct = (index) => {
		console.log(index)
		const filter = productsBasket.filter(item => (item.id !== index))
		console.log(filter)
		setProductsBasket(filter)
	}

    return (
        <div className='App'>
			{ isShowMinibacket && <Minibacket
				onShowBasket={ onShowBasket }
				items={ productsBasket }
				removeProduct={removeProduct}
			/> }
            <Header onShowBasket={onShowBasket} />
            <main>
                <section className='s- s-section'>
                    <div className='h1-block'>
                        <h1>Все кроссовки</h1>
                        <div className='search'>
                            <img
                                width='14'
                                height='14'
                                src='/img/search.svg'
                                alt='pic'
                            />
                            <input type='text' placeholder='Поиск' />
                        </div>
                    </div>
                    <div className='wrap-items row'>
                        {products.map((item) => {
                            return (
                                <Product
                                    key={item.id}
                                    title={item.title}
                                    price={item.price}
									url={ item.url }
									addToBasket={() => addToBasket(item)} // передаем весь объект для вызова в продукте
                                />
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
