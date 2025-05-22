import React, { useState, useRef } from 'react';
import { FiBold, FiItalic, FiUnderline, FiList, FiImage, FiLink, FiCode, FiAlignLeft, FiAlignCenter, FiAlignRight } from 'react-icons/fi';

const WriteArticle = () => {
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    updateContent();
  };

  const handleInsertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      document.execCommand('insertImage', false, url);
      updateContent();
    }
  };

  const handleInsertLink = () => {
    const url = prompt('Enter link URL:');
    if (url) {
      document.execCommand('createLink', false, url);
      updateContent();
    }
  };

  const updateContent = () => {
    setContent(editorRef.current.innerHTML);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">Create New Article</h1>
          <p className="text-gray-600 dark:text-gray-400">Write your content using our rich text editor</p>
        </header>

        {/* Editor Container */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-200">
          {/* Toolbar */}
          <div className="border-b border-gray-200 dark:border-gray-700 p-3 flex flex-wrap items-center gap-2 bg-gray-50 dark:bg-gray-700">
            <button
              onClick={() => handleFormat('bold')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Bold"
            >
              <FiBold />
            </button>
            <button
              onClick={() => handleFormat('italic')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Italic"
            >
              <FiItalic />
            </button>
            <button
              onClick={() => handleFormat('underline')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Underline"
            >
              <FiUnderline />
            </button>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>

            <button
              onClick={() => handleFormat('insertUnorderedList')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Bullet List"
            >
              <FiList />
            </button>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>

            <button
              onClick={handleInsertImage}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Insert Image"
            >
              <FiImage />
            </button>
            <button
              onClick={handleInsertLink}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Insert Link"
            >
              <FiLink />
            </button>
            <button
              onClick={() => handleFormat('formatBlock', '<pre>')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Code Block"
            >
              <FiCode />
            </button>

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600 mx-1"></div>

            <button
              onClick={() => handleFormat('justifyLeft')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Align Left"
            >
              <FiAlignLeft />
            </button>
            <button
              onClick={() => handleFormat('justifyCenter')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Align Center"
            >
              <FiAlignCenter />
            </button>
            <button
              onClick={() => handleFormat('justifyRight')}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              title="Align Right"
            >
              <FiAlignRight />
            </button>
          </div>

          {/* Title Input */}
          <input
            type="text"
            placeholder="Article Title"
            className="w-full px-6 py-4 text-2xl font-bold bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none border-b border-gray-200 dark:border-gray-700"
          />

          {/* Editor */}
          <div
            ref={editorRef}
            contentEditable
            onInput={updateContent}
            className="min-h-[400px] p-6 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 focus:outline-none"
            placeholder="Start writing your content here..."
          ></div>

          {/* Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-700">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Word count: {content.split(/\s+/).filter(Boolean).length}
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                Save Draft
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Publish
              </button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Preview</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 prose dark:prose-invert max-w-none prose-img:rounded-xl prose-a:text-blue-600 dark:prose-a:text-blue-400">
            <h1 className="text-3xl font-bold mb-6">Article Title</h1>
            <div
              className="preview-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;