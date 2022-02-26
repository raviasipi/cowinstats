import { motion } from 'framer-motion';
import {React} from 'react';


const CountryDashboard = ({countryData}) => {

    return (
        <div className="d-flex justify-content-evenly my-3">
            <div style={{animationDelay:`500ms`}} className="fadeInUp">
                <motion.div className="d-flex flex-column m-1 p-1" whileHover={{scale:1.1}}>   
                    <p className=" text-info text-center text-capitalize fw-bold ">confirmed</p>
                    <p className=" text-info text-center fs-4">{parseInt(countryData.totalconfirmed).toLocaleString('en-IN')}</p>
                    <p className=" text-secondary text-end fs-6">+{parseInt(countryData.dailyconfirmed).toLocaleString('en-IN')}</p>
                </motion.div>
            </div>
            
            <div style={{animationDelay:`750ms`}} className="fadeInUp">
                <motion.div className="d-flex flex-column m-1 p-1" whileHover={{scale:1.1}}>   
                    <p className=" text-success text-center text-capitalize fw-bold">recovered</p>
                    <p className=" text-success text-center fs-4">{parseInt(countryData.totalrecovered).toLocaleString('en-IN')}</p>
                    <p className=" text-secondary text-end me-1">+{parseInt(countryData.dailyrecovered).toLocaleString('en-IN')}</p>
                </motion.div>
            </div>

            <div style={{animationDelay:`1000ms`}} className="fadeInUp">
                <motion.div className="d-flex flex-column m-1 p-1" whileHover={{scale:1.1}}>   
                    <p className="text-secondary text-center text-capitalize fw-bold">deceased</p>
                    <p className="text-secondary text-center fs-4">{parseInt(countryData.totaldeceased).toLocaleString('en-IN')}</p>
                    <p className="text-secondary text-end me-1 fs-6">+{parseInt(countryData.dailydeceased).toLocaleString('en-IN')}</p>
                </motion.div>
            </div>
        </div>
    )
}

export default CountryDashboard