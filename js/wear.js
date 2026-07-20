/* import './../css/animate.css';
import './../css/foundation.min.css';
import './../css/normalize.css';*/

// TODO Refactor all exports.[...] statements

//module.exports.getRandomInt = function getRandomInt(min, max) {
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//module.exports.getURL = function getURL() {
function getURL() {
  return window.location.search.substring(1);
}

//module.exports.getQueryVariable = function getQueryVariable(variable) {
function getQueryVariable(variable) {
  const query = getURL();
  const vars = query.split('&');

  let i;
  for (i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      return pair[1];
    }
  }

  return '';
}

const seasonEnum = {
  SPRING_OR_SUMMER: 1,
  AUTUMN_OR_WINTER: 2,
};

// Maps DOM element IDs to Swedish category names for stats tracking
const categoryNames = {
  pants: 'Byxor',
  skirts: 'Kjolar',
  dresses: 'Klänningar',
  shirts: 'Skjortor',
  sweaters: 'Tröjor',
  linne: 'Linnen',
  tee_shirt: 'T-shirts',
  tee_shirt_linne: 'T-shirts/Linnen',
  thick_sweaters: 'Tjocka tröjor',
  fancy_clothes: 'Finkläder',
};

function trackSelection(category, itemName) {
  try {
    var stats = JSON.parse(localStorage.getItem('susanna-stats')) || {};
    var year = String(new Date().getFullYear());
    if (!stats[category]) {
      stats[category] = {};
    }
    if (!stats[category][itemName]) {
      stats[category][itemName] = {};
    }
    stats[category][itemName][year] =
      (stats[category][itemName][year] || 0) + 1;
    localStorage.setItem('susanna-stats', JSON.stringify(stats));
  } catch (e) {
    // localStorage unavailable — silently skip
  }
}

//module.exports.getRandomPants = function getRandomPants(season) {
function getRandomPants(season) {
  let pants;
  if (season === seasonEnum.AUTUMN_OR_WINTER) {
    pants = [
      'Lee jeansen blå',
      'Boyfriend byxorna',
      'G-star jeansen',
      'Ljusblå jeansen',
      'Mörkgrå jeansen',
      'Jeansen med dragkedjor',
      'Grå jeansen',
      'Blå MQ byxorna',
      "Levi's jeansen svarta",
      'Svarta jeansen med hög midja',
      'Andreas jeans',
      'Blåa miss sixty jeansen',
      'Svarta mjuka byxorna',
      'Monki jeansen',
      'Cheap monday jeansen',
      'Svarta miss sixty jeansen',
      'Crocker jeansen',
      'Beigea byxorna',
      'Jeansen från Primark',
      'Blå utsvängda byxorna',
      'Mörkblå jeansen (fått av Lena)',
      'Beigea jeansen',
    ];
  } else {
    pants = [
      'Svarta halvkorta shortsen',
      'Jeans shortsen nya',
      'Jeans shortsen gamla',
      'Blå byxorna (MQ)',
      'Lee jeansen',
      'Svarta shortsen',
      'Svarta byxorna med hög midja',
      'Svarta shortsen från Zara',
      'Grå jeansen',
      'Boyfriend byxorna',
      'Ljusblå jeansen',
      'Svarta Levis jeansen',
      'Shorts med tröja',
      'Mörkgrå jeansen',
      'Jeans shortsen från Polen',
      'G-Star jeansen',
      'Svarta shortsdressen',
      'Jeansen med dragkedjor',
      'Grå shortsen',
      'Tunna mönstrade byxorna',
      'Mönstrade tunna byxorna från Ullared',
      'Andreas jeans',
      'Svarta mjuka byxorna',
      'Beigea byxorna',
      'Bruna shortsen',
      'Hängselbyxorna i linne',
      'Jeansen från Primark',
      'Byxdressen med bruna blad',
      'Svarta miss sixty jeansen',
      'Cheap monday jeansen',
      'Crocker jeansen',
      'Monki jeansen',
      'Blåa miss sixty jeansen',
      'Blå utsvängda byxorna',
      'Mörkblå jeansen (fått av Lena)',
      'Beigea jeansen',
      'Vita Capri-byxorna',
    ];
    /* pants = ['Vita shortsen', 'Svarta shortsen',
    'Byxor med dragkedjor', 'Grå shortsen', 'Svarta byxorna knäppning bak'];*/
  }

  return pants[getRandomInt(0, pants.length)];
}

function getRandomDress(season) {
  let dress;
  if (season === seasonEnum.AUTUMN_OR_WINTER) {
    dress = [
      'Vit-blårandiga klänningen',
      'Svarta klänningen (byxor till)',
      'Bruna blommiga klänningen (byxor)',
      'Silver- och svartrandiga klänningen',
      'Jeansklänningen med spets',
      'Svarta klänningen TopShop (gamla)',
      'Bruna klänningen',
      'Gröna klänningen',
      'Vit-svartrandiga klänningen',
      'T-shirt klänningen',
      'Annas klänning',
      'Gulrutiga skjortklänningen',
      'Tildas pös klänning',
      'Vit-svart prickiga klänningen',
      'Röda klänningen från Polen',
      'Vita spetsklänningen från JC',
      'Vita klänningen',
      'Vitrandiga skjortklänningen',
      'Blåa klänningen',
      'Bladklänningen',
      'Svarta TopShop klänningen nya',
      'Svart-vitrandiga klänningen (långa)',
      'Gråspräckliga klänningen',
      'Röda klänningen från Primark',
      'Gröngul-blommiga klänningen',
      'Röda klänningen med vita streck',
      'Rosa klänningen',
      'Rosa/blå-rutiga skjortklänningen',
      'Tjocka grå stickade klänningen',
      'Gula klänningen',
      'Rosa mjuka klänningen',
      'Gul-svarta klänningen',
      'Vitrosa blommiga klänningen',
      'Grönvit-blommiga klänningen',
      'Svarta stickade klänningen',
    ];
  } else {
    dress = [
      'Tildas klänning',
      'Svart/vit randiga klänningen',
      'Svart/silver randiga klänningen',
      'Grå jeansklänningen med spets',
      'Vita spetsklänningen från JC',
      'Blå/vit randiga klänningen',
      'T-shirt klänningen',
      'Vita klänningen',
      'Bruna klänningen med blommor',
      'Gröna klänningen',
      'Svarta klänningen (Gina)',
      'Annas klänning',
      'Bruna klänningen',
      'Blå klänningen',
      'Gula skjortklänningen',
      'Vita prickiga klänningen',
      'Röda klänningen från Polen',
      'Vitrandiga skjortklänningen',
      'Svarta topshopklänningen gamla',
      'Svarta topshopklänningen nya',
      'Bladklänningen',
      'Svart-vitrandiga långa klänningen',
      'Röda klänningen från Primark',
      'Gråspräckliga klänningen',
      'Röda klänningen med vita streck',
      'Gröngul-blommiga klänningen',
      'Rosa klänningen',
      'Blå/rosa-rutiga skjortklänningen',
      'Gula klänningen',
      'Rosa mjuka klänningen',
      'Gul-svarta klänningen',
      'Vitrosa blommiga klänningen',
      'Grönvit-blommiga klänningen',
      'Svarta stickade klänningen',
    ];
  }
  return dress[getRandomInt(0, dress.length)];
}

function getRandomSweater() {
  // vanliga tunna tröjor används bara på vintern
  const sweater = [
    'Grå-silverrandiga tröjan',
    'Grå pös tröjan (köpt med Kicki)',
    'Grönrutiga pös tröjan',
    'Svarta v-ringade tröjan',
    'Svart-vitrandiga tröjan',
    'Rosa-vitrandiga tröjan',
    'Grå tröjan med puffarmar',
    'Grönrandiga tröjan',
    'Svarta pös tröjan (JC)',
    'Svarta pös tröjan med skärp',
    'Gröna tröjan',
    'Svarta tighta tröjan (till morfars begravning)',
    'Röd-blårandiga tröjan',
    'Grå tunna tröjan från Ullared',
    'Blå-vitrandiga tröjan',
    'Röd/blå/vit randiga tröjan',
    'Svarta tröjan med vita prickar',
    'Blå tröjan',
    'Svart-rödrutiga tröjan',
    'Svarta tröjan med knytning vid bröstet',
    'Svarta v-ringade tröjan med snören',
  ];
  return sweater[getRandomInt(0, sweater.length)];
}

function getRandomThickSweater(season) {
  let thickSweater;
  if (season === seasonEnum.AUTUMN_OR_WINTER) {
    thickSweater = [
      'Randiga TopShop koftan',
      'Grå munktröjan',
      'Gula västen',
      'Gröna koftan',
      'Mörkblå-vitrandiga tröjan',
      'Grå tröjan',
      'Svarta pösiga koftan (stor)',
      'Gröna tröjan',
      'Röda nya koftan',
      'Grå Paris tröjan',
      'Svarta koftan (Kicki samma fast grå)',
      'Grå Ullared koftan gamla',
      'Röda gamla koftan',
      'Svarta västen',
      'Grå Ullared koftan nya',
      "Röda 'västen' (fått av Kicki)",
      'Svarta tröjan gamla',
      'Grå tröjan med hål i',
      'Svart-vitrandiga koftan',
      'Blå tjocka tröjan',
      'Svarta Ullared koftan',
      'Vita koftan gamla',
      'Vita tröjan med blått',
      'Svarta koftan med dragkedja',
      'Blå koftan',
      'Gula koftan',
      'Svarta glittriga koftan',
      'Bronsfärgade koftan',
      'Svarta tröjan nya',
      'Svarta långa koftan',
      'Svarta långa tunna koftan',
      'Gråa långa koftan',
      'Svarta tunna koftan från Primark',
      'Rosa tröjan',
      'Vita nya koftan',
      'Beigea långa koftan',
      'Svarta tröjan ny (fått av Lena)',
      'Ljusblå tröjan som mamma stickat',
      'Svarta mjuka koftan',
      'Röda (typ linne) från Topshop',
      'Vita polotröjan',
      'Bruna koftan',
    ];
  } else {
    thickSweater = [
      'Svarta koftan (Kicki likadan grå)',
      'Gamla röda koftan',
      'Svarta tröjan ny (fått av Lena)',
      'Röda (typ linne) från Topshop',
      'Svarta tröjan gamla (fått av Lena)',
      'Gröna tröjan',
      'Grå tröjan med hål',
      'Svarta Gina koftan',
      'Gröna koftan',
      'Topshop koftan',
      'Grå munkis',
      'Gula västen',
      'Gamla grå Ullared koftan',
      'Paris tröjan',
      'Röda nya koftan',
      'Nya grå Ullared koftan',
      'Blå tjocka tröjan',
      'Svart/vit randiga koftan',
      'Svarta västen',
      'Vita koftan gamla',
      'Svarta ullared koftan',
      'Svarta glittriga koftan',
      'Vita tröjan med blått i ryggen',
      'Svarta koftan med dragkedja',
      'Mörkblå koftan',
      'Gula koftan',
      'Bruna koftan',
      'Grå långa koftan',
      'Svarta koftan från Primark',
      'Svarta långa koftan',
      'Grå tröjan',
      'Blå/vit randiga tröjan',
      'Svarta tunna koftan',
      'Vita nya koftan',
      'Beigea långa koftan',
      'Rosa tröjan',
      'Ljusblå tröjan som mamma stickat',
      'Svarta mjuka koftan',
      'Vita polotröjan',
      'Bruna koftan',
      'Bronsfärgade koftan',
      'Grå tröjan med hål i',
    ];
  }
  return thickSweater[getRandomInt(0, thickSweater.length)];
}

getRandomShirt = function getRandomShirt(season) {
  let shirt;
  if (season === seasonEnum.AUTUMN_OR_WINTER) {
    shirt = [
      'Rutiga skjortan (som min mamma har haft)',
      'Gröna TopShop skjortan',
      'Grå skjortan med kort arm',
      'Grå skjortan med lång arm',
      'Genomskinliga vita skjortan',
      'Blå skjortan',
      'Svarta skjortan',
      'Vita skjortan med lång arm',
      'Blå-rödrutiga skjortan',
      'Grå-vitrandiga skjortan',
      'Svarta tunnna skjortan',
      'Jeans skjortan',
      'Gul-blårutiga skjortan',
      'Grön-svartrutiga skjortan',
      'Svarta tunna skjortan med krage',
    ];
  } else {
    shirt = [
      'Grå skjortan med långa armar',
      'Grönrutiga skjortan',
      'Grå skjortan med korta armar',
      'Topshop skjortan',
      'Vita genomskinliga skjortan',
      'Vita skjortan med lång ärm',
      'Svarta skjortan',
      'Grå/vit randiga skjortan',
      'Blå skjortan',
      'Röd/blå rutiga skjortan',
      'Gul/blå rutiga skjortan',
      'Svarta tunna skjortan',
      'Jeansskjortan',
      'Grön-svartrutiga skjortan',
      'Svarta tunna skjortan med krage',
    ];
  }
  return shirt[getRandomInt(0, shirt.length)];
};

getRandomTeeShirt = function getRandomTeeShirt(season) {
  let teeShirt;
  if (season === seasonEnum.AUTUMN_OR_WINTER) {
    teeShirt = [''];
  } else {
    teeShirt = [
      'Grå t-shirten med u-ringning',
      'Buu t-shirten gråa',
      'Vita t-shirten med ansiktstryck',
      'Blå monki t-shirten',
      'Grå/svart randiga t-shirten med v-ringning',
      'Grå monki t-shirten med tryck',
      'Tea t-shirten grön',
      'Röd/vit randiga t-shirten',
      'Hel grå t-shirten (utan u-ringning)',
      'Rosa t-shirten med tryck',
      'Svarta monki t-shirten med tryck',
      'Vita t-shirten med bovar (från Polen)',
      'Gråa cow and chicken t-shirten',
      'Vita t-shirten med ansiktstryck och text (Polen)',
      'Never mind t-shirten svart/vit',
      'Svart/vit randiga t-shirten med knäppning bak',
      'Svart/vit randiga t-shirten',
      'Svarta v-ringade t-shirten',
      'Orangea t-shirten',
      'Rolling stones t-shirten',
      'Blå t-shirten med fåglar',
      'Neil Young t-shirten',
    ];
  }
  return teeShirt[getRandomInt(0, teeShirt.length)];
};

getRandomLinne = function getRandomLinne(season) {
  let linne;
  if (season === seasonEnum.AUTUMN_OR_WINTER) {
    linne = [''];
  } else {
    linne = [
      'Ljus blå linnet (från Kicki)',
      'Ljus blå rutiga linnet',
      'Grå pös linnet med hål i ryggen',
      'Blå linnet (fått av Mika)',
      'Grön/vit blommiga linnet',
      'Sud express linnet',
      'Gamla Topshop linnet',
      'Svarta pös linnet',
      'Röd/vit randiga linnet',
      'Grönrandiga linnet',
      'Svart/vita randiga pös-linnet',
      'Skjortlinnet grå',
      'Rosa linnet (fått av Kicki)',
      'Gråa tunna pös-linnet',
      'Röda Topshop-linnet',
      'Grå linnet (från Monki)',
      'Vita linnet med spets',
      'Grå långa linnet',
      'Grå linnet fått av Mika',
      'Vita Rolling Stones linnet',
      'Grå boxar-linnet',
      'Rosa pösiga linnet',
      'Linnet i linne',
    ];
  }
  return linne[getRandomInt(0, linne.length)];
};

getRandomSkirt = function getRandomSkirt(season) {
  let skirt;
  if (season === seasonEnum.AUTUMN_OR_WINTER) {
    skirt = [
      'Monki kjolen',
      'Röda blommiga kjolen',
      'Svarta blommiga kjolen',
      'Svarta kjolen',
      'Rostbruna kjolen',
    ];
  } else {
    skirt = [
      'Monki kjolen',
      'Röda blommiga kjolen',
      'Svarta blommiga kjolen',
      'Svarta kjolen',
      'Rostbruna kjolen',
    ];
  }
  return skirt[getRandomInt(0, skirt.length)];
};

getRandomFancyClothes = function getRandomFancyClothes(season) {
  let fancyClothes;
  if (season === seasonEnum.AUTUMN_OR_WINTER) {
    fancyClothes = [
      'Hundtandsmönstrade klänningen',
      'Svarta klänningen utan axelband',
      'Vita västen',
      "'Siden' klänningen (från Tilda)",
      'Vita spetsklänningen',
      'Glittriga v-ringade klänningen',
      'Beigea klänningen',
      'Svarta förlovningsklänningen',
      'Röda klänningen',
      'Vita klänningen (Mammas bröllopsklänning)',
      'Rosa långa klänningen',
      'Mörkblå klänningen',
      'Svarta glittriga klänningen',
      'Svarta långa klänningen utan axelband',
    ];
  } else {
    fancyClothes = [
      'Svarta klänning från Tilda',
      'Svarta klänningen utan band',
      'Hundtandsmönstrade klänningen',
      'Vita västen',
      'Vita spetsklänningen',
      'Svarta glittriga klänningen',
      'Rosa klänningen',
      'Svarta klänningen med v-ringning',
      'Vita klänningen (Mammas bröllopsklänning)',
      'Röda klänningen',
      'Mörkblå klänningen',
      'Beigea klänningen',
      'Svarta förlovningsklänningen',
      'Svarta långa klänningen utan axelband',
    ];
  }
  return fancyClothes[getRandomInt(0, fancyClothes.length)];
};

function getInnerHTMLforDomElementId(domElementId) {
  return document.getElementById(domElementId).innerHTML;
}

function setInnerHTMLforDomElementId(domElementId, innerHTML) {
  // eslint-disable-line max-len
  document.getElementById(domElementId).innerHTML = innerHTML;
  if (categoryNames[domElementId] && innerHTML && innerHTML.trim() !== '') {
    trackSelection(categoryNames[domElementId], innerHTML);
  }
}

// window.onload = function loadApplication() {
function loadApplication() {
  const outfits = {
    DRESS: 'dress',
    FANCY_CLOTH: 'fancy_cloth',
    LINNE: 'linne',
    PANTS: 'pants',
    SKIRT: 'skirt',
    SHIRT: 'shirt',
    SWEATER: 'sweater',
    THICK_SWEATER: 'thick_sweater',
    TEE_SHIRT: 'tee_shirt',
  };

  const domElementIds = {
    WRAPPER: 'outfit_content',
    PANTS: 'pants',
    SKIRTS: 'skirts',
    DRESSES: 'dresses',
    SHIRTS: 'shirts',
    SWEATERS: 'sweaters',
    LINNE: 'linne',
    TEE_SHIRT: 'tee_shirt',
    TEE_SHIRT_OR_LINNE: 'tee_shirt_linne',
    THICK_SWEATER: 'thick_sweaters',
    FANCY_CLOTH: 'fancy_clothes',
  };

  ////////////////////////////////////
  // ÄNDRA seasonEnum-värdet HÄR VID NY SÄSONG
  ////////////////////////////////////
  const currentSeason = seasonEnum.SPRING_OR_SUMMER;
  const outfit = getRandomInt(0, 4);
  const outfitVariable = getQueryVariable('outfit');

  if (outfitVariable === outfits.PANTS) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/pants.png" alt="" aria-hidden="true">Byxor</h3><p id="pants"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.PANTS,
      getRandomPants(currentSeason),
    );
  } else if (outfitVariable === outfits.SKIRT) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/skirt.png" alt="" aria-hidden="true">Kjol</h3><p id="skirts"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.SKIRTS,
      getRandomSkirt(currentSeason),
    ); // eslint-disable-line max-len
  } else if (outfitVariable === outfits.DRESS) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/dress.png" alt="" aria-hidden="true">Klänning</h3><p id="dresses"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.DRESSES,
      getRandomDress(currentSeason),
    ); // eslint-disable-line max-len
  } else if (outfitVariable === outfits.SHIRT) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/shirt.png" alt="" aria-hidden="true">Skjorta</h3><p id="shirts"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.SHIRTS,
      getRandomShirt(currentSeason),
    ); // eslint-disable-line max-len
  } else if (outfitVariable === outfits.LINNE) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/tshirt18.png" alt="" aria-hidden="true">Linne</h3><p id="linne"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.LINNE,
      getRandomLinne(currentSeason),
    );
  } else if (outfitVariable === outfits.TEE_SHIRT) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/tshirt18.png" alt="" aria-hidden="true">T-shirt</h3><p id="tee_shirt"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.TEE_SHIRT,
      getRandomTeeShirt(currentSeason),
    ); // eslint-disable-line max-len
  } else if (outfitVariable === outfits.SWEATER) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/tshirt18.png" alt="" aria-hidden="true">Tunn tröja</h3><p id="sweaters"></p></div></div>',
    );
    setInnerHTMLforDomElementId(domElementIds.SWEATERS, getRandomSweater());
  } else if (outfitVariable === outfits.THICK_SWEATER) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/thick-sweater.png" alt="" aria-hidden="true">Tjock tröja</h3><p id="thick_sweaters"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.THICK_SWEATER,
      getRandomThickSweater(currentSeason),
    ); // eslint-disable-line max-len
  } else if (outfitVariable === outfits.FANCY_CLOTH) {
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/fancy_clothes.png" alt="" aria-hidden="true">Finkläder</h3><p id="fancy_clothes"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.FANCY_CLOTH,
      getRandomFancyClothes(currentSeason),
    ); // eslint-disable-line max-len
  } else if (outfit === 0) {
    // HÖST/VINTER: BÖRJAR HÄR
    // Byxor + Tröja + Tjock tröja
    /*
    document.getElementById('outfit_content').innerHTML =
      '<div class="medium-4 columns">' +
      '<div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;">' +
      '<h3><img src="img/pants.png" alt="" aria-hidden="true">Byxor</h3><p id="pants"></p></div>' +
      '</div><div class="medium-4 columns">' +
      '<div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;">' +
      '<h3><img src="img/tshirt18.png" alt="" aria-hidden="true">Tunn tröja</h3><p id="sweaters"></p></div></div>' +
      '<div class="medium-4 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" ' +
      'style="min-height: 200px;"><h3><img src="img/thick-sweater.png" alt="" aria-hidden="true">Tjock tröja</h3>' +
      '<p id="thick_sweaters"></p></div></div>';
    document.getElementById('pants').innerHTML = getRandomPants(currentSeason);
    document.getElementById('sweaters').innerHTML = getRandomSweater();
    document.getElementById('thick_sweaters').innerHTML =
      getRandomThickSweater(currentSeason);
    */
    // Slut på HÖST / SOMMAR

    // VÅR / SOMMAR: BÖRJAR HÄR
    // Byxor + t-shirt/linne + tjock tröja

    const randomTeeShirt = getRandomTeeShirt(currentSeason);
    const randomLinne = getRandomLinne(currentSeason);

    const teeShirtOrLinne = getRandomInt(0, 2);

    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-4 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/pants.png" alt="" aria-hidden="true">Byxor</h3><p id="pants"></p></div></div><div class="medium-4 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/tshirt18.png" alt="" aria-hidden="true">T-shirt / linne</h3><p id="tee_shirt_linne"></p></div></div><div class="medium-4 columns"><div class="panel animated fadeInUp" data-equalizer-watch=""style="min-height: 200px;"><h3><img src="img/thick-sweater.png" alt="" aria-hidden="true">Tjock tröja</h3><p id="thick_sweaters"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.PANTS,
      getRandomPants(currentSeason),
    );

    if (teeShirtOrLinne === 0) {
      setInnerHTMLforDomElementId(
        domElementIds.TEE_SHIRT_OR_LINNE,
        randomTeeShirt,
      );
    } else {
      setInnerHTMLforDomElementId(
        domElementIds.TEE_SHIRT_OR_LINNE,
        randomLinne,
      );
    }

    setInnerHTMLforDomElementId(
      domElementIds.THICK_SWEATER,
      getRandomThickSweater(currentSeason),
    ); // eslint-disable-line max-len

    // Slut på VÅR / SOMMAR ***************
  } else if (outfit === 1) {
    // Byxor + Skjorta
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-6 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/pants.png" alt="" aria-hidden="true">Byxor</h3><p id="pants"></p></div></div><div class="medium-6 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/shirt.png" alt="" aria-hidden="true">Skjorta</h3><p id="shirts"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.PANTS,
      getRandomPants(currentSeason),
    ); // eslint-disable-line max-len
    setInnerHTMLforDomElementId(
      domElementIds.SHIRTS,
      getRandomShirt(currentSeason),
    ); // eslint-disable-line max-len
  } else if (outfit === 2) {
    // Klänning
    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-12 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/dress.png" alt="" aria-hidden="true">Klänning</h3><p id="dresses"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.DRESSES,
      getRandomDress(currentSeason),
    ); // eslint-disable-line max-len
  } else if (outfit === 3) {
    // Kjol + Tjock tröja

    setInnerHTMLforDomElementId(
      domElementIds.WRAPPER,
      '<div class="medium-6 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/skirt.png" alt="" aria-hidden="true">Kjol</h3><p id="skirts"></p></div></div><div class="medium-6 columns"><div class="panel animated fadeInUp" data-equalizer-watch="" style="min-height: 200px;"><h3><img src="img/thick-sweater.png" alt="" aria-hidden="true">Tjock tröja</h3><p id="thick_sweaters"></p></div></div>',
    );
    setInnerHTMLforDomElementId(
      domElementIds.SKIRTS,
      getRandomSkirt(currentSeason),
    ); // eslint-disable-line max-len
    setInnerHTMLforDomElementId(
      domElementIds.THICK_SWEATER,
      getRandomThickSweater(currentSeason),
    ); // eslint-disable-line max-len
  }
}

// --- Stats, CSV export, and view toggle ---

var categoryOrder = [
  'Byxor',
  'Klänningar',
  'Tröjor',
  'Tjocka tröjor',
  'Skjortor',
  'T-shirts',
  'T-shirts/Linnen',
  'Linnen',
  'Kjolar',
  'Finkläder',
];

var currentStatsFilter = 'all';

function getStats() {
  try {
    return JSON.parse(localStorage.getItem('susanna-stats')) || {};
  } catch (e) {
    return {};
  }
}

// Get all years present in the stats data
function getAvailableYears(stats) {
  var yearsSet = {};
  for (var cat in stats) {
    for (var item in stats[cat]) {
      var yearData = stats[cat][item];
      // Handle both old format (number) and new format (object with years)
      if (typeof yearData === 'object') {
        for (var y in yearData) {
          yearsSet[y] = true;
        }
      }
    }
  }
  return Object.keys(yearsSet).sort();
}

// Get count for an item, respecting the year filter
function getItemCount(yearData, filterYear) {
  if (typeof yearData === 'number') {
    // Legacy format — show only when filter is 'all'
    return filterYear === 'all' ? yearData : 0;
  }
  if (filterYear === 'all') {
    var total = 0;
    for (var y in yearData) {
      total += yearData[y];
    }
    return total;
  }
  return yearData[filterYear] || 0;
}

function setStatsFilter(year) {
  currentStatsFilter = year;
  showStats();
}

function showStats() {
  var stats = getStats();
  var section = document.getElementById('stats_section');
  if (!section) return;

  var years = getAvailableYears(stats);
  var filter = currentStatsFilter;

  // Build year filter bar
  var filterHtml =
    '<div class="stats-filter"><label for="year-filter">Visa period:</label> ' +
    '<select id="year-filter" onchange="setStatsFilter(this.value)">' +
    '<option value="all"' +
    (filter === 'all' ? ' selected' : '') +
    '>Alla</option>';
  for (var y = years.length - 1; y >= 0; y--) {
    filterHtml +=
      '<option value="' +
      years[y] +
      '"' +
      (filter === years[y] ? ' selected' : '') +
      '>' +
      years[y] +
      '</option>';
  }
  filterHtml += '</select></div>';

  var keys = categoryOrder.filter(function (k) {
    return stats[k];
  });
  if (keys.length === 0) {
    section.innerHTML =
      '<div class="row"><div class="medium-12 columns">' +
      '<div class="panel stats-empty"><p>Ingen statistik \u00e4nnu \u2014 v\u00e4lj n\u00e5gra kl\u00e4der f\u00f6rst!</p></div>' +
      '</div></div>';
    return;
  }

  var grandTotal = 0;
  var html = '';

  for (var i = 0; i < keys.length; i++) {
    var cat = keys[i];
    var items = stats[cat];
    var itemNames = Object.keys(items);
    var counts = {};
    for (var j = 0; j < itemNames.length; j++) {
      var c = getItemCount(items[itemNames[j]], filter);
      if (c > 0) counts[itemNames[j]] = c;
    }

    var sorted = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a];
    });
    if (sorted.length === 0) continue;

    var catTotal = 0;
    var rows = '';
    for (var j = 0; j < sorted.length; j++) {
      var count = counts[sorted[j]];
      catTotal += count;
      rows +=
        '<tr' +
        (j % 2 === 1 ? ' class="alt-row"' : '') +
        '>' +
        '<td>' +
        sorted[j] +
        '</td>' +
        '<td class="stats-count"><span class="badge">' +
        count +
        ' g\u00e5nger</span></td>' +
        '</tr>';
    }
    grandTotal += catTotal;

    html +=
      '<div class="medium-6 columns">' +
      '<div class="panel stats-card animated fadeInUp" style="animation-delay:' +
      i * 60 +
      'ms">' +
      '<h3>' +
      cat +
      '</h3>' +
      '<table class="stats-table" role="table">' +
      '<thead><tr><th scope="col">Plagg</th><th scope="col">Vald</th></tr></thead>' +
      '<tbody>' +
      rows +
      '</tbody>' +
      '<tfoot><tr><td><strong>Totalt</strong></td><td class="stats-count"><strong>' +
      catTotal +
      ' st</strong></td></tr></tfoot>' +
      '</table></div></div>';
  }

  var periodLabel = filter === 'all' ? 'alla perioder' : filter;
  var summary =
    '<div class="medium-12 columns">' +
    '<div class="panel stats-summary">' +
    '<h2>Statistik</h2>' +
    filterHtml +
    '<p>Totalt antal val (' +
    periodLabel +
    '): <strong>' +
    grandTotal +
    ' st</strong></p>' +
    '<div class="stats-actions">' +
    '<button type="button" class="btn-primary" onclick="exportCSV()" aria-label="Exportera statistik som CSV-fil">Exportera CSV</button>' +
    '<button type="button" class="btn-ghost" onclick="clearStats()" aria-label="Rensa all statistik">Rensa statistik</button>' +
    '</div></div></div>';

  section.innerHTML =
    '<div class="row">' +
    summary +
    '</div><div class="row" data-equalizer="">' +
    html +
    '</div>';
}

function exportCSV() {
  var stats = getStats();
  var filter = currentStatsFilter;
  var bom = '\uFEFF';
  var lines = ['Kategori;Plagg;Antal g\u00e5nger vald'];

  for (var i = 0; i < categoryOrder.length; i++) {
    var cat = categoryOrder[i];
    if (!stats[cat]) continue;
    var items = stats[cat];
    var counts = {};
    var itemNames = Object.keys(items);
    for (var j = 0; j < itemNames.length; j++) {
      var c = getItemCount(items[itemNames[j]], filter);
      if (c > 0) counts[itemNames[j]] = c;
    }
    var sorted = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a];
    });
    for (var j = 0; j < sorted.length; j++) {
      lines.push(
        cat + ';"' + sorted[j].replace(/"/g, '""') + '";' + counts[sorted[j]],
      );
    }
  }

  var suffix = filter === 'all' ? '' : '-' + filter;
  var blob = new Blob([bom + lines.join('\r\n')], {
    type: 'text/csv;charset=utf-8',
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'susannas-klader-statistik' + suffix + '.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function clearStats() {
  if (
    confirm(
      'Vill du verkligen rensa all statistik? Detta g\u00e5r inte att \u00e5ngra.',
    )
  ) {
    try {
      localStorage.removeItem('susanna-stats');
    } catch (e) {
      /* ignore */
    }
    showStats();
  }
}

function toggleView(view) {
  var outfitEl = document.getElementById('outfit_content');
  var statsEl = document.getElementById('stats_section');
  var statsLink = document.getElementById('nav-stats');
  if (!outfitEl || !statsEl) return;

  if (view === 'stats') {
    outfitEl.setAttribute('hidden', '');
    statsEl.removeAttribute('hidden');
    if (statsLink) statsLink.setAttribute('aria-current', 'page');
    showStats();
  } else {
    statsEl.setAttribute('hidden', '');
    outfitEl.removeAttribute('hidden');
    if (statsLink) statsLink.removeAttribute('aria-current');
    loadApplication();
  }
}

window.onload = loadApplication;
