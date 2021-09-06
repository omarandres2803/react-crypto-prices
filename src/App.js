import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setsearch] = useState([])

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1');
    console.log(res.data);
    setCoins(res.data);
  }

  // Function that will get executed as soon as the App is loaded
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="container">
      <div className='row'>
        <input type="text" placeholder="Search a Coin" className="form-control bg-dark text-light border-0 mt-4 text-center" onChange={e => setsearch(e.target.value)}/>
        <TableCoins coins={coins} search={search}></TableCoins>
      </div>
      
    </div>
  );
}

export default App;
