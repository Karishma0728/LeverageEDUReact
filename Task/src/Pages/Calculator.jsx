import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import DownArrow from '../images/BlackDown.png';


const CalculatorContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CalculatorInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #333;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 110px;
  padding: 10px;
  font-size: 18px;
  margin: 5px;
  cursor: pointer;
`;

const DownButton = styled.img`
height: 50px;
    width: 50px;
    position: fixed;
    left: 455px;
    top: 29px;
`;

const MenuUl = styled.ul`
position:fixed;
list-style-type:none;
padding: 5px 15px;
    color: black;
    text-decoration: none;
    left: 470px;
    background-color: rgb(155, 146, 147,0.2);
    top: 65px;
`;

const MenuLi = styled.li`
cursor: pointer;
color: black;
`;

const Calculator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const operators = ['+', '-', '*', '/'];

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setHistory([...history, `${input} = ${result}`]);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false); 
  };

  return (
    <>
    <>
    <h1 style={{padding: '10px 38%',}}>Calculator</h1>
    <DownButton src={DownArrow}  onClick={toggleMenu}></DownButton>
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
      </>
    <CalculatorContainer>
      <CalculatorInput type="text" value={input} readOnly />
      <div>
        <Button onClick={handleInput.bind(null, '7')}>7</Button>
        <Button onClick={handleInput.bind(null, '8')}>8</Button>
        <Button onClick={handleInput.bind(null, '9')}>9</Button>
        <Button onClick={handleInput.bind(null, '+')}>+</Button>
      </div>
      <div>
        <Button onClick={handleInput.bind(null, '4')}>4</Button>
        <Button onClick={handleInput.bind(null, '5')}>5</Button>
        <Button onClick={handleInput.bind(null, '6')}>6</Button>
        <Button onClick={handleInput.bind(null, '-')}>-</Button>
      </div>
      <div>
        <Button onClick={handleInput.bind(null, '1')}>1</Button>
        <Button onClick={handleInput.bind(null, '2')}>2</Button>
        <Button onClick={handleInput.bind(null, '3')}>3</Button>
        <Button onClick={handleInput.bind(null, '*')}>*</Button>
      </div>
      <div>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={handleInput.bind(null, '0')}>0</Button>
        <Button onClick={handleCalculate}>=</Button>
        <Button onClick={handleInput.bind(null, '/')}>/</Button>
      </div>
      <div>
        <h3>Calculation History:</h3>
        <ul>
          {history.slice(-50).map((calculation, index) => (
            <li key={index}>{calculation}</li>
          ))}
        </ul>
      </div>
    </CalculatorContainer>
    </>
  );
};

export default Calculator;
