import { useState } from 'react';

interface IListExample {
    id: number,
    text: string
}

const ListExample = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Mua sữa' },
    { id: 2, text: 'Đi chợ' },
    { id: 3, text: 'Làm bài tập' },
  ]);

  const handleAddItem = () => {
    const newItem = { id: items.length + 1, text: 'Việc mới' };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div >
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button className='text-red-500 pr-2' onClick={() => handleRemoveItem(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <button className='bg-gray-300 rounded px-2 py-1' onClick={handleAddItem}>Thêm việc mới</button>
    </div>
  );
};

export default ListExample;