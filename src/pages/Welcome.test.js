import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Welcome from './Welcome';

describe('test Welcome component', () => {
  test('renders Welcome component', () => {
    const component = render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
