import React from 'react';

const CountryDetails = (props) => {
    return (
        <>
            <table className="table myTable table-bordered">
                <thead>
                    <tr>
                        <th rowSpan="1" colSpan="2">New</th>
                        <th rowSpan="1" colSpan="3">Cases</th>
                        <th rowSpan="1" colSpan="2">Deaths</th>
                        <th rowSpan="1" colSpan="3">Totals</th>
                        <th rowSpan="2" colSpan="1">Tests/m</th>
                        <th rowSpan="2" colSpan="1">Graph</th>
                    </tr>
                    <tr>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>total</th>
                        <th>active</th>
                        <th>critical</th>
                        <th>deaths</th>
                        <th>deaths/m</th>
                        <th>cases/m</th>
                        <th>recovered</th>
                        <th>tests</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.obj.new_cases}</td>
                        <td>{props.obj.new_deaths}</td>
                        <td>{props.obj.cases}</td>
                        <td>{props.obj.active_cases}</td>
                        <td>{props.obj.serious_critical}</td>
                        <td>{props.obj.deaths}</td>
                        <td>{props.obj.deaths_per_1m_population}</td>
                        <td>{props.obj.total_cases_per_1m_population}</td>
                        <td>{props.obj.total_recovered}</td>
                        <td>{props.obj.total_tests}</td>
                        <td>{props.obj.tests_per_1m_population}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default CountryDetails;