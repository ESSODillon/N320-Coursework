import "./App.css";
import React from "react";
import RecipeSearch from "./components/RecipeSearch";

class App extends React.Component {
  state = {
    pages: [],
    currentPage: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>Dillon's React World</h1>
        <div>
          <RecipeSearch />
        </div>
        {this.state.pages[this.state.currentPage]}
      </div>
    );
  }
}

export default App;
