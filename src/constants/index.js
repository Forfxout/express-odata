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
  restaurant: {
    id: 0,
    name: 'Bevri',
    description: 'which means "a lot" in Georgian) is the Bay Area\'s only Georgian restaurant, famous for its hot gooey cheese bread khachapuri, juicy and flavorful dumplings khinkali, mouth-watering grilled meats and, of course, unique luscious Georgian wines. Today Bevri shows us 5 exclusive dishes you can vote for and get on Monday.',
    ends: '2020-11-06T23:59:42Z',
    dishes: [
      {
        id: 0,
        name: 'Khinkali 1',
        by: 'Bevri Restaurant (Palo Alto)',
        image: 'https://www.przyslijprzepis.pl/media/cache/default_medium/uploads/media/recipe/0007/06/chinkali-gruzinskie-pierozki_1.jpeg',
        left: 15,
        step: 0.5,
        price: 20,
        stock: 20,
        cost: 17.5
      },
      {
        id: 1,
        name: 'Khinkali 2',
        by: 'Bevri Restaurant (Palo Alto)',
        image: 'https://www.przyslijprzepis.pl/media/cache/default_medium/uploads/media/recipe/0007/06/chinkali-gruzinskie-pierozki_1.jpeg',
        left: 10,
        step: 1.5,
        price: 20,
        stock: 20,
        cost: 5
      },
      {
        id: 2,
        name: 'Khinkali 3',
        by: 'Bevri Restaurant (Palo Alto)',
        image: 'https://www.przyslijprzepis.pl/media/cache/default_medium/uploads/media/recipe/0007/06/chinkali-gruzinskie-pierozki_1.jpeg',
        left: 15,
        step: 1,
        price: 20,
        stock: 20,
        cost: 15
      }
    ],
    yelp: 'https://google.com',
    location: 'Bevri is located in Palo Alto',
    image: 'https://airport.by/media/cache/ckeditor_big/upload/images/9a38263bfaf2dae69da2056b483a150a.jpg'
  }
}
