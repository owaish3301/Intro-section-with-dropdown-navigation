import Navigation from "./NavBarComponents/Navigation";
import Authentication from "./NavBarComponents/AuthenticationButtons";

function DesktopNavBar(){
    return(
        <nav className="p-6 flex items-center gap-8">
            <div>
                <h1 className='text-5xl font-semibold font-epilogue'>snap</h1>
            </div>
            <div>
                <Navigation></Navigation>
            </div>
            <div className="ml-auto">
                <Authentication></Authentication>
            </div>
        </nav>
    )
}

export default DesktopNavBar;