import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchTodo, deleteTodo } from '../../actions';

class TodoDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteTodo(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.todo) {
      return 'このTodoを削除してよろしいでしょうか？';
    }

    return `このTodoを削除してよろしいでしょうか？ title: ${
      this.props.todo.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Todo"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchTodo, deleteTodo }
)(TodoDelete);