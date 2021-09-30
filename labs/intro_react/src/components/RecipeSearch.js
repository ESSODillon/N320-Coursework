import "./../index.css";
import React from "react";

class RecipeSearch extends React.Component {
  state = {
    recipes: [
      "Apple Pie",
      "Cherry Pie",
      "Pizza Pie",
      "Hamburger",
      "Ham steak",
      "Banana",
      "Chocolate Mousse",
      "Chocolate Ice Cream",
    ],

    searchTerm: "",
  };

  render() {
    // Pull out matching recipes for search term
    let matchedRecipes = this.state.recipes.filter((recipe) => {
      return recipe
        .toLocaleUpperCase()
        .includes(this.state.searchTerm.toLocaleUpperCase());
    });

    console.log(matchedRecipes);

    // Creates a new array assigned to recipesList, with the results of calling a function on every element in the array
    let recipesList = matchedRecipes.map((recipe) => {
      return <li>{recipe}</li>;
    });

    // Data binds and displays all the recipes in an unordered list
    return (
      <div className="recipes">
        <h2>Recipes</h2>
        <input
          value={this.state.searchTerm}
          onChange={(event) => {
            this.updateSearch(event);
          }}
        ></input>
        <ul>{recipesList}</ul>
      </div>
    );
  }

  updateSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }
}

export default RecipeSearch;
