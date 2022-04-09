import { Container } from "./styles"
import bgImg  from '../../assets/icon-moon.svg'
import { CreateTaskForm } from "../CreateTaskForm"
 
export const HeaderItens = ()=>{
    return(
        <Container>
            <div className="Sla">
                <h1>Todo</h1>
                <button><img src = {bgImg}  alt="" /></button>
            </div>
            <CreateTaskForm></CreateTaskForm>
            
        </Container>
    )
}