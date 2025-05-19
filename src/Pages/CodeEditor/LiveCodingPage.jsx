// src/pages/LiveCodingPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { socket } from '../../Socket';
import { FiPlus, FiFile, FiPlay, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import Editor from '@monaco-editor/react';

const languageOptions = [
  { value: 'javascript', label: 'JavaScript', extension: 'js', monacoLang: 'javascript' },
  { value: 'python', label: 'Python', extension: 'py', monacoLang: 'python' },
  { value: 'java', label: 'Java', extension: 'java', monacoLang: 'java' },
  { value: 'cpp', label: 'C++', extension: 'cpp', monacoLang: 'cpp' },
  { value: 'html', label: 'HTML', extension: 'html', monacoLang: 'html' },
  { value: 'css', label: 'CSS', extension: 'css', monacoLang: 'css' },
  { value: 'typescript', label: 'TypeScript', extension: 'ts', monacoLang: 'typescript' },
];

// Custom autocomplete suggestions
const customSuggestions = {
  javascript: [
    {
      label: 'console',
      kind: 1, // Function
      documentation: 'Console object for logging',
      insertText: 'console.log(${1:value})',
      insertTextRules: 4, // Adjust whitespace
    },
    {
      label: 'function',
      kind: 2, // Keyword
      documentation: 'Function declaration',
      insertText: 'function ${1:name}(${2:params}) {\n\t${3}\n}',
    },
  ],
  python: [
    {
      label: 'print',
      kind: 1,
      documentation: 'Print function',
      insertText: 'print(${1:value})',
    },
    {
      label: 'def',
      kind: 2,
      documentation: 'Function definition',
      insertText: 'def ${1:name}(${2:params}):\n\t${3}',
    },
  ],
  // Add more language-specific suggestions as needed
};

const LiveCodingPage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isIOPanelExpanded, setIsIOPanelExpanded] = useState(false);
  const monacoRef = useRef(null);

  // Setup Monaco editor autocomplete
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Register custom autocomplete provider
    monaco.languages.registerCompletionItemProvider(activeFile?.language || 'javascript', {
      provideCompletionItems: (model, position) => {
        const suggestions = customSuggestions[activeFile?.language || 'javascript'] || [];
        return {
          suggestions: suggestions.map(s => ({
            ...s,
            range: new monaco.Range(
              position.lineNumber,
              position.column,
              position.lineNumber,
              position.column
            )
          }))
        };
      }
    });

    // Listen for cursor changes
    editor.onDidChangeCursorPosition(e => {
      socket.emit('cursor-update', {
        roomId,
        position: e.position,
        userId: currentUser.id,
        fileId: activeFileId
      });
    });
  };

  const handleEditorChange = (value, event) => {
    setCode(value);

    // Update the active file's content
    const updatedFiles = files.map(file =>
      file.id === activeFileId ? { ...file, content: value } : file
    );
    setFiles(updatedFiles);

    socket.emit('code-update', {
      roomId,
      newCode: value,
      userId: currentUser.id,
      fileId: activeFileId
    });
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('Running...');
    
    try {
      // In a real app, you would send this to a code execution API
      // This is just a mock implementation
      const result = await executeCode(code, input, language);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  // Mock code execution function
  const executeCode = (code, input, language) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simple mock execution
        if (language === 'javascript') {
          try {
            // WARNING: In a real app, NEVER use eval with user-provided code
            // This is just for demonstration
            const mockResult = `Code executed with input: ${input}\n\n${code.substring(0, 100)}...`;
            resolve(mockResult);
          } catch (e) {
            resolve(`Error: ${e.message}`);
          }
        } else {
          resolve(`Execution result for ${language} code with input: ${input}`);
        }
      }, 1000);
    });
  };
  const navigate = useNavigate();
  const { roomId: urlRoomId } = useParams();
  const [view, setView] = useState(urlRoomId ? 'editor' : 'room-select');
  const [roomId, setRoomId] = useState(urlRoomId || '');
  const [code, setCode] = useState('');
  const [notes, setNotes] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [files, setFiles] = useState([
    { id: 1, name: `Solution.${languageOptions.find(l => l.value === 'javascript')?.extension}`, language: 'javascript', content: '' }
  ]);
  const [activeFileId, setActiveFileId] = useState(1);
  const [users, setUsers] = useState([]);
  const [currentUser] = useState({
    id: Math.random().toString(36).substring(7),
    name: `User${Math.floor(Math.random() * 1000)}`,
    color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
  });
  const editorRef = useRef(null);
  const cursorPositionsRef = useRef({});

  // Get current active file
  const activeFile = files.find(file => file.id === activeFileId);

  // Handle joining a room
  const joinRoom = (e) => {
    e.preventDefault();
    navigate(`/editor/${roomId}`);
    setView('editor');
    initializeSocket();
  };

  // Initialize socket connection and listeners
  const initializeSocket = () => {
    socket.connect();
    socket.emit('join-room', { roomId, user: currentUser, language });

    socket.on('code-update', ({ newCode, userId, fileId }) => {
      if (userId !== currentUser.id && fileId === activeFileId) {
        setCode(newCode);
      }
    });

    socket.on('notes-update', ({ newNotes, userId }) => {
      if (userId !== currentUser.id) {
        setNotes(newNotes);
      }
    });

    socket.on('language-update', ({ newLanguage, userId, fileId }) => {
      if (userId !== currentUser.id && fileId === activeFileId) {
        setLanguage(newLanguage);
      }
    });

    socket.on('cursor-update', ({ userId, position, fileId }) => {
      if (fileId === activeFileId) {
        cursorPositionsRef.current[userId] = position;
        updateRemoteCursors();
      }
    });

    socket.on('users-update', (updatedUsers) => {
      setUsers(updatedUsers.filter(u => u.id !== currentUser.id));
    });

    socket.on('file-update', ({ files: updatedFiles, userId }) => {
      if (userId !== currentUser.id) {
        setFiles(updatedFiles);
      }
    });

    return () => {
      socket.disconnect();
    };
  };

  const updateRemoteCursors = () => {
    // Implementation for updating remote cursors
  };

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);

    // Update the active file's content
    const updatedFiles = files.map(file =>
      file.id === activeFileId ? { ...file, content: newCode } : file
    );
    setFiles(updatedFiles);

    socket.emit('code-update', {
      roomId,
      newCode,
      userId: currentUser.id,
      fileId: activeFileId
    });

    const cursorPos = e.target.selectionStart;
    socket.emit('cursor-update', {
      roomId,
      position: cursorPos,
      userId: currentUser.id,
      fileId: activeFileId
    });
  };

  const handleNotesChange = (e) => {
    const newNotes = e.target.value;
    setNotes(newNotes);
    socket.emit('notes-update', { roomId, newNotes, userId: currentUser.id });
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);

    // Update the active file's language and name
    const extension = languageOptions.find(l => l.value === newLanguage)?.extension;
    const updatedFiles = files.map(file =>
      file.id === activeFileId
        ? {
          ...file,
          language: newLanguage,
          name: `Solution.${extension}`
        }
        : file
    );
    setFiles(updatedFiles);

    socket.emit('language-update', {
      roomId,
      newLanguage,
      userId: currentUser.id,
      fileId: activeFileId
    });
    socket.emit('file-update', {
      roomId,
      files: updatedFiles,
      userId: currentUser.id
    });
  };

  const createNewFile = () => {
    const newFileId = Math.max(...files.map(f => f.id), 0) + 1;
    const extension = languageOptions.find(l => l.value === language)?.extension;
    const newFile = {
      id: newFileId,
      name: `Solution${newFileId}.${extension}`,
      language,
      content: ''
    };

    const updatedFiles = [...files, newFile];
    setFiles(updatedFiles);
    setActiveFileId(newFileId);
    setCode('');

    socket.emit('file-update', {
      roomId,
      files: updatedFiles,
      userId: currentUser.id
    });
  };

  const switchFile = (fileId) => {
    const file = files.find(f => f.id === fileId);
    if (file) {
      setActiveFileId(fileId);
      setCode(file.content);
      setLanguage(file.language);
    }
  };

  // Room Selection View
  if (view === 'room-select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="w-full max-w-md dark:bg-[#1a1a1a] bg-gray-100 rounded-xl shadow-2xl overflow-hidden border dark:border-gray-700 border-gray-300">
          <div className="p-1 bg-gradient-to-r from-purple-600 to-blue-500">
            <div className="dark:bg-[#1a1a1a] bg-gray-100 p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold dark:text-white  text-darkmb-2">Live Code Editor</h1>
                <p className="dark:text-gray-400 text-gray-100">Collaborate in real-time with your team</p>
              </div>

              <form onSubmit={joinRoom}>
                <div className="mb-6">
                  <label htmlFor="roomId" className="block text-sm font-medium text-gray-300 mb-2">
                    Room ID
                  </label>
                  <input
                    type="text"
                    id="roomId"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg dark:text-white  text-darkfocus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter room ID or create new"
                    required
                  />
                  <p className="mt-2 text-sm dark:text-gray-400 text-gray-100">
                    Create a new room by entering a unique name or join an existing one
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 dark:text-white  text-darkfont-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {roomId ? 'Join Room' : 'Create Room'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Editor View
  return (
    <div className="flex flex-col mt-20 h-screen bg-gray-900">
      {/* Header */}
      <header className="dark:bg-[#1a1a1a] bg-gray-100 border-b dark:border-gray-700 border-gray-300 p-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-dark dark:text-white">Live Code Editor</h1>
          <div className="flex items-center space-x-2 dark:bg-gray-700 bg-gray-200 shadow-md px-3 py-1 rounded-md">
            <span className="dark:dark:text-gray-400 text-gray-100 text-gray-800 text-sm">Room:</span>
            <span className="dark:dark:text-white  text-darktext-black font-mono">{roomId}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="language-select" className="dark:text-gray-400 text-gray-100 text-sm">Language:</label>
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              className="dark:bg-[#1a1a1a] bg-gray-100 dark:text-white text-dark text-sm rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {languageOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex -space-x-2">
            {users.map(user => (
              <div
                key={user.id}
                className="w-8 h-8 rounded-full flex items-center justify-center dark:text-white  text-darktext-xs font-bold border-2 border-gray-800"
                style={{ backgroundColor: user.color }}
                title={user.name}
              >
                {user.name.charAt(0)}
              </div>
            ))}

            <div
              className="w-8 h-8 rounded-full flex items-center justify-center dark:text-white  text-darktext-xs font-bold border-2 border-gray-800"
              style={{ backgroundColor: currentUser.color }}
              title={`${currentUser.name} (You)`}
            >
              {currentUser.name.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Files Sidebar */}
        <div className="w-64 dark:bg-[#1a1a1a] bg-gray-100 border-r dark:border-gray-700 border-gray-300 p-4 overflow-y-auto flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold dark:text-white text-dark">Files</h2>
            <button
              onClick={createNewFile}
              className="dark:text-gray-400 text-gray-900 hover:dark:text-white text-dark p-1 rounded hover:dark:bg-[#1a1a1a] hover:bg-gray-300"
              title="New File"
            >
              <FiPlus size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {files.map(file => (
              <div
                key={file.id}
                onClick={() => switchFile(file.id)}
                className={`flex items-center p-2 mb-1 rounded cursor-pointer ${file.id === activeFileId ? 'dark:bg-gray-700 bg-gray-300' : 'hover:dark:bg-[#1a1a1a] hover:bg-gray-300'}`}
              >
                <FiFile className="mr-2 dark:text-gray-100 text-gray-900" />
                <span className="dark:text-white text-dark truncate">{file.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t dark:border-gray-700 border-gray-300">
            <h2 className="font-bold dark:text-white text-dark mb-2">Collaborators ({users.length + 1})</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: currentUser.color }}
                ></div>
                <span className="dark:text-white text-dark">{currentUser.name} (You)</span>
              </li>
              {users.map(user => (
                <li key={user.id} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: user.color }}
                  ></div>
                  <span className="text-white">{user.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t dark:border-gray-700 border-gray-300">
            <h3 className="font-bold dark:text-white  text-darkmb-3">Room Actions</h3>
            <button className="w-full bg-gray-700 hover:bg-gray-600 dark:text-white  text-dark py-2 px-4 rounded mb-2 text-sm transition">
              Copy Room Link
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 dark:text-white  text-dark py-2 px-4 rounded text-sm transition">
              Leave Room
            </button>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 relative">
          <div className="dark:bg-[#1a1a1a] bg-gray-100 border-b dark:border-gray-700 border-gray-300 p-2 flex items-center justify-between">
            <span className="dark:dark:text-white  text-dark  text-darktext-sm font-mono">{activeFile?.name}</span>
            <button
            onClick={handleRunCode}
            disabled={isRunning}
            className={`flex items-center float-right space-x-1 px-3 py-1 rounded text-sm ${
              isRunning 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            <FiPlay size={14} />
            <span>Run</span>
          </button>
            <button 
                onClick={() => setIsIOPanelExpanded(!isIOPanelExpanded)}
                className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-700"
                title={isIOPanelExpanded ? "Minimize IO Panel" : "Maximize IO Panel"}
              >
                {isIOPanelExpanded ? <FiMinimize2 size={16} /> : <FiMaximize2 size={16} />}
              </button>
          </div>
          <Editor
              height={isIOPanelExpanded ? '60%' : '100%'}
            language={activeFile?.language || 'javascript'}
            theme="vs-dark"
            value={code}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: 'on',
              automaticLayout: true,
              suggest: {
                preview: true,
                showMethods: true,
                showFunctions: true,
                showConstructors: true,
                showFields: true,
                showVariables: true,
                showClasses: true,
                showStructs: true,
                showInterfaces: true,
                showModules: true,
                showProperties: true,
                showEvents: true,
                showOperators: true,
                showUnits: true,
                showValues: true,
                showConstants: true,
                showEnums: true,
                showEnumMembers: true,
                showKeywords: true,
                showWords: true,
                showColors: true,
                showFiles: true,
                showReferences: true,
                showFolders: true,
                showTypeParameters: true,
                showSnippets: true,
                showUsers: true,
                showIssues: true,
                showSymbols: true,
              },
              quickSuggestions: {
                other: true,
                comments: true,
                strings: true
              },
            }}
          />

        {/* Remote cursors */}
        <div className="absolute top-10 left-0 w-full h-[calc(100%-40px)] pointer-events-none">
          {users.map(user => (
            <CursorMarker
              key={user.id}
              user={user}
              position={cursorPositionsRef.current[user.id]}
            />
          ))}
        </div>
          {isIOPanelExpanded && (
            <div className="flex flex-col border-t border-gray-700" style={{ height: '40%' }}>
              <div className="flex flex-1">
                {/* Input Panel */}
                <div className="flex-1 flex flex-col border-r border-gray-700">
                  <div className="bg-gray-800 p-2 border-b border-gray-700">
                    <h3 className="text-sm font-medium text-white">Input</h3>
                  </div>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-3 bg-gray-800 text-gray-200 outline-none resize-none font-mono text-sm"
                    placeholder="Enter input for your program..."
                  />
                </div>
                
                {/* Output Panel */}
                <div className="flex-1 flex flex-col">
                  <div className="bg-gray-800 p-2 border-b border-gray-700">
                    <h3 className="text-sm font-medium text-white">Output</h3>
                  </div>
                  <pre className="flex-1 p-3 bg-gray-800 text-gray-200 overflow-auto font-mono text-sm whitespace-pre-wrap">
                    {isRunning ? 'Running...' : output || 'Output will appear here...'}
                  </pre>
                </div>
              </div>
              
              {/* Run Button for bottom panel */}
              <div className="bg-gray-800 border-t border-gray-700 p-2 flex justify-end">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className={`flex items-center space-x-2 px-3 py-1 rounded text-sm ${
                    isRunning 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  <FiPlay size={14} />
                  <span>Run Code</span>
                </button>
              </div>
            </div>
          )}
        </div>
        
      {/* Notes Panel */}
      <div className="w-80 dark:bg-[#1a1a1a] bg-gray-100 border-l dark:border-gray-700 border-gray-300 flex flex-col">
        <div className="p-3 border-b dark:border-gray-700 border-gray-300">
          <h2 className="font-bold dark:text-white text-dark">Notes</h2>
        </div>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          className="flex-1 p-4 dark:bg-[#1a1a1a] bg-gray-100 text-gray-200 outline-none resize-none"
          placeholder="Add shared notes here..."
        />
      </div>
      </div>
      
      {/* Status Bar */ }
  <footer className="dark:bg-[#1a1a1a] bg-gray-100 border-t dark:border-gray-700 border-gray-300 p-2 text-sm dark:text-gray-400 text-gray-100 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <span>{currentUser.name} (You)</span>
      <span className="hidden sm:inline">Connected</span>
    </div>
    <div>
      <span>{users.length + 1} users online</span>
    </div>
  </footer>
    </div >
  );
};

const CursorMarker = ({ user, position }) => {
  if (!position || !user) return null;

  return (
    <div
      className="absolute w-0.5 h-6"
      style={{
        left: `${position * 8}px`,
        top: '1.5rem',
        backgroundColor: user.color
      }}
    >
      <div
        className="absolute -top-6 left-0 px-2 py-1 text-xs rounded text-white"
        style={{ backgroundColor: user.color }}
      >
        {user.name}
      </div>
    </div>
  );
};

export default LiveCodingPage;