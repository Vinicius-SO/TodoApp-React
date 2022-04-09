import { FormEvent, useState } from "react"
import { Container } from "./styles"
import checkIMG from '../../assets/check.svg'

interface TaksType {
    id: number
    task: string
    isComplete:boolean
}

export const CreateTaskForm = () => {
    const [tasks,setTasks] = useState<TaksType[]>([])
    const [task, setTask] = useState('')
    const [completed,setCompleted] = useState(false)

    const handleInput= (e:any)=>{
        const newTasks = [...tasks]
        setTask(e.target.value)
        newTasks.push({
            id: tasks.length,
            task,
            isComplete: completed
        })
        setTasks(newTasks)
    }
    const handleSubmit= (e:FormEvent)=>{
        e.preventDefault()
    }

    return(

        <Container onSubmit={handleSubmit}>
            <button type="button" onClick={()=>{setCompleted(!completed)}}>
                {completed && <img src={checkIMG}/>}
            </button>
            <input type="text" placeholder='Type Here' value={task} onChange={e=>setTask(e.target.value)}/>
        </Container>
    )
}