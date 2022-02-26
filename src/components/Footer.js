import { motion } from 'framer-motion';
import {React} from 'react';

const Footer = ()=> {
    return (
        <motion.div 
        className="d-flex flex-column justify-content-center text-secondary bg-dark fw-bold text-center fadeInUp"  
        style={{height:'20vh',animationDelay:'3000ms'}}
        >
            <h4>Created by IVAR </h4>
            <p >Source : https://www.covid19india.org/ </p>
        </motion.div>
    )
}

export default Footer;