import {LINE_ITEM_DAY, LINE_ITEM_NIGHT, LINE_ITEM_UNITS} from "./util/types";
/*
 * Marketplace specific configuration.
 */
export const AVAILABILITY = 'availability';
export const DESCRIPTION = 'description';
export const FEATURES = 'features';
export const POLICY = 'policy';
export const LOCATION = 'location';
export const PRICING = 'pricing';
export const PHOTOS = 'photos';
export const CAPACITY = 'capacity';

export const SUPPORTED_TABS = [
    DESCRIPTION,
    FEATURES,
    CAPACITY,
    POLICY,
    LOCATION,
    PRICING,
    AVAILABILITY,
    PHOTOS,
];

// export const DYN_EMENTIES = {
//     tennis_court: [
//         {
//             key: 'fully_fenced',
//             label: 'Fully fenced',
//         },
//         {
//             key: 'net_included',
//             label: 'Net included',
//         },
//         {
//             key: 'marked_Lines',
//             label: 'Marked Lines',
//         },
//     ],
//     soccer_field: [
//         {
//             key: 'goals_with_nets',
//             label: 'Goals with nets',
//         },
//         {
//             key: 'marked_lines',
//             label: 'Marked lines',
//         },
//     ],
//     commercial_kitchens: [
//         {
//             key: 'refrigeration_capacity',
//             label: 'Refrigeration Capacity',
//         },
//         {
//             key: 'freezer_capacity',
//             label: 'Freezer capacity',
//         },
//         {
//             key: 'stove_tops',
//             label: 'Stove tops',
//         },
//         {
//             key: 'ovens',
//             label: 'Ovens',
//         },
//         {
//             key: 'plates',
//             label: 'Plates',
//         },
//         {
//             key: 'cups',
//             label: 'Cups',
//         },
//         {
//             key: 'silverware',
//             label: 'Silverware',
//         },
//         {
//             key: 'cook_pots',
//             label: 'Cook pots',
//         },
//         {
//             key: 'frying_pans',
//             label: 'Frying pans',
//         },
//         {
//             key: 'baking_sheets',
//             label: 'Baking sheets',
//         },
//         {
//             key: 'cooking_utensils',
//             label: 'Cooking utensils',
//         },
//         {
//             key: 'specialty_utensils',
//             label: 'Specialty utensils',
//         },
//         {
//             key: 'measuring_cups',
//             label: 'Measuring cups',
//         },
//         {
//             key: 'hot_pads',
//             label: 'Hot pads',
//         },
//         {
//             key: 'dishwasher',
//             label: 'Dishwasher',
//         },
//         {
//             key: 'triple_sink',
//             label: 'Triple Sink',
//         },
//         {
//             key: 'dish_towels',
//             label: 'Dish towels',
//         },
//         {
//             key: 'hand_wash_station',
//             label: 'Hand wash station',
//         },
//         {
//             key: 'first_aid_kit',
//             label: 'First aid kit',
//         },
//         {
//             key: 'griddle',
//             label: 'Griddle',
//         },
//         {
//             key: 'barbeque',
//             label: 'Barbeque',
//         },
//         {
//             key: 'restroom',
//             label: 'Restroom Available',
//         },
//     ]
// };

