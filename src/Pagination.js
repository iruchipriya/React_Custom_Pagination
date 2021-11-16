import React, { useState } from 'react';
import './style.css';

export default function Pagination(props) {
  const [current, setCurrent] = useState(1);
  return (
    <div>
      <button disabled={current == 1} onClick={() => setCurrent(current - 1)}>
        Prev
      </button>
     

      <span className="current">{current}</span> of <span className="total">{props.totalPage}
      </span>
    
      <button
        disabled={current == props.totalPage}
        onClick={() => setCurrent(current + 1)}
      >
        Next
      </button>
    </div>
  );
}
