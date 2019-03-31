import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import TodoCreate from './todo/TodoCreate';
import TodoEdit from './todo/TodoEdit';
import TodoDelete from './todo/TodoDelete';
import TodoList from './todo/TodoList';
import TodoShow from './todo/TodoShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/todos/new" exact component={TodoCreate} />
            <Route path="/todos/edit/:id" exact component={TodoEdit} />
            <Route path="/todos/delete/:id" exact component={TodoDelete} />
            <Route path="/todos/:id" exact component={TodoShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;