import React from 'react';
import CrossButton from '/images/icon-close-menu.svg'
import Navigation from './Navigation';
import Authentication from './AuthenticationButtons';

function MobileNavMenuButtons({ onClose }) {
    const closeMenuCard = () => {
        if (onClose) {
            onClose();
        }
    }

    return (
        <div className='p-6'>
            <div className='w-max ml-auto'>
                <img src={CrossButton} alt="cross" onClick={closeMenuCard} className="cursor-pointer" />
            </div>
            <div className='mt-4'>
                <Navigation />
            </div>
            <div className='mt-4'>
                <Authentication />
            </div>
        </div>
    )
}

export default MobileNavMenuButtons;