import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);


  const [itemName, setItemName] = useState('');

const handleAddItem = (e) => {
  e.preventDefault();
  setWishlist([...wishlist, itemName]);
  setItemName('');
};

const handleRemoveItem = (index) => {
    const updatedWishlist = wishlist.filter((item, i) => i !== index);
    setWishlist(updatedWishlist);
  };
  
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

<ul className='mt-4'>
  {wishlist.map((item, index) => (
    <li key={index} className='mb-2'>
      {item}
      <button
        onClick={() => handleRemoveItem(index)}
        className='bg-red-500 text-white px-2 py-1 rounded-lg ml-2'
      >
        Remove
      </button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Wishlist;
