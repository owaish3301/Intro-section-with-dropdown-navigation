import dataBiz from '/images/client-databiz.svg';
import audioPhile from '/images/client-audiophile.svg';
import meet from '/images/client-meet.svg';
import maker from '/images/client-maker.svg';


function Footer(){
    return(
        <footer className="flex mt-6 sm:mt-16 w-full justify-evenly">
            <img src={dataBiz} className='w-1/4'/>
            <img src={audioPhile} className='w-1/5'/>
            <img src={meet} className='w-1/5'/>
            <img src={maker} className='w-1/5'/>
        </footer>
    );
}

export default Footer;