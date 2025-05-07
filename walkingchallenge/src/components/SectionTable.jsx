import React, { useState } from 'react';
import './Leaderboard.css';

export default function SectionTable({ title, rows, defaultOpen = false }) {
  if (!rows || rows.length < 2) return null;

  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [headers, ...data] = rows;

  return (
    <div className="leaderboard-container">
      <div
        className="leaderboard-header clickable"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
      </div>

      <div className={`table-wrapper ${isOpen ? 'open' : ''}`}>
        <table className="leaderboard-table">
          <thead>
            <tr>
              {headers.map((head, idx) => (
                <th key={idx}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
