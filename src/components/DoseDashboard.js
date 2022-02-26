import { motion } from 'framer-motion';
import {React, useState} from 'react';
import { DoseGraph } from './Graph';

const DoseDashboard = ({doseData}) => {

    const [showGraph, setShowGraph] = useState(false);

    const handleShowGraph = () => {
        setShowGraph(true)
    }
    
    return (
        <>
            {showGraph && <DoseGraph data={doseData} setShowGraph={setShowGraph} showGraph={showGraph}/>}

            <div className='d-flex justify-content-center mb-3 fadeInUp' style={{animationDelay:'1250ms'}}>
                <motion.div className="btn btn-success rounded-pill " role="alert" 
                onClick={()=>{handleShowGraph()}}
                whileHover={{scale:1.1}}
                >
                    &#10003; {parseInt(doseData.totaldosesadministered).toLocaleString('en-IN')} doses administered
                </motion.div>
            </div>
        </>
    )
}

export default DoseDashboard