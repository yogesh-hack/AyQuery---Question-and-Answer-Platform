// src/components/Editor.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../socket';

const Editor = () => {
  const { roomId } = useParams();
  const [code, setCode] = useState('');
  const [users, setUsers] = useState([]);
  const editorRef = useRef(null);
  const cursorPositionsRef = useRef({});
  
  // User data
  const [currentUser] = useState({
    id: Math.random().toString(36).substring(7),
    name: `User${Math.floor(Math.random() * 1000)}`,
    color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
  });

  useEffect(() => {
    // Connect to socket
    socket.connect();
    
    // Join room
    socket.emit('join-room', { roomId, user: currentUser });
    
    // Listen for code updates
    socket.on('code-update', ({ newCode, userId }) => {
      if (userId !== currentUser.id) {
        setCode(newCode);
      }
    });
    
    // Listen for user cursor positions
    socket.on('cursor-update', ({ userId, position }) => {
      cursorPositionsRef.current[userId] = position;
      updateRemoteCursors();
    });
    
    // Listen for user join/leave
    socket.on('users-update', (updatedUsers) => {
      setUsers(updatedUsers.filter(u => u.id !== currentUser.id));
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId, currentUser]);

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    socket.emit('code-update', { roomId, newCode, userId: currentUser.id });
    
    // Send cursor position
    const cursorPos = e.target.selectionStart;
    socket.emit('cursor-update', { roomId, position: cursorPos, userId: currentUser.id });
  };

  const updateRemoteCursors = () => {
    // This would update the visual representation of remote cursors
    // Implementation depends on how you want to display them
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Toolbar */}
      <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Live Coding Editor</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Room: {roomId}</span>
          <div className="flex -space-x-2">
            {users.map(user => (
              <div 
                key={user.id}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs"
                style={{ backgroundColor: user.color }}
                title={user.name}
              >
                {user.name.charAt(0)}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Editor Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-gray-200 p-4 overflow-y-auto">
          <h2 className="font-bold mb-4">Collaborators</h2>
          <ul className="space-y-2">
            {users.map(user => (
              <li key={user.id} className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: user.color }}
                ></div>
                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Code Editor */}
        <div className="flex-1 relative">
          <textarea
            ref={editorRef}
            value={code}
            onChange={handleCodeChange}
            className="w-full h-full p-4 font-mono text-gray-800 bg-white resize-none outline-none"
            spellCheck="false"
            placeholder="Start coding collaboratively..."
          />
          
          {/* Remote cursors would be rendered here */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {users.map(user => (
              <CursorMarker 
                key={user.id} 
                user={user} 
                position={cursorPositionsRef.current[user.id]} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="bg-gray-800 text-white p-2 text-sm flex justify-between">
        <span>{currentUser.name} (You)</span>
        <span>{users.length + 1} users online</span>
      </div>
    </div>
  );
};

const CursorMarker = ({ user, position }) => {
  if (!position) return null;
  
  // This is a simplified cursor marker
  // In a real app, you'd calculate the exact position in the textarea
  return (
    <div 
      className="absolute w-0.5 h-6"
      style={{
        left: `${position * 8}px`, // Approximate position
        top: '1rem',
        backgroundColor: user.color
      }}
    >
      <div 
        className="absolute -top-6 left-0 px-2 py-1 text-xs rounded"
        style={{ backgroundColor: user.color }}
      >
        {user.name}
      </div>
    </div>
  );
};

export default Editor;