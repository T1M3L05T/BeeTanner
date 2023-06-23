import './NavBar.css';

function NavBar() {
    return (
        <div id='Header'>
            <img src={require('../imgs/Logo.png')} alt="Logo" id='Logo' />
            <div id='Nav_box'>
                <img src={require('../imgs/Title.png')} alt="Logo" id='Title' />
                <ul id='Nav'>
                    <li id='NavLinks'><a href="/Home">Home</a></li>
                    <li id='NavLinks'><a href="/Honey">Honey</a></li>
                    <li id='NavLinks'><a href="/Bees">Bees</a></li>
                    <li id='NavLinks'><a href="/Services">Services</a></li>
                    <li id='NavLinks'><a href="/ContactUs">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
}
export default NavBar;