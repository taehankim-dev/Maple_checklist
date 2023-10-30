import '@testing-library/jest-dom';
import React from "react";
import ReactDOM from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App, { Login } from "../src/App";

test('render learn react link', () => {
  render(<App /> as React.ReactElement);

  const LinkElement = screen.getByText(/learn react/i);
  expect(LinkElement).toBeInTheDocument();
})

describe('Login Component Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.createRoot(container).render(<Login />);
    })
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it('Renders all input fields correctly', () => {
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(2);

    expect(inputs[0].name).toBe('email');
    expect(inputs[1].name).toBe('password');
  })

  it('Renders all buttons correctly', () => {
    const buttons = container.querySelectorAll('button')
    expect(buttons).toHaveLength(2);

    expect(buttons[0].type).toBe('button');
    expect(buttons[1].type).toBe('button');
  })
})