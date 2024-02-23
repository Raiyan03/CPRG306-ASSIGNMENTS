import ItemList from "./item-list"

const page = () => {
  return (
    <main className=' min-h-screen p-1  bg-black text-white'>
        <h1 className='text-3xl'>Shopping List</h1>
        <ItemList />
    </main>
  )
}

export default page
