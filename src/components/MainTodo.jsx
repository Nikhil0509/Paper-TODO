import React, { Component } from "react";
import styled from 'styled-components';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Container = styled.div`
  background-color: #f1f1f1;
  margin: 0;
  min-height: 100vh;
`;

const Paper = styled.div`
  width: 480px !important;
  background-color: white;
`;
class Todo extends Component {
  render() {
    return (
      <div>
        <Container className="row flex-center flex-middle">
          <Paper className="border border-primary padding-large margin-large no-responsive">
            <h3 className="margin-small">PaperTodo</h3>
             <AddTodo />
            <TodoList /> 
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Todo;
