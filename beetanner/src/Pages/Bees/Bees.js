import './Bees.css'
import BeesCard from './BeesCard/BeesCard';

function Bees() {
    const BeesList =[
        {
            id:1,
            Name:'Swarm NCU',
            img:'',
            Price:'75',
            Details:'5 Frame Cardboard or Plastic Box\nSwarm of bees recently caught, with new Queen\n5 Frames (all frames may not contain drawn comb)\n100% Satisfaction Guarantee\nFree consultation with Purchase',
        },
        {
            id:2,
            Name:'5 Frame Medium NCU',
            img:'',
            Price:'150',
            Details:'5 Frame wood box\n3 Medium frames of brood\n2 Medium frames of honey\nReturn box for $25 refund\n100% Satisfaction Guarantee\nFree consultation with Purchase'
        },
        {
            id:3,
            Name:'5 Frame NCU',
            img:'',
            Price:'150',
            Details:'5 Frame Cardboard or Plastic Box\n3 Frames of bees\n2 Frames of Honey\n100% Satisfaction Guarantee\nFree consultation with Purchase'
        },
        {
            id:4,
            Name:'10 Frame Medium',
            img:'',
            Price:'200',
            Details:'10 Frame Medium box with bees\nEasy to place on top of 10 frame hive\nYou must provide bottom board and top cover\n100% Satisfaction Guarantee\nFree consultation with Purchase'
        },
        {
            id:5,
            Name:'10 Frame Deep',
            img:'',
            Price:'300',
            Details:'10 Frame Deep box with bees\nYou must provide bottom board and top cover\n100% Satisfaction Guarantee\nFree consultation with Purchase'
        }
    ]
        return (
            <div id="Bees-Formatter">
                {BeesList.map((item,i) => (
                    <BeesCard key={i} item={item} />                    
                ))}
            </div>
        );
}

export default Bees;