import React, { useState } from 'react';
import './style.css';
import Pagination from './Pagination';

export default function App() {
  const totalPage=10;
  return (
    <div>
      {/* <p>SetTotal Page</p>
     <input onChange={(e)=>setTotalPage(e.target.value)} type="text"/> */}
      <Pagination totalPage={totalPage} />
    </div>
  );
}
