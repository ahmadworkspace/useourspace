/*
 * Marketplace specific configuration.
 */






export const amenitiesSoccerField = [
  {
    key: 'goals_with_nets',
    label: 'Goals with nets',
  },
  {
    key: 'marked_lines',
    label: 'Marked lines',
  },

];
export const amenitiesTennisCourt = [
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
];
export const amenities = [
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
];
export const amenities1 = [
  {
    key: 'towels',
    label: 'Towels',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'swimming_pool',
    label: 'Swimming pool',
  },
  {
    key: 'own_drinks',
    label: 'Own drinks allowed',
  },
  {
    key: 'jacuzzi',
    label: 'Jacuzzi',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'barbeque',
    label: 'Barbeque',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];

export const categories = [
  { key: 'soccer_field', label: 'Soccer Field' },
  { key: 'tennis_court', label: 'Tennis Court' },
  { key: 'commercial_kitchens', label: 'Commercial Kitchens' },
  { key: 'apartments', label: 'Apartments' },
  { key: 'arenasand_stadiums', label: 'Arenas and Stadiums' },
  { key: 'agriculture_land', label: 'Agriculture Land' },
  { key: 'big_venues', label: 'Big Venues' },
  { key: 'camps_and_lodges', label: 'Camps And Lodges' },
  { key: 'conference_rooms_and_classes', label: 'Conference Rooms and Classes' },
  { key: 'church2church', label: 'Church 2 church' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};


export const capacityOptions = [
  { key: '1to3', label: '1 to 3' },
  { key: '4to6', label: '4 to 6' },
  { key: '7to9', label: '7 to 9' },
  { key: '10plus', label: '10 plus' },
];
