import { Container } from "./styles"
import darkImg  from '../../assets/icon-moon.svg'
import lightImg  from '../../assets/icon-sun.svg'

import { CreateTaskForm } from "../CreateTaskForm"
import { useState } from "react"
 
export const HeaderItens = ()=>{
    const [theme, setTheme] = useState('light')
    return(
        <Container>
            <div className="Sla">
                <h1>Todo</h1>
                <button onClick={()=>{ setTheme(theme==='light'?'dark':'light')}}><img src = {theme === 'light'? lightImg:darkImg}  alt="" /></button>
            </div>
            <CreateTaskForm></CreateTaskForm>
            
        </Container>
    )
}