const categories1 = [
  // {
  //   _id: '65af9e5dd921af70f8891df5',
  //   categoryName: 'Book Event',
  //   // imageUrl: 'https://icons8.com/icon/42287/calendar',
  //   imageUrl: require('../../assets/category/icons8-event-100.png'),
  // },
  {
    _id: '65cdf550f8445ef008d0ed02',
    categoryName: 'Sounds',
    backgroundColor: '#ceffa421',
    categoryImage: [
      {imageUrl: require('../../assets/category/sound1.png')},
      {imageUrl: require('../../assets/category/sound2.png')},
      {imageUrl: require('../../assets/category/sound3.png')},
    ],
  },
  {
    _id: '65d09bff61ad81ac9aa653c4',
    categoryName: 'Lightings',
    backgroundColor: '#ceffa44f',
    categoryImage: [
      {imageUrl: require('../../assets/category/light1.png')},
      {imageUrl: require('../../assets/category/light2.png')},
      {imageUrl: require('../../assets/category/light4.png')},
    ],
  },
  {
    _id: '65c380e12db6b64426f1232e',
    categoryName: 'Video',
    backgroundColor: '#ceffa480',
    categoryImage: [
      {imageUrl: require('../../assets/category/video1.png')},
      {imageUrl: require('../../assets/category/video2.png')},
      {imageUrl: require('../../assets/category/video4.png')},
    ],
  },
  {
    _id: '65b20a2e84aec8b4de816eb9',
    categoryName: 'Fabrication',
    backgroundColor: '#ceffa4ab',
    categoryImage: [
      {imageUrl: require('../../assets/category/kIRU3_6.png')},
      {imageUrl: require('../../assets/category/kIRU3_6.png')},
      {imageUrl: require('../../assets/category/kIRU3_6.png')},
    ],
  },
  {
    _id: '65b0aebcde7ed128bf89bc54',
    categoryName: 'Genset',
    backgroundColor: '#ceffa4d6',
    categoryImage: [
      {imageUrl: require('../../assets/category/kIRU3_4.png')},
      {imageUrl: require('../../assets/category/kIRU3_4.png')},
      {imageUrl: require('../../assets/category/kIRU3_4.png')},
    ],
  },
  {
    _id: '65b0a93bf3364a396d064832',
    categoryName: 'Shamiana',
    backgroundColor: '#ceffa4',
    categoryImage: [
      {imageUrl: require('../../assets/category/kIRU3_5.png')},
      {imageUrl: require('../../assets/category/kIRU3_5.png')},
      {imageUrl: require('../../assets/category/kIRU3_5.png')},
    ],
  },
];

const categories = [
  // {
  //   _id: '65af9e5dd921af70f8891df5',
  //   categoryName: 'Book Event',
  //   // imageUrl: 'https://icons8.com/icon/42287/calendar',
  //   imageUrl: require('../../assets/category/icons8-event-100.png'),
  // },
  {
    _id: '65cdf550f8445ef008d0ed02',
    categoryName: 'Sounds',
    // backgroundColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    categoryImage: require('../../assets/category/kiru6_7.png'),
  },
  {
    _id: '65d09bff61ad81ac9aa653c4',
    categoryName: 'Lightings',
    backgroundColor: '#ebebeb',
    categoryImage: require('../../assets/category/kiru6_9.png'),
  },
  {
    _id: '65c380e12db6b64426f1232e',
    categoryName: 'Video',
    backgroundColor: '#ebebeb',
    categoryImage: require('../../assets/category/kiru6_10.png'),
  },
  {
    _id: '65b20a2e84aec8b4de816eb9',
    categoryName: 'Fabrication',
    backgroundColor: '#ebebebab',
    categoryImage: require('../../assets/category/kiru6_8.png'),
  },
  {
    _id: '65b0aebcde7ed128bf89bc54',
    categoryName: 'Genset',
    backgroundColor: '#ebebebd6',
    categoryImage: require('../../assets/category/kiru6_11.png'),
  },
  {
    _id: '65b0a93bf3364a396d064832',
    categoryName: 'Shamiana',
    backgroundColor: '#ebebeb',
    categoryImage: require('../../assets/category/kiru6_12.png'),
  },
];

const services = [
  {
    _id: '65ec0b80474d5d0ee66d3f17',
    categoryName: 'DJs',
    imageUrl: require('../../assets/category/dj.gif'),
  },
  {
    _id: '65d09d3461ad81ac9aa6541c',
    categoryName: 'Hosts',
    imageUrl: require('../../assets/category/microphone.gif'),
  },
  {
    _id: '65ec52b03f362eb6d1b3295f',
    categoryName: 'Catering',
    imageUrl: require('../../assets/category/catering.gif'),
  },
  {
    _id: '65b252c1772634ac8465d6fb',
    categoryName: 'Photographer',
    imageUrl: require('../../assets/category/photo-camera.gif'),
  },
  {
    _id: '65afb4317931820fecfa4cca',
    categoryName: 'Videography',
    imageUrl: require('../../assets/category/video-camera.gif'),
  },
  {
    _id: '65b0daedc46b6d4c5b8b926a',
    categoryName: 'Hotels',
    imageUrl: require('../../assets/category/hotel.gif'),
  },
  {
    _id: '65b0dabbc46b6d4c5b8b9266',
    categoryName: 'Resorts',
    imageUrl: require('../../assets/category/sunbed.gif'),
  },
  {
    _id: '65afb4317931820fecfa4cca',
    categoryName: 'Celebrities',
    imageUrl: require('../../assets/category/award-ceremony.gif'),
  },
];

const productList = [
  {
    _id: '65ec4d5f3f362eb6d1b32866',
    productName: '4 feets Brass Lamp For Rent Near You',
    categoryId: '65d09bff61ad81ac9aa653c4',
    vendorName: 'Vinayaka',
    shopName: 'Shri Vinayaka Rents',
    brand: 'Saradha Metals',
    discount: 10,
    productDescription:
      '4 feets Pure Brass With Decoration (Optional) Peacock Or Cross Symbol(Optional) Free Delivery',
    productPrice: 1000,
    units: 'Hour',
    productImage: [
      {
        imageUrl:
          'https://rentzeasy.com/assets/images/product-images/img1_1711957393brasslamponrentnearyou.webp',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71ENfqcJEcL._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71u87Kcj1qL._SL1500_.jpg',
      },
    ],
  },
  {
    _id: '65ec4d8e3f362eb6d1b32871',
    productName: 'Led parcan light on hire',
    categoryId: '65d09bff61ad81ac9aa653c4',
    vendorName: 'Nayakan',
    shopName: 'Nayak Digitals',
    discount: 7,
    brand: 'FAB Innovations',
    productDescription: 'Led light on hire',
    productPrice: 2500,
    units: 'Day',
    productImage: [
      {
        imageUrl:
          'https://rentzeasy.com/assets/images/product-images/ehF4quqXba8xkmA0Nh39Nfz2.jpeg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71ENfqcJEcL._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71u87Kcj1qL._SL1500_.jpg',
      },
    ],
    // productImage:
    //   'https://rentzeasy.com/assets/images/product-images/ehF4quqXba8xkmA0Nh39Nfz2.jpeg',
  },
  {
    _id: '65ec53403f362eb6d1b32983',
    productName: 'LED Par Light Rental Service',
    categoryId: '65d09bff61ad81ac9aa653c4',
    vendorName: 'Mani Thiruvenkadam',
    shopName: 'Mani Enterprises',
    brand: 'Big Deeper',
    discount: 17,
    productDescription:
      'To meet the various requirements of the customers, we are involved in providing LED Par Light Rental Service.',
    productPrice: 1000,
    units: 'Hour',
    productImage: [
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71eRAMvY25L._AC_UY218_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71k5eWni6xL._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71LSeTEJk2L._SL1500_.jpg',
      },
    ],
  },
  {
    _id: '65ec53673f362eb6d1b32994',
    productName: 'Bluetooth Speaker On Rent',
    categoryId: '65cdf550f8445ef008d0ed02',
    shopName: 'Mani Enterprises',
    brand: 'ZEBRONICS Store',
    vendorName: 'Mani Thiruvenkadam',
    discount: 10,
    productDescription:
      'Consider renting a Bluetooth speaker for your small event. Rental services offer a variety of speakers, so you can find the perfect one for your needs. Compare rates, features, and delivery options from different rental companies before making a decision.',
    productPrice: 1500,
    units: 'Day',
    productImage: [
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71eRAMvY25L._AC_UY218_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71k5eWni6xL._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71LSeTEJk2L._SL1500_.jpg',
      },
    ],
  },
  {
    _id: '66362914711365d704e20a91',
    brand: 'JBL',
    productName: 'Jbl Speaker On Rental',
    categoryId: '65cdf550f8445ef008d0ed02',
    brand: 'JBL',
    discount: 30,
    shopName: 'Nayak Digitals',
    vendorName: 'Nayakan',
    productDescription:
      'We are professional in Sound hardware Related Services, Speakers , Amplifiers , Mixers , Consoles for Birthday Parties, Confrences , and Events.Contact For More Deatail.',
    productPrice: 4000,
    units: 'Hour',
    productImage: [
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71h2c+bB-fL._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71pr77gMM3L._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71jBMiXs9vL._SL1500_.jpg',
      },
    ],
  },
];

const featuredProduct = [
  {
    _id: '65ec4d8e3f362eb6d1b32871',
    productName: 'Led parcan light on hire ',
    categoryId: '65d09bff61ad81ac9aa653c4',
    vendorName: 'Nayakan',
    shopName: 'Nayak Digitals',
    productDescription: 'Led light on hire',
    productPrice: 2500,
    discount: 58,
    units: 'Day',
    productImage: [
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71sMWuYll7L._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71ENfqcJEcL._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71u87Kcj1qL._SL1500_.jpg',
      },
    ],
    // productImage:
    //   'https://rentzeasy.com/assets/images/product-images/ehF4quqXba8xkmA0Nh39Nfz2.jpeg',
  },
  {
    _id: '65ec53673f362eb6d1b32994',
    productName: 'Bluetooth Speaker On Rent',
    categoryId: '65cdf550f8445ef008d0ed02',
    shopName: 'Mani Enterprises',
    vendorName: 'Mani Thiruvenkadam',
    productDescription:
      'Consider renting a Bluetooth speaker for your small event. Rental services offer a variety of speakers, so you can find the perfect one for your needs. Compare rates, features, and delivery options from different rental companies before making a decision.',
    productPrice: 1500,
    discount: 47,
    units: 'Day',
    productImage: [
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71eRAMvY25L._AC_UY218_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71k5eWni6xL._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71LSeTEJk2L._SL1500_.jpg',
      },
    ],
    // productImage:
    //   'https://5.imimg.com/data5/ANDROID/Default/2023/5/312502760/NT/NI/BE/44485227/product-jpeg-1000x1000.jpg',
  },
  {
    _id: '66362914711365d704e20a91',
    productName: 'Jbl Speaker On Rental',
    categoryId: '65cdf550f8445ef008d0ed02',
    shopName: 'Nayak Digitals',
    vendorName: 'Nayakan',
    productDescription:
      'We are professional in Sound hardware Related Services, Speakers , Amplifiers , Mixers , Consoles for Birthday Parties, Confrences , and Events.Contact For More Deatail.',
    productPrice: 4000,
    units: 'Hour',
    productImage: [
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71h2c+bB-fL._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71pr77gMM3L._SL1500_.jpg',
      },
      {
        imageUrl:
          'https://m.media-amazon.com/images/I/71jBMiXs9vL._SL1500_.jpg',
      },
    ],
    // productImage:
    //   'https://5.imimg.com/data5/SELLER/Default/2023/6/313927078/UU/DN/QX/190852559/paket-sound-system-meeting-a-e7b-3037-881-t598-26-1000x1000.jpg',
  },
];

const vendor = [
  {
    shopName: 'Shri Vinayaka Rents',
    vendorName: 'Vinayaka',
    location: 'Channasandra',
    vendorBannerImage: [
      {
        imageUrl:
          'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
      },
      {
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU',
      },
      {
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-qEOjAIUbs_tt9F5PFoFXzTsCvcTCr-xEpJsbaaEyp2mXkCZzv-yjkn1MzV5TEUr1rw&usqp=CAU',
      },
    ],
  },
  {
    shopName: 'Nayak Digitals',
    vendorName: 'Nayakan',
    location: 'Banashankari',
    vendorProductImage: [
      {
        imageUrl:
          'https://lh3.googleusercontent.com/p/AF1QipOV6toil7D3V_8hdR04NcbKC3tpOaG6BQKrwNR-=s680-w680-h510',
      },
      {
        imageUrl:
          'https://lh3.googleusercontent.com/p/AF1QipN5gR_rQob6ywAzN6KgTasz7-NEU6seZjtHs6Q6=s680-w680-h510',
      },
      {
        imageUrl:
          'https://lh3.googleusercontent.com/p/AF1QipOvmutDqf12OuCsy-f_NRf6B03W46ZRqhPe7bch=s680-w680-h510',
      },
    ],
  },
  {
    shopName: 'Mani Enterprises',
    vendorName: 'Mani Thiruvenkadam',
    location: 'Majestic',
    vendorProductImage: [
      {
        imageUrl:
          'https://lh3.googleusercontent.com/p/AF1QipPXLvQb1Va5haLR42be6Jnz35WemPmaJDjmJX6W=s680-w680-h510',
      },
      {
        imageUrl:
          'https://content.jdmagicbox.com/comp/nalgonda/m3/9999p8682.8682.201203170035.l9m3/catalogue/-8t9w2ohcqk.jpg',
      },
      {
        imageUrl:
          'https://www.daytonlocal.com/images/profiles/covers/special-occasions-party-supply.jpg',
      },
    ],
  },
];

const priceFilter = [
  {
    price: 'All Price',
    id: '652745',
  },
  {
    price: 'Under ₹300',
    id: '978956',
  },
  {
    price: '₹300 - ₹500',
    id: '576586',
  },
  {
    price: '₹500 - ₹1000',
    id: '326524',
  },
  {
    price: '₹1000 - ₹1500',
    id: '547364',
  },
  {
    price: 'Over ₹1500',
    id: '4245374',
  },
];

const addsOnProducts = [
  {
    productImage:
      'https://playeventrentals.com/wp-content/uploads/2021/03/play-rental-item-xlr-cable-247x247.jpg',
    id: '652745',
    productName: 'XLR Cable',
    productPrice: 150,
  },
  {
    productImage:
      'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-power-extension-cord-247x247.jpg',
    id: '652745',
    productName: 'Power Extension Cord',
    productPrice: 130,
  },
  {
    productImage:
      'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-ultimate-support-ts90b-speaker-stand-247x247.jpg',
    id: '652745',
    productName: 'Ultimate Support Speaker Stand',
    productPrice: 120,
  },
  {
    productImage:
      'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-35-mm-male-to-male-stereo-audio-cable-247x247.jpg',
    id: '652745',
    productName: '3.5mm Male to Male Stereo Audio Cable',
    productPrice: 550,
  },
  {
    productImage:
      'https://playeventrentals.com/wp-content/uploads/2021/04/play-rental-item-355mm-xlr-adapter-cable-247x247.jpg',
    id: '652745',
    productName: '3.5mm to XLR Adapter Cable',
    productPrice: 200,
  },
];

const discount = [
  {
    id: '59867598645',
    offerName: 'Get FLAT 15% off',
    couponCode: 'EVT15',
    discountPercentage: 15,
    validFrom: '2022-01-01',
    validTo: '2022-12-31',
  },
  {
    id: '59867598646',
    offerName: 'Get 25% off on all products',
    couponCode: 'SAVE25',
    discountPercentage: 25,
    validFrom: '2022-01-01',
    validTo: '2022-12-31',
  },
  {
    id: '59867598647',
    offerName: 'Buy 1 get 1 free on all products',
    couponCode: 'SAVE1GET1',
    discountPercentage: 0,
    validFrom: '2022-01-01',
    validTo: '2022-12-31',
  },
];

const bookingHistory = [
  {
    id: '59867598645',
    bookingStatus: 'Booking Confirmed',
    bookingDate: '15-06-2024, 11:00 am',
    amount: 1110,
    products: [
      {
        id: '652745',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2021/03/play-rental-item-xlr-cable-247x247.jpg',
        productName: 'XLR Cable',
        productPrice: 150,
        quantity: 2,
        totalPrice: 300,
      },
      {
        id: '343242',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-power-extension-cord-247x247.jpg',
        productName: 'Power Extension Cord',
        productPrice: 130,
        quantity: 2,
        totalPrice: 260,
      },
      {
        id: '652745',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-ultimate-support-ts90b-speaker-stand-247x247.jpg',
        productName: 'Ultimate Support Speaker Stand',
        productPrice: 550,
        quantity: 1,
        totalPrice: 550,
      },
      {
        id: '652745',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-35-mm-male-to-male-stereo-audio-cable-247x247.jpg',
        productName: '3.5mm Male to Male Stereo Audio Cable',
        productPrice: 150,
        quantity: 2,
        totalPrice: 300,
      },
      {
        id: '343242',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2021/04/play-rental-item-355mm-xlr-adapter-cable-247x247.jpg',
        productName: '3.5mm to XLR Adapter Cable',
        productPrice: 130,
        quantity: 2,
        totalPrice: 260,
      },
      {
        id: '652745',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-35-mm-male-to-male-stereo-audio-cable-247x247.jpg',
        productName: '3.5mm Male to Male Stereo Audio Cable',
        productPrice: 150,
        quantity: 2,
        totalPrice: 300,
      },
      {
        id: '343242',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2021/04/play-rental-item-355mm-xlr-adapter-cable-247x247.jpg',
        productName: '3.5mm to XLR Adapter Cable',
        productPrice: 130,
        quantity: 2,
        totalPrice: 260,
      },
    ],
  },
  {
    id: '6527451321',
    bookingStatus: 'Event Completed',
    bookingDate: '25-06-2024, 6:40 pm',
    amount: 560,
    products: [
      {
        id: '652745',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-35-mm-male-to-male-stereo-audio-cable-247x247.jpg',
        productName: '3.5mm Male to Male Stereo Audio Cable',
        productPrice: 150,
        quantity: 2,
        totalPrice: 300,
      },
      {
        id: '343242',
        productImage:
          'https://playeventrentals.com/wp-content/uploads/2021/04/play-rental-item-355mm-xlr-adapter-cable-247x247.jpg',
        productName: '3.5mm to XLR Adapter Cable',
        productPrice: 130,
        quantity: 2,
        totalPrice: 260,
      },
    ],
  },
];

// const profileList = [
//   {
//     id:1,
//     listType:"Favourite",
//     navigationPath:"Wishlist",
//   },
// ]
export {
  bookingHistory,
  categories,
  productList,
  vendor,
  priceFilter,
  discount,
  addsOnProducts,
  featuredProduct,
  services,
  categories1,
  // profileList,
};
