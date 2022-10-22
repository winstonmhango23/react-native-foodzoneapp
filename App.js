import React from "react";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
import DATA from "./config/DATA";

const App = () => {

  
  // return <HomeScreen />;
  // return <IntroScreen />;
  return <RecipeDetailScreen recipe={DATA[0].recipes[2]} />;
};

export default App;
