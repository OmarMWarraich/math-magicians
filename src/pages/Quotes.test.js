import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Quotes from './Quotes';

describe('test Quotes component', () => {
  test('renders Quotes component', () => {
    const component = render(
      <BrowserRouter>
        <Quotes />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
