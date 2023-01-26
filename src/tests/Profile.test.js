import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Profile from '../pages/Profile';
import renderWithRouter from '../renderWithRouter';

describe('Verifica se o profile', () => {
  test(' possui informações necessarias', () => {
    const { history } = renderWithRouter(<Profile />);
    const email = screen.getByTestId('profile-email');
    expect(email).toBeInTheDocument();
    const inputBtnDoneRecipes = screen.getByTestId('profile-done-btn');
    expect(inputBtnDoneRecipes).toBeInTheDocument();
    const inputBtnFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
    expect(inputBtnFavoriteRecipes).toBeInTheDocument();
    const inputBtnLogout = screen.getByTestId('profile-logout-btn');
    expect(inputBtnLogout).toBeInTheDocument();

    userEvent.click(inputBtnDoneRecipes);
    userEvent.click(inputBtnFavoriteRecipes);
    userEvent.click(inputBtnLogout);

    expect(history.location.pathname).toBe('/done-recipes');
    expect(history.location.pathname).toBe('/favorite-recipes');
    expect(history.location.pathname).toBe('/');
  });
});
