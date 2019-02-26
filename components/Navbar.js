import Link from 'next/link';

const Navbar = () => (

    <div>
        <nav className="site-header py-1 navbar navbar-light navbar-expand-sm" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="brandLogo" src="../static/images/NavLogo.png" alt="Brand Logo"/><span className="jbc">"Just be creative"</span>
                </a> 

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#TogglerNav" 
                    aria-controls="TogglerNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="TogglerNav">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="/">Home</a>
                        <div className="dropdown">
                        <a className="nav-item nav-link dropdown-toggle" data-toggle="dropdown" id="servicesDropdown" 
                        aria-haspopup="true" aria-expanded="false"
                        href="#">Services</a>
                            <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                            <a className="dropdown-item" href="#">Art Supplies</a>
                            <a className="dropdown-item" href="#">Craft Supplies</a>
                            <a className="dropdown-item" href="#">Bespoke Picture Framing</a>
                            <a className="dropdown-item" href="#">Special Occassion Invitations</a>
                            <a className="dropdown-item" href="#">Personalised Gifts</a>
                            <a className="dropdown-item" href="#">Custom Stensils</a>
                            <a className="dropdown-item" href="#">Artwork Commissions</a>
                            </div>
                        </div>
                        <a className="nav-item nav-link" href="/about">About</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div> 
                </div>
            </div> 
        </nav> 
    </div>

);



export default Navbar;