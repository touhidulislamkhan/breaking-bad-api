import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      // console.log(response.data);
      setItems(response.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query])

  // console.log('items', items);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
