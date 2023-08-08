import React from 'react'
import styles from "./Product.module.scss";

const Product = (props) => {
	console.log(styles)
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
                                    src={props.url}
                                    alt='pic'
                                />
                            </div>
                            <div className={styles.tt}>
							{props.title}
                            </div>
                            <div className={styles.priceBlock}>
                                <p>
                                    Цена: <strong>{props.price} грн.</strong>
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
