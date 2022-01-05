import React, {useState, useEffect} from 'react';
import {
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Tasks from "./Components/Tasks"
import Task from "./Components/Task"
import Notes from "./Components/Notes"
import './index.css'
import {AnimatePresence} from "framer-motion"
import { createGlobalStyle } from 'styled-components';
import {useTranslation} from 'react-i18next'
import i18n from './i18n'
import CreateTask from './Components/CreateTask';
import axios from './axios'

function App() {
  const {t} = useTranslation()

  const [theme, setTheme] = useState(true)
  const location = useLocation()
  const [toggle, setToggle] = useState(false)
  const [language, setLanguage] = useState(false)
  const [tasks, setTasks] = useState([])
  const [saveNote, setSaveNote] = useState('')

  const languageToggler = () => {
    setLanguage(prev => !prev)
  }
  
  const saveNoteHandler = () => {
    localStorage.setItem('Notes', saveNote)
    console.log(localStorage.getItem('Notes'))
  }
  
  
  useEffect(()=>{
    const response = axios.get(`AllTasks/`).then(response => setTasks(response.data.data))
    if(language){
      document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      i18n.changeLanguage("AR")
    }else{
      i18n.changeLanguage("EN")
      document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    }
  },[language])


  const GlobalStyle = createGlobalStyle`
  :root {
      --background-color:${theme ? 'linear-gradient(to right, #b3ffab, #12fff7)' : 'linear-gradient(to right, #556270, #ff6b6b)'};
      --secondary-background-color:${theme ? 'rgba(0, 0, 0, 0.13)' : 'rgba(0, 0, 0, 0.13)'};
      --btn-hover:${theme ? 'linear-gradient(to right, #70e1f5, #ffd194)' : 'linear-gradient(to right, #f0c27b, #4b1248)'};
      --font-hover:${theme ? 'whitesmoke' : 'black'};
      --font-color:${theme ? 'black' : 'whitesmoke'};
      --font-family:${!language ?  "'Raleway', sans-serif" : "'Cairo', sans-serif"};
  }
  `;

  return (
    <>
      <GlobalStyle />
      <div className="container">
          <NavBar saveNoteHandler={saveNoteHandler} translate={t} language={language} languageToggler={languageToggler} toggle={toggle} setToggle={setToggle} setTheme={setTheme} theme={theme}/>
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route exact path="/" element={<Home translate={t} toggle={toggle}/>}/>
              <Route exact path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} translate={t} toggle={toggle}/>}/>
              <Route exact path="/tasks/:id" element={<Task translate={t} toggle={toggle}/>}/>
              <Route exact path="/notes" element={<Notes setSaveNote={setSaveNote} translate={t} toggle={toggle}/>}/>
              <Route exact path="/create-task" element={<CreateTask translate={t} tasks={tasks} setTasks={setTasks} toggle={toggle}/>}/>
            </Routes>
          </AnimatePresence>
      </div>
    </>
  );
}

export default App;
