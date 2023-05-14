import React from 'react'

const [itemName, setItemName] = useState('');

const handleAddItem = (e) => {
  e.preventDefault();
  setWishlist([...wishlist, itemName]);
  setItemName('');
};

const Form = () => {
  return (
    <div>
        <h2>Wishlist</h2>
    <form onSubmit={handleAddItem}>
      <input
        type='text'
        placeholder='Enter item name'
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className='border rounded-lg p-2 mr-2'
      />
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
        Add to Wishlist
      </button>
    </form>

    <ul className='mt-4'>
  {wishlist.map((item, index) => (
    <li key={index} className='mb-2'>
      {item}
    </li>
  ))}
</ul>
    </div>
  )
}

export default Form