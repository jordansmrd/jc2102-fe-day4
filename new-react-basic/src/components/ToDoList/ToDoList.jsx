import { useState } from "react"
import {Card,CardBody,CardTitle,CardText, Button} from "reactstrap"

function ToDoList(props) {
const [isDone, setIsDone] = useState(props.isDone)   

function toggleDone() {
  setIsDone(!isDone)
}

    return (
<Card>
    <CardBody>
        <CardTitle> { props.title}</CardTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardText> {props.action} </CardText>
        {
            isDone == false?
          (<Button onClick={toggleDone} color="danger"> On Going </Button>)
          
            :
           (<Button onClick={toggleDone}  color="success"> Done </Button>)
        }
        </div>
       
        {/* <Button color="danger"> On Going </Button> */}
    </CardBody>
</Card>

    )
}

export default ToDoList