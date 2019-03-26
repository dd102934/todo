import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui inverted blue secondary pointing menu">
      <Link to="/" className="item">
        ToDoApp
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All ToDo
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;