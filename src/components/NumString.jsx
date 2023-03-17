import React from 'react'
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NumString = () => {
    const {num} = useParams();
  return (
    <div>
        <h1>This is number:{num}</h1>
    </div>
  )
}

export default NumString