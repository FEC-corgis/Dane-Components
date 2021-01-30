import React from 'react';
import Details from '../../Details';
import { render, screen } from '@testing-library/react';

test('should render', () => {
    render(<Details />);
    expect(screen.getByText('Superhost')).toBeInTheDocument(); // will have to make dynamic
});
