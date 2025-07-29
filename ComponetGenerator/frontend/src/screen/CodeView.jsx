// CodeViewer.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeViewer = ({ content }) => {
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="prose max-w-none text-sm">
      <ReactMarkdown
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');

            if (inline) {
              return (
                <code className="bg-gray-200 text-red-600 px-1 py-0.5 rounded">
                  {children}
                </code>
              );
            }

            return (
              <div className="relative group my-4">
                <button
                  onClick={() => handleCopy(codeString)}
                  className="absolute top-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded hidden group-hover:block"
                >
                  Copy
                </button>
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match ? match[1] : 'javascript'}
                  PreTag="div"
                  wrapLines
                  wrapLongLines
                  showLineNumbers
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default CodeViewer;
