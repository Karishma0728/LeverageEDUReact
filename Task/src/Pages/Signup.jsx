import React, { useState } from 'react'
import styled from 'styled-components'
import backround from '../images/Back.jpg'
import { useNavigate, Link } from 'react-router-dom';

const Main=styled.div`
   background:url(${backround});
   height:100vh;
   background-size:cover;

`;

const Middle=styled.div`
height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;

`;

const Heading=styled.h1`
height:20vh;
margin:0px;
color:white;
font-size:35px;

   
`;

const Inputs=styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Inputbox = styled.input`
    color:white;
    background-color:unset;
    padding: 7px;
    margin: 15px;
    width: 350px;
    border:1px solid white;
`;

const Button = styled.button`
background-color: white;
    color: #2432e7;
    border: 0;
    width: 150px;
    padding: 7px;
    margin: 35px;
    font-weight: 600;
    font-size: 17px;
`;


const SignButton = styled.p`
background-color: unset;
    color: white;
    border: 0;
`;
const ButtonDiv = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Spandiv = styled.div``;

const Span = styled.span`
  color:white;
`;

const Label = styled.label`
color:white;
`;


export default function Signup() {

  const [uname,setUname] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

  const Navigate = useNavigate();

  const Sub=(e)=>{
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('Data')) || [];
    const user = users.find((u) => u.email === email && u.pass === pass);

    if (user) {
      Navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  }


  return (
    <>
    <Main>
        <Middle>
        <Heading>Sign up</Heading>
        <Inputs>
            <Label>Username</Label>
            <Inputbox placeholder='Enter Username' type='text' name="Username" value={uname}
              onChange={e=>setUname(e.target.value)}></Inputbox>
            <Label>Email</Label>
            <Inputbox placeholder='Enter Email' type='email' name="Email" value={email}
              onChange={e=>setEmail(e.target.value)} required></Inputbox>
            <Label>Password</Label>
            <Inputbox placeholder='Enter Password' type='password' name="Password" value={pass}
              onChange={e=>setPass(e.target.value)}></Inputbox>
        </Inputs>
        <Spandiv>
        <Span style={{paddingRight:'120px'}}><Inputbox type={"checkbox"} style={{margin:'0',padding:'0',width:'20px',}}></Inputbox>I accept the terms & conditions</Span>
        </Spandiv>
        <ButtonDiv>
        <Button type='submit' onClick={Sub}>Sign up</Button>
        <Link to="/login" style={{textDecoration:'none'}}> <SignButton>Create Account</SignButton> </Link>
        </ButtonDiv>
        </Middle>
    </Main>
    
    </>
    
  )
}

