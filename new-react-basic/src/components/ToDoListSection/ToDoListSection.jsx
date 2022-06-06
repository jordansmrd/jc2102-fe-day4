import { useState } from "react"
import { Card, CardBody, CardTitle, CardText, Button} from "reactstrap"


function ToDoListSection(props){
    const [myStatus, setStatus] = useState(props.status)

    function changeStatus() {
        myStatus? setStatus(false) 
        : setStatus(true)
        
    }

    return (
        <Card>
            <CardBody>
            <CardTitle className="fw-bold"> {props.tgl}</CardTitle>
            <div style={{ display:  "flex" , justifyContent: "space-between" }}>
                
            <CardText> {props.action}</CardText>

                <div>
                {
                    myStatus==true ?
                    <Button color="success" onClick={changeStatus}> Done</Button> :
                    <Button color="warning" onClick={changeStatus}> On Going</Button>
                }
                {/* {" "}
                <Button color="danger" onClick={changeStatus}> Delete</Button> */}

                </div>

                </div>

            </CardBody>
        </Card>

    )
}

export default ToDoListSection
