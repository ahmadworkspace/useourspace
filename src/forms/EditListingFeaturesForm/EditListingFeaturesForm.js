import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { Button, FieldCheckboxGroup, Form } from '../../components';
import css from './EditListingFeaturesForm.css';
import {LISTING_CONFIGS} from "../../marketplace-custom-config";

const EditListingFeaturesFormComponent = props => (
    <FinalForm
        {...props}
        mutators={{ ...arrayMutators }}
        render={formRenderProps => {
            const {
                disabled,
                listing,
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
            const category = listing.attributes.publicData.category;
            const amenties = LISTING_CONFIGS[category] ?  LISTING_CONFIGS[category].amenities : [];
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


            return (

                <Form className={classes} onSubmit={handleSubmit}>
                    {errorMessage}
                    {errorMessageShowListing}


                    <FieldCheckboxGroup
                        className={css.features}
                        id={name}
                        name={name}

                        options={amenties}
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
