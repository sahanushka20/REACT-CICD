import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/This React App is to set up different pipelines for a react project to run successfully/i);
    expect(linkElement).toBeInTheDocument();

    const buttonElement = screen.getByText(/Count : 0/i);
    expect(buttonElement).toBeInTheDocument();
});