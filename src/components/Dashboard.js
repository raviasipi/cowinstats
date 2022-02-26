
import { React, useEffect, useState } from 'react';
import CountryDashboard from './CountryDashboard';
import DoseDashboard from './DoseDashboard';
import { CountryGraph } from './Graph';
import StateDashboard from './StateDashboard';

const Dashboard = ({ setLastUpdate }) => {

    const url = 'https://data.covid19india.org/data.json'

    const [countryData, setCountryData] = useState(null)
    const [statesData, setStatesData] = useState(null)
    const [doseData, setDoseData] = useState(null)
    const [graphData, setGraphData] = useState(null);

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async (url) => {
        await fetch(url)
            .then(response => response.json())
            .then(result => {
                    setLastUpdate(result.statewise[0].lastupdatedtime)
                    setGraphData(result.cases_time_series)
                    setCountryData(result.cases_time_series[result.cases_time_series.length - 1])
                    // setCountryData(result.statewise.filter(data=>data.state==='Total'))
                    setStatesData(result.statewise.filter(data => data.state !== 'Total'))
                    setDoseData(result.tested[result.tested.length - 1])
                    setLoading(false)
                })
            .catch((error) => {
                setLoading(false)
                setError(error)
                })
    }

    useEffect(() => {
        fetchData(url)
    }, [])

    if (loading) {
        return (
            <div style={{ minHeight: '70vh' }} className="d-flex flex-column justify-content-center">
                <h2 className="text-center text-muted"> Loading Covid19 Stats </h2>
            </div>
        )
    }
    else if (error) {
        console.log(error)
        return (
            <div style={{ minHeight: '70vh' }} className="d-flex flex-column justify-content-center">
                <h2 className="text-center text-muted"> Error Loading Covid19 Stats</h2>
            </div>
        )
    }
    else
        return (
            <div style={{ minHeight: '70vh' }}>
                {countryData && <CountryDashboard countryData={countryData} />}

                {doseData && <DoseDashboard doseData={doseData} />}

                {graphData && <CountryGraph graphData={graphData} />}

                {statesData && <StateDashboard statesData={statesData} />}
            </div>
        )
}

export default Dashboard;