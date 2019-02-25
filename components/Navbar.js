import Link from 'next/link';
import { Nav, NavItem, NavDropdown} from 'react-bootstrap';

  

const Navbar = () => (

    <div>
        <Nav activeKey="1" onSelect={k =>(k)}>
        <Nav.Item>
        <Nav.Link eventKey="1" href="/">
            Home
        </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Services" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" href="/">Craft Supplies</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" href="/">Bespoke Picture Framing</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3" href="/">Special Occassion Invitations</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4" href="/">Personalised Gifts</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5" href="/">Custom Stensils</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.6" href="/">Artwork Commissions</NavDropdown.Item>

        </NavDropdown>
        <Nav.Item>
        <Nav.Link eventKey="2" href="/about" title="About">
            About
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="3" title="Contact">
            Contact
        </Nav.Link>
        </Nav.Item>

    </Nav>
  </div>

);



export default Navbar;
