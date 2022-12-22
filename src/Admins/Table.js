import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function RequestTable({ data, updated, setUpdated, Guests }) {
  const url = 'http://localhost:5000'

  const booked = async (id, number, hotel) => {

    const response = await fetch(`${url}/api/hotel/assignroom`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ hotel: hotel, roomNumber:number})
    })
    
    const json = await response.json();
    console.log(json)
    alert(id)

    const reqresponse = await fetch(`${url}/api/hotel/deleterequest`, {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id:id})

    })
    console.log(reqresponse.json())
    setUpdated(!updated)
    

  }

  const checkOut = async (id, number, hotel)=>{
    const response = await fetch(`${url}/api/hotel/deleteroom`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ hotel: hotel, roomNumber:number})
    })
    
    const json = await response.json();
    console.log(json)
    alert(id)

    const reqresponse = await fetch(`${url}/api/hotel/removeguest`, {
      method: 'DELETE',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id:id})

    })
    console.log(reqresponse.json())
    setUpdated(!updated)
  }
  return (
    <Table style={{ borderRadius: '16px', overflow: 'hidden', textAlign: 'center' }}>
      <Thead style={{ backgroundColor: 'black', color: 'white' }}>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Total Days</Th>
          <Th>Contact</Th>
          <Th>Room Number</Th>
          <Th>Operation</Th>
        </Tr>
      </Thead>
      <Tbody >
        {data.length !== 0 ? data.map((item, index) => {
          return <Tr key={index}>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.days}</Td>
            <Td>{item.contact}</Td>
            <Td>{item.roomNumber}</Td>
            <Td> 
              {Guests ? 
              
              <button onClick={() => { checkOut(item._id, item.roomNumber, item.hotel) }} className='btn my-1' style={{ backgroundColor: "#00034d", color: 'white' }}>Checkout</button>

              :

              <button onClick={() => { booked(item._id, item.roomNumber, item.hotel) }} className='btn my-1' style={{ backgroundColor: "#00034d", color: 'white' }}>Accept</button>}

            </Td>
          </Tr>
        }) : <Tr><Td>No Request</Td></Tr>}

      </Tbody>
    </Table>
  );
}