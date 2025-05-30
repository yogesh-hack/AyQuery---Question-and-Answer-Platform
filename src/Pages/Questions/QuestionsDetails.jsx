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
import { FaArrowUp, FaArrowDown, FaTrash, FaShareAlt } from 'react-icons/fa';


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
            userAnswered: User.name,
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
    <div className="max-w-6xl mx-auto p-4 md:p-6 text-gray-900 dark:text-gray-100 min-h-screen">
      {questionsList.data === null ? (
        <div className="flex justify-center items-center h-64">
          <img
            src="../../assets/Loading.gif"
            alt="Loading..."
            className="h-16 w-16"
          />
        </div>
      ) : (
        <>
          <button
            onClick={() => Navigate(-1)}
            className="flex items-center gap-2 px-4 py-2.5 mb-6 text-sm font-medium rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 transition-colors duration-200"
          >
            <IoArrowBackCircle className="w-5 h-5" />
            Back
          </button>
          {console.log(questionsList.data)}
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div>
              <div class="flex w-full items-start gap-2.5" key={question._id}>
                <Link
                  to={`/Users/${question.userId}`}
                  className="flex items-center gap-2 group"
                >
                  <div className="relative">
                    <Avatar
                      backgroundColor="#3b82f6"
                      px="8px"
                      py="3px"
                      borderRadius="20px"
                      className="dark:text-white text-dark font-medium"
                    >
                      {question.userPosted.charAt(0).toUpperCase()}
                    </Avatar>
                  </div>
                </Link>
                <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#0d1117]">
                  <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-gray-900 dark:text-white">{question.userPosted}</span>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Asked {moment(question.askedOn).fromNow()}</span>

                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                    {question.questionTitle}
                  </h1>
                  {/* Question Content */}
                  <div className="flex-1 space-y-6">


                    <div className="prose dark:prose-invert max-w-none">
                      {formatAnswerContent(question.questionBody).map((part, index) =>
                        part.type === 'code' ? (
                          <div key={index} className="relative my-4">
                            <SyntaxHighlighter
                              language="javascript"
                              style={materialDark}
                              className="rounded-lg p-4 text-sm"
                              customStyle={{
                                whiteSpace: 'pre-wrap',
                                backgroundColor: '#263238'
                              }}
                            >
                              {part.content}
                            </SyntaxHighlighter>
                            <button
                              onClick={() => navigator.clipboard.writeText(part.content)}
                              className="absolute top-3 right-3 p-1 bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Copy code"
                            >
                              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <div key={index} className="text-gray-700 dark:text-gray-300">
                            {parseHtmlContent(part.content)}
                          </div>
                        )
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {question.questionTags.map((tag) => (
                        <Link
                          to={`/tags/${tag}`}
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-900 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                    <div className="flex gap-3 items-start text-sm text-blue-900 dark:text-white">
  {/* Upvote */}
  <button
    onClick={handleUpVote}
    title="Upvote"
    className="flex items-center gap-2 font-medium bg-green-100 dark:bg-green-950 hover:bg-green-200 dark:hover:bg-green-900 text-green-700 dark:text-green-300 px-3 py-2 rounded-full transition"
  >
    <FaArrowUp className="w-5 h-5" />
    {question.upVote.length} Upvotes
  </button>

  {/* Downvote */}
  <button
    onClick={handleDownVote}
    title="Downvote"
    className="flex items-center gap-2 font-medium bg-red-100 dark:bg-red-950 hover:bg-red-200 dark:hover:bg-red-900 text-red-600 dark:text-red-300 px-3 py-2 rounded-full transition"
  >
    <FaArrowDown className="w-5 h-5" />
    {question.downVote.length} Downvotes
  </button>

  {/* Share */}
  <button
    onClick={handleShare}
    title="Share"
    className="flex items-center gap-2 font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-2 rounded-full transition"
  >
    <FaShareAlt className="w-4 h-4" />
    Share
  </button>

  {/* Delete - Only visible if owner */}
  {User?.result?._id === question?.userId && (
    <button
      onClick={handleDelete}
      title="Delete"
      className="flex items-center gap-2 font-medium bg-red-100 dark:bg-red-950 hover:bg-red-200 dark:hover:bg-red-800 text-red-600 dark:text-red-300 px-3 py-2 rounded-full transition"
    >
      <FaTrash className="w-4 h-4" />
      Delete
    </button>
  )}
</div>


                  </div>
                </div>
                </div>
                {/* Answers Section */}
                {
                  question.noOfAnswers !== 0 && (
                    <section className="space-y-6">
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {question.noOfAnswers} {question.noOfAnswers === 1 ? 'Answer' : 'Answers'}
                      </h3>
                      <DisplayAnswer question={question} handleShare={handleShare} />
                    </section>
                  )
                }

                {/* Answer Form */}
                <section className="p-6 md:p-8 mt-10 bg-white rounded-xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300" >
                  <h3 className="text-xl font-semibold mb-6">Your Answer</h3>
                  <form
                    onSubmit={(e) => handlePostAns(e, question.answer.length)}
                    className="space-y-6"
                  >
                    <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                      <ReactQuill
                        value={Answer}
                        onChange={setAnswer}
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        className="dark:bg-gray-700 dark:text-gray-100"
                        placeholder="Write your detailed answer here..."
                        style={{ height: '200px' }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      Post Your Answer
                    </button>
                  </form>

                  <p className="text-sm mt-6 text-gray-600 dark:text-gray-400">
                    Browse other questions tagged{' '}
                    {question.questionTags.map((tag, i) => (
                      <>
                        <Link
                          to={`/tags/${tag}`}
                          key={tag}
                          className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                          {tag}
                        </Link>
                        {i < question.questionTags.length - 1 ? ', ' : ''}
                      </>
                    ))}{' '}
                    or{' '}
                    <Link
                      to="/AskQuestion"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      ask your own question
                    </Link>.
                  </p>
                </section>
                </div>
            ))
          }
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
