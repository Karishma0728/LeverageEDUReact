import React, { useState } from 'react'
import styled from 'styled-components'
import Delete from '../images/DeleteIcon.png'
import Cross from '../images/CrossIcon.png'

const Main = styled.div`
 height:100vh;
 width:100vw;
 z-index:3;
 position:fixed;
 top:0;
 left:0;
`;
const ContContain = styled.div`
height:100vh;
width:100vw;
background-color:rgb(155, 146, 147,0.2);
display: flex;
    align-items: center;
    justify-content: center;
`;

const Contain = styled.div`
height: 35vh;
display: flex;
justify-content: center;
flex-direction: column;
background-color: white;
padding: 25px;
`;

const ImgDiv = styled.div`
margin:10px 0;
`;

const Images = styled.img`
height:20px;
width:20px;

`;

const TaskHeading = styled.p`
margin:10px 0;
font-size:17px;
`;

const TextArea = styled.textarea`
height: 100px;
    padding: 10px;
    box-sizing: border-box;
background-color:rgb(173, 216, 230,0.4);
width: 300px;
margin:5px 0;
`;

const Button = styled.button`
border: 0;
    background-color: white;
    width: 70px;
    margin:5px 0;
`;

export default function EditTaskComponent({receiveData}) {
    const [details,setDetails] = useState('');
    
  return (
    <>
    <Main>
        <ContContain>
        <Contain>
            <ImgDiv>
            <Images src={Delete}></Images>
            <Images src={Cross} style={{height:'16px', width:'16px',paddingLeft:'250px'}}
              onClick={()=>{receiveData(details)}}></Images>
            </ImgDiv>
                <TaskHeading> Heading </TaskHeading>
                
                <TextArea placeholder='Add Details' name='textarea' value={details}
                  onChange={(e)=>setDetails(e.target.value)}></TextArea>
                  <Button >Add Date</Button>
            
        </Contain>
        </ContContain>
    </Main>
    </>
    
  )
}

