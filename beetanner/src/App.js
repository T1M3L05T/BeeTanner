import './App.css';
import NavBar from './Navigation/NavBar.js'
import Homepage from './Pages/Home/Home.js'

function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
    </div>
  );
}

function Honey() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

function Bees() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

function Services() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export {Home, Honey, Bees, Services, ContactUs};
