import './HoneyCard.css'

function HoneyCard(props) {
    return (
        < a href="/details">
            <div id="HoneyCard">
                <div id='Honey-Name'><h3>{props.item.Name}</h3></div>
                <div id='Honey-img'>
                    <img src={props.item.img} alt="Item" />
                </div>
                <div id='Honey-Price'>${props.item.Price}</div>
                <div id='Honey-Description'>{props.item.Description}</div>
                <div id='Honey-Stock'>{props.item.Stock}</div>
            </div>
        </a>
    );
}
export default HoneyCard