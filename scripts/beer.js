const beer = [
  {
    name: 'Guinness',
    type: 'Irish Dry Stout',
    abv: 4.2,
    price: 10,
    brewery: 'Guinness Brewing',
    location: 'Dublin, Ireland',
    description: 'Traditional Irish Stout that hits the perfect balance of bitter and sweet with heavy malt and roast character. Smooth and dark with a distinctivly rich creamy head, Guinness has been pleasing for over 100 years.',
    active: true
  },
  {
    name: 'Radeberger',
    type: 'German Pilsner',
    abv: 4.8,
    price: 9,
    brewery: 'Radeberger Gruppe',
    location: 'Radeberg, Germany',
    description: 'German style pilsner featuring a dominant hops flavor with a distinct bitterness. This pilsner has been refreshing German nobility since the 19th century.',
    active: true
  },
  {
    name: 'Winter Lager',
    type: 'Maibock',
    abv: 5.6,
    price: 9,
    brewery: 'Sam Adams',
    location: 'Boston, MA',
    description: 'Rich and full bodied with a touch of holiday spice. Features notes of orange, cinnamon, and ginger over roasted malts.',
    active: true
  },
  {
    name: 'Modelo Especial',
    type: 'Lager',
    abv: 4.4,
    price: 9,
    brewery: 'Modelo',
    location: 'Mexico City, Mexico',
    description: 'Well balanced lager with a taste of orange blossom and herb. Modelo was brewed as the perfect lager, aiming to be what the perfect beer should be.',
    active: true
  },
  {
    name: 'Veltins Pilsener',
    type: 'German Pilsner',
    abv: 4.8,
    price: 8,
    brewery: 'Veltins',
    location: 'Meschede-Grevenstein, Germany',
    description: 'Beautifully clean pale pilsner with a heavy white head. Dry, crisp, refreshing, and sneakily sweet sip that begs to be followed by another.',
    active: true
  },
  {
    name: 'Peak Organic IPA',
    type: 'India Pale Ale',
    abv: 7.2,
    price: 9,
    brewery: 'Peak Organic',
    location: 'Portland, ME',
    description: 'Beautifully orchestrated blend of Simcoe, Amarillo, and Nugget hops to form a surprisingly citrusy New England style IPA.  Peak is one of only three organic breweries in the country.',
    active: true
  },
  {
    name: '60 Minute IPA',
    type: 'India Pale Ale',
    abv: 6.0,
    price: 9,
    brewery: 'Dogfish Head',
    location: 'Milton, DE',
    description: 'Continuosly hopped with 60 hop additions over 60 minutes, then filtered clean to give a light amber coloring.  This is the ultimate IPA entry-point for any beginner.',
    active: true
  },
  {
    name: 'Brooklyn Lager',
    type: 'Amber Lager',
    abv: 5.2,
    price: 9,
    brewery: 'Brooklyn Brewery',
    location: 'Brooklyn, NY',
    description: 'Features light caramel coloring from a strong malty center.  Balance for a more refreshing flavor using dry-hopping, this might be the apex American Lager.',
    active: true
  },
  {
    name: 'Hoppy Lager',
    type: 'India Pale Lager',
    abv: 6.0,
    price: 9,
    brewery: 'Five Boroughs',
    location: 'Brooklyn, NY',
    description: 'Brewed clean and clear like a lager but with large quantities of Motueka and Centennial hops to give a stronger abv and IPA flavor profile.',
    active: true
  },
  {
    name: 'Switchback Ale',
    type: 'American Red Ale',
    abv: 5.0,
    price: 9,
    brewery: 'Switchback',
    location: 'Burlington, VT',
    description: 'Unique amber ale unlike any other. Leads with hoppy flavors followed by a smooth, sweet, fruity malt. Unfiltered, naturally carbonated, incredibly drinkable.',
    active: true
  },
  {
    name: 'Blue Moon Belgian White',
    type: 'Belgian Witbier',
    abv: 5.4,
    price: 9,
    brewery: 'Coors',
    location: 'Golden, CO',
    description: 'The beer that put the Belgian White back on the map. Brewed with oats and spiced with unmistakeable orange peel and corainder.',
    active: true
  },
  {
    name: 'UFO White',
    type: 'Belgian Witbier',
    abv: 4.8,
    price: 9,
    brewery: 'Harpoon',
    location: 'Boston, MA',
    description: 'Unfiltered, brewed with orange, and spiced with coriander in the original Belgian tradition. This beer fits for a hot summer night, or a cold winter afternoon just the same.',
    active: true
  },
  {
    name: 'Fat Tire Ale',
    type: 'Amber Ale',
    abv: 5.2,
    price: 9,
    brewery: 'New Belgium',
    location: 'Fort Collins, CO',
    description: 'Unique blend of English, Belgian, and American brewing traditions produced this balanced blend of floral hops, sweet malts, and spicy fruit.',
    active: true
  },
  {
    name: 'Rose Cider',
    type: 'Cider',
    abv: 5.5,
    price: 8,
    brewery: 'Angry Orchard',
    location: 'Walden, NY',
    description: 'The gorgeous pink color comes from using the rarest French red apples. Prepare to be surprised by the refreshingly dry finish that leaves you itching for another.',
    active: true
  },
  {
    name: 'Stella Artois',
    type: 'Lager',
    abv: 5.0,
    price: 10,
    brewery: 'Stella Artois',
    location: 'Leuven, Belgium',
    description: 'Classic European style lager that features crisp bitter hops with a soft clean finish.',
    active: true
  },
  {
    name: 'Big Wave',
    type: 'Golden Ale',
    abv: 4.4,
    price: 9,
    brewery: 'Kona',
    location: 'Kona, Hawaii',
    description: 'Light, golden ale with delicate Hawaiian hops and a roasted honey malt. You will notice a slight sweetness in this easy drinking brightly golden ale.',
    active: true
  },
  {
    name: 'Driftwood Pale Ale',
    type: 'Pale Ale',
    abv: 6.0,
    price: 9,
    brewery: 'Montauk',
    location: 'Montauk, NY',
    description: 'Malty center with a ton of American hops to balance out this English Style Pale Ale.  Try it by itself or layered with a Guinness for an American style black and tan.',
    active: true
  },
  {
    name: 'Tripel Horse',
    type: 'Belgian Tripel',
    abv: 10.0,
    price: 10,
    brewery: 'River Horse',
    location: 'Ewing, NJ',
    description: 'Belgian style tripel brewed with spices and fermented with River Horse special yeast strain.  Look for complex flavoring and hints of vanilla and orange.',
    active: true
  },
  {
    name: 'Flesh and Blood IPA',
    type: 'India Pale Ale',
    abv: 7.5,
    price: 9,
    brewery: 'Dogfish Head',
    location: 'Milton, DE',
    description: 'Dogfish Head succeeds, where so many other brewers have failed, in delivering a real Blood Orange IPA.  Warrior, Centennial, and secret hops combined with lemon flesh and blood orange zest.',
    active: true
  },
  {
    name: 'Stable Turntable',
    type: 'Pale Ale',
    abv: 6.4,
    price: 9,
    brewery: 'Braven',
    location: 'Bushwick, NY',
    description: 'This hazy, sweet pale ale is unlike any you might have come across before.  Brewed with real tangerine puree and balanced with heavy hops.',
    active: true
  },
  {
    name: 'Union Jack IPA',
    type: 'India Pale Ale',
    abv: 7.0,
    price: 9,
    brewery: 'Firestone Walker',
    location: 'Paso Robles, CA',
    description: 'West Coast IPA with pale coloring and outstandingly dry hop flavoring.  Heavy citrus notes with an ever-so-slight sweet finish.',
    active: true
  },
  {
    name: 'Allagash White',
    type: 'Belgian Witbier',
    abv: 5.2,
    price: 10,
    brewery: 'Allagash',
    location: 'Portland, ME',
    description: 'Fruity, refreshing, and a deep cloudy white mark this Belgian style wheat beer.  Robust flavors of coriander and bitter curacao orange, goes perfect with a slice of lemon.',
    active: true
  },
  {
    name: 'Citra-Hero',
    type: 'India Pale Ale',
    abv: 7.5,
    price: 9,
    brewery: 'Revolution',
    location: 'Chicago, IL',
    description: 'Designed to showcase the Citra hop variety, this IPA is brewed by adding multiple heavy layers of the crisp, bitter hop to the brew process.',
    active: true
  },
  {
    name: 'FestBier',
    type: 'German Marzen',
    abv: 5.6,
    price: 9,
    brewery: 'Victory',
    location: 'Downington, PA',
    description: 'Roasted German malts in the traditional Oktoberfest style. Full-bodied, slightly sweet, heavily roasted. Prost!',
    active: true
  },
  {
    name: 'All Day IPA',
    type: 'India Pale Ale',
    abv: 4.7,
    price: 9,
    brewery: 'Founders',
    location: 'Grand Rapids, MI',
    description: 'Aromatic, dry, hoppy character with an uncharacterisically low abv makes this the perfect session IPA.',
    active: true
  },
  {
    name: 'Coors Light',
    type: 'Lager',
    abv: 4.2,
    price: 7,
    brewery: 'Coors',
    location: 'Golden, CO'
    description: 'The worlds most refreshing beer brewed high in the Rocky Mountains with the cleanest water in North America.',
    active: true
  },
  {
    name: 'Bud Light',
    type: 'Lager',
    abv: 4.2,
    price: 7,
    brewery: 'Anheuser-Busch',
    location: 'St. Louis, MO',
    description: 'Americas favorite beer features a blend of hop varities for superior drinkability.',
    active: true
  },
  {
    name: 'Heineken',
    type: 'Lager',
    abv: 5.0,
    price: 8,
    brewery: 'Heineken',
    location: 'Amsterdam, Netherlands',
    description: 'Crystal clarity and a slight bitterness mark the classic Dutch pale lager.',
    active: true
  },
  {
    name: 'Dos Equis Amber Lager',
    type: 'Lager',
    abv: 4.7,
    price: 9,
    brewery: 'CCM',
    location: 'SA de CV, Mexico',
    description: 'Authentic Mexican lager brewed in the Pilsner style with layers of malts and spice.',
    active: true
  },
  {
    name: 'Goose Island IPA',
    type: 'India Pale Ale',
    abv: 5.9,
    price: 9,
    brewery: 'Goose Island',
    location: 'Chicago, IL',
    description: 'The perfect IPA to any hop lover features a fruit scent with a strong hop finish around a malty center.',
    active: true
  },
  {
    name: 'VT IPA',
    type: 'India Pale Ale',
    abv: 6.0,
    price: 9,
    brewery: 'Long Trail',
    location: 'Burlington, VT',
    description: 'Citra and Amarillo hops provide this hazy New England IPA with notes of tangerine, pineapple, and grapefruit.',
    active: true
  }
];

