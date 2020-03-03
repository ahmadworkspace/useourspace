import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from '../../util/reactIntl';
import * as custom from '../../marketplace-custom-config.js';

import { propTypes } from '../../util/types';
import config from '../../config';
import { Button, FieldCheckboxGroup, Form } from '../../components';

import css from './EditListingFeaturesForm.css';

const EditListingFeaturesFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        name,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;
      const amenties = localStorage.getItem('value');
      let ammenitiesvalue = "";
      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;


// Here are the conditions for specified category.
// if you want to add new amenities for a specific category add new if condition before last else. 

     if(amenties === 'tennis_court'){
       ammenitiesvalue = [
        {
          key: 'fully_fenced',
          label: 'Fully fenced',
        },
        {
          key: 'net_included',
          label: 'Net included',
        },
        {
          key: 'marked_Lines',
          label: 'Marked Lines',
        },
       ]
     }
   else  if(amenties === 'soccer_field') {
       ammenitiesvalue = [
      {
        key: 'goals_with_nets',
        label: 'Goals with nets',
      },
      {
        key: 'marked_lines',
        label: 'Marked lines',
      },
       ] 
    }
else if(amenties === 'commercial_kitchens'){

  ammenitiesvalue = [
    {
      key: 'refrigeration_capacity',
      label: 'Refrigeration Capacity',
    },
    {
      key: 'freezer_capacity',
      label: 'Freezer capacity',
    },
    {
      key: 'stove_tops',
      label: 'Stove tops',
    },
    {
      key: 'ovens',
      label: 'Ovens',
    },
    {
      key: 'plates',
      label: 'Plates',
    },
    {
      key: 'cups',
      label: 'Cups',
    },
    {
      key: 'silverware',
      label: 'Silverware',
    },
    {
      key: 'cook_pots',
      label: 'Cook pots',
    },
    {
      key: 'frying_pans',
      label: 'Frying pans',
    },
    {
      key: 'baking_sheets',
      label: 'Baking sheets',
    },
    {
      key: 'cooking_utensils',
      label: 'Cooking utensils',
    },
    {
      key: 'specialty_utensils',
      label: 'Specialty utensils',
    },
    {
      key: 'measuring_cups',
      label: 'Measuring cups',
    },
    {
      key: 'hot_pads',
      label: 'Hot pads',
    },
    {
      key: 'dishwasher',
      label: 'Dishwasher',
    },
    {
      key: 'triple_sink',
      label: 'Triple Sink',
    },
    {
      key: 'dish_towels',
      label: 'Dish towels',
    },
    {
      key: 'hand_wash_station',
      label: 'Hand wash station',
    },
    {
      key: 'first_aid_kit',
      label: 'First aid kit',
    },
    {
      key: 'griddle',
      label: 'Griddle',
    },
    {
      key: 'barbeque',
      label: 'Barbeque',
    },
    {
      key: 'restroom',
      label: 'Restroom Available',
    },
]
}  
else {
  ammenitiesvalue = [
    {
  key: 'not found',
  label:'No Amenities found for this category'
    }  
]
}

    
      return (
        
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}
        
      
          <FieldCheckboxGroup
            className={css.features}
            id={name}
            name={name}
            
            options={ammenitiesvalue}
          />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default EditListingFeaturesForm;
