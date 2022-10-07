import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BasicButtonExample from './Dropdown';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function App() {
  
  const [data, setData] = useState([
    {  Time_Name: "6AM - 7AM", Monday: "WellRec", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "WellRec" },
    { Time_Name: "7AM - 8AM", Monday: "WellRec", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "WellRec" },
    { Time_Name: "8AM - 9AM", Monday: "--", Tuesday: "Jason Dally", Wednesday: "--", Thursday: "--", Friday: "WellRec", Saturday: "--", Sunday: "WellRec" },
    { Time_Name: "9AM - 10AM", Monday: "--", Tuesday: "Jason Dally", Wednesday: "Jason Dally", Thursday: "--", Friday: "WellRec", Saturday: "--", Sunday: "--" },
    { Time_Name: "10AM - 11AM", Monday: "--", Tuesday: "--", Wednesday: "Jason Dally", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "--" }
  ]);

  const handleClick = () => {
    setData([
      {Time_Name: "Ankur", Monday: "--", Tuesday: "2PM - 4PM", Wednesday: "10AM - 1PM", Thursday: "--", Friday: "2PM - 4PM", Saturday: "--", Sunday: "--" },
      {Time_Name: "Prasad", Monday: "6AM - 8AM", Tuesday: "--", Wednesday: "10AM - 4PM", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "2PM - 7PM" },
      {Time_Name: "Numair", Monday: "--", Tuesday: "9AM - 4PM", Wednesday: "--", Thursday: "8PM - 10PM", Friday: "--", Saturday: "6AM - 8AM", Sunday: "--" },
      {Time_Name: "Aditya", Monday: "--", Tuesday: "--", Wednesday: "10AM - 7PM", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "10AM - 7PM" },
      {Time_Name: "Mohit", Monday: "8AM - 11AM", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "8AM - 11AM", Saturday: "--", Sunday: "--" }
    ]);
  }

  const handleClick2 = () => {
    setData([
      {Time_Name: "Ankur", Monday: "6AM - 8AM", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "6AM - 9AM" },
      {Time_Name: "Tushar", Monday: "6AM - 9AM", Tuesday: "--", Wednesday: "--", Thursday: "10AM - 6PM", Friday: "--", Saturday: "--", Sunday: "--" },
      {Time_Name: "Michael", Monday: "--", Tuesday: "5AM - 8PM", Wednesday: "--", Thursday: "8PM - 11PM", Friday: "--", Saturday: "5AM - 8AM", Sunday: "--" },
      {Time_Name: "Kaushik", Monday: "--", Tuesday: "3PM - 8PM", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "4PM - 9PM" },
      {Time_Name: "Arjun", Monday: "8AM - 11AM", Tuesday: "--", Wednesday: "12PM - 8PM", Thursday: "--", Friday: "10AM - 3PM", Saturday: "--", Sunday: "--" }
    ]);
  }

  const handleClick3 = () => {
    setData([
      {  Time_Name: "6AM - 7AM", Monday: "WellRec", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "WellRec" },
    { Time_Name: "7AM - 8AM", Monday: "WellRec", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "WellRec" },
    { Time_Name: "8AM - 9AM", Monday: "--", Tuesday: "Jason Dally", Wednesday: "--", Thursday: "--", Friday: "WellRec", Saturday: "--", Sunday: "WellRec" },
    { Time_Name: "9AM - 10AM", Monday: "--", Tuesday: "Jason Dally", Wednesday: "Jason Dally", Thursday: "--", Friday: "WellRec", Saturday: "--", Sunday: "--" },
    { Time_Name: "10AM - 11AM", Monday: "--", Tuesday: "--", Wednesday: "Jason Dally", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "--" }
    ]);
  }
  
  return (
    <div className="App">
      <div className="maintable">
      <Container>
      <Navbar />
      </Container>
        
      <Container>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={handleClick3}>My Shift</Button>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item value="Jason Dally" href="#/action-2" onClick={handleClick}>Jason Dally</Dropdown.Item>
            <Dropdown.Item value="WellRec" href="#/action-3" onClick={handleClick2}>Wellrec</Dropdown.Item>
          </DropdownButton>
          <Button variant="secondary">Trade</Button>
        </ButtonGroup>
      </Container>

      <Container>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th className = "border"></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        </thead>
        <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td className="border"><b>{val.Time_Name}</b></td>
              <td>{val.Monday}</td>
              <td>{val.Tuesday}</td>
              <td>{val.Wednesday}</td>
              <td>{val.Thursday}</td>
              <td>{val.Friday}</td>
              <td>{val.Saturday}</td>
              <td>{val.Sunday}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>
      </Container>
    </div>
    </div>
  );
}

export default App;


/*

{Time_Name: "Ankur", Monday: "--", Tuesday: "2PM - 4PM", Wednesday: "10AM - 1PM", Thursday: "--", Friday: "2PM - 4PM", Saturday: "--", Sunday: "--" },
      {Time_Name: "Prasad", Monday: "6AM - 8AM", Tuesday: "--", Wednesday: "10AM - 4PM", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "2PM - 7PM" },
      {Time_Name: "Numair", Monday: "--", Tuesday: "9AM - 4PM", Wednesday: "--", Thursday: "8PM - 10PM", Friday: "--", Saturday: "6AM - 8AM", Sunday: "--" },
      {Time_Name: "Aditya", Monday: "--", Tuesday: "--", Wednesday: "10AM - 7PM", Thursday: "--", Friday: "--", Saturday: "--", Sunday: "10AM - 7PM" },
      {Time_Name: "Mohit", Monday: "8AM - 11AM", Tuesday: "--", Wednesday: "--", Thursday: "--", Friday: "8AM - 11AM", Saturday: "--", Sunday: "--" },
      {Time_Name: "Abhishek", Monday: "--", Tuesday: "6AM - 8AM", Wednesday: "", Thursday: "6AM - 8AM", Friday: "--", Saturday: "--", Sunday: "--" }        

*/