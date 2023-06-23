import './Home.css'
import SlideShow from './HomeSlideShow/HomeSlideShow.js'


function Homepage() {
    return (
        <div>
            <SlideShow />
            <div id='Home_card'>


                <p>Welcome to our beekeeping website! We specialize in selling raw, locally sourced honey that is carefully harvested and packaged to preserve its natural flavor and beneficial properties. Our honey is sourced from local beehives and use sustainable, all-natural practices to ensure the health and well-being of our bees. We do not use any chemicals in our beekeeping methods, ensuring that our honey is pure and natural.</p>

                <p>We are dedicated to providing our customers with the best quality honey that nature has to offer. We are passionate about supporting local beekeepers, preserving the tradition of beekeeping in our area and we are proud members of Hives for Heroes, an organization dedicated to supporting veterans and first responders through beekeeping.</p>

                <p>Thank you for supporting local beekeeping and for choosing our honey for your sweetening needs. Come by our location to taste the sweet, delicious, nutritious and pure honey from your own region.</p>
            </div>
        </div>
    );
}

export default Homepage;