import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import TasksBoxComponent from '../Components/TasksBoxComponent';
import { useNavigate, Link } from 'react-router-dom';
import AddListComponent from '../Components/AddListComponent';
import DownArrow from '../images/Down.png';

const Main = styled.div`
z-index:1;
`;

const Header = styled.div`
margin: 0;
background-color: #06205b;
color: white;
height:15vh;
display:flex;
align-items:center;
`;

const Heading = styled.h2`
margin:0;
font-size: 30px;
    margin-left: 60px;
`;

const ImagContainer = styled.div``;

const DownButton = styled.img`
height: 50px;
    width: 50px;
    position: fixed;
    left: 230px;
    top: 26px;
`;

const ProfileImage=styled.img`
position: fixed;
width: 70px;
height: 70px;
border-radius: 50%;
right: 20px;
top: 10px;
`;

const TaskArea = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
`;

const AddListButton = styled.button`
    background-color: #06205b;
    color: white;
    font-size: 40px;
    border:0;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    bottom: 30px;
    position: absolute;
    right: 30px;
    z-index:5;
`;

const MenuUl = styled.ul`
position:fixed;
list-style-type:none;
top:80px;
background-color: #06205b;
padding: 5px 15px;
left: 230px;
color:white;
`;

const MenuLi = styled.li`
cursor: pointer;
color: white;
`;


export default function Dashboard() {

    const [imgurl,setUrl] = useState('');
    const [isVisible, setVisible] = useState(false);
    const [listData,setListData] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

    // const Navigate = useNavigate();

    useEffect(()=>{
        LoadImg();
    },[]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('Llist')) || [];
        setListData(savedTasks);
      }, []);

      useEffect(() => {
        localStorage.setItem('Llist', JSON.stringify(listData));
      }, [listData]);

    const LoadImg=async()=>{
        
        const random = generateRandom();

        try {
            const response = await fetch(`https://picsum.photos/id/${random}/info`,{
                method: 'GET',
                mode: 'cors',});
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setUrl(data.download_url);
              } else {
                console.error('Error fetching image:', response.statusText);
              }
            } catch (error) {
              console.error('Error fetching image:', error);
            }

    }

    const  generateRandom =() => {
        const min = 0;
        const max = 999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
       return randomNumber;
      };

    const OpenList=(e)=>{
        e.preventDefault();

        setVisible(true);
    }

    const receiveData=(value)=>{
        let temp = listData;
       
        temp.push(value);
        console.log(temp);
        setListData(temp);
        setVisible(false);
        localStorage.setItem('Llist', JSON.stringify(listData));
        
    }

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsMenuOpen(false); // Close the menu when an option is selected
    };


  return (
    <>
       <Main>
            <Header>
                <Heading>TasksBoard</Heading>
                <DownButton src={DownArrow}  onClick={toggleMenu}></DownButton>
                <ImagContainer><ProfileImage src={imgurl}></ProfileImage> </ImagContainer>

                {isMenuOpen && (
        <MenuUl className="dropdown">
          <Link to="/weather" style={{textDecoration:'none'}}>
             <MenuLi onClick={() => handleOptionClick('Weather')}>Weather</MenuLi>
          </Link>
          <Link to="/calculator" style={{textDecoration:'none'}}>
          <MenuLi onClick={() => handleOptionClick('Calculator')}>Calculator</MenuLi>
          </Link>
          <Link to="/dashboard" style={{textDecoration:'none'}}>
          <MenuLi onClick={() => handleOptionClick('TaskBoard')}>TaskBoard</MenuLi>
          </Link>
        </MenuUl>
      )}
            </Header>
            <TaskArea>
                {listData.length > 0 && listData.map((a)=>{
                   return <TasksBoxComponent a={a}/>

                })}
                   
                        
            </TaskArea>
            <AddListButton onClick={OpenList}>+</AddListButton>

            {isVisible && (<AddListComponent receiveData={receiveData}/>)}

       </Main>
    
    </>
  )
}