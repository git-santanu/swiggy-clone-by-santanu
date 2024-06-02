const getData = [
// 20230528110241
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6012849&lng=88.3312686&page_type=DESKTOP_WEB_LISTING

{
  "statusCode": 0,
  "data": {
    "cacheExpiryTime": 320,
    "pages": 1,
    "pageIndex": 0,
    "scrubber": 0,
    "filters": [
      {
        "type": "FilterWidget",
        "title": "Cuisines",
        "key": "CUISINES",
        "configType": "checkbox",
        "visible": 1,
        "options": [
          {
            "option": "American",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Asian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Bakery",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Barbecue",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Bengali",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Beverages",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Bihari",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Biriyani",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "British",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Burgers",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Cafe",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Chaat",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Chinese",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Continental",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Desserts",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Fast Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Healthy Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Hyderabadi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Ice Cream",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Ice Cream Cakes",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Italian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Italian-American",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Jain",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Kebabs",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Lucknowi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Mexican",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Mughlai",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "North Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pastas",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Pizzas",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Punjabi",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Salads",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Snacks",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "South Indian",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Street Food",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Sweets",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Tandoor",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Thai",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Thalis",
            "selected": 0,
            "visible": 1
          },
          {
            "option": "Tibetan",
            "selected": 0,
            "visible": 1
          }
        ],
        "detail": "",
        "heading": "Cuisines",
        "applicable": 1,
        "searchable": 1
      },
      {
        "type": "FilterWidget",
        "title": "Show Restaurants With",
        "key": "SHOW_RESTAURANTS_WITH",
        "configType": "checkbox",
        "visible": 1,
        "options": [
          {
            "option": "Pure Veg",
            "selected": 0,
            "visible": 1
          }
        ],
        "detail": "",
        "heading": "Offers & More",
        "applicable": 1,
        "searchable": 0
      }
    ],
    "sorts": [
      {
        "type": "SortWidget",
        "key": "RELEVANCE",
        "title": "Relevance",
        "selected": 1,
        "visible": 1,
        "defaultSelection": true
      },
      {
        "type": "SortWidget",
        "key": "DELIVERY_TIME",
        "title": "Delivery Time",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "RATING",
        "title": "Rating",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "COST_FOR_TWO",
        "title": "Cost: Low to High",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      },
      {
        "type": "SortWidget",
        "key": "COST_FOR_TWO_H2L",
        "title": "Cost: High to Low",
        "selected": 0,
        "visible": 1,
        "defaultSelection": false
      }
    ],
    "configs": {
      "ribbons": {
        "PREORDER": {
          "type": "PREORDER",
          "text": "Preorder",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#af2330",
          "priority": 3
        },
        "EXCLUSIVE": {
          "type": "EXCLUSIVE",
          "text": "Exclusive",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#fa4a5b",
          "bottomBackgroundColor": "#d12a3b",
          "priority": 2
        },
        "NEW": {
          "type": "NEW",
          "text": "Newly Added",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#d53d4c",
          "bottomBackgroundColor": "#af2330",
          "priority": 4
        },
        "REPEAT": {
          "type": "REPEAT",
          "text": "Repeat",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#D53D4C",
          "bottomBackgroundColor": "#B02331",
          "priority": 6
        },
        "CLOUD": {
          "type": "CLOUD",
          "text": "Daily Menus",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#fa4a5b",
          "bottomBackgroundColor": "#d12a3b",
          "priority": 5
        },
        "PREMIUM": {
          "type": "PREMIUM",
          "text": "Premium",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#8a584b",
          "bottomBackgroundColor": "#583229",
          "priority": 7
        },
        "PROMOTED": {
          "type": "PROMOTED",
          "text": "Promoted",
          "textColor": "#ffffff",
          "imageId": "sfefefefeegeg",
          "topBackgroundColor": "#3a3c41",
          "bottomBackgroundColor": "#1e2023",
          "priority": 1
        }
      },
      "croutons": {
        "RAIN": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          // eslint-disable-next-line
          "message": "${amount} extra levied on some restaurants"
        },
        "SERVICEABLE_WITH_BANNER_RAIN": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "rain_crouton_4x",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          "message": "Few restaurants unserviceable due to rains"
        },
        "RAIN_LOW": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          "message": "Your orders may be delayed by 5-10 mins"
        },
        "RAIN_HIGH": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "Bad Weather",
          "message": "Your orders may be delayed by 5-10 mins"
        },
        "SPECIAL": {
          "type": "Crouton",
          "bgColor": "#282C3F",
          "icon": "surge_listing_piuzrv",
          "textColor": "#ffffff",
          "title": "High Demand",
          // eslint-disable-next-line
          "message": "Surge fee of Rs ${amount} may be applicable"
        }
      }
    },
    "cards": [
      {
        "cardType": "carousel",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "carousel",
          "subtype": "topCarousel",
          "data": {
            "cards": [
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 635529,
                  "creativeId": "rng/md/carousel/production/pneknawbadtvceqzwiep",
                  "type": "restaurantCollectionV2",
                  "link": "49301",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 619141,
                  "creativeId": "rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t",
                  "type": "restaurantCollectionV2",
                  "link": "56413",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 607195,
                  "creativeId": "rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3",
                  "type": "restaurantCollectionV2",
                  "link": "56421",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "thirdPartyVendor": "",
                  "thirdPartyAddress": false
                }
              }
            ]
          }
        },
        "parentWidget": false
      },
      {
        "cardType": "carousel",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "carousel",
          "subtype": "openFilter",
          "data": {
            "cards": [
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181684,
                  "creativeId": "bkhjfipzydkoqncrxpyi",
                  "type": "restaurantCollectionV2",
                  "link": "11718",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Offers Near You",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Offers Near You",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "eyperwsfhaoa5vktjtu4",
                  "dwebOpenFilterDeselectIcon": "urw8usdf4mk9aywd59gq"
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 273242,
                  "creativeId": "rng/md/carousel/production/vquntqrzvkb08pe59cec",
                  "type": "restaurantCollectionV2",
                  "link": "46147",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Top Picks",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Top Picks",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "rng/md/carousel/production/vt13uzhjrg5r49kh9oru",
                  "dwebOpenFilterDeselectIcon": "rng/md/carousel/production/ser2sttildk9yt7t2s91"
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181685,
                  "creativeId": "auhzanqqslsq5meh0m9l",
                  "type": "restaurantCollectionV2",
                  "link": "11709",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Only on Swiggy",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Only on Swiggy",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "tvjhvfzjhbxune2idler",
                  "dwebOpenFilterDeselectIcon": "y4vnumwu4f8olsly1hnw"
                }
              },
              {
                "type": "carouselElement",
                "subtype": "image",
                "data": {
                  "bannerId": 181680,
                  "creativeId": "a3jqjjod5taken7dh1bs",
                  "type": "restaurantCollectionV2",
                  "link": "11721",
                  "cityId": 0,
                  "restaurantUuid": "",
                  "restaurantParentId": "0",
                  "title": "Veg Only",
                  "subtitle": "0 OPTIONS",
                  "restaurants": [
                    
                  ],
                  "totalCount": 0,
                  "dwebOpenFilterTitle": "Vegetarian Options",
                  "dwebOpenFilterBgColor": "#FF0000",
                  "dwebOpenFilterSelectIcon": "qtjc8dzfexg72lug37a0",
                  "dwebOpenFilterDeselectIcon": "bm8bziikwyvwqsml1clm"
                }
              }
            ]
          }
        },
        "parentWidget": false
      },
      {
        "cardType": "seeAllRestaurants",
        "layoutAlignmentType": "VERTICAL",
        "data": {
          "type": "seeAllRestaurants",
          "data": {
            "title": "SEE ALL",
            "totalOpenRestaurants": 179,
            "cards": [
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "89646",
                  "name": "Sonu Vegetarian Snacks Corner",
                  "uuid": "1ba7ed48-c6c0-4eda-870d-3a384aea646d",
                  "city": "7",
                  "area": "Liluah",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "wjwbl4ewdzzm4gzpkv5n",
                  "cuisines": [
                    "South Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "slaString": "29 MINS",
                  "lastMileTravel": 3.5999999046325684,
                  "slugs": {
                    "restaurant": "sonu-vegetarian-snacks-corner-liluah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "34, Abhoy Guha Road, Liluah, Howrah",
                  "locality": "Abhay Guha Road",
                  "parentId": 191074,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6878596~p=1~eid=00000188-60d8-2c54-7917-ae8400900120",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "89646",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 3.5999999046325684,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.0",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "53171",
                  "name": "Mio Amore - The Cake Shop",
                  "uuid": "23f11eee-b9ac-4285-b979-5c66a6d3185a",
                  "city": "7",
                  "area": "Salkia",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "8bf25e6cafe30c7e7c9c8f31f628fe96",
                  "cuisines": [
                    "Desserts",
                    "Bakery",
                    "Snacks"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 15000,
                  "costForTwoString": "₹150 FOR TWO",
                  "deliveryTime": 22,
                  "minDeliveryTime": 22,
                  "maxDeliveryTime": 22,
                  "slaString": "22 MINS",
                  "lastMileTravel": 1.5,
                  "slugs": {
                    "restaurant": "mio-amore-salkia-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "78 Sri Aurobindo Rd. Salkia. Howrah 1106",
                  "locality": "",
                  "parentId": 292958,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹40 OFF",
                    "subHeader": "ABOVE ₹400",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "53171",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.5",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "556052",
                  "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                  "uuid": "af0fcf62-5fd8-4bda-b2ac-f0a69f7d7917",
                  "city": "7",
                  "area": "Howrah",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "oktoazwjt8msr38uihxc",
                  "cuisines": [
                    "Desserts",
                    "Ice Cream",
                    "Ice Cream Cakes"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 21,
                  "minDeliveryTime": 21,
                  "maxDeliveryTime": 21,
                  "slaString": "21 MINS",
                  "lastMileTravel": 1.2999999523162842,
                  "slugs": {
                    "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-howrah-howrah-16",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "JANATA'S: JANATA'S- 323/2 G.T. ROAD (N), WARD NO- 10, HOWRAH(W.B)-711106 (HUL-I210301P519)",
                  "locality": "Gtroad",
                  "parentId": 582,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "556052",
                    "deliveryTime": 21,
                    "minDeliveryTime": 21,
                    "maxDeliveryTime": 21,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.6",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "345953",
                  "name": "Mama Mia! - Italian Ice Creams & Cakes",
                  "uuid": "6bbe0347-14aa-41ce-b21e-a1051a120061",
                  "city": "7",
                  "area": "Ramrajatala",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "yjjgrs5vv1trecqnlk69",
                  "cuisines": [
                    "Ice Cream",
                    "Bakery",
                    "Desserts",
                    "Ice Cream Cakes",
                    "Healthy Food",
                    "Sweets"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 47,
                  "minDeliveryTime": 47,
                  "maxDeliveryTime": 47,
                  "slaString": "47 MINS",
                  "lastMileTravel": 4.400000095367432,
                  "slugs": {
                    "restaurant": "mamamia!-italian-gelatos-&-ice-creams-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "Sadananda Industrial Estate, Baltikuri, Bakultala Bali - Howrah Municipal Corporation, Howrah- 711113.",
                  "locality": "Howrah",
                  "parentId": 621,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6742047~p=4~eid=00000188-60d8-2c54-7917-ae8500900465",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.4 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "345953",
                    "deliveryTime": 47,
                    "minDeliveryTime": 47,
                    "maxDeliveryTime": 47,
                    "lastMileTravel": 4.400000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.7",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "381750",
                  "name": "BROJONATH",
                  "uuid": "6365d391-ca30-4028-bb53-37f490a8b11b",
                  "city": "7",
                  "area": "Howrah",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "gubuuxje86iq1op7sh4d",
                  "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Pizzas",
                    "South Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 10000,
                  "costForTwoString": "₹100 FOR TWO",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "slaString": "23 MINS",
                  "lastMileTravel": 1.399999976158142,
                  "slugs": {
                    "restaurant": "brojonath-bakery-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "128, GT ROAD NORTH SALKIA, HOWRAH-711106",
                  "locality": "Uttam Ghosh Lane",
                  "parentId": 242687,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "381750",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "224455",
                  "name": "Sweet Truth - Cake and Desserts",
                  "uuid": "33f76ff3-1f4c-4577-943a-4ea7a730b034",
                  "city": "7",
                  "area": "Mali Panchghara",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "3ec8bccd0fc2c6303d7602dd642248d5",
                  "cuisines": [
                    "Snacks",
                    "Bakery",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 45000,
                  "costForTwoString": "₹450 FOR TWO",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "slaString": "23 MINS",
                  "lastMileTravel": 1.5,
                  "slugs": {
                    "restaurant": "sweet-truth-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "61A, SRI AUROBINDO ROAD, P O SALKIA, P S GOLABARI, HOWRAH 711106",
                  "locality": "HOWRAH",
                  "parentId": 4444,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "224455",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "609013",
                  "name": "Bhikharam Chandmal - Bajrangbali",
                  "uuid": "c2891fd5-2525-4080-a702-4670b2238970",
                  "city": "7",
                  "area": "Liluah",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "euxsb97jee0n38ot1cti",
                  "cuisines": [
                    "Sweets",
                    "Snacks",
                    "Chaat",
                    "Fast Food"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "slaString": "29 MINS",
                  "lastMileTravel": 3,
                  "slugs": {
                    "restaurant": "liluah-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "Premises No 247, G T Road (N), Ward-26, Belur, BALI -HOWRAH MUNICIPAL CORPORATION, Howrah, West Bengal-711204",
                  "locality": "Howrah",
                  "parentId": 363027,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6851153~p=7~eid=00000188-60d8-2c54-7917-ae860090072f",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "609013",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 3,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.1",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "263834",
                  "name": "Pure Veg Meals by Lunchbox",
                  "uuid": "cb5f9503-731f-4425-bf64-097e87716e46",
                  "city": "7",
                  "area": "Mali Panchghara",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "gz7cbnuxdzwbojhgiak1",
                  "cuisines": [
                    "Biriyani",
                    "North Indian",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 39,
                  "minDeliveryTime": 39,
                  "maxDeliveryTime": 39,
                  "slaString": "39 MINS",
                  "lastMileTravel": 1.5,
                  "slugs": {
                    "restaurant": "navratri-meals-by-faasos-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "61A, SRI AUROBINDO ROAD, P O SALKIA, P S GOLABARI, HOWRAH 711106",
                  "locality": "HOWRAH",
                  "parentId": 21938,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "263834",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.0",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "402718",
                  "name": "Wow! Momo",
                  "uuid": "a723ba29-642a-445a-b832-84f59d567069",
                  "city": "7",
                  "area": "Sbi Building",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "90ac3da2963978f866177263fba805a7",
                  "cuisines": [
                    "Tibetan",
                    "Healthy Food",
                    "Asian",
                    "Chinese",
                    "Snacks",
                    "Continental",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 30,
                  "slaString": "30 MINS",
                  "lastMileTravel": 1.5,
                  "slugs": {
                    "restaurant": "wow-momo-sbi-building-salkia-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "61, Aurobindo Road, SBI Building, Salkia, Ward Number.12. Howrah-711106,Howrah,West Bengal711106",
                  "locality": "Liluah",
                  "parentId": 1776,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "402718",
                    "deliveryTime": 30,
                    "minDeliveryTime": 30,
                    "maxDeliveryTime": 30,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "260546",
                  "name": "Oyee Dilli - Pure Veg",
                  "uuid": "6fbae863-2c3c-4e09-b067-f2e97b285668",
                  "city": "7",
                  "area": "Shibpur",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "lzs24dernt5k8pzhx3wc",
                  "cuisines": [
                    "North Indian",
                    "Bengali",
                    "Thai"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 47,
                  "minDeliveryTime": 47,
                  "maxDeliveryTime": 47,
                  "slaString": "47 MINS",
                  "lastMileTravel": 4.800000190734863,
                  "slugs": {
                    "restaurant": "bhikharam--brand-factory-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "125 G T road  fazir bazar auto stand  In front of vivek vihar, Howrah-2, West Bengal",
                  "locality": "Howrah",
                  "parentId": 153255,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6850772~p=10~eid=00000188-60d8-2c54-7917-ae8700900a41",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "260546",
                    "deliveryTime": 47,
                    "minDeliveryTime": 47,
                    "maxDeliveryTime": 47,
                    "lastMileTravel": 4.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.8",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "479224",
                  "name": "KESHARI SWEETS",
                  "uuid": "e71ad3b4-8225-4bf2-87ec-21d25dd41ac9",
                  "city": "7",
                  "area": "Howrah",
                  "totalRatingsString": "50+ ratings",
                  "cloudinaryImageId": "frzu5sbjybt6kjg1qz2j",
                  "cuisines": [
                    "Sweets",
                    "Snacks",
                    "Chinese"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 48,
                  "minDeliveryTime": 48,
                  "maxDeliveryTime": 48,
                  "slaString": "48 MINS",
                  "lastMileTravel": 2,
                  "slugs": {
                    "restaurant": "keshari-sweets-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "14/21/1, SANATAN MISTRY LANE, BALI-HOWRAH MUNICIPAL CORPORATION, HOWRAH (WEST BENGAL),-711106",
                  "locality": "Sanatan Mistry Lane",
                  "parentId": 287906,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "479224",
                    "deliveryTime": 48,
                    "minDeliveryTime": 48,
                    "maxDeliveryTime": 48,
                    "lastMileTravel": 2,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.4",
                  "totalRatings": 50,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "451694",
                  "name": "Super Janata Jalpan",
                  "uuid": "6f116052-a021-4737-96d7-f7a5da9a802a",
                  "city": "7",
                  "area": "Salkia",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "pea1ycpzyujjbxa0kcgi",
                  "cuisines": [
                    "Indian",
                    "Chinese",
                    "Tandoor"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 47,
                  "minDeliveryTime": 47,
                  "maxDeliveryTime": 47,
                  "slaString": "47 MINS",
                  "lastMileTravel": 1.2999999523162842,
                  "slugs": {
                    "restaurant": "super-janata-jalpan-new-area-sanitytestarea",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "322, G. T. ROAD (N), P.O. GOLABARI, P.S.  SALKIA, WARD NO-10, BALI -HOWRAH  MUNICIPAL CORPORATION, Howrah, West Bengal-711106",
                  "locality": "New Area",
                  "parentId": 197426,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "451694",
                    "deliveryTime": 47,
                    "minDeliveryTime": 47,
                    "maxDeliveryTime": 47,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.6",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "31201",
                  "name": "The Punjabis",
                  "uuid": "b11065ae-1bf0-4ad8-bb52-2adfdb008fff",
                  "city": "7",
                  "area": "Kolkata",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "af01f965c7cfb0ca4fa9bf86b8bfc338",
                  "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Punjabi"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 40,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 40,
                  "slaString": "40 MINS",
                  "lastMileTravel": 3.5999999046325684,
                  "slugs": {
                    "restaurant": "the-punjabis-howrah-station-area-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "5P, Mahatma Gandhi Road, Near Sarat Sadan, Howrah Station Area, Howrah",
                  "locality": "Near Howrah Joesph Chandra Girls School",
                  "parentId": 212869,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4000,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4000",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=6839162~p=13~eid=00000188-60d8-2c54-7917-ae8800900d3e",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "31201",
                    "deliveryTime": 40,
                    "minDeliveryTime": 40,
                    "maxDeliveryTime": 40,
                    "lastMileTravel": 3.5999999046325684,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.9",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "335340",
                  "name": "Natural Ice Cream",
                  "uuid": "b337325b-b3ed-4a33-aabc-6d52210527c4",
                  "city": "7",
                  "area": "Mali Panchghara",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "ys8l9grmqa6jkkizmfny",
                  "cuisines": [
                    "Ice Cream",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 15000,
                  "costForTwoString": "₹150 FOR TWO",
                  "deliveryTime": 22,
                  "minDeliveryTime": 22,
                  "maxDeliveryTime": 22,
                  "slaString": "22 MINS",
                  "lastMileTravel": 1.5,
                  "slugs": {
                    "restaurant": "natural-ice-cream-salkia-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "61A, SRI AUROBINDO ROAD,P.O. SALKIA, P.S. GOLABARI,HOWRAH - 711106",
                  "locality": "Salkia Howrah",
                  "parentId": 2093,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "335340",
                    "deliveryTime": 22,
                    "minDeliveryTime": 22,
                    "maxDeliveryTime": 22,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.5",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "224452",
                  "name": "Behrouz Biriyani",
                  "uuid": "8166da2d-79d1-4b57-9951-49b891bbcb95",
                  "city": "7",
                  "area": "Mali Panchghara",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "zoaiklk2zemtabakd6yn",
                  "cuisines": [
                    "Biriyani",
                    "Mughlai",
                    "Lucknowi",
                    "Hyderabadi",
                    "Kebabs",
                    "North Indian",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 32,
                  "minDeliveryTime": 32,
                  "maxDeliveryTime": 32,
                  "slaString": "32 MINS",
                  "lastMileTravel": 1.5,
                  "slugs": {
                    "restaurant": "behrouz-Biriyani-howrah-howrah",
                    "city": "kolkata"
                  },
                  "cityState": "7",
                  "address": "61A, SRI AUROBINDO ROAD, P O SALKIA, P S GOLABARI, HOWRAH 711106",
                  "locality": "HOWRAH",
                  "parentId": 1803,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "224452",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              }
            ],
            "totalRestaurants": 179
          },
          "subtype": "personalized"
        },
        "parentWidget": false
      }
    ],
    "nextPageFetch": 0
  },
  "tid": "d6bb986d-329e-4f37-a9de-5329e231f618",
  "sid": "7az36351-db2b-4fba-80ec-90d94db51e24",
  "deviceId": "a16a05c1-8da2-0937-1ccc-ab5c9b8c9751",
  "csrfToken": "p3NWvFMMfMLJ-DCB00rMEDOHkHKfIGdUbibHP1Sk"
}
]
export default getData