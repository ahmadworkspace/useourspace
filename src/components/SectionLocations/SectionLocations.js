import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import helsinkiImage from './images/Chicago.jpg';
import rovaniemiImage from './images/LasVegas.jpg';
import rukaImage from './images/seattle.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Chicago',
          helsinkiImage,
          '?address=Chicago%2C%20Illinois%2C%20United%20States%20of%20America&bounds=42.0234323628388%2C-87.523686109734%2C41.6299229800457%2C-87.9058109309507'
        )}
        {locationLink(
          'LasVegas',
          rovaniemiImage,
          '?address=Las%20Vegas%2C%20Nevada%2C%20United%20States%20of%20America&bounds=36.853662%2C-114.91706715939%2C35.6184504774325%2C-115.896925507127'
        )}
        {locationLink(
          'Seattle',
          rukaImage,
          '?address=Seattle%2C%20Washington%2C%20United%20States%20of%20America&bounds=47.7779392908564%2C-122.216605992108%2C47.3403950185547%2C-122.441233019046'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
