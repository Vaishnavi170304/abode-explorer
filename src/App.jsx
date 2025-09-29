
import React, { useMemo } from 'react';
import VirtualList from './VirtualList';
import ScrollToTop from './ScrollToTop';
import './index.css';

export default function App() {
  // Generate 1000 sample cards
  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      title: `Tip #${i + 1}`,
      description: `This is a sample tip about home loans. Item number ${i + 1}.`,
    }));
  }, []);

  return (
    <div className="app">
      <div className="header">
        <div className="title">Abode Explorer — Tips</div>
        <div>Rendering {items.length} cards (virtualized)</div>
      </div>

      <div className="listContainer" data-testid="list-container">
        <VirtualList items={items} itemHeight={110} />
      </div>

      <ScrollToTop threshold={300} />
    </div>
  );
}
