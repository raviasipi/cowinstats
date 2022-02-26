import { motion } from 'framer-motion';
import {React, useEffect, useState} from 'react';
import { Modal } from 'react-bootstrap';
import { Doughnut, Line } from 'react-chartjs-2';

const graphClass = "d-flex flex-wrap justify-content-evenly bg-light";

const DoseGraph = ({data, setShowGraph, showGraph}) => {

    const [ title, setTitle ] = useState(['Total Doses Administered']);
    const [ totalCount, setTotalCount] = useState(parseInt(data.firstdoseadministered)+parseInt(data.seconddoseadministered));
    const [ labelsList, setLabelsList ] = useState(['1st Dose','2nd Dose']);
    const [ dataList, setDataList ] = useState([data.firstdoseadministered,data.seconddoseadministered]);
    
    const handleClose = () => setShowGraph(false);

    const handleDataChange = (filterType) =>{
        if( filterType === 'total' ){
            setDataList([data.firstdoseadministered,data.seconddoseadministered])
            setLabelsList(['1st Dose','2nd Dose'])
            setTitle(['Doses Administered - Total'])
            setTotalCount(parseInt(data.firstdoseadministered)+parseInt(data.seconddoseadministered))
        }
        else if(filterType === 'forntlineworkers' ){
            setDataList([data.frontlineworkersvaccinated1stdose,data.frontlineworkersvaccinated2nddose])
            setLabelsList(['1st Dose','2nd Dose'])
            setTitle(['Doses Administered - Frontline Workers'])
            setTotalCount(parseInt(data.frontlineworkersvaccinated1stdose)+parseInt(data.frontlineworkersvaccinated2nddose))
        }
        else if(filterType === 'healthworkers' ){
            setDataList([data.healthcareworkersvaccinated1stdose,data.healthcareworkersvaccinated2nddose])
            setLabelsList(['1st Dose','2nd Dose'])
            setTitle(['Doses Administered - Health Workers'])
            setTotalCount(parseInt(data.healthcareworkersvaccinated1stdose)+parseInt(data.healthcareworkersvaccinated2nddose))
        }
        else if(filterType === 'over45years' ){
            setDataList([data.over45years1stdose,data.over45years2nddose])
            setLabelsList(['1st Dose','2nd Dose'])
            setTitle(['Doses Administered - Over 45 Years'])
            setTotalCount(parseInt(data.over45years1stdose)+parseInt(data.over45years2nddose))
        }
        else if(filterType === 'over60years' ){
            setDataList([data.over60years1stdose,data.over60years2nddose])
            setLabelsList(['1st Dose','2nd Dose'])
            setTitle(['Doses Administered - Over 60 Years'])
            setTotalCount(parseInt(data.over60years1stdose)+parseInt(data.over60years2nddose))
        }
        else{
            setDataList([])
            setLabelsList([])
            setTitle([])
            setTotalCount()
        }

    }

    return (
            <Modal show={showGraph} onHide={handleClose}  centered >
                <Modal.Body className={graphClass} >
                    <motion.div className="m-1 p-1"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    >
                        <div className="text-center text-muted fw-bold m-1">{title}</div>
                        <div className="text-center text-success">Total : <b>{parseInt(totalCount).toLocaleString('en-IN')}</b></div>
                        <Doughnut data={{
                            labels : labelsList,
                            datasets: [{
                                label: 'My First Dataset',
                                data: dataList,
                                backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)'
                                ],
                                hoverOffset:4
                            }]
                        }}
                        />
                    </motion.div>
                    
                    <motion.div className="d-flex flex-column flex-wrap justify-content-evenly"
                        initial={{opacity:0,x:"10vw"}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:1,type:'spring'}}
                    >
                        <motion.div className="btn btn-secondary m-1" onClick={()=>{handleDataChange('forntlineworkers')}}>Front Line Workers</motion.div>
                        <motion.div className="btn btn-secondary m-1" onClick={()=>{handleDataChange('healthworkers')}}>Health Workers</motion.div>
                        <motion.div className="btn btn-secondary m-1" onClick={()=>{handleDataChange('over45years')}}>Over 45 Years</motion.div>
                        <motion.div className="btn btn-secondary m-1" onClick={()=>{handleDataChange('over60years')}}>Over 60 Years</motion.div>
                        <motion.div className="btn btn-secondary m-1" onClick={()=>{handleDataChange('total')}}>Total</motion.div>
                    </motion.div>

                </Modal.Body>
            </Modal>
    )
}

const CountryGraph = ({graphData}) => {
    const [ labelsList, setLabelsList ] = useState([])
    const [ dataList, setDataList ] = useState({})

    useEffect(()=>{
        const dConfirmedList=[]
        const dDeceasedList=[]
        const dRecoveredList=[]
        const lList=[]
        graphData.forEach(obj => {
            dConfirmedList.push(parseInt(obj.dailyconfirmed))
            dDeceasedList.push(parseInt(obj.dailydeceased))
            dRecoveredList.push(parseInt(obj.dailyrecovered))
            lList.push(obj.dateymd)
        })

        setDataList({'confirmedData':dConfirmedList,'deceasedData':dDeceasedList, 'recoveredData':dRecoveredList})
        setLabelsList(lList)
    },[graphData])

    return (

        <div className="m-1">
            <div className="p-3 fadeInUp" style={{height:30+'vh',animationDelay:'1500ms'}}
                >
                <Line data={{
                    labels : labelsList,
                    datasets: [
                        {
                            label: 'Confirmed',
                            data: dataList.confirmedData,
                            backgroundColor: [
                                'rgb(54, 162, 235)'

                            ],
                            hoverOffset:4
                        },
                        {
                            label: 'Deceased',
                            data: dataList.deceasedData,
                            backgroundColor: [
                                'rgb(178,190,181)'
                            ],
                            hoverOffset:4
                        },
                        {
                            label: 'Recovered',
                            data: dataList.recoveredData,
                            backgroundColor: [
                            	'rgb(50,205,50)'
                            ],
                            hoverOffset:4
                        }
                    ]
                    }}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        </div>
    )
}

const StateGraph = ({stateData, showGraph, setShowGraph}) => {

    const [ title, setTitle ] = useState(stateData.state);
    const [ totalCount, setTotalCount] = useState(parseInt(stateData.confirmed));
    const [ labelsList, setLabelsList ] = useState(['recovered','active','deaths']);
    const [ dataList, setDataList ] = useState([stateData.recovered,stateData.active,stateData.deaths]);

    const handleClose = () => {
        setShowGraph(false)
        setTitle()
        setTotalCount()
        setLabelsList()
        setDataList()
    };

    return (
            <Modal show={showGraph} onHide={handleClose}  centered>
                <Modal.Body className={graphClass} >
                    <motion.div className="m-1 p-"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    >
                        <div className="text-center text-muted fw-bold m-1">{title}</div>
                        <div className="text-center text-muted">Confirmed : <b>{parseInt(totalCount).toLocaleString('en-IN')}</b></div>
                        <Doughnut data={{
                            labels : labelsList,
                            datasets: [{
                                label: 'State',
                                data: dataList,
                                backgroundColor: [
                                'rgb(50,205,50)',
                                'rgb(54, 162, 235)',
                                'rgb(178,190,181)'
                                ],
                                hoverOffset:4
                            }]
                        }}
                        />
                        <div className="text-center text-muted">Last updated : <b>{stateData.lastupdatedtime}</b></div>
                    </motion.div>

                </Modal.Body>
            </Modal>
    )
}

export { DoseGraph, CountryGraph, StateGraph };