import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom";

const NavBar = (props) => {

    const themeToggler = () => {
        props.setTheme(prev => !prev)
    }

    const navToggler = () => {
        props.setToggle(prev => !prev)
    }



    return (
        <>
            <motion.nav 
                class="nav-container"
                animate={{
                    y:props.toggle ?"30rem":"-40rem",
                }}
                transition={{
                    type:"spring",
                    // duration:0.5, //for tween type
                    stiffness: 50,//for spring type
                }}
            >
                <motion.a 
                    class="nav-brand"
                >To-do</motion.a>
                        <motion.button 
                        whileHover={{
                            background:"var(--btn-hover)",
                            borderRadius:5,
                            scale:1.09,
                        }}
                        whileTap={{
                            scale:.85,
                        }}
                        class="nav-item"
                        onClick={themeToggler}
                        >
                            {props.theme ? <i class="bi bi-moon-fill"></i> : <i class="bi bi-brightness-high-fill"></i>}
                        </motion.button>
                <motion.button 
                    whileHover={{
                        background:"var(--btn-hover)",
                        borderRadius:5,
                        scale:1.09,
                    }}
                    whileTap={{
                        scale:.85,
                    }}
                    class="nav-item"
                    onClick={props.languageToggler}
                >
                    {!props.language ? 'AR' : 'EN'}
                </motion.button>

                {window.location.href.indexOf("notes") > -1 && 
                    (
                    <motion.button 
                    whileHover={{
                        background:"var(--btn-hover)",
                        borderRadius:5,
                        scale:1.09,
                    }}
                    whileTap={{
                        scale:.85,
                    }}
                    class="nav-item"
                    >
                        {props.translate("Custom.Save_Note")}
                    </motion.button>
                    )   
                }
                {window.location.href.indexOf("tasks") > -1 && 
                    (<motion.a 
                        whileHover={{
                            background:"var(--btn-hover)",
                            borderRadius:5,
                            scale:1.09,
                        }}
                        whileTap={{
                            scale:.85,
                        }}
                        class="nav-item"
                        >
                        <Link to="/create-task">
                            {props.translate("Custom.Create_Task")}
                        </Link>
                    </motion.a>
                    )   
                }
            </motion.nav>
            <motion.button 
                onClick={navToggler} 
                class="nav-toggler"
                animate={{
                    y:props.toggle ?"33rem":"25rem",
                    rotate: props.toggle ? 180 : 0,
                }}
                transition={{
                    type:"spring",
                    // duration:0.5, //for tween type
                    damping:8, //for I think for ease in or out
                    stiffness: 50,//for spring type
                }}
            >
                <i class="bi bi-chevron-down"></i>
            </motion.button>
        </>
    )
}

export default NavBar
