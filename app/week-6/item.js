
const Item = (props) => {
    return (
      <div className=" py-1 bg-gray-900 my-2 w-1/4">
          <h3>
              {props.name}
          </h3>
          <p>
              buy {props.quantity} in {props.category}
          </p>
      </div>
    )
  }
  
  export default Item
  