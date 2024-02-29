// !STARTERCONF You should delete this page

import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<HomePage />);

    const heading = screen.getByText(
      /Currently our website is undergoing an update. Please come back later./i
    );

    expect(heading).toBeInTheDocument();
  });
});
