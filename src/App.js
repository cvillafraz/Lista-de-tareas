import React, { Component, Fragment } from "react";
import CssBaseline from "material-ui/CssBaseline";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import grey from "material-ui/colors/grey";
import { withStyles } from "material-ui/styles";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import EditModal from "./components/EditModal";
//changing body bg color
document.body.style.background = grey[800];
//declaring variables
let recipesArr = [];
let editedRecipe = {
  title: "",
  ingredients: ""
};

let index = 0;

class App extends Component {
  constructor() {
    super();
    //getting and setting state from local storage
    this.recipes = JSON.parse(localStorage.getItem("recipes")) || [
      { title: "Pizza", ingredients: "cheese,tomato purée,ham" },
      {
        title: "Hamburger",
        ingredients: "bread,meat,cheese,bacon,ketchup,tomato,lettuce"
      },
      { title: "Spaghetti bolognese", ingredients: "spaghetti,bolognese sauce" }
    ];
    this.state = {
      recipes: this.recipes,
      showEditModal: false,
      showAddModal: false
    };
    this.newestRecipe = {};
    this.rTitle = "";
    this.rIngredients = "";
  }
//deleting a recipe
  delete(recipe) {
    let recipes = this.state.recipes.slice();
    let i = recipes.indexOf(recipe);
    recipes.splice(i, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }
//opening edit form
  editModal(recipe, i, arr) {
    this.setState({ showEditModal: true });
    index = i;
    recipesArr = arr;
    editedRecipe.title = recipe.title;
    editedRecipe.ingredients = recipe.ingredients;
  }
//cancel editing
  closeEditModal(e) {
    recipesArr.splice(index, 1, editedRecipe);
    localStorage.setItem("recipes", JSON.stringify(recipesArr));
    this.setState({ recipes: recipesArr, showEditModal: false });
  }
//close edit form after editing
  submitEdit() {
    this.setState({ showEditModal: false });
  }
//editing a recipe
  editRecipe(e) {
    e.preventDefault();
    e.stopPropagation();
    let recipes = this.state.recipes.slice();
    recipes[index][e.target.name] = e.target.value;
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }
//open add recipe form
  addModal() {
    this.rTitle = "";
    this.rIngredients = "";
    this.setState({ showAddModal: true });
  }
//close add recipe form
  closeAddModal() {
    this.setState({ showAddModal: false });
  }
//submit new recipe
  submitAdd(e) {
    if (e.type == undefined) {
      let args = Array.prototype.slice.call(arguments);
      this.newestRecipe = args[0];
    }
    if (e.type != undefined) {
      this.setState(prevState => {
        const updatedRecipes = [...prevState.recipes, this.newestRecipe];
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        return { recipes: updatedRecipes, showAddModal: false };
      });
    }
  }
//create new recipe
  addNewRecipe(e) {
    if (e.target.name == "title") {
      this.rTitle = e.target.value;
    } else {
      this.rIngredients = e.target.value;
    }
    const newRecipe = {
      title: this.rTitle,
      ingredients: this.rIngredients
    };
    this.submitAdd(newRecipe);
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />

        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Recipe Box
            </Typography>
          </Toolbar>
        </AppBar>
        <Recipes
          statex={this.state.recipes}
          showevt={this.editModal.bind(this)}
          delete={this.delete.bind(this)}
        />
        <EditModal
          srecipe={this.state.recipes[index]}
          show={this.state.showEditModal}
          close={this.closeEditModal.bind(this)}
          submit={this.submitEdit.bind(this)}
          editRecipe={this.editRecipe.bind(this)}
        />
        <AddRecipe
          show={this.state.showAddModal}
          showevt={this.addModal.bind(this)}
          close={this.closeAddModal.bind(this)}
          submit={this.submitAdd.bind(this)}
          createRecipe={this.addNewRecipe.bind(this)}
        />
      </Fragment>
    );
  }
}
export default App;
