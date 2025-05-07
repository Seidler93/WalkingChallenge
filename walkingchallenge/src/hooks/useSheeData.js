import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSheetSections(sheetName = 'Step Challenge Summary') {
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(true);

  const sheetID = import.meta.env.VITE_SHEET_ID;
  const apiKey = import.meta.env.VITE_SHEET_API_KEY;

  useEffect(() => {
    async function fetchData() {
      try {
        const range = encodeURIComponent(`${sheetName}!A1:Z1000`);
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;
        const res = await axios.get(url);
        const rows = res.data.values;

        const parsedSections = {};
        let currentSection = null;

        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          if (row.length === 0 || row.every(cell => cell === '')) continue;

          // New section header (e.g., "Top 15 Average Steppers Overall")
          if (row.length === 1 && row[0]) {
            currentSection = row[0];
            parsedSections[currentSection] = [];
          } else if (currentSection) {
            parsedSections[currentSection].push(row);
          }
        }

        setSections(parsedSections);
      } catch (err) {
        console.error('Failed to fetch sectioned data', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [sheetID, apiKey, sheetName]);

  return { sections, loading };
}
