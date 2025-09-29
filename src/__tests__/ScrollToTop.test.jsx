import { render, screen, fireEvent } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = jest.fn();
  });

  test('button is hidden initially', () => {
    render(<ScrollToTop threshold={300} />);
    const button = screen.queryByRole('button', { name: /scroll to top/i });
    expect(button).not.toBeInTheDocument();
  });

  test('button appears after scrolling', () => {
    render(<ScrollToTop threshold={300} />);
    // Simulate scroll
    window.pageYOffset = 400;
    fireEvent.scroll(window);

    const button = screen.getByRole('button', { name: /scroll to top/i });
    expect(button).toBeInTheDocument();
  });

  test('clicking button calls window.scrollTo', () => {
    render(<ScrollToTop threshold={300} />);
    window.pageYOffset = 400;
    fireEvent.scroll(window);

    const button = screen.getByRole('button', { name: /scroll to top/i });
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
