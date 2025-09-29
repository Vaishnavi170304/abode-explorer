import { render, screen } from '@testing-library/react';
import VirtualList from './VirtualList';
import Card from './Card';

describe('VirtualList Component', () => {
  const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: `Tip #${i + 1}`,
    description: `This is sample tip ${i + 1}`,
  }));

  test('renders virtualized items container', () => {
    render(<VirtualList items={items} itemHeight={110} />);
    const listContainer = screen.getByTestId('virtual-list');
    expect(listContainer).toBeInTheDocument();
  });

  test('renders at least one Card', () => {
    render(<VirtualList items={items} itemHeight={110} />);
    const card = screen.getByTestId('card-1');
    expect(card).toBeInTheDocument();
  });
});
