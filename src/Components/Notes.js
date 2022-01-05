import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Notes = (props) => {

    const [note, setNote] = useState('')

    const textHandler = (event) => {
        props.setSaveNote(event.target.value)
        setNote(event.target.value)
    }

    useEffect(() =>{
        const notes = localStorage.getItem('Notes')
        setNote(notes)
    },[])

    return (
        <>
            <motion.textarea name="" id="" cols="30" rows="10" placeholder={props.translate("Custom.Input_Notes")} 
                onChange={textHandler}
                value={note}
                animate={{
                    marginTop: props.toggle ? "110px" : "-20px",
                    x:0,
                    opacity:1,
                }}
                initial={{
                    x:500,
                    opacity:0
                }}
                transition={{
                    type:"spring",
                    delay: 0.5,
                    // duration:0.5, //for tween type
                    stiffness: 70,//for spring type
                }}
                exit={{
                    x:'-100vw',
                    transition:{ease: "easeInOut"}
                }}
            />
            <motion.a 
                animate={{
                    marginTop: props.toggle ? "110px" : "-20px",
                }}
                whileHover={{
                    background:"var(--btn-hover)",
                    borderRadius:5,
                    scale:1.09,
                }}
                whileTap={{
                    scale:.85,
                }}
                transition={{
                    type:"spring",
                    delay: 0.5,
                    // duration:0.5, //for tween type
                    stiffness: 70,//for spring type
                }}
                class="back-btn"
            >
                <Link to="/tasks">
                    {props.translate("Custom.Back")}
                </Link>
            </motion.a>
        </>
    )
}

export default Notes
