import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui inverted teal secondary pointing menu">
      <Link to="/" className="item">
        Todo
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Todo List
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;