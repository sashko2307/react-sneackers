import React from "react";
import styles from "./Product.module.scss";

import ContentLoader from "react-content-loader";

const Product = ({
    url,
    title,
    price,
    addToBasket,
    addToFavorire,
    isFavorite,
	loading = false,
	added = true
}) => {
    const [isPlus, setIsPlus] = React.useState(added);
    const [isFavorited, setIsFavorited] = React.useState(isFavorite);

    const handlerPlus = () => {
        setIsPlus(!isPlus);
        addToBasket();
    };

    const handlerFavorite = () => {
        setIsFavorited(!isFavorited);
        addToFavorire();
    };
console.log(isPlus)
    return (
        <div className={styles.product}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={150}
                    height={200}
                    viewBox='0 0 150 200'
                    backgroundColor='#f3f3f3'
                    foregroundColor='#ecebeb'
                >
                    <rect x='0' y='0' rx='5' ry='5' width='150' height='90' />
                    <rect x='0' y='97' rx='5' ry='5' width='150' height='15' />
                    <rect x='0' y='120' rx='5' ry='5' width='100' height='15' />
                    <rect x='4' y='158' rx='5' ry='5' width='100' height='30' />
                    <rect
                        x='115'
                        y='157'
                        rx='5'
                        ry='5'
                        width='30'
                        height='30'
                    />
                </ContentLoader>
            ) : (
					<div>
						<div className={styles.favorite}>
                <img
                    width='30'
                    height='30'
                    src={isFavorited ? "/img/like.svg" : "/img/unlike.svg"}
                    alt='pic'
                    onClick={handlerFavorite}
                />
            </div>
            <div className={styles.img}>
                <img width='133' height='112' src={url} alt='pic' />
            </div>
            <div className={styles.tt}>{title}</div>
            <div className={styles.priceBlock}>
                <p>
                    Цена: <strong>{price} грн.</strong>
                </p>
                <button>
                    <img
                        width='32'
                        height='32'
                        src={!isPlus ? "/img/plus.svg" : "/img/check.svg"}
                        onClick={handlerPlus}
                        alt='pic'
                    />
                </button>
            </div>
				</div>
            )}
            
        </div>
    );
};

export default Product;
