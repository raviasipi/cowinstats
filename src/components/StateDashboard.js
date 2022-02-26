import {React, useState} from 'react';
import { StateGraph } from './Graph';

const StateDashboard = ({statesData}) => {

    const [showGraph, setShowGraph] = useState(false);

    const [ stateData, setStateData ] = useState({});

    const handleShowGraph = (data) => {
        setShowGraph(true)
        setStateData(data)
    }
    
    return (
    <>
        {showGraph && <StateGraph stateData={stateData} setShowGraph={setShowGraph} showGraph={showGraph}/>}

        <div className="fadeInUp" style={{animationDelay:'1750ms'}}>
        <div className="table-responsive m-1 text-center">
            <table className="table table-hover" >
                <thead className="text-capitalize text-muted fs-5"
                >
                    <tr>
                    <th> state </th>
                    <th className="text-info"> confirmed </th>
                    <th className="text-success"> recovered </th>
                    <th className="text-danger"> active </th>
                    <th> deceased </th>
                    <th> updated </th>
                    </tr>
                </thead>
                <tbody className="text-muted" >
                    {statesData.map((data,index)=>
                        <tr onClick={()=>{handleShowGraph(data)}} key={data.state} className="fadeInUp" style={{animationDelay:`${1750+index*20}ms`}}
                        >
                                <td className="fw-bold text-secondary"> {data.state} </td>
                                <td className="text-info"> {parseInt(data.confirmed).toLocaleString('en-IN')} </td>
                                <td className="text-success"> {parseInt(data.recovered).toLocaleString('en-IN')} </td>
                                <td className="text-danger"> {parseInt(data.active).toLocaleString('en-IN')} </td>
                                <td className="text-secondary"> {parseInt(data.deaths).toLocaleString('en-IN')} </td>
                                <td className="text-secondary"> {data.lastupdatedtime} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
    </>
    )
}

export default StateDashboard