import React from 'react'
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Number = () => {
    const {int} = useParams();
  return (
    <div>
        {
            isNaN(Number(int)) ? 'Invalid input' : Number(int)
        }
            <h1>This is number:{int}</h1>

    </div>
  )
}

export default Number