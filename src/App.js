function App() {
    return (
        <div className='App'>
            <header className='header'>
                <div className='headerLeft'>
                    <img
                        width='40'
                        height='40'
                        src='/img/logo.svg'
                        alt='logo'
                    />
                    <div className='headerLeft_text'>
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className='headerRight'>
                    <div className='busket'>
                        <img
                            width='18'
                            height='18'
                            src='/img/card.svg'
                            alt='pic'
                        />
                        <p className='text'>1205 руб.</p>
                    </div>
                    <div className='img'>
                        <img
                            width='20'
                            height='20'
                            src='/img/health.svg'
                            alt='pic'
                        />
                    </div>
                    <div className='img'>
                        <img
                            width='20'
                            height='20'
                            src='/img/user.svg'
                            alt='pic'
                        />
                    </div>
                </div>
            </header>
            <main>
                <section className='s- s-section'>
                    <div className='h1-block'>
						<h1>Все кроссовки</h1>
						<div className="search">
						<img width='14'
                            height='14' src="/img/search.svg" alt="pic" />
							<input type="text" placeholder="Поиск" />
						</div>
                    </div>
                    <div className='wrap-items row'>
						<div className='product col'>
							<div className="img">
							<img width='133'
                            height='112' src="/img/s1.jpg" alt="pic" />
							</div>
							<div className="tt">Мужские Кроссовки Nike Blazer Mid Suede</div>
							<div className="price-block">
								<p>Цена: <strong>1000 грн.</strong></p>
								<button><img width='11'
                            height='11' src="/img/plus.svg" alt="pic" /></button>
							</div>
						</div>
						<div className='product col'>
							<div className="img">
							<img width='133'
                            height='112' src="/img/s2.jpg" alt="pic" />
							</div>
							<div className="tt">Мужские Кроссовки Nike Blazer Mid Suede</div>
							<div className="price-block">
								<p>Цена: <strong>1000 грн.</strong></p>
								<button><img width='11'
                            height='11' src="/img/plus.svg" alt="pic" /></button>
							</div>
						</div>
						<div className='product col'>
							<div className="img">
							<img width='133'
                            height='112' src="/img/s3.jpg" alt="pic" />
							</div>
							<div className="tt">Мужские Кроссовки Nike Blazer Mid Suede</div>
							<div className="price-block">
								<p>Цена: <strong>1000 грн.</strong></p>
								<button><img width='11'
                            height='11' src="/img/plus.svg" alt="pic" /></button>
							</div>
						</div>
						<div className='product col'>
							<div className="img">
							<img width='133'
                            height='112' src="/img/s4.jpg" alt="pic" />
							</div>
							<div className="tt">Мужские Кроссовки Nike Blazer Mid Suede</div>
							<div className="price-block">
								<p>Цена: <strong>1000 грн.</strong></p>
								<button><img width='11'
                            height='11' src="/img/plus.svg" alt="pic" /></button>
							</div>
						</div>
						<div className='product col'>
							<div className="img">
							<img width='133'
                            height='112' src="/img/s5.jpg" alt="pic" />
							</div>
							<div className="tt">Мужские Кроссовки Nike Blazer Mid Suede</div>
							<div className="price-block">
								<p>Цена: <strong>1000 грн.</strong></p>
								<button><img width='11'
                            height='11' src="/img/plus.svg" alt="pic" /></button>
							</div>
						</div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
