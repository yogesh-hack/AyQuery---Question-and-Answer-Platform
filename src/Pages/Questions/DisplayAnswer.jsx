import React from "react";
import moment from "moment";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import parse from 'html-react-parser'; // For rendering HTML content
import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/question";
import { FaRegThumbsUp, FaShareAlt, FaTrashAlt } from 'react-icons/fa';


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
  const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>
);

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const VerifiedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
  return (
    <div className="space-y-6">
      
      {question.answer.map((ans) => (
        <div className="flex" key={ans._id}>
          <div className="dark:bg-[#0d1117] text-dark dark:text-white shadow-md rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex justify-between items-start w-full mx-auto hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200">
            {/* Vote Section */}
            <div className="flex w-full items-center gap-4">
        
              {/* Content Section */}
              <div className="flex-1">
              <Link
                to={`/Users/${ans.userId}`} className="flex items-center text-sm text-gray-400 dark:text-gray-400 space-x-2">
                  <div className="relative">
                  <Avatar
                    backgroundColor="#3b82f6"
                    px="8px"
                    py="4px"
                    borderRadius="20px"
                    className="text-white font-medium rounded-full"
                  >
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  {ans.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5">
                      <VerifiedIcon className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                  <span className="text-blue-500 dark:text-blue-500 hover:underline"> {ans.userAnswered}</span>
                  <span>|</span>
                  <span>Answered {moment(ans.answeredOn).fromNow()}</span>
                </Link>
                <div className="mt-2 mb-2">
               {formatAnswerContent(ans.answerBody).map((part, index) =>
              part.type === 'code' ? (
                <div className="relative" key={index}>
                  <SyntaxHighlighter
                    language="javascript"
                    style={materialDark}
                    className="rounded-lg p-4 mb-4 text-sm overflow-x-auto"
                    customStyle={{
                      whiteSpace: 'pre-wrap',
                      backgroundColor: '#263238',
                      borderRadius: '0.5rem'
                    }}
                  >
                    {part.content}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => navigator.clipboard.writeText(part.content)}
                    className="absolute top-2 right-2 p-1 bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy code"
                  >
                    <CopyIcon className="w-4 h-4 text-gray-300" />
                  </button>
                </div>
              ) : (
                <div
                  key={index}
                  className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                >
                  {parseHtmlContent(part.content)}
                </div>
              )
            )}
            </div>
            
            <div className="flex gap-6 mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
  <button className="flex items-center gap-2 hover:text-blue-500 transition">
    <FaRegThumbsUp className="text-lg" />
    Thanks
  </button>
  <button className="flex items-center gap-2 hover:text-green-500 transition">
    <FaShareAlt className="text-lg" />
    Share
  </button>
  <button className="flex items-center gap-2 hover:text-red-500 transition">
    <FaTrashAlt className="text-lg" />
    Delete
  </button>
</div>

                
              </div>
            </div>
        
            {/* Avatar Group */}
            <div className="flex -space-x-2 mt-1">
              <img
                className="w-6 h-6 rounded-full border-2 border-gray-800 dark:border-gray-800"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user1"
              />
              <img
                className="w-6 h-6 rounded-full border-2 border-gray-800 dark:border-gray-800"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user2"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;




        // <div
        //   className="group relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
          
        // >
        //   {/* Answer content */}
        //   <div className="space-y-4">
           
        //   </div>

        //   {/* Actions and user info */}
        //   <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        //     <div className="flex space-x-3">
        //       <button
        //         type="button"
        //         onClick={handleShare}
        //         className="flex items-center space-x-1 px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        //       >
        //         <ShareIcon className="w-4 h-4" />
        //         <span>Share</span>
        //       </button>

        //       {User?._id === ans?.userId && (
        //         <button
        //           type="button"
        //           onClick={() => handleDelete(ans._id, question.noOfAnswers)}
        //           className="flex items-center space-x-1 px-3 py-1.5 text-sm rounded-full bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 transition-colors"
        //         >
        //           <TrashIcon className="w-4 h-4" />
        //           <span>Delete</span>
        //         </button>
        //       )}
        //     </div>

        //     <div className="flex items-center space-x-3">
        //       <div className="text-xs text-gray-500 dark:text-gray-400">
        //         Answered {moment(ans.answeredOn).fromNow()}
        //       </div>
        //       <Link
        //         to={`/Users/${ans.userId}`}
        //         className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        //       >
        //         <div className="relative">
        //           <Avatar
        //             backgroundColor="#3b82f6"
        //             px="10px"
        //             py="8px"
        //             borderRadius="8px"
        //             className="text-white font-medium"
        //           >
        //             {ans.userAnswered.charAt(0).toUpperCase()}
        //           </Avatar>
        //           {ans.verified && (
        //             <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5">
        //               <VerifiedIcon className="w-3 h-3 text-white" />
        //             </div>
        //           )}
        //         </div>
        //         <div className="font-medium text-gray-700 dark:text-gray-300">
        //           {ans.userAnswered}
        //         </div>
        //       </Link>
        //     </div>
        //   </div>
        // </div>