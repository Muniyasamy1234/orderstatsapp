import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OrderStat from './OrderStat';

const WidgetOrderStats = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/statistics")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [data])

    return (
        <div>
            <OrderStat data={data}/>
        </div>
    )
}



export default WidgetOrderStats