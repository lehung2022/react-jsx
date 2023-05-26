
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "Kung Lao"
    },
    {
        id: 2,
        checked: false,
        item: "Shang Tsung"
    },
    {
        id: 3,
        checked: false,
        item: "Raiden"
    }
])

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

  return (
    <>
      <div className='App'>
        <Header  />
        <Content 
        items={items}
        setItems={setItems}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        />
        <Footer length={items.length}/>
      </div>

    </>
  )
}

export default App;
