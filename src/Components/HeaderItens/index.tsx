import { Container } from "./styles"
import bgImg  from '../../assets/icon-moon.svg'
 
export const HeaderItens = ()=>{
    return(
        <Container>
            <div className="Sla">
                <h1>Todo</h1>
                <button><img src = {bgImg}  alt="" /></button>
            </div>
        
        </Container>
    )
}