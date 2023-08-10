import React from 'react'
import styles from "./Product.module.scss";

const Product = ({url, title, price, addToBasket}) => {
	const [isPlus, setIsPlus] = React.useState(false)

	const handlerPlus = () => {
		setIsPlus(!isPlus)
		addToBasket()
	}


	return (
		<div className={styles.product}>
						<div className={styles.favorite}>
							<img
                                    width='30'
                                    height='30'
                                    src={'/img/unlike.svg'}
                                    alt='pic'
                                />
							</div>
                            <div className={styles.img}>
                                <img 
                                    width='133'
                                    height='112'
                                    src={url}
                                    alt='pic'
                                />
                            </div>
                            <div className={styles.tt}>
							{title}
                            </div>
                            <div className={styles.priceBlock}>
                                <p>
                                    Цена: <strong>{price} грн.</strong>
                                </p>
                                <button>
                                    <img
                                        width='32'
                                        height='32'
						src={ !isPlus ? '/img/plus.svg' : '/img/check.svg' }
						onClick={handlerPlus}
                                        alt='pic'
                                    />
                                </button>
                            </div>
                        </div>
	)
}

export default Product
