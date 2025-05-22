import React from "react";

import "../../App.css";
import MovieShow from "../../components/Movies/MovieShow";

const Movies = ({ slideIn }) => {
  return (
    <div className="grid gap-6">
  
    {/* Main Content Area */}
    <div className="w-full mt-20">
      <MovieShow/>
    </div>
  </div>
  
  
  );
};

export default Movies;
