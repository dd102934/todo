import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoCreate from './todo/TodoCreate';
import TodoEdit from './todo/TodoEdit';
import TodoDelete from './todo/TodoDelete';
import TodoList from './todo/TodoList';
import TodoShow from './todo/TodoShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={TodoList} />
          <Route path="/todo/new" exact component={TodoCreate} />
          <Route path="/todo/edit" exact component={TodoEdit} />
          <Route path="/todo/delete" exact component={TodoDelete} />
          <Route path="/todo/show" exact component={TodoShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;