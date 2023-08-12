import React from "react";
import Header from "./components/Header";
import Minibacket from "./components/Minibacket";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



function App() {
    const [products, setProducts] = React.useState([]); // получение кроссовок
    const [productsBasket, setProductsBasket] = React.useState([]); // кроссовки в корзине
    const [favorites, setFavorites] = React.useState([]); // кроссовки в избранном 
    const [isShowMinibacket, setShowMinibacket] = React.useState(false); // показывание попап корзины
    const [searchValue, setSearchValue] = React.useState(""); // ввод в поле поиска

	React.useEffect(() => {
		const fatchData = async () => {
			await axios
            .get("https://64d383f467b2662bf3dc5a00.mockapi.io/basket")
            .then((resp) => {
                setProductsBasket(resp.data);
			});
			await axios
            .get("https://64d645d4754d3e0f1361dda9.mockapi.io/favorites")
            .then((resp) => {
                setFavorites(resp.data);
			});
			await axios
            .get("https://64d383f467b2662bf3dc5a00.mockapi.io/items")
            .then((resp) => {
                setProducts(resp.data);
            });
		}
        fatchData()
        
    }, []);

    const onShowBasket = () => {
        setShowMinibacket(!isShowMinibacket);
    };

	const addToBasket = (obj) => {
		console.log(obj.id)
        const isItemInBasket = productsBasket.some(
            (prod) => console.log(prod.id, obj.id) // === obj.id
        );

        // Если элемента с таким id еще нет в корзине, добавляем его
		if (!isItemInBasket) {
			console.log(obj.id)
            // вот так или то что ниже, вытягивая data const resp = await axios.post("https://64d383f467b2662bf3dc5a00.mockapi.io/basket", obj)
            axios.post(
                "https://64d383f467b2662bf3dc5a00.mockapi.io/basket",
                obj
            );
            //console.log(resp.data)
            setProductsBasket((prev) => [...prev, obj]);
        }
    };

    const removeProduct = (index) => {
        console.log(index);
        const filter = productsBasket.filter((item) => item.id !== index);
        setProductsBasket(filter);
        if (!filter.length) {
            setShowMinibacket(false);
        }
        axios.delete(
            `https://64d383f467b2662bf3dc5a00.mockapi.io/basket/${index}`
        );
	};
	
	const addToFavorire = async (item) => {
		console.log(favorites)
		try {
			if (favorites.find(obj => Number(obj.id) === Number(item.id))) {
				debugger
				const filterToDelete = favorites.filter(itemdel => Number(itemdel.id) !== Number(item.id))
				axios.delete(`https://64d645d4754d3e0f1361dda9.mockapi.io/favorites/${item.id}`)
				console.log(filterToDelete)
				setFavorites(filterToDelete)
			} else {
				debugger
				const rerp = await axios.post("https://64d645d4754d3e0f1361dda9.mockapi.io/favorites", item)
			setFavorites(prev => [...prev, rerp.data])
			}
		} catch (error) {
			alert(error)
		}
		
	}

    const searchInput = (e) => {
        setSearchValue(e.target.value);

    };

    // очистка поиска
    const cleanSearchInput = () => {
        setSearchValue("");
    };

    return (
        <div className='App'>
            {isShowMinibacket && (
                <Minibacket
                    onShowBasket={onShowBasket}
                    items={productsBasket}
                    removeProduct={removeProduct}
                />
            )}
            <Header onShowBasket={onShowBasket} />
            <main>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Home
                                searchValue={searchValue}
                                searchInput={searchInput}
                                products={products}
								addToBasket={ addToBasket }
								productsBasket={productsBasket}
								cleanSearchInput={ cleanSearchInput }
								addToFavorire={addToFavorire}
                            />
                        }
                    />
                    <Route
                        path='/favorite'
                        element={
                            <Favorites items={favorites} addToBasket={addToBasket} addToFavorire={addToFavorire} />
                        }
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
