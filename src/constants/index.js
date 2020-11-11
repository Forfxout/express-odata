module.exports = {
  application: {
    location: '228 Hamilton Ave, Palo Alto, CA',
    phone: '530 441 0829',
    email: 'hi@voteforfood.io',
    questions: [
      {
        question: 'How it works',
        reply: 'We partner with top local restaurants and cafes and help them to get a huge order at once. Because the order is large they give us the best price you cannot find anywhere.'
      },
      {
        question: 'How we support local restaurants',
        reply: 'Local restaurants are happy to participate in our project because we bring them large orders. It helps them to load the kitchen and survive.'
      },
      {
        question: 'About payments',
        reply: 'We accept payments using Stripe. It\'s totally secured. If your option doesn\'t win then we automatically cancel you payment and make a refund.'
      }
    ]
  },
  restaurants: [
    {
      id: '0',
      name: 'Bevri',
      description: 'which means "a lot" in Georgian) is the Bay Area\'s only Georgian restaurant, famous for its hot gooey cheese bread khachapuri, juicy and flavorful dumplings khinkali, mouth-watering grilled meats and, of course, unique luscious Georgian wines. Today Bevri shows us 5 exclusive dishes you can vote for and get on Monday.',
      ends: '2020-11-20T23:59:42Z',
      dishes: [],
      yelp: 'https://google.com',
      location: 'Bevri is located in Palo Alto',
      image: 'https://airport.by/media/cache/ckeditor_big/upload/images/9a38263bfaf2dae69da2056b483a150a.jpg'
    },
    {
      id: '1',
      name: 'Another Restaurant',
      description: 'which means "a lot" in Georgian) is the Bay Area\'s only Georgian restaurant, famous for its hot gooey cheese bread khachapuri, juicy and flavorful dumplings khinkali, mouth-watering grilled meats and, of course, unique luscious Georgian wines. Today Bevri shows us 5 exclusive dishes you can vote for and get on Monday.',
      ends: '2020-10-06T23:59:42Z',
      dishes: [],
      yelp: 'https://google.com',
      location: 'Bevri is located in Palo Alto',
      image: 'https://airport.by/media/cache/ckeditor_big/upload/images/9a38263bfaf2dae69da2056b483a150a.jpg'
    },
    {
      id: '2',
      name: 'Restaurant',
      description: 'which means "a lot" in Georgian) is the Bay Area\'s only Georgian restaurant, famous for its hot gooey cheese bread khachapuri, juicy and flavorful dumplings khinkali, mouth-watering grilled meats and, of course, unique luscious Georgian wines. Today Bevri shows us 5 exclusive dishes you can vote for and get on Monday.',
      ends: '2020-09-06T23:59:42Z',
      dishes: [],
      yelp: 'https://google.com',
      location: 'Bevri is located in Palo Alto',
      image: 'https://airport.by/media/cache/ckeditor_big/upload/images/9a38263bfaf2dae69da2056b483a150a.jpg'
    },
  ],
  dishes: [
    {
      restaurantId: '0',
      name: 'Khinkali',
      description: 'Cool Khinkali',
      by: 'Bevri Restaurant (Palo Alto)',
      image: 'https://www.przyslijprzepis.pl/media/cache/default_medium/uploads/media/recipe/0007/06/chinkali-gruzinskie-pierozki_1.jpeg',
      left: 15,
      step: 0.5,
      max: 30,
      stock: 20,
      links: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com'
      }
    },
    {
      restaurantId: '0',
      name: 'Mumbai Burrito, India\'s flavorful street food (vegan)',
      description: 'Cold vegetable-walnut pâté, is a perfect vegan appetizer. It can be served as a dip, a spread or on its own. At Bevri you can enjoy this Georgian speciality in two flavors - beet and spinach.',
      by: 'Bevri Restaurant (Palo Alto)',
      image: 'https://www.feastingathome.com/wp-content/uploads/2018/02/Frankie-Recipe-Indian-Burrito-114.jpg',
      left: 40,
      step: 1.5,
      max: 70,
      stock: 40,
      links: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com'
      }
    },
    {
      restaurantId: '0',
      name: 'Creamy Broccoli Vegan Pasta',
      by: 'Bevri Restaurant (Palo Alto)',
      description: 'Cold vegetable-walnut pâté, is a perfect vegan appetizer. It can be served as a dip, a spread or on its own. At Bevri you can enjoy this Georgian speciality in two flavors - beet and spinach',
      image: 'https://hurrythefoodup.com/wp-content/uploads/2016/04/Broccoli-Pasta-2.jpg',
      left: 20,
      step: 1,
      max: 50,
      stock: 20,
      links: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com'
      }
    },
    {
      restaurantId: '1',
      name: 'Creamy Broccoli Vegan Pasta',
      by: 'Bevri Restaurant (Palo Alto)',
      description: 'Cold vegetable-walnut pâté, is a perfect vegan appetizer. It can be served as a dip, a spread or on its own. At Bevri you can enjoy this Georgian speciality in two flavors - beet and spinach',
      image: 'https://hurrythefoodup.com/wp-content/uploads/2016/04/Broccoli-Pasta-2.jpg',
      left: 20,
      step: 1,
      max: 50,
      stock: 20,
      links: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com'
      }
    },
    {
      restaurantId: '2',
      name: 'Creamy Broccoli Vegan Pasta',
      by: 'Bevri Restaurant (Palo Alto)',
      description: 'Cold vegetable-walnut pâté, is a perfect vegan appetizer. It can be served as a dip, a spread or on its own. At Bevri you can enjoy this Georgian speciality in two flavors - beet and spinach',
      image: 'https://hurrythefoodup.com/wp-content/uploads/2016/04/Broccoli-Pasta-2.jpg',
      left: 20,
      step: 1,
      max: 50,
      stock: 20,
      links: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com'
      }
    }
  ]
}
