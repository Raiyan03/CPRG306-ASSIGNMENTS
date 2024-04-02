
const Item = (props) => {
    return (
      <div onClick={() => {props.handleClick(props.name)}} className=" hover:bg-orange-500 cursor-pointer p-2 mt-2 bg-gray-900 ">
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
  