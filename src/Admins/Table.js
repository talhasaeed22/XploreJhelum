import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function RequestTable({ data, updated, setUpdated }) {
  const url = 'http://localhost:5000'

  const booked = async (id, number, hotel) => {

    alert(id)

    const response = await fetch(`${url}/api/hotel/assignroom`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ hotel: hotel, roomNumber:number})
    })
    
    const json = await response.json();
    console.log(json)
    

    const reqresponse = await fetch(`${url}/api/hotel/deleterequest`, {
      method: 'DELETE',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ roomNumber: number})

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
            <Td> <button onClick={() => { booked(item.id, item.roomNumber, item.hotel) }} className='btn my-1' style={{ backgroundColor: "#00034d", color: 'white' }}>Accept</button> </Td>
          </Tr>
        }) : <div className='my-2' style={{textAlign:"center"}}><span>No Requests</span></div>}

      </Tbody>
    </Table>
  );
}