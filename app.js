import { createRoot } from "react-dom/client";

/* 
-AppLayout
  -Header
    -Logo
    -Nav Links
      -Home
      -About
      -Contact
      -Cart
  -Body
    -Search
      -Input
      -Button
    -Restaurant Container
      -ResCard
        -Res Image
        -Restaurant Name, Star Rating, Cuisine, Delivery Time
  -Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

/* 
Config Driven UI Example

const config = {
  formConfig: [
    { label: "Name", type: "text", name: "name" },
    { label: "Mobile Number", type: "number", name: "mobile" },
  ],
};

const Form = ({ formConfig }) => {
  return formConfig.map((formdata, i) => {
    return (
      <div key={i}>
        <label htmlFor={formdata.name}>{formdata.label}</label>
        <input type={formdata.type} name={formdata.name} id={formdata.name} />
      </div>
    );
  });
};


      <Form formConfig={config.formConfig} />
 */

const resData = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "133768",
      name: "Salt Water Resto Cafe",
      cloudinaryImageId: "ejw2bqy7dpsdwvzsel93",
      locality: "Hanuman Nagar Road",
      areaName: "Hanuman Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Fast Food", "Kebabs", "Beverages"],
      avgRating: 4.3,
      parentId: "176281",
      avgRatingString: "4.3",
      totalRatingsString: "7.0K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-26 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹109",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-15f99878-bdde-4c23-b154-ab7bfd2d3dcf",
    },
    cta: {
      link: "https://www.swiggy.com/city/belgaum/salt-water-resto-cafe-road-hanuman-nagar-rest133768",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "123672",
      name: "Niyaaz Nehru Nagar",
      cloudinaryImageId: "ofutlfh4qovq4to2fhlm",
      locality: "Devaraj Uras Colony",
      areaName: "Belgaum Locality",
      costForTwo: "₹350 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Mughlai",
        "Chinese",
        "Kebabs",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "375273",
      avgRatingString: "4.3",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-26 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-15f99878-bdde-4c23-b154-ab7bfd2d3dcf",
    },
    cta: {
      link: "https://www.swiggy.com/city/belgaum/niyaaz-nehru-nagar-devaraj-uras-colony-belgaum-locality-rest123672",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "102262",
      name: "Grand China",
      cloudinaryImageId: "ax9lcgqai44w74ipwi1u",
      locality: "Bauxite Road",
      areaName: "Bauxite Road",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Fast Food", "Kebabs", "Beverages"],
      avgRating: 4.3,
      parentId: "89728",
      avgRatingString: "4.3",
      totalRatingsString: "6.2K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-26 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-15f99878-bdde-4c23-b154-ab7bfd2d3dcf",
    },
    cta: {
      link: "https://www.swiggy.com/city/belgaum/grand-china-bauxite-road-rest102262",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "101876",
      name: "Shree Panjurli Lunch home",
      cloudinaryImageId: "p9pfx0xmj0usl3tnuybe",
      locality: "Old PB Road",
      areaName: "Kolhapur cricle",
      costForTwo: "₹350 for two",
      cuisines: [
        "Biryani",
        "Seafood",
        "Kebabs",
        "Chinese",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "185244",
      avgRatingString: "4.2",
      totalRatingsString: "8.6K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-26 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹29",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-15f99878-bdde-4c23-b154-ab7bfd2d3dcf",
    },
    cta: {
      link: "https://www.swiggy.com/city/belgaum/shree-panjurli-lunch-home-old-pb-road-kolhapur-cricle-rest101876",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "450266",
      name: "The Good Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/d92a1e44-100c-4b65-9de9-7e32e8041f63_450266.jpg",
      locality: "Gyangwadi Road",
      areaName: "Belgaum Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "7918",
      avgRatingString: "4.3",
      totalRatingsString: "894",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-26 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹165 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
        headerTypeV2: 12,
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-15f99878-bdde-4c23-b154-ab7bfd2d3dcf",
    },
    cta: {
      link: "https://www.swiggy.com/city/belgaum/the-good-bowl-gyangwadi-road-belgaum-locality-rest450266",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "211572",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/be641c90-a30c-4f91-ac1e-b72c79ca59a7_211572.JPG",
      locality: "Devaraj Uras Colony",
      areaName: "Belgaum Locality",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.5,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-26 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹65 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 12,
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-15f99878-bdde-4c23-b154-ab7bfd2d3dcf",
    },
    cta: {
      link: "https://www.swiggy.com/city/belgaum/baskin-robbins-ice-cream-desserts-devaraj-uras-colony-belgaum-locality-rest211572",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1003674",
      name: "Sharief Bhai Biryani",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/4f8bc561-9e42-40a2-9df4-b429afdd8f02_1003674.jpg",
      locality: "Belgaum Mahanagar Palike",
      areaName: "Tilakwadi, Belagavi",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Arabian",
        "rolls",
        "Street Food",
        "Tea",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "469102",
      avgRatingString: "4.3",
      totalRatingsString: "746",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 9.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-26 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "65% OFF",
        subHeader: "UPTO ₹125",
        headerTypeV2: 12,
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-15f99878-bdde-4c23-b154-ab7bfd2d3dcf",
    },
    cta: {
      link: "https://www.swiggy.com/city/belgaum/sharief-bhai-biryani-mahanagar-palike-tilakwadi-belagavi-rest1003674",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "450267",
      name: "The Biryani Life",
      cloudinaryImageId: "jt5zptke4phbtfsfigbb",
      locality: "Gyangwadi Road",
      areaName: "Belgaum Locality",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "8496",
      avgRatingString: "4.1",
      totalRatingsString: "249",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-26 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-15f99878-bdde-4c23-b154-ab7bfd2d3dcf",
    },
    cta: {
      link: "https://www.swiggy.com/city/belgaum/the-biryani-life-gyangwadi-road-belgaum-locality-rest450267",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="Logo"
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return <div className="search-container">Search</div>;
};

const ResCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="res-card">
      <img
        alt="res logo"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-content">
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{`❇️ ${avgRating} stars`}</h4>
        <h4>{`${sla?.deliveryTime} minutes`}</h4>
      </div>
    </div>
  );
};

const RestaurantCardContainer = () => {
  return (
    <div className="res-container">
      {resData.map((restaurant) => (
        <ResCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <RestaurantCardContainer />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<AppLayout />);
