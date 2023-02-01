import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import Buttons from '../components/Buttons';

function SearchFoods(props) {
  const { match: { params: { id }, url } } = props;
  return (
    <div>
      SearchDrinks
      <RecipeDetails
        recipeId={ id }
        url={ url }
      />
      <Buttons />
    </div>
  );
}

export default SearchFoods;

SearchFoods.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
}.isRequired;
