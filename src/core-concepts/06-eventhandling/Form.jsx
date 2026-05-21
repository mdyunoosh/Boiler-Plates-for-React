import {useState} from 'react';

export default function Form() {
  const items=['apple', 'banana', 'orange'];
  return <>
    <h1>list example</h1>
    <ul>
      {items.map((itemo, indexo) => (
        <li key={indexo} >{itemo}</li>
      ))}
    </ul>
  </>
}