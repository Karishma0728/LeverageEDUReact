import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Dots from'../images/Dots.png';
import Edit from '../images/Edit.png';
import EditTaskComponent from './EditTaskComponent';

const TaskBox = styled.div`
    border: 1px solid black;
    width: 200px;
    margin: 20px;
    display: flex;
    align-items: self-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 15px;
    min-height: 130px;
    overflow: auto;
`;

const TaskHeading = styled.h3`
    margin-top:10px;
`;
const TaskHeadingDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
    align-items: center;
    height: 50px;
`;
const TaskHeadingImg = styled.img`
   height:20px;
   width:20px;
   position: sticky;
    left: 200px;
    cursor: pointer;
`;
const AddTaskDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const AddTaskButton =styled.button`
    background-color: #06205b;
    color: white;
    border: 0;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    cursor: pointer;
`;

const AddTaskName = styled.input`
border:0;
margin-left: 60px;
    width: 80px;
`;

const TaskList = styled.li`
list-style-type:none;
margin:10px 0;
display: flex;
    flex-direction: row;
    align-items: center;
`;

const Inputbox = styled.input`
    color:white;
    background-color:unset;
    padding: 7px;
    margin: 15px;
    width: 350px;
    border:1px solid white;
`;

const ListContain = styled.div`

`;

const EditImg = styled.img`
height: 20px;
    width: 20px;
    position: sticky;
    padding-left: 100px;
    left: 200px;
    cursor: pointer;
`;


export default function TasksBoxComponent(props) {
    const [list,setList] = useState([]);
    const [value,setvalue] = useState([]);
    const [isVisible, setVisible] = useState(false);

    const addList=(e)=>{
        e.preventDefault();

        let temp = list;
        temp.push(value);
        setList(temp);
        setvalue('');

        localStorage.setItem('dataList', JSON.stringify(list));

    }

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('dataList')) || [];
        setList(savedTasks);
    },[]);

    useEffect(() => {
        localStorage.setItem('dataList', JSON.stringify(list));
    },[list]);

    const receiveData=()=>{
        setVisible(false);
        
    }

    const OpenList=(e)=>{
        e.preventDefault();

        setVisible(true);
    }


  return (
    <>
    <TaskBox>
        <TaskHeadingDiv>
            <TaskHeading>{props.a}</TaskHeading>
            <TaskHeadingImg src={Dots}></TaskHeadingImg>
        </TaskHeadingDiv>

        <AddTaskDiv> 
            <AddTaskButton onClick={addList}>+</AddTaskButton>
            <AddTaskName placeholder='Add a Task' type='text' name='addTask' value={value}
               onChange={(e)=>setvalue(e.target.value)}/>

        </AddTaskDiv>
        <ListContain>
            {list.length > 0 && list.map((item) => <TaskList>
                <Inputbox type={"radio"} 
                 style={{margin:'0',padding:'0',width:'20px',height:'20px',marginRight:'10px',}}></Inputbox>
                {item} 
                <EditImg src={Edit}  onClick={OpenList}/>
                </TaskList>)
            }
        </ListContain>
        {isVisible && (<EditTaskComponent receiveData={receiveData}/>)}
    </TaskBox>
    </>
  )
}
