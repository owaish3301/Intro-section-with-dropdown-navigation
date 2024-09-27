import React, { useRef } from 'react';
import MenuIcon from '/images/icon-menu.svg';
import MenuCard from '../MobileMenuSection/MenuCard';

function MobileNavBar(){
    const menuCardRef = useRef(null);

    const mobileMenuHandler = () =>{
        if (menuCardRef.current) {
            menuCardRef.current.classList.toggle('hidden');
        }
    }

    return(
        <>
            <nav className="flex p-6 justify-between">
                <h1 className='text-5xl font-semibold font-epilogue'>snap</h1>
                <div className='w-max h-max self-center' onClick={mobileMenuHandler}>
                    {/* menu icon */}
                    <img src={MenuIcon}></img>
                </div>
            </nav>
            <MenuCard ref={menuCardRef} onClose={mobileMenuHandler}/>
        </>
    );
}

export default MobileNavBar;