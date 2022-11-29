import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";

function Counter() {
const[count1,setCount1] = useState(0);
 const[count2,setCount2] = useState(0);
 const handleCount1=()=>{
    setCount1(count1+1)
 }
 const handleCount2=()=>{
    setCount2(count2+1)
 }

 const customStyle = {
     color: "black",
     fontSize: "20px",
     border: "1px solid yellow",
  
 }
  
  return (
    <div>
   <h1 style= {customStyle} className='h1'>Total: {count1+count2}</h1>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Count1: {count1}</Card.Title>
                <Button style={customStyle} className='btn' onClick={handleCount1}>Add +</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Count2: {count2}</Card.Title>
                <Button className='btn' onClick={handleCount2}>Add +</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Counter;
