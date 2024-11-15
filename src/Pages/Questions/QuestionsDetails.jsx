import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import copy from "copy-to-clipboard";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill editor styles
import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import parse from 'html-react-parser'; // For rendering HTML content
import {
  postAnswer,
  deleteQuestion,
  voteQuestion,
} from "../../actions/question";
import { IoArrowBackCircle } from "react-icons/io5";

const QuestionsDetails = () => {
 // Function to separate code blocks (both ` ``` ` and <pre>) and other content
 const formatAnswerContent = (text) => {
  // Regular expression to match both ` ``` ` blocks and <pre> blocks
  const codeRegex = /<pre[^>]*>([\s\S]*?)<\/pre>/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  // Iterate over the text to separate code and other content
  while ((match = codeRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex, match.index).trim(),
      });
    }

    // If matched text is inside backticks or <pre> tags, treat it as code
    const codeContent = match[1];  // Extract content from <pre>
    parts.push({
      type: 'code',
      content: codeContent.trim(),
    });
    lastIndex = codeRegex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.slice(lastIndex).trim(),
    });
  }

  return parts;
};

// Function to safely parse HTML and render it with custom styles
const parseHtmlContent = (content) => {
  return parse(content, {
    replace: (domNode) => {
      if (domNode.type === 'tag') {
        // Handle known tags and return React elements
        if (domNode.name === 'h1') {
          return <h1 className="text-2xl font-bold my-4">{domNode.children[0]?.data}</h1>;
        }
        if (domNode.name === 'h2') {
          return <h2 className="text-xl font-semibold my-3">{domNode.children[0]?.data}</h2>;
        }
        if (domNode.name === 'ol') {
          return <ol className="list-decimal pl-6 my-3">{domNode.children.map((child, index) => <li key={index}>{child.data}</li>)}</ol>;
        }
        if (domNode.name === 'ul') {
          return <ul className="list-disc pl-6 my-3">{domNode.children.map((child, index) => <li key={index}>{child.data}</li>)}</ul>;
        }
        if (domNode.name === 'pre') {
          return (
            <SyntaxHighlighter language="javascript" style={materialDark} className="rounded-lg p-2 mb-4">
              {domNode.children[0]?.data}
            </SyntaxHighlighter>
          );
        }
      }
      return domNode; // Default behavior: render the node as is
    }
  });
};

  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);

  const [Answer, setAnswer] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const location = useLocation();
  const url = "http://localhost:3000";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
          })
        );
        setAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    if (User === null) {
      alert("Login or Signup to up vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "upVote"));
    }
  };

  const handleDownVote = () => {
    if (User === null) {
      alert("Login or Signup to down vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "downVote"));
    }
  };

  // Custom toolbar options with a code block button
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ align: [] }],
    ['blockquote', 'code-block'], // Adds the code block button
    ['link', 'image', 'video'],
    ['clean'] // Removes formatting
  ]
};

// Configure formats to include 'code-block'
const formats = [
  'header', 'font', 'list', 'bold', 'italic', 'underline', 'strike',
  'color', 'background', 'script', 'align', 'blockquote', 'code-block',
  'link', 'image', 'video'
];

  return (
    <div className="p-6 text-gray-900  dark:text-gray-100 min-h-screen">
      
  {questionsList.data === null ? (
    <h1 className="text-center text-2xl font-semibold my-8">Loading...</h1>
  ) : (
    <>
      <button onClick={() => Navigate(-1)} type="button" class="text-white flex items-center gap-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><IoArrowBackCircle /> Back</button>

      {questionsList.data
        .filter((question) => question._id === id)
        .map((question) => (
          <div key={question._id} className="space-y-8">
            <section className="space-y-6 p-8 bg-white border rounded-lg shadow-xl dark:bg-gray-800 transition-colors duration-300">
              <h1 className="text-3xl font-bold">{question.questionTitle}</h1>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="flex flex-col items-center space-y-2 lg:col-span-2">
                  <img
                    src={upvote}
                    alt="Upvote"
                    width="24"
                    className="cursor-pointer hover:scale-110 transition-transform duration-150"
                    onClick={handleUpVote}
                  />
                  <p className="font-semibold text-lg">{question.upVote.length - question.downVote.length}</p>
                  <img
                    src={downvote}
                    alt="Downvote"
                    width="24"
                    className="cursor-pointer hover:scale-110 transition-transform duration-150"
                    onClick={handleDownVote}
                  />
                </div>
                <div className="lg:col-span-10 space-y-4">
                {formatAnswerContent(question.questionBody).map((part, index) =>
            part.type === 'code' ? (
              // Render code blocks with syntax highlighting
              <SyntaxHighlighter
                key={index}
                language="javascript"
                style={materialDark}
                className="rounded-lg p-2 z-100 mb-4"
                customStyle={{ whiteSpace: 'pre-wrap' }}
              >
                {part.content}
              </SyntaxHighlighter>
            ) : (
              // Render other content as HTML with proper styling (headings, lists, etc.)
              <div
                key={index}
                className="text-base mb-4 leading-relaxed dark:text-gray-300"
              >
                {parseHtmlContent(part.content)} 
              </div>
            )
          )}
                  <div className="flex flex-wrap gap-2">
                    {question.questionTags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg dark:bg-blue-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="space-x-4">
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-colors duration-150"
                      >
                        Share
                      </button>
                      {User?.result?._id === question?.userId && (
                        <button
                          onClick={handleDelete}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-150"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <p className="text-sm">asked {moment(question.askedOn).fromNow()}</p>
                      <Link
                        to={`/Users/${question.userId}`}
                        className="flex items-center space-x-2 text-blue-500 hover:underline"
                      >
                        <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                          {question.userPosted.charAt(0).toUpperCase()}
                        </Avatar>
                        <span>{question.userPosted}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {question.noOfAnswers !== 0 && (
              <section className="mt-8 space-y-4">
                <h3 className="text-2xl font-semibold">{question.noOfAnswers} Answers</h3>
                <DisplayAnswer question={question} handleShare={handleShare} />
              </section>
            )}
            <section className="space-y-6 mt-8 p-6 bg-white border rounded-lg shadow-xl dark:bg-gray-800 transition-colors duration-300">
      <h3 className="text-xl font-semibold">Your Answer</h3>
      <form
                onSubmit={(e) => handlePostAns(e, question.answer.length)}
                className="space-y-4"
              >
        <ReactQuill
          value={Answer}
          onChange={setAnswer}
          theme="snow"
          modules={modules}
          formats={formats}
          className="dark:bg-gray-700 dark:border-gray-600 text-white dark:text-gray-100 transition-colors duration-150"
          placeholder="Write your answer here..."
          style={{ height: '200px', marginBottom: '60px' }}
        />
        {console.log(Answer)}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-150 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Post Your Answer
        </button>
      </form>
      <p className="text-sm mt-4">
        Browse other questions tagged{' '}
        {question.questionTags.map((tag) => (
          <Link to="/Tags" key={tag} className="text-blue-500 hover:underline">
            {tag}
          </Link>
        ))}{' '}
        or{' '}
        <Link to="/AskQuestion" className="text-blue-500 hover:underline">
          ask your own question
        </Link>.
      </p>
    </section>
          </div>
        ))}
    </>
  )}
</div>

  
  );
};

export default QuestionsDetails;
