import React from "react";
import moment from "moment";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import parse from 'html-react-parser'; // For rendering HTML content
import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/question";


const DisplayAnswer = ({ question, handleShare }) => {
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

  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans mt-5 space-y-4 p-4 bg-gray-50 rounded-lg shadow-2xl dark:bg-gray-800" key={ans._id}>
          {formatAnswerContent(ans.answerBody).map((part, index) =>
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
          <div className="question-actions-user flex justify-between mt-4">
            <div>
              <button
                type="button"
                onClick={handleShare}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm dark:text-gray-400">
                answered {moment(ans.answeredOn).fromNow()}
              </p>
              <Link to={`/Users/${ans.userId}`} className="user-link text-blue-500 hover:underline">
                <Avatar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
