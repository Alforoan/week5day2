import React from 'react'
import { Link } from 'react-router-dom';

const Websites = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </div>

      <h2>List of helpful websites:</h2>
      <a href='https://www.google.com' target='_blank'>Google</a>
      <a href="https://chat.openai.com" target='_blank'>ChatGPT</a>
      <a href="https://www.stackoverflow.com" target='_blank'>StackOverflow</a>
    </div>
  );
}

export default Websites