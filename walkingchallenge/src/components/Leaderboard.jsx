import React from 'react';
import useSheetSections from '../hooks/useSheeData';
import SectionTable from './SectionTable';

export default function Leaderboard() {
  const { sections, loading } = useSheetSections();

  if (loading) return <p>Loading leaderboard data...</p>;

  const sectionEntries = Object.entries(sections);

  return (
    <div>
      {sectionEntries.map(([sectionTitle, rows], idx) => (
        <SectionTable
          key={idx}
          title={sectionTitle}
          rows={rows}
          defaultOpen={idx === 0}
        />
      ))}
    </div>
  );
}
