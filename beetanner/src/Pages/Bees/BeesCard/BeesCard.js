import './BeesCard.css'



function BeesCard(props) {
    return (
        < a href="/details">
            <div id="BeesCard">

                <div id='Bees-Name'><h3>{props.item.Name}</h3></div>
                <div id='Bees-img'>
                    <img src={props.item.img} alt="Item" />
                </div>
                <div id='Bees-Price'>${props.item.Price}</div>
                <div id='Bees-Details'>{props.item.Details}</div>

            </div>
        </a>
    );
}
export default BeesCard