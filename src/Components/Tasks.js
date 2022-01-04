import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import axios from '../axios'

const Tasks = (props) => {
    const [check, setCheck] = useState(false)

    const checkToggler = async (id) => {
     setCheck(prev => !prev)
     const response = await axios.delete(`DeleteTask/${id}/`)
    }

    return (
        <>
            <motion.div 
            animate={{
                marginTop: props.toggle ? "60px" : "-60px",
                x:0,
                opacity:1
            }}
            initial={{
                x:"100vw",
                opacity:0
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
            className="tasks-container">
               {props.tasks.length > 0 && props.tasks.map((task) =>{
                   return (
                       <motion.div 
                       animate={{
                            x:'0',
                        }}
                        transition={{
                            type:"spring",
                            // duration:0.5, //for tween type
                            stiffness: 40,//for spring type
                        }}
                        exit={{
                            x:'100vw',
                            transition:{ease: "easeInOut"}
                        }}
                       className="task" key={task.id}>
                           <Link to={`/tasks/${task.id}`} >
                                <h5>{task.title}</h5>
                           </Link>
                           <motion.button
                                whileHover={{
                                    background:"var(--btn-hover)",
                                    opacity: 1,
                                    borderRadius:5,
                                    scale:1.09,
                                }}
                                whileTap={{
                                    scale:.85,
                                    opacity: 1,
                                    rotate:-360
                                }}
                                transition={{
                                    type:"spring",
                                    // duration:0.5, //for tween type
                                    stiffness: 100,//for spring type
                                }}
                                onClick={() => checkToggler(task.id)}
                           >
                                <i class="bi bi-check2-square task-checker"></i>
                            </motion.button>
                       </motion.div>
                   )
               })} 
            </motion.div>
            <motion.a 
                whileHover={{
                    background:"var(--btn-hover)",
                    borderRadius:5,
                    scale:1.09,
                }}
                whileTap={{
                    scale:.85,
                }}
            >
                <Link to="/notes">
                    {props.translate("Custom.Go_To_Notes")}
                </Link>
            </motion.a>
        </>
    )
}

export default Tasks
