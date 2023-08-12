import React from "react";
import { Link } from 'react-router-dom';

const Header = ({onShowBasket}) => {
    return (
		<header className='header'>
			<Link to="/">
            <div className='headerLeft'>
                <img width='40' height='40' src='/img/logo.svg' alt='logo' />
                <div className='headerLeft_text'>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
				</div>
				</Link>
            <div className='headerRight'>
                <div className='busket' onClick={onShowBasket}>
                    <img width='18' height='18' src='/img/card.svg' alt='pic' />
                    <p className='text'>1205 руб.</p>
				</div>
				<Link to="favorite">
                <div className='img'>
                    <img
                        width='20'
                        height='20'
                        src='/img/health.svg'
                        alt='pic'
                    />
					</div>
					</Link>
                <div className='img'>
                    <img width='20' height='20' src='/img/user.svg' alt='pic' />
                </div>
            </div>
        </header>
    );
};

export default Header;
