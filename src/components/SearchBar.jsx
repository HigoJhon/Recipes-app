import { useContext, useRef, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import Button from './Button';

function SearchBar() {
  const [search, setSearch] = useState('');
  const selectOption = useRef('');

  const { handleFetch,
    searchFood,
    setRenderDrinks,
    setRenderMeals } = useContext(RecipesContext);

  const history = useHistory();
  const location = useLocation();

  const handleInput = ({ target }) => {
    if (target.checked) {
      selectOption.current = target.value;
    }
  };

  const handleSearch = () => {
    const ONE = 1;
    if (selectOption.current === 'firstLetter' && search.length > ONE) {
      global.alert('Your search must have only 1 (one) character');

      return search;
    }
    handleFetch(selectOption.current, search);
    setSearch('');
  };

  useEffect(() => {
    if (location.pathname.includes('meals') && searchFood.length === 1) {
      const idMeals = searchFood[0].idMeal;
      history.push(`/meals/${idMeals}`);
    }
    if (location.pathname.includes('drinks') && searchFood.length === 1) {
      const idDrinks = searchFood[0].idDrink;
      history.push(`/drinks/${idDrinks}`);
    }
    if (location.pathname.includes('drinks') && searchFood.length > 1) {
      setRenderDrinks(searchFood);
    }
    if (location.pathname.includes('meals') && searchFood.length > 1) {
      setRenderMeals(searchFood);
    }
  }, [handleFetch,
    history,
    location,
    searchFood,
    setRenderDrinks,
    setRenderMeals]);

  return (
    <div>
      <div>
        <input
          data-testid="search-input"
          name="search"
          type="texto"
          placeholder="Busca"
          onChange={ ({ target }) => setSearch(target.value) }
        />
        <br />
        <label htmlFor="ingredient">
          <input
            type="radio"
            name="searchKind"
            id="ingredient"
            value="ingredient"
            defaultChecked={ selectOption.current === 'ingredient' }
            data-testid="ingredient-search-radio"
            onChange={ handleInput }
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            name="searchKind"
            id="name"
            value="name"
            defaultChecked={ selectOption.current === 'name' }
            data-testid="name-search-radio"
            onChange={ handleInput }
          />
          Name
        </label>
        <label htmlFor="First letter">
          <input
            type="radio"
            name="searchKind"
            id="firstLetter"
            value="firstLetter"
            defaultChecked={ selectOption.current === 'firstLetter' }
            data-testid="first-letter-search-radio"
            onChange={ handleInput }
          />
          First letter
        </label>
      </div>
      <Button
        testId="exec-search-btn"
        onButtonClick={ handleSearch }
        buttonName="Search"
      />
    </div>
  );
}

export default SearchBar;
