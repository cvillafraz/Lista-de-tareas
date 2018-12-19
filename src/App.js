import React, { Component, Fragment } from "react";
import CssBaseline from "material-ui/CssBaseline";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import green from "material-ui/colors/green";
import { withStyles } from "material-ui/styles";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditModal from "./components/EditModal";
import Button from "material-ui/Button";
import DeleteIcon from "@material-ui/icons/Delete";

document.body.style.background = green[900];

let todosArr = [];
let editedTodo = {
  title: "",
};

let index = 0;

class App extends Component {
  constructor() {
    super();
    //getting and setting state from local storage
    this.todos = JSON.parse(localStorage.getItem("todos")) || [
      { title: "Terminar todos los cursos de Platzi" }
    ];
    this.state = {
      todos: this.todos,
      showEditModal: false,
      showAddModal: false
    };
    this.newestTodo = {};
    this.rTitle = "";
    this.selected = [];
  }
  //deleting a todo
  delete(todo) {
    let todos = this.state.todos.slice();
    let i = todos.indexOf(todo);
    todos.splice(i, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({ todos });
  }
  //deleting multiple todos
  select(todo, e) {
    if (e.target.checked) {
      this.selected.push(todo);
    } else {
      this.selected = this.selected.filter(el => el != todo);
    }
  }
  deleteSelected() {
    if (this.selected.length > 0) {
      let todos = [...this.state.todos].filter(todo =>
        !this.selected.includes(todo))
      localStorage.setItem("todos", JSON.stringify(todos));
      this.setState({todos});
    }
  }
  //opening edit form
  editModal(todo, i, arr) {
    this.setState({ showEditModal: true });
    index = i;
    todosArr = arr;
    editedTodo.title = todo.title;
    editedTodo.done = todo.done;
  }
  //cancel editing
  closeEditModal() {
    todosArr.splice(index, 1, editedTodo);
    localStorage.setItem("todos", JSON.stringify(todosArr));
    this.setState({ todos: todosArr, showEditModal: false });
  }
  //close edit form after editing
  submitEdit() {
    this.setState({ showEditModal: false });
  }
  //editing a todo
  editTodo(e) {
    e.preventDefault();
    e.stopPropagation();
    let todos = this.state.todos.slice();
    todos[index][e.target.name] = e.target.value;
    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({ todos });
  }
  //open add todo form
  addModal() {
    this.rTitle = "";
    this.setState({ showAddModal: true });
  }
  //close add todo form
  closeAddModal() {
    this.setState({ showAddModal: false });
  }
  //submit new todo
  submitAdd(e) {
    if (e.type == undefined) {
      let args = Array.prototype.slice.call(arguments);
      this.newestTodo = args[0];
    }
    if (e.type != undefined) {
      this.setState(prevState => {
        const updatedTodos = [...prevState.todos, this.newestTodo];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return { todos: updatedTodos, showAddModal: false };
      });
    }
  }
  //create new todo
  addNewTodo(e) {
    const newTodo = {
      title: e.target.value,
    };
    this.submitAdd(newTodo);
  }
  render() {
    return (
      <Fragment>
        <CssBaseline />

        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Lista de tareas
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ width: "80%", maxWidth: "768px", margin: "0 auto" }}>
          <Todos
            select={this.select.bind(this)}
            statex={this.state.todos}
            showevt={this.editModal.bind(this)}
            delete={this.delete.bind(this)}
          />
          {this.state.todos[index] && (
            <EditModal
              stodo={this.state.todos[index]}
              show={this.state.showEditModal}
              close={this.closeEditModal.bind(this)}
              submit={this.submitEdit.bind(this)}
              editTodo={this.editTodo.bind(this)}
            />
          )}
          <Button
            variant="raised"
            color="secondary"
            onClick={this.deleteSelected.bind(this)}
            style={{marginRight:".5rem"}}
          >
            Eliminar selección <DeleteIcon />
          </Button>
          <AddTodo
            show={this.state.showAddModal}
            showevt={this.addModal.bind(this)}
            close={this.closeAddModal.bind(this)}
            submit={this.submitAdd.bind(this)}
            createTodo={this.addNewTodo.bind(this)}
          />
        </div>
      </Fragment>
    );
  }
}
export default App;
