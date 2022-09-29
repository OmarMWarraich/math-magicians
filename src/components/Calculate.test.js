import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Calculator from './Calculator';

describe('test Calculator component', () => {
  test('renders Calculator component', () => {
    const component = render(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
