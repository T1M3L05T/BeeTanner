import './Honey.css'
import HoneyCard from './HoneyCard/HoneyCard.js'

function Honey() {
    const HoneyList = [
        {
            id:1,
            Name: 'Quart Honey',
            Description: 'Honey is RAW and unfiltered.  Made by bees in my backyard.',
            image:'',
            Price: '12.00',
            Stock: 'Out of Stock',
        },
        {
            id:2,
            Name: '12oz Squeeze Honey',
            Description: 'Same Honey in a smaller more convenient bottle.',
            Price: '5.00',
            Stock: 'Out of Stock',
        },
        {
            id:3,
            Name: 'Comb Honey',
            Description: 'Honey Comb taken straight out of the beehive.',
            image:'',
            Price: '',
            Stock: 'Made to Order',
        },
        {
            id:4,
            Name: 'Creamed Honey, Pint',
            Description: 'Try our honey in a creamed form.  Same great Honey, only crystalized to a creamy texture.  Great for spreading on toast!',
            image:'',
            Price: '',
            Stock: 'Made to Order',
        },
        {
            id:5,
            Name: 'Bee Pollen',
            Description: '',
            image:'',
            Price: '',
            Stock: 'Made to Order',
        },
        {
            id:6,
            Name: 'Propolis Ticture',
            Description: '',
            image:'',
            Price: '',
            Stock: 'Made to Order',
        }
    ]
    return (
        <div id="Honey-Formatter">
            {HoneyList.map((item,i) => (
                <HoneyCard key={i} item={item} />                    
            ))}
        </div>
    );
}
export default Honey