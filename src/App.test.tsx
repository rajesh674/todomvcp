import { render, screen } from '@testing-library/react';
import App from './App';

describe('UI test',()=>{
  test('test Heading text', () => {
    render(<App />)
    const linkElement = screen.getByTestId('head');
    expect(linkElement).toHaveTextContent('To Do Lists');
});
test('testing footer text', () => {
    render(<App />)
    const footerActive = screen.getByText('Active');
    const footerCompleted = screen.getByText('Completed');
    const footerpending = screen.getByText('0 pending tasks');
    expect(footerActive).toBeInTheDocument();
    expect(footerCompleted).toBeInTheDocument();
    expect(footerpending).toBeInTheDocument();
});
test('testing Input Box', () => {
    render(<App />)
    const inputbox = screen.getByRole('textbox');
    const inputboxPlaceholder = screen.getByPlaceholderText('What needs to be done?');
    expect(inputbox).toBeInTheDocument();
    expect(inputboxPlaceholder).toBeInTheDocument();
    expect(inputbox).toHaveAttribute('class', "new-todo");
    expect(inputbox).toHaveAttribute('data-testid', "inputid");
    expect(inputbox).toHaveAttribute('type', "text");
});


})

