import React from 'react';
import RowCoin from './RowCoin';

const tableTitles = ["#", "Name", "Price (USD)", "24h %", "Market Cap", "Circulating Supply"];

const TableCoins = ({coins, search}) => {

    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toString().toLowerCase()) | coin.symbol.toString().toLowerCase().includes(search.toString().toLowerCase()));

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {
                        tableTitles.map( title => (<td>{title}</td>) )
                    }
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (<RowCoin coin={coin} key={index} index={index} />) )}
            </tbody>
        </table>
    )
}

export default TableCoins