const bottles = [
  {
    name: 'Bud Light',
    style: 'Lager',
    price: 7
  },
  {
    name: 'Budweiser',
    style: 'Lager',
    price: 7
  },
  {
    name: 'Michelob Ultra',
    style: 'Lager',
    price: 7
  },
  {
    name: 'Amstel Light',
    style: 'Lager',
    price: 7
  },
  {
    name: 'Heineken',
    style: 'Lager',
    price: 7
  },
  {
    name: 'Corona',
    style: 'Lager',
    price: 7
  },
  {
    name: 'Corona Premier',
    style: 'Lager',
    price: 7
  },
  {
    name: 'Pabst Blue Ribbon',
    style: 'Lager',
    price: 6
  },
  {
    name: 'Montauk Summer Ale',
    style: 'American Pale Ale',
    price: 6
  },
  {
    name: 'Dogfish Sea Quench Ale',
    style: 'Sour',
    price: 6
  }
];

const cocktails = [
  {
    name: 'Purple Haze',
    price: 16,
    description: 'Goza Silver Tequila, triple sec, and fresh lime juice shaken and strained over ice. Topped with a Pinot Noir float and served in a wine glass.'
  },
  {
    name: 'Blueberry Pancake Old Fashioned',
    price: 16,
    description: 'Muddled blueberries, Jim Beam Bourbon, maple water, and vanilla bitters. Stirred well and strained over fresh ice.'
  },
  {
    name: 'Gin Blossom',
    price: 16,
    description: 'English Dry Gin, St. Germaine Elderflower liqueur, honey water, and ginger bitters shaken with fresh lemon, lime, and orange. Served up in a wine glass and garnished with candied ginger.'
  },
  {
    name: 'Strawberry Jalapeno Margarita',
    price: 16,
    description: 'Muddled fresh strawberry and jalapeno, Goza Silver Tequila, triple sec, and fresh lime juice shaken and strained over ice in a rocks glass and garnished with strawberry and jalapeno.'
  },
  {
    name: 'TTH Mule',
    price: 16,
    description: 'Fresh muddled lime and New Zealand 6100 Vodka shaken and strained into a copper mug with a ginger beer float.'
  }
];
