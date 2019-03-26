import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoCreate from './todos/TodoCreate';
import TodoEdit from './todos/TodoEdit';
import TodoDelete from './todos/TodoDelete';
import TodoList from './todos/TodoList';
import TodoShow from './todos/TodoShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={TodoList} />
          <Route path="/streams/new" exact component={TodoCreate} />
          <Route path="/streams/edit" exact component={TodoEdit} />
          <Route path="/streams/delete" exact component={TodoDelete} />
          <Route path="/streams/show" exact component={TodoShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;