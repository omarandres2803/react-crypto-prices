import React, { useMemo } from 'react';
import RowCoin from './RowCoin';

const tableTitles = ["#", "Name", "Price (USD)", "24h %", "Market Cap", "Circulating Supply"];

const TableCoins = ({coins, search}) => {

    const filteredCoins = useMemo(() => {
        return coins.filter((coin) => {
            return coin.name.toLowerCase().includes(search.toString().toLowerCase()) | coin.symbol.toString().toLowerCase().includes(search.toString().toLowerCase());
        })
    }, [coins, search]);

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
