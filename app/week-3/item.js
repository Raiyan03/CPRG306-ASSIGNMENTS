const Item = (props) => {
    return (<div className="bg-gray-500 text-white pt-2 pb-2 mt-5 w-1/3">
            <h2 className="text-2xl">{props.name}</h2>
            <p>buy {props.quantity} in {props.category}</p>
        </div>
    );
}

export default Item;