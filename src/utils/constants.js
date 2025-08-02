export const APP_LOGO_URL =
  "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png";

export const RES_LOGO_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RES_LIST_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9048022&lng=77.6821069&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const RES_INFO_API_URL = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.875628420654445&lng=74.46725349671841&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
