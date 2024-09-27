import HeroHeading from "./HeroHeading";
import HeroText from "./HeroText";
import LearnMoreButton from "./LearnMoreButton";
import HeroImg from "./HeroImage";
import Footer from "../FooterSection/Footer";

function HeroCard(){
    return(
        <div className="flex flex-col sm:flex-row">
            <div className="sm:order-2 sm:w-1/2">
                <HeroImg></HeroImg>
            </div>
            <div className="sm:order-1 sm:w-1/2 sm:self-end">
                <div className="max-w-[500px] m-auto">
                    <HeroHeading></HeroHeading>
                    <HeroText></HeroText>
                    <LearnMoreButton></LearnMoreButton>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;