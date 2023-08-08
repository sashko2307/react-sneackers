import React from 'react'

const Product = () => {
	return (
		<div className='product col'>
						<div className="favorite">
							<img
                                    width='30'
                                    height='30'
                                    src='/img/unlike.svg'
                                    alt='pic'
                                />
							</div>
                            <div className='img'>
                                <img
                                    width='133'
                                    height='112'
                                    src='/img/s1.jpg'
                                    alt='pic'
                                />
                            </div>
                            <div className='tt'>
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </div>
                            <div className='price-block'>
                                <p>
                                    Цена: <strong>1000 грн.</strong>
                                </p>
                                <button>
                                    <img
                                        width='11'
                                        height='11'
                                        src='/img/plus.svg'
                                        alt='pic'
                                    />
                                </button>
                            </div>
                        </div>
	)
}

export default Product
