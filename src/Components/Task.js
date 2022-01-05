import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import {motion} from 'framer-motion'
import axios from '../axios'

const Task = (props) => {
    const {id} = useParams()
    //only show description xD
    const [task, setTask] = useState({})

    useEffect(() =>{
        const response = axios.get(`AllTasks/`).then(response => setTask(response.data.data))
        
    },[])

    return (
        <>  
            <motion.div 
            initial={{
                x:'100vw'
            }}
            animate={{
                marginTop: props.toggle ? "50px" : "-60px",
                x:"0"
            }}
            transition={{
                type:"spring",
                delay: 0.5,
                // duration:0.5, //for tween type
                stiffness: 50,//for spring type
            }}
            exit={{
                x:'-100vw',
                transition:{ease: "easeInOut"}
            }}
            className="home-container">
                <h1>- {props.translate("Custom.Create_Task")} -</h1>
                <motion.button 
                    whileHover={{
                        background:"var(--btn-hover)",
                        borderRadius:5,
                        scale:1.09,
                    }}
                    whileTap={{
                        scale:.85,
                    }}
                >
                    {props.translate("Custom.Create_Task")}
                </motion.button>
            </motion.div>
        </>
    )
}

export default Task
