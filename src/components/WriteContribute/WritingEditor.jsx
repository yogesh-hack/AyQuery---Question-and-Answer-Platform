// components/WritingEditor.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Save, Users, GitBranch, Code, FileText, Maximize2, 
  Type, Image, Table, List, Link2, Code2, Quote, 
  File, LayoutGrid, ChevronLeft, ChevronRight,Plus 
} from "lucide-react";
import { Editor } from '@tinymce/tinymce-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DragElement = ({ icon, label, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'element',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag}
      className={`flex items-center p-2 mb-2 rounded-md cursor-move bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="mr-2 text-gray-600 dark:text-gray-300">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

const ElementsSidebar = () => {
  const elements = [
    { type: 'heading', icon: <Type size={16} />, label: 'Heading' },
    { type: 'paragraph', icon: <FileText size={16} />, label: 'Paragraph' },
    { type: 'image', icon: <Image size={16} />, label: 'Image' },
    { type: 'table', icon: <Table size={16} />, label: 'Table' },
    { type: 'list', icon: <List size={16} />, label: 'List' },
    { type: 'link', icon: <Link2 size={16} />, label: 'Link' },
    { type: 'code', icon: <Code2 size={16} />, label: 'Code Block' },
    { type: 'quote', icon: <Quote size={16} />, label: 'Quote' },
  ];

  return (
    <div className="w-48 p-4 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <h3 className="font-medium mb-4 text-gray-700 dark:text-gray-300">Elements</h3>
      {elements.map((el) => (
        <DragElement key={el.type} type={el.type} icon={el.icon} label={el.label} />
      ))}
    </div>
  );
};

const PagesSidebar = ({ pages, onPageChange }) => {
  return (
    <div className="w-56 p-4 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-700 dark:text-gray-300">Pages</h3>
        <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <Plus size={16} />
        </button>
      </div>
      <div className="space-y-2">
        {pages.map((page, index) => (
          <div 
            key={index}
            onClick={() => onPageChange(index)}
            className={`p-2 rounded cursor-pointer ${
              page.active 
                ? 'bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center">
              <File size={14} className="mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-sm">{page.title || `Page ${index + 1}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function WritingEditor() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get("type") || "content";
  
  const [content, setContent] = useState(`<h1>Welcome to your new ${type}</h1><p>Start writing here...</p>`);
  const [pages, setPages] = useState([
    { title: "Cover", content: "", active: true },
    { title: "Chapter 1", content: "", active: false },
  ]);

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const switchPage = (index) => {
    setPages(pages.map((page, i) => ({
      ...page,
      active: i === index
    })));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dark:text-white flex h-screen pt-16">
        {/* Left Sidebar - Elements */}
        <ElementsSidebar />

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Editor Header */}
          <div className="bg-gray-100 dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full bg-${
                  type === "blog" ? "purple" : 
                  type === "story" ? "pink" : 
                  type === "article" ? "blue" : "green"
                }-100 dark:bg-${
                  type === "blog" ? "purple" : 
                  type === "story" ? "pink" : 
                  type === "article" ? "blue" : "green"
                }-900/30 text-${
                  type === "blog" ? "purple" : 
                  type === "story" ? "pink" : 
                  type === "article" ? "blue" : "green"
                }-800 dark:text-${
                  type === "blog" ? "purple" : 
                  type === "story" ? "pink" : 
                  type === "article" ? "blue" : "green"
                }-400 text-sm font-medium`}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
                <h1 className="text-xl font-semibold">{pages.find(p => p.active)?.title || 'Untitled'}</h1>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm">
                  <GitBranch className="w-4 h-4" />
                  <span>Draft</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm">
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Editor Toolbar */}
          <div className="bg-gray-50 dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-700 p-2">
            <div className="flex items-center space-x-1 overflow-x-auto">
              <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <Maximize2 className="w-4 h-4" />
              </button>
              <div className="h-5 w-px bg-gray-300 dark:bg-gray-600"></div>
              <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <FileText className="w-4 h-4" />
              </button>
              <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <Code className="w-4 h-4" />
              </button>
              <div className="h-5 w-px bg-gray-300 dark:bg-gray-600"></div>
              <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <Users className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Editor Content */}
          <div className="flex-1 overflow-auto bg-white dark:bg-gray-900">
            <Editor
              apiKey="your-tinymce-api-key"
              value={content}
              onEditorChange={handleEditorChange}
              init={{
                height: '100%',
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                skin: 'oxide-dark',
                content_css: 'dark'
              }}
            />
          </div>
          
          {/* Editor Status Bar */}
          <div className="bg-gray-100 dark:bg-[#0d1117] border-t border-gray-200 dark:border-gray-700 p-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between items-center">
            <div>UTF-8</div>
            <div className="flex items-center space-x-4">
              <span>Page {pages.findIndex(p => p.active) + 1} of {pages.length}</span>
              <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div>Word Count: 0</div>
          </div>
        </div>

        {/* Right Sidebar - Pages */}
        <PagesSidebar pages={pages} onPageChange={switchPage} />
      </div>
    </DndProvider>
  );
}