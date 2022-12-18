import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function RequestTable({ data }) {
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
        {data.map((item) => {
          return <Tr>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.days}</Td>
            <Td>{item.contact}</Td>
            <Td>{item.roomNumber}</Td>
            <Td> <button className='btn my-1' style={{ backgroundColor: "#00034d", color: 'white' }}>Accept</button> </Td>
          </Tr>
        })}
        
      </Tbody>
    </Table>
  );
}