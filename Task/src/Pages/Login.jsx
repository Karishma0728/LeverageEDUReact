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
    border : 1px solid white;
`;

const Button = styled.button`
background-color: white;
    color: #2432e7;
    border: 0;
    width: 150px;
    padding: 7px;
    margin: 30px;
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


export default function Login() {
    const [email,setEmail] =useState('');
    const [pass,setPass] = useState('');

    const Navigate = useNavigate();

    const sub=(e)=>{
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('Data')) || [];
        const existingUser = users.find((u) => u.email === email);

        if (existingUser) {
            alert('User already exists');
          } else {
            const newUser = { email, pass };
            users.push(newUser);
            localStorage.setItem('Data', JSON.stringify(users));
            alert("Successfull Login")
            Navigate('/signup')
          }

    }

  return (
    <>
    <Main>
        <Middle>
        <Heading>Log in!</Heading>
        <Inputs>
            <Label>Email</Label>
            <Inputbox placeholder='Email' type='email' name='email' value={email}
              onChange={e =>setEmail(e.target.value)} required></Inputbox>
            <Label>Password</Label>
            <Inputbox placeholder='Email' type='password' name='password' value={pass}
              onChange={e=> setPass(e.target.value)} required></Inputbox>
        </Inputs>
        <Spandiv>
           <Span style={{paddingRight:'60px'}}><Inputbox type={"checkbox"} style={{margin:'0',padding:'0',width:'20px',}}></Inputbox>Remember Me</Span>
           <Span style={{paddingLeft:'60px'}}>Forget Password?</Span>
        </Spandiv>
        <ButtonDiv>
           <Button type='submit' onClick={sub}>Log In</Button>
           <Link to="/signup" style={{textDecoration:'none'}}> <SignButton>Already Logged in</SignButton> </Link>
        </ButtonDiv>
        </Middle>
    </Main>
    
    </>
    
  )
}

