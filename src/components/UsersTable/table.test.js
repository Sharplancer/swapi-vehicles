import React from 'react';
import { render, screen, act } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../../App';
import store from "../../store/index";
import { fetchUsers } from '../../store/users-slice';

describe('Table', () => {
  describe('Present data to the table', () => {    
    it('present table', async () => {

      act(() => {
        render(
          <Router>
            <App />
          </Router>
        )  
      });

      act(async () => {
        await store.dispatch(fetchUsers(1));
      }).then( () => {
          const table = screen.getByText(/Luke Skywalker/i);
          expect(table).toBeInTheDocument();
        }
      );
    });
  });
});
