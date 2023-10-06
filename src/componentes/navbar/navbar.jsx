
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'



let NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="barranav">
                <Container>
                    <Link id='titulonav' to='/'> <i class="iconTittle fa-sharp fa-solid fa-gift"></i>Jota Clothing </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => isActive ? 'linkactivo' : 'filtrolinks'} to='/category/pantalones'>pantalones</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'linkactivo' : 'filtrolinks'} to="/category/remeras" >remeras</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'linkactivo' : 'filtrolinks'} to='/category/gorras'>gorras</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'linkactivo' : 'filtrolinks'} to="/category/zapatillas" >zapatillas</NavLink>
                        </Nav>
                        <Nav>
                            <Link className='widget' to='/cart'>
                                <CartWidget />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );


}

export default NavBar