import React from 'react'

const RowCoin = ({coin, index}) => {
    return (
        <tr key={coin.id} >
            <td>{index + 1}</td> 
            <td><img src={coin.image} style={{width: "25px"}} /> <span>{coin.name}</span> <span className="text-muted text-uppercase">({coin.symbol})</span></td> 
            <td>$ {coin.current_price}</td>   
            <td className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
                {coin.price_change_percentage_24h}%
            </td>   
            <td>${coin.market_cap}</td>   
            <td>{coin.circulating_supply} <span className="text-uppercase text-muted">{coin.symbol}</span></td>   
        </tr>
    )
}

export default RowCoin
