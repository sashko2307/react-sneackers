import Header from "./components/Header";
import Minibacket from "./components/Minibacket";
import Product from "./components/Product";

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
						<Product />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
