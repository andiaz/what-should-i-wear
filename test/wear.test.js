const chai = require('chai');
const jsdom = require('jsdom-global');
const sinon = require('sinon');
const wear = require('../js/wear.js');

const assert = chai.assert;

const testSeasonEnum = {
  SPRING_OR_SUMMER: 1,
  AUTUMN_OR_WINTER: 2,
  ILLEGAL_VALUE: null,
  UNDEFINED_SEASON: 3,
};

const testCloth = {
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

const testOutfit = {
  PANTS_AND_T_SHIRT_AND_THICK_SWEATER: 0,
  PANTS_AND_SHIRT: 1,
  DRESS: 2,
  DRESS_AND_THICK_SWEATER: 3,
  UNDEFINED_OUTFIT: 4,
};


describe('wear.js (main application)', () => {
  jsdom();

  it('getRandomInt() should return an integer', () => {
    assert.isNumber(wear.getRandomInt(0, 4));
  });

  it('getQueryVariable() should return a proper value', () => {
    const testUrl = 'outfit=shirt';
    const getUrlStub = sinon.stub(wear, 'getURL');
    getUrlStub.returns(testUrl);
    assert.strictEqual(wear.getQueryVariable('outfit'), 'shirt');
    getUrlStub.restore();
  });

  it('get random clothes functions should not fail with null values', () => {
    assert.isString(wear.getRandomPants(testSeasonEnum.ILLEGAL_VALUE));
    assert.isString(wear.getRandomDress(testSeasonEnum.ILLEGAL_VALUE));
    assert.isString(wear.getRandomSweater(testSeasonEnum.ILLEGAL_VALUE));
    assert.isString(wear.getRandomThickSweater(testSeasonEnum.ILLEGAL_VALUE));
    assert.isString(wear.getRandomShirt(testSeasonEnum.ILLEGAL_VALUE));
    assert.isString(wear.getRandomTeeShirt(testSeasonEnum.ILLEGAL_VALUE));
    assert.isString(wear.getRandomLinne(testSeasonEnum.ILLEGAL_VALUE));
    assert.isString(wear.getRandomSkirt(testSeasonEnum.ILLEGAL_VALUE));
    assert.isString(wear.getRandomFancyClothes(testSeasonEnum.ILLEGAL_VALUE));
  });

  it('get random clothes functions should not fail with undefined season', () => {
    assert.isString(wear.getRandomPants(testSeasonEnum.UNDEFINED_SEASON));
    assert.isString(wear.getRandomDress(testSeasonEnum.UNDEFINED_SEASON));
    assert.isString(wear.getRandomSweater(testSeasonEnum.UNDEFINED_SEASON));
    assert.isString(wear.getRandomThickSweater(testSeasonEnum.UNDEFINED_SEASON));
    assert.isString(wear.getRandomShirt(testSeasonEnum.UNDEFINED_SEASON));
    assert.isString(wear.getRandomTeeShirt(testSeasonEnum.UNDEFINED_SEASON));
    assert.isString(wear.getRandomLinne(testSeasonEnum.UNDEFINED_SEASON));
    assert.isString(wear.getRandomSkirt(testSeasonEnum.UNDEFINED_SEASON));
    assert.isString(wear.getRandomFancyClothes(testSeasonEnum.UNDEFINED_SEASON));
  });

  it('getRandomPants() should return a string value for spring/summer', () => {
    assert.isString(wear.getRandomPants(testSeasonEnum.SPRING_OR_SUMMER));
  });

  it('getRandomPants() should return a string value for autumn/winter', () => {
    assert.isString(wear.getRandomPants(testSeasonEnum.AUTUMN_OR_WINTER));
  });

  it('getRandomDress() should return a string value for spring/summer', () => {
    assert.isString(wear.getRandomDress(testSeasonEnum.SPRING_OR_SUMMER));
  });

  it('getRandomDress() should return a string value for autumn/winter', () => {
    assert.isString(wear.getRandomDress(testSeasonEnum.AUTUMN_OR_WINTER));
  });

  it('getRandomSweater() should return a string value', () => {
    assert.isString(wear.getRandomSweater());
  });

  it('getRandomThickSweater() should return a string value for spring/summer', () => {
    assert.isString(wear.getRandomThickSweater(testSeasonEnum.SPRING_OR_SUMMER));
  });

  it('getRandomThickSweater() should return a string value for autumn/winter', () => {
    assert.isString(wear.getRandomThickSweater(testSeasonEnum.AUTUMN_OR_WINTER));
  });

  it('getRandomShirt() should return a string value for spring/summer', () => {
    assert.isString(wear.getRandomShirt(testSeasonEnum.SPRING_OR_SUMMER));
  });

  it('getRandomShirt() should return a string value for autumn/winter', () => {
    assert.isString(wear.getRandomShirt(testSeasonEnum.AUTUMN_OR_WINTER));
  });

  it('getRandomTeeShirt() should return a string value for spring/summer', () => {
    assert.isString(wear.getRandomTeeShirt(testSeasonEnum.SPRING_OR_SUMMER));
  });

  it('getRandomTeeShirt() should return a string value for autumn/winter', () => {
    assert.isString(wear.getRandomTeeShirt(testSeasonEnum.AUTUMN_OR_WINTER));
  });

  it('getRandomLinne() should return a string value for spring/summer', () => {
    assert.isString(wear.getRandomLinne(testSeasonEnum.SPRING_OR_SUMMER));
  });

  it('getRandomLinne() should return a string value for autumn/winter', () => {
    assert.isString(wear.getRandomLinne(testSeasonEnum.AUTUMN_OR_WINTER));
  });

  it('getRandomSkirt() should return a string value for spring/summer', () => {
    assert.isString(wear.getRandomSkirt(testSeasonEnum.SPRING_OR_SUMMER));
  });

  it('getRandomSkirt() should return a string value for autumn/winter', () => {
    assert.isString(wear.getRandomSkirt(testSeasonEnum.AUTUMN_OR_WINTER));
  });

  it('getRandomFancyClothes() should return a string value for spring/summer', () => {
    assert.isString(wear.getRandomFancyClothes(testSeasonEnum.SPRING_OR_SUMMER));
  });

  it('getRandomFancyClothes() should return a string value for autumn/winter', () => {
    assert.isString(wear.getRandomFancyClothes(testSeasonEnum.AUTUMN_OR_WINTER));
  });

  const setInnerHTMLforDomElementIdFunction = 'setInnerHTMLforDomElementId';
  const getRandomIntFunction = 'getRandomInt';
  const getQueryVariableFunction = 'getQueryVariable';

  it('loadApplication() should choose "Pants" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.PANTS);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "Skirt" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.SKIRT);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "Dress" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.DRESS);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "Shirt" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.SHIRT);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "Linne" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.LINNE);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "T-shirt" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.TEE_SHIRT);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "Sweater" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.SWEATER);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "Thick Sweater" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.THICK_SWEATER);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "Fancy Cloth" outfit', () => {
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    const getQueryVariableStub = sinon.stub(wear, getQueryVariableFunction);
    getQueryVariableStub.returns(testCloth.FANCY_CLOTH);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
    getQueryVariableStub.restore();
  });

  it('loadApplication() should choose "Pants + T-shirt + Thick Sweater" outfit', () => {
    // sinon.stub(wear, 'setInnerHTMLforDomElementId');
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.exactly(4);
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    getRandomIntStub.returns(testOutfit.PANTS_AND_T_SHIRT_AND_THICK_SWEATER);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
  });

  it('loadApplication() should choose "Pants + Linne + Thick Sweater" outfit', () => {
    // sinon.stub(wear, 'setInnerHTMLforDomElementId');
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.exactly(4);
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    getRandomIntStub.onFirstCall().returns(testOutfit.PANTS_AND_T_SHIRT_AND_THICK_SWEATER);
    getRandomIntStub.onSecondCall().returns(1);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
  });

  it('loadApplication() should choose "Pants + Shirt" outfit', () => {
    // sinon.stub(wear, 'setInnerHTMLforDomElementId');
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.thrice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    getRandomIntStub.returns(testOutfit.PANTS_AND_SHIRT);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
  });

  it('loadApplication() should choose "Dress" outfit', () => {
    // sinon.stub(wear, 'setInnerHTMLforDomElementId');
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.twice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    getRandomIntStub.returns(testOutfit.DRESS);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
  });

  it('loadApplication() should choose "Dress and thick sweater" outfit', () => {
    // sinon.stub(wear, 'setInnerHTMLforDomElementId');
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.thrice();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    getRandomIntStub.returns(testOutfit.DRESS_AND_THICK_SWEATER);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
  });

  it('loadApplication() should not choose any outfit', () => {
    // sinon.stub(wear, 'setInnerHTMLforDomElementId');
    const mock = sinon.mock(wear);
    const expectInnerHtmlForDomElementId = mock.expects(setInnerHTMLforDomElementIdFunction);
    expectInnerHtmlForDomElementId.never();
    const getRandomIntStub = sinon.stub(wear, getRandomIntFunction);
    getRandomIntStub.returns(testOutfit.UNDEFINED_OUTFIT);

    wear.loadApplication();
    expectInnerHtmlForDomElementId.verify();

    mock.restore();
    getRandomIntStub.restore();
  });
});