export const LISTING_CONFIGS = {

  auditoriums: {
    unitType: LINE_ITEM_UNITS,
    amenities: [
      {
        key: 'cushioned_seats',
        label: 'Cushioned Seats',
      },
      {
        key: 'air_conditioning',
        label: 'Air Conditioning',
      },
      {
        key: 'heating',
        label: 'Heating',
      },
      {
        key: 'tables',
        label: 'Tables',
      },
      {
        key: 'projector',
        label: 'Projector',
      },
      {
        key: 'audio',
        label: 'Audio',
      },
      {
        key: 'special_lighting',
        label: 'Special Lighting',
      },
      {
        key: 'piano',
        label: 'Piano',
      },
      {
        key: 'Food allowed',
        label: 'food_allowed',
      },
      {
        key: 'drinks_allowedr',
        label: 'Drinks allowed',
      },
      {
        key: 'Drinking fountain/water cooler',
        label: 'Drinking fountain/water cooler',
      }
    ],
    tabs: [
      DESCRIPTION,
      FEATURES,
      CAPACITY,
      POLICY,
      LOCATION,
      PRICING,
      AVAILABILITY,
      PHOTOS,
    ],
    rules: [
      {
        key: 'no_smoking',
        label: 'No smoking',
      },
      {
        key: 'no_food',
        label: 'No food',
      },
      {
        key: 'no_drinks',
        label: 'No drinks',
      },
      {
        key: 'no_pets_animals',
        label: 'No pets/animals',
      },
      {
        key: 'no_candles',
        label: 'No candles',
      },
    ]
  },



  agriculture_land: {
    unitType: LINE_ITEM_DAY,
    amenities: [
      {
        key: 'cushioned_seats',
        label: 'Cushioned Seats',
      },
      {
        key: 'air_conditioning',
        label: 'Air Conditioning',
      },
      {
        key: 'heating',
        label: 'Heating',
      },
      {
        key: 'tables',
        label: 'Tables',
      },
      {
        key: 'projector',
        label: 'Projector',
      },
      {
        key: 'audio',
        label: 'Audio',
      },
      {
        key: 'special_lighting',
        label: 'Special Lighting',
      },
      {
        key: 'piano',
        label: 'Piano',
      },
      {
        key: 'Food allowed',
        label: 'food_allowed',
      },
      {
        key: 'drinks_allowedr',
        label: 'Drinks allowed',
      },
      {
        key: 'Drinking fountain/water cooler',
        label: 'Drinking fountain/water cooler',
      }
    ],
    tabs: [
      DESCRIPTION,
      FEATURES,
      CAPACITY,
      POLICY,
      LOCATION,
      PRICING,
      AVAILABILITY,
      PHOTOS,
    ],
    rules: [
      {
        key: 'no_smoking',
        label: 'No smoking',
      },
      {
        key: 'no_food',
        label: 'No food',
      },
      {
        key: 'no_drinks',
        label: 'No drinks',
      },
      {
        key: 'no_pets_animals',
        label: 'No pets/animals',
      },
      {
        key: 'no_candles',
        label: 'No candles',
      },
    ]
  },

  conference_rooms_and_classrooms: {
    unitType: LINE_ITEM_UNITS,
    amenities: [
      {
        key: 'cushioned_seats',
        label: 'Cushioned Seats',
      },
      {
        key: 'air_conditioning',
        label: 'Air Conditioning',
      },
      {
        key: 'heating',
        label: 'Heating',
      },
      {
        key: 'tables',
        label: 'Tables',
      },
      {
        key: 'projector',
        label: 'Projector',
      },
      {
        key: 'audio',
        label: 'Audio',
      },
      {
        key: 'special_lighting',
        label: 'Special Lighting',
      },
      {
        key: 'piano',
        label: 'Piano',
      },
      {
        key: 'Food allowed',
        label: 'food_allowed',
      },
      {
        key: 'drinks_allowedr',
        label: 'Drinks allowed',
      },
      {
        key: 'Drinking fountain/water cooler',
        label: 'Drinking fountain/water cooler',
      }
    ],
    tabs: [
      DESCRIPTION,
      FEATURES,
      CAPACITY,
      POLICY,
      LOCATION,
      PRICING,
      AVAILABILITY,
      PHOTOS,
    ],
    rules: [
      {
        key: 'no_smoking',
        label: 'No smoking',
      },
      {
        key: 'no_food',
        label: 'No food',
      },
      {
        key: 'no_drinks',
        label: 'No drinks',
      },
      {
        key: 'no_pets_animals',
        label: 'No pets/animals',
      },
      {
        key: 'no_candles',
        label: 'No candles',
      },
    ]
  },

  commercial_kitchens: {
    unitType: LINE_ITEM_UNITS,
    amenities: [
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
    ],
    tabs: [
      DESCRIPTION,
      FEATURES,
      CAPACITY,
      POLICY,
      LOCATION,
      PRICING,
      AVAILABILITY,
      PHOTOS,
    ],
    rules: [
      {
        key: 'no_smoking',
        label: 'No smoking',
      },
      {
        key: 'no_food',
        label: 'No food',
      },
      {
        key: 'no_drinks',
        label: 'No drinks',
      },
      {
        key: 'no_pets_animals',
        label: 'No pets/animals',
      },
      {
        key: 'no_candles',
        label: 'No candles',
      },
    ]
  },
  mini_storage: {
    unitType: LINE_ITEM_DAY,
    amenities: [
      {
        key: 'video_surveillance',
        label: 'Video Surveillance',
      },
      {
        key: 'air_conditioning',
        label: 'Air Conditioning',
      },
      {
        key: 'heating',
        label: 'Heating',
      },
      {
        key: 'security',
        label: 'Security 24/7',
      },
      {
        key: 'gate',
        label: 'Gate',
      },
      {
        key: 'fenced',
        label: 'Fenced',
      },
      {
        key: 'lighting',
        label: 'Lighting',
      },
    ],
    tabs: [
      DESCRIPTION,
      FEATURES,
      CAPACITY,
      POLICY,
      LOCATION,
      PRICING,
      AVAILABILITY,
      PHOTOS,
    ],
    rules: [
      {
        key: 'no_smoking',
        label: 'No smoking',
      },
      {
        key: 'no_food',
        label: 'No food',
      },
      {
        key: 'no_drinks',
        label: 'No drinks',
      },
      {
        key: 'no_pets_animals',
        label: 'No pets/animals',
      },
      {
        key: 'no_candles',
        label: 'No candles',
      },
    ]
  },
  boat_storage: {
    unitType: LINE_ITEM_DAY,
    amenities: [
      {
        key: 'video_surveillance',
        label: 'Video Surveillance',
      },
      {
        key: 'air_conditioning',
        label: 'Air Conditioning',
      },
      {
        key: 'heating',
        label: 'Heating',
      },
      {
        key: 'security',
        label: 'Security 24/7',
      },
      {
        key: 'gate',
        label: 'Gate',
      },
      {
        key: 'fenced',
        label: 'Fenced',
      },
      {
        key: 'lighting',
        label: 'Lighting',
      },
    ],
    tabs: [
      DESCRIPTION,
      FEATURES,
      CAPACITY,
      POLICY,
      LOCATION,
      PRICING,
      AVAILABILITY,
      PHOTOS,
    ],
    rules: [
      {
        key: 'no_smoking',
        label: 'No smoking',
      },
      {
        key: 'no_food',
        label: 'No food',
      },
      {
        key: 'no_drinks',
        label: 'No drinks',
      },
      {
        key: 'no_pets_animals',
        label: 'No pets/animals',
      },
      {
        key: 'no_candles',
        label: 'No candles',
      },
    ]
  },

















    // tennis_court: {
    //     unitType: LINE_ITEM_UNITS,
    //     amenities: [
    //         {
    //             key: 'fully_fenced',
    //             label: 'Fully fenced',
    //         },
    //         {
    //             key: 'net_included',
    //             label: 'Net included',
    //         },
    //         {
    //             key: 'marked_Lines',
    //             label: 'Marked Lines',
    //         },
    //     ],
    //     tabs: [
    //         DESCRIPTION,
    //         FEATURES,
    //         CAPACITY,
    //         POLICY,
    //         LOCATION,
    //         PRICING,
    //         AVAILABILITY,
    //         PHOTOS,
    //     ],
    //     rules: [
    //         {
    //             key: 'no_smoking',
    //             label: 'No smoking',
    //         },
    //         {
    //             key: 'no_food',
    //             label: 'No food',
    //         },
    //         {
    //             key: 'no_drinks',
    //             label: 'No drinks',
    //         },
    //         {
    //             key: 'no_pets_animals',
    //             label: 'No pets/animals',
    //         },
    //         {
    //             key: 'no_candles',
    //             label: 'No candles',
    //         },
    //     ]
    // },
    // soccer_field: {
    //     unitType: LINE_ITEM_DAY,
    //     amenities: [
    //         {
    //             key: 'goals_with_nets',
    //             label: 'Goals with nets',
    //         },
    //         {
    //             key: 'marked_lines',
    //             label: 'Marked lines',
    //         },
    //     ],
    //     tabs: [
    //         DESCRIPTION,
    //         FEATURES,
    //         LOCATION,
    //         PRICING,
    //         AVAILABILITY,
    //         PHOTOS,
    //     ]
    // },
    // commercial_kitchens: {
    //     unitType: LINE_ITEM_NIGHT,
    //     amenities: [
    //         {
    //             key: 'refrigeration_capacity',
    //             label: 'Refrigeration Capacity',
    //         },
    //
    //         {
    //             key: 'restroom',
    //             label: 'Restroom Available',
    //         },
    //     ],
    //     tabs: [
    //         DESCRIPTION,
    //         FEATURES,
    //         CAPACITY,
    //         POLICY,
    //         LOCATION,
    //         AVAILABILITY,
    //         PHOTOS,
    //     ]
    // }
};


export const getAmenties = (key) => {
    const amenty = DYN_EMENTIES[key];

    return amenty || [
        {
            key: 'not found',
            label:'No Amenities found for this category'
        }
    ]
};


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
export const tennis_court = [
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
  { key: 'auditoriums', label: 'Auditoriums' },
  { key: 'agricultural_land', label: 'Agricultural Land' },
  { key: 'conference_rooms_and_classrooms', label: 'Conference Rooms & Classrooms' },
  { key: 'commercial_kitchens', label: 'Commercial Kitchens' },
  { key: 'mini_storage', label: 'Mini Storage' },
  { key: 'boat_storage', label: 'RV & Boat Storage' },

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
