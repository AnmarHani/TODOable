import React from 'react'
import {Link} from "react-router-dom";
import {motion} from 'framer-motion'

const Home = (props) => {
    return (
        <>
            <motion.div 
            initial={{
                y:'-100vw'
            }}
            animate={{
                marginTop: props.toggle ? "50px" : "-60px",
                y:0
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
                <p>❝{props.translate("Custom.Home")}❞</p>
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
                <Link to="/tasks">
                    {props.translate("Custom.Continue")}
                </Link>
                </motion.a>
            </motion.div>
        </>
    )
}

export default Home
