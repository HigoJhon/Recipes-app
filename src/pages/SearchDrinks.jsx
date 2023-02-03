import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import Buttons from '../components/ShareAndFavoriteButtons';

function SearchDrinks(props) {
  // const link = `/${type}s/${id}`;
  const { match: { params: { id }, url } } = props;
  return (
    <div>
      SearchDrinks
      <RecipeDetails
        recipeId={ id }
        url={ url }
      />
      <Buttons url={ url } />
    </div>
  );
}

export default SearchDrinks;

SearchDrinks.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
}.isRequired;
