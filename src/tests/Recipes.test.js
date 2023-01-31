import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import React from 'react';
import renderWithRouter from '../renderWithRouter';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';
import App from '../App';

const mealsRecipes = meals;
const drinksRecipes = drinks;

describe('Teste o componente Recipes', () => {
  afterEach(() => jest.clearAllMocks());

  it('Teste se quando a página MEALS é carregada são listadas 12 receitas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mealsRecipes),
    });
    await (act(async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/meals');
    }));

    expect(global.fetch).toHaveBeenCalled();
    mealsRecipes.meals.slice(0, 12).forEach((recipe, index) => {
      expect(screen.getByTestId(`${index}-recipe-card`)).toBeInTheDocument();
    });
  });

  it('Teste se quando a página DRINKS é carregada são listadas 12 receitas', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinksRecipes),
    });
    await (act(async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/drinks');
    }));

    expect(global.fetch).toHaveBeenCalled();
    drinksRecipes.drinks.slice(0, 12).forEach((recipe, index) => {
      expect(screen.getByTestId(`${index}-recipe-card`)).toBeInTheDocument();
    });
  });
});
