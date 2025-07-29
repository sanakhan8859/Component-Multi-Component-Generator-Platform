import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import CodeViewer from './CodeView';

const Generate = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [generatedCode, setGeneratedCode] = useState('');

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { role: 'user', content: chatInput };
    setChatHistory((prev) => [...prev, userMessage]);
    setChatInput('');

    try {
      const response = await axios.post(
        `${BASE_URL}/ai/generate`,
        { prompt: chatInput },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const generated = response.data.data;
      const aiMessage = { role: 'assistant', content: generated };

      setChatHistory((prev) => [...prev, aiMessage]);
      setGeneratedCode(generated);

      await axios.post(
        `${BASE_URL}/sessions/save`,
        {
          title: chatInput,
          code: generated,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error('Error generating or saving:', error);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([generatedCode], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'generatedCode.txt');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50">
      {/* Chat + History */}
      <div className="col-span-1 bg-white border rounded-xl p-4 flex flex-col shadow-md max-h-[80vh]">
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 scroll-smooth">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] p-3 rounded-xl text-sm whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
          <input
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            className="flex-1 p-2 border rounded-lg shadow-inner text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Ask something like: Create a login form..."
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Code Viewer */}
      <div className="col-span-1 bg-white border rounded-xl p-4 flex flex-col shadow-md max-h-[80vh]">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">AI Response</h2>
          {generatedCode && (
            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
            >
              Download
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100 rounded p-3 text-sm font-mono">
          {generatedCode ? (
            <CodeViewer content={generatedCode} />
          ) : (
            <span className="text-gray-400">AI-generated response will appear here...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Generate;
