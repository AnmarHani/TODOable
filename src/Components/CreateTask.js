import React, {useState} from 'react'
import {motion} from 'framer-motion'
import axios from '../axios'
import  { useNavigate } from 'react-router-dom'

const CreateTask = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const titleHanlder = (event) => {
        setTitle(event.target.value)
    }   
    const descriptionHanlder = (event) => {
        setDescription(event.target.value)
    }

    const formHanlder = async() => {
        const data = {
            'title':title,
            'desc':description,
            'box':"1"
        }
        const response = await axios.post(`AddTasks/`, data)
        if(response){
            navigate('/tasks')
        }
    }

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
                <form>
                    <input onChange={titleHanlder} style={{backgroundColor:'white'}} type="text" placeholder={props.translate("Custom.Input_Title")}/>
                    <br />
                    <input onChange={descriptionHanlder} style={{backgroundColor:'white'}} type="text" placeholder={props.translate("Custom.Input_Description")}/>
                </form>
                <motion.button 
                    whileHover={{
                        background:"var(--btn-hover)",
                        borderRadius:5,
                        scale:1.09,
                    }}
                    whileTap={{
                        scale:.85,
                    }}
                    onClick={formHanlder}
                >
                    {props.translate("Custom.Create_Task")}
                </motion.button>
            </motion.div>
        </>
    )
}

export default CreateTask
