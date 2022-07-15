import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import { Provider } from 'react-redux'
import store from "./store/index";


describe('App', () => {
  describe('Home page', () => {
    beforeEach(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      )
    });

    it('renders table', () => {
      const table = screen.getByText(/Height/i);
      expect(table).toBeInTheDocument();
    });

  });
});
