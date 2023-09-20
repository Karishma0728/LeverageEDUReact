import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Main = styled.div`
 height:100vh;
 width:100vw;
 z-index:2;
 position:fixed;
 top:0;
 left:0;
`;

const Contain = styled.div`
  height:100vh;
  background-color:rgb(173, 216, 230, 0.2);
  display: flex;
    align-items: center;
    justify-content: center;
`;

const List = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
border: 0;
width: 350px;
height: 50px;
padding-left:30px;
`;

const Button = styled.button`
height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 0;
    background-color: #06205b;
    color: white;
    font-size: 35px;
    left: -50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function AddListComponent({receiveData}) {
    const [listName,setListName] = useState('');
    
  return (
    <>
    <Main>
        <Contain>
            <List>
                <Input placeholder='New List' type='text' name='listName' value={listName}
                  onChange={(e)=>setListName(e.target.value)}></Input>
                  <Button onClick={()=>receiveData(listName)}>+</Button>
            </List>
        </Contain>
    </Main>
    </>
    
  )
}

