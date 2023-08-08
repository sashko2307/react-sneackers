import Header from "./components/Header";
import Minibacket from "./components/Minibacket";
import Product from "./components/Product";

const pruducts = [
    {
        id: 0,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 1222,
        url: "/img/s1.jpg",
    },
    {
        id: 1,
        title: "Мужские Кроссовки Nike ",
        price: 2000,
        url: "/img/s2.jpg",
    },
];
function App() {
    return (
        <div className='App'>
            <Minibacket />
            <Header />
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
						{ pruducts.map(item => {
							return <Product key={item.id} title={item.title} price={item.price} url={item.url} />
						})}
                        
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
