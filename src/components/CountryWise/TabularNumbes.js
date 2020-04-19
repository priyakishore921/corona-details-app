import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDetails from './CountryDetails';

const TabularNumber = () => {
    const [ countrieStats, setCountriesStats ]  = useState([]);

    useEffect( () => {
        const getcountryStats = async () => {
            const headers = {
                "content-type" : "application/json",
                "x-rapidapi-key" : "97a63c8dedmsh913a0d6151de6bep15a7f5jsna10e805331aa",
                "x-rapidapi-host" : "corona-virus-world-and-india-data.p.rapidapi.com"
            };
            const newCountryStats = await axios("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {headers : headers});
            setCountriesStats([...newCountryStats.data.countries_stat]);
        }
        getcountryStats();
    }, []);

    // console.log("countrieStats ", countrieStats);

    return (
        <table className="table myTable borderless">
            <tbody>
                {
                    countrieStats.map( (item, idx) => {
                        return ( 
                            <>
                                <tr key={idx}>
                                    <td id={item.country_name} className="text-left">
                                        {item.country_name}
                                    </td>
                                </tr>
                                <tr key={item.country_name}><td>
                                    <CountryDetails obj={item} />
                                </td></tr>
                                </>
                        )
                    })
                }
            </tbody>
        </table>
    );
}
export default TabularNumber;