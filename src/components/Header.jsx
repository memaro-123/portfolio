import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="badge">
        <span className="status-indicator" />
        <span>Developer Portfolio</span>
      </div>
      <h1 className="title">Selected Projects</h1>
      <p className="subtitle">
        Curated web applications and software tools built by{' '}
        <a href="https://github.com/memaro-123" target="_blank" rel="noopener noreferrer">
          @memaro-123
        </a>.
      </p>
    </header>
  );
}
