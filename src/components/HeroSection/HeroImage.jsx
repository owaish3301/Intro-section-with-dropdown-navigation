import MobileHeroImage from '/images/image-hero-mobile.png';
import DesktopHeroImage from '/images/image-hero-desktop.png';

function HeroImg(){
    const width = window.innerWidth;
    return(
        <div>
            {
                width <= 640 ? <img src={MobileHeroImage}></img> : <img src={DesktopHeroImage} className='w-3/4 m-auto max-h-[80vh]'></img>
            }
        </div>
        
    )
}


export default HeroImg;