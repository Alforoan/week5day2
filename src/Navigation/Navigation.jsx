import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/books'>Books</Link>
        </li>
        <li>
          <Link to='/websites'>Websites</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation