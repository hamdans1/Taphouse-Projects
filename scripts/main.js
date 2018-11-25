const beerSource = document.getElementById('beerTemp').innerHTML;
const cocktailSource = document.getElementById('cocktailTemp').innerHTML;
const bottledSource = document.getElementById('bottledTemp').innerHTML;

const beerTemplate = Handlebars.compile(beerSource);
const cocktailTemplate = Handlebars.compile(cocktailSource);
const bottledTemplate = Handlebars.compile(bottledSource);

const context = {
  beer: [
      {
        name: 'Guinness',
        type: 'Irish Dry Stout',
        abv: 4.2,
        price: 10,
        brewery: 'Guinness Brewing',
        location: 'Dublin, Ireland',
        description: 'Irish classic that hits the perfect balance of bitter and sweet with heavy malt and roast characters, topped with a creamy head.',
        active: true
      },
      {
        name: 'Radeberger',
        type: 'German Pilsner',
        abv: 4.8,
        price: 9,
        brewery: 'Radeberger Gruppe',
        location: 'Radeberg, Germany',
        description: 'German style pilsner featuring a dominant hops flavor and a distinct bitterness, with a smooth pillowy head.',
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
        description: 'Well balanced lager with a taste of orange blossom and herb. Modelo was brewed to be what the perfect beer should be.',
        active: true
      },
      {
        name: 'Veltins Pilsener',
        type: 'German Pilsner',
        abv: 4.8,
        price: 8,
        brewery: 'Veltins',
        location: 'Meschede-Grevenstein, Germany',
        description: 'Beautifully clean pale pilsner with a smooth top. Crisp, refreshing, and sneakily sweet sip that begs to be followed by another.',
        active: true
      },
      {
        name: 'Peak Organic IPA',
        type: 'India Pale Ale',
        abv: 7.2,
        price: 9,
        brewery: 'Peak Organic',
        location: 'Portland, ME',
        description: 'Beautifully orchestrated blend of Simcoe, Amarillo, and Nugget hops to form a surprisingly citrusy New England style IPA.',
        active: true
      },
      {
        name: '60 Minute IPA',
        type: 'India Pale Ale',
        abv: 6.0,
        price: 9,
        brewery: 'Dogfish Head',
        location: 'Milton, DE',
        description: 'Hopped with 60 hop additions over 60 minutes, filtered for light amber coloring.  Perfect IPA entry-point for any beginner.',
        active: true
      },
      {
        name: 'Brooklyn Lager',
        type: 'Amber Lager',
        abv: 5.2,
        price: 9,
        brewery: 'Brooklyn Brewery',
        location: 'Brooklyn, NY',
        description: 'Light caramel coloring from a strong malty center.  Balanced using dry-hopping, creates a near-perfect American Lager.',
        active: true
      },
      {
        name: 'Hoppy Lager',
        type: 'India Pale Lager',
        abv: 6.0,
        price: 9,
        brewery: 'Five Boroughs',
        location: 'Brooklyn, NY',
        description: 'Brewed cold and clear like a lager but with large quantities of Motueka and Centennial hops to give a stronger abv and IPA flavor.',
        active: true
      },
      {
        name: 'Switchback Ale',
        type: 'American Red Ale',
        abv: 5.0,
        price: 9,
        brewery: 'Switchback',
        location: 'Burlington, VT',
        description: 'Unique amber ale that leads with hoppy flavors followed by a smooth, sweet, fruity malt. Unfiltered and very drinkable.',
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
        description: 'Unfiltered, cloudy, brewed with orange, and spiced with coriander in the original Belgian tradition.',
        active: true
      },
      {
        name: 'Fat Tire Ale',
        type: 'Amber Ale',
        abv: 5.2,
        price: 9,
        brewery: 'New Belgium',
        location: 'Fort Collins, CO',
        description: 'Method of European and American brewing traditions produced this balanced blend of floral hops, sweet malts, and spicy fruit.',
        active: true
      },
      {
        name: 'Rose Cider',
        type: 'Cider',
        abv: 5.5,
        price: 8,
        brewery: 'Angry Orchard',
        location: 'Walden, NY',
        description: 'The gorgeous pink color comes from using the rarest French red apples. Refreshingly dry finish that leaves you wanting another.',
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
        description: 'Light, golden ale with delicate Hawaiian hops and a roasted honey malt for a slightly sweet finish.',
        active: true
      },
      {
        name: 'Driftwood Pale Ale',
        type: 'Pale Ale',
        abv: 6.0,
        price: 9,
        brewery: 'Montauk',
        location: 'Montauk, NY',
        description: 'Malty center with a ton of American hops to balance out this English Style Pale Ale.  Layer with a Guinness for a black and tan.',
        active: true
      },
      {
        name: 'Tripel Horse',
        type: 'Belgian Tripel',
        abv: 10.0,
        price: 10,
        brewery: 'River Horse',
        location: 'Ewing, NJ',
        description: 'Belgian style tripel brewed with traditional Belgian spices.  Look for complex flavoring and hints of vanilla and orange.',
        active: true
      },
      {
        name: 'Flesh and Blood IPA',
        type: 'India Pale Ale',
        abv: 7.5,
        price: 9,
        brewery: 'Dogfish Head',
        location: 'Milton, DE',
        description: 'Warrior, Centennial, and proprietary hops combined with lemon flesh and blood orange zest to make the perfect blood orange IPA.',
        active: true
      },
      {
        name: 'Stable Turntable',
        type: 'Pale Ale',
        abv: 6.4,
        price: 9,
        brewery: 'Braven',
        location: 'Bushwick, NY',
        description: 'This hazy, sweet pale ale is unlike any other.  Brewed with real tangerine puree and balanced with heavy hops.',
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
        description: 'Fruit forward and refreshing Belgian style wheat beer.  Look for robust flavors of coriander and bitter curacao orange.',
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
        active: false
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
        location: 'Golden, CO',
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
        active: false
      },
      {
        name: 'Heineken',
        type: 'Lager',
        abv: 5.0,
        price: 8,
        brewery: 'Heineken',
        location: 'Amsterdam, Netherlands',
        description: 'Crystal clarity and a slight bitterness mark the classic Dutch pale lager.',
        active: false
      },
      {
        name: 'Dos Equis Amber Lager',
        type: 'Lager',
        abv: 4.7,
        price: 9,
        brewery: 'CCM',
        location: 'SA de CV, Mexico',
        description: 'Authentic Mexican lager brewed in the Pilsner style with layers of malts and spice.',
        active: false
      },
      {
        name: 'Goose Island IPA',
        type: 'India Pale Ale',
        abv: 5.9,
        price: 9,
        brewery: 'Goose Island',
        location: 'Chicago, IL',
        description: 'The perfect IPA to any hop lover features a fruit scent with a strong hop finish around a malty center.',
        active: false
      },
      {
        name: 'VT IPA',
        type: 'India Pale Ale',
        abv: 6.0,
        price: 9,
        brewery: 'Long Trail',
        location: 'Burlington, VT',
        description: 'Citra and Amarillo hops provide this hazy New England IPA with notes of tangerine, pineapple, and grapefruit.',
        active: false
      }
    ],
    cocktails: [
      {
        name: 'Purple Haze',
        price: 16,
        description: 'Goza Silver Tequila, triple sec, and fresh lime juice shaken and strained over ice. Topped with a Pinot Noir float and served in a wine glass.',
        active: true
      },
      {
        name: 'Blueberry Pancake Old Fashioned',
        price: 16,
        description: 'Muddled blueberries, Jim Beam Bourbon, maple water, and vanilla bitters. Stirred well and strained over fresh ice.',
        active: true
      },
      {
        name: 'Gin Blossom',
        price: 16,
        description: 'English Dry Gin, St. Germaine Elderflower liqueur, honey water, and ginger bitters shaken with fresh lemon, lime, and orange. Served up in a wine glass and garnished with candied ginger.',
        active: true
      },
      {
        name: 'Strawberry Jalapeno Margarita',
        price: 16,
        description: 'Muddled fresh strawberry and jalapeno, Goza Silver Tequila, triple sec, and fresh lime juice shaken and strained over ice in a rocks glass and garnished with strawberry and jalapeno.',
        active: true
      },
      {
        name: 'TTH Mule',
        price: 16,
        description: 'Fresh muddled lime and New Zealand 6100 Vodka shaken and strained into a copper mug with a ginger beer float.',
        active: true
      }
    ],
    bottles: [
      {
        name: 'Bud Light',
        style: 'Lager',
        price: 7,
        active: true
      },
      {
        name: 'Budweiser',
        style: 'Lager',
        price: 7,
        active: true
      },
      {
        name: 'Michelob Ultra',
        style: 'Lager',
        price: 7,
        active: true
      },
      {
        name: 'Amstel Light',
        style: 'Lager',
        price: 7,
        active: true
      },
      {
        name: 'Heineken',
        style: 'Lager',
        price: 7,
        active: true
      },
      {
        name: 'Corona',
        style: 'Lager',
        price: 7,
        active: true
      },
      {
        name: 'Corona Premier',
        style: 'Lager',
        price: 7,
        active: true
      },
      {
        name: 'Pabst Blue Ribbon',
        style: 'Lager',
        price: 6,
        active: true
      },
      {
        name: 'Montauk Summer Ale',
        style: 'American Pale Ale',
        price: 6,
        active: true
      },
      {
        name: 'Dogfish Sea Quench Ale',
        style: 'Sour',
        price: 6,
        active: true
      }
    ]
};

const compiledBeerHtml = beerTemplate(context);
const compiledCocktailHtml = cocktailTemplate(context);
const compiledBottledHtml = bottledTemplate(context);

const beerGoal = document.getElementById('beerboxgoal');
const cocktailGoal = document.getElementById('cocktailboxgoal');
const bottledGoal = document.getElementById('bottledboxgoal');

beerGoal.innerHTML = compiledBeerHtml;
cocktailGoal.innerHTML = compiledCocktailHtml;
bottledGoal.innerHTML = compiledBottledHtml;
