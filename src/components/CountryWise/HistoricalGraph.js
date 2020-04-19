import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const CustomTooltip = ({active, payload, label}) => {
    if (active) {
        // console.log("payload ", payload);
        // console.log("label ", label);
        return (<div className="custom-tooltip">
            <p className="label"> {
                `${label} : ${
                    payload[0].value
                }`
            }</p>
        </div>);
    }

    return null;
};

const HistoricalGraph = (country) => {

    const [ countryDet, setCountryDetails ] = useState([]);

    useEffect( () => {
        const headers = {
            "content-type" : "application/json",
            "x-rapidapi-key" : "97a63c8dedmsh913a0d6151de6bep15a7f5jsna10e805331aa",
            "x-rapidapi-host" : "coronavirus-monitor.p.rapidapi.com"
        };
        const getHistory = async () => {
            const data =  await axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country='+country.name, { headers : headers });
            //console.log("data ", data);
            let newDet = data.data.stat_by_country.slice();
            newDet.forEach(element => {
                element.record_timeStamp = new Date (element.record_date).getTime();
                element.total_cases = parseInt(element.total_cases, 10);
            });
            setCountryDetails(newDet);
        }
        getHistory();
    }, []);

    return (
        <div className="historical-graph">
            <LineChart
                width={50}
                height={50}
                data={countryDet}
                // syncId="anyId"
                margin={{ top:10, bottom :10, left : 10, right :0}}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="record_date" hide={true}/>
                <YAxis hide={true}/>
                <Tooltip 
                    content={ country.thumbnail ? null : <CustomTooltip />} 
                />
                <Line type="monotone" dataKey="total_cases" stroke="#fff" dot={false}/>
            </LineChart>
        </div>
    );
}
export default HistoricalGraph;