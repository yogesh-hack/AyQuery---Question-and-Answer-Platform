import React from "react";
import Questions from "./Questions";
import AdSenseAd from "../Adverstise/AdSenseAd";

const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question,idx) => (
         <React.Fragment key={question._id}>
     <Questions question={question} key={question._id} />
    {idx === 2 && ( 
      <div className="my-6 flex justify-center">
        <AdSenseAd />
      </div>
    )}
  </React.Fragment>
       
      ))}
    </>
  );
};

export default QuestionList;
