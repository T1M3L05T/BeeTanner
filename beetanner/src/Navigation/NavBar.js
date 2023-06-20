import './NavBar.css';

function NavBar() {
    return (
        <ul id='Nav'>
            <li id='NavLinks'><a href="/Home">Home</a></li>
            <li id='NavLinks'><a href="/Honey">Honey</a></li>
            <li id='NavLinks'><a href="/Bees">Bees</a></li>
            <li id='NavLinks'><a href="/Services">Services</a></li>
            <li id='NavLinks'><a href="/ContactUs">Contact Us</a></li>
        </ul>
    );
}
export default NavBar;