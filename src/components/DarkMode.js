
import { motion } from 'framer-motion';
import {React} from 'react';

const DarkMode = ({ mode, setMode, lastUpdate }) => {

    const handleMode = (mode) => {
        setMode(mode)
    }

    return (
        <div className="d-flex justify-content-end px-4 fadeInUp" style={{animationDelay:'400ms'}}
        >
            {mode 
                ? 
                <>
                <motion.div className="btn btn-sm  btn-light rounded-pill" onClick={()=>handleMode('')} whileHover={{scale:1.1}} > {lastUpdate}  &#9678; </motion.div> 
                </>
                : 
                <motion.div className="btn btn-sm btn-secondary rounded-pill" onClick={()=>handleMode('bg-dark')} whileHover={{scale:1.1}}> {lastUpdate}  &#9673;</motion.div>
            }
        </div>
    )

}

export default DarkMode