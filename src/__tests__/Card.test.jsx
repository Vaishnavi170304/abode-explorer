import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders title and description correctly', () => {
    const props = { id: 1, title: 'Tip #1', description: 'This is a sample tip.' };
    render(<Card {...props} />);

    // Check title
    expect(screen.getByText('Tip #1')).toBeInTheDocument();

    // Check description
    expect(screen.getByText('This is a sample tip.')).toBeInTheDocument();

    // Check data-testid
    expect(screen.getByTestId('card-1')).toBeInTheDocument();
  });
});
