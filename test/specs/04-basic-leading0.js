/**
 * Test case: 04-basic-leading0
 * Portfolio Value: 030000
 * Risk: 0.01
 * Price: 03,5
 * Stop: 02,20
 * Expected Output:
 *   - Total cost: 807,69 €
 *   - Risk amount: 300,00 €
 *   - Shares: 231
 */

const TradeCalculatorPage = require('../pageobjects/tradeCalculator.page');

describe('04-basic-leading0', () => {
  beforeEach(async () => {
    await TradeCalculatorPage.open();
    await TradeCalculatorPage.reset(); // Clear previous inputs
  });

  it('should correctly calculate trade values for valid input', async () => {
    await TradeCalculatorPage.setPortfolioValue('030000');
    await TradeCalculatorPage.setRisk('0.01');
    await TradeCalculatorPage.setPrice('03,5');
    await TradeCalculatorPage.setStop('02,20');

    // Wait for the result to be displayed
    await browser.waitUntil(async () => {
      return (await TradeCalculatorPage.resultText.getText()).length > 0;
    }, {
      timeout: 3000,
      timeoutMsg: 'Expected result text to be populated'
    });

    const result = await TradeCalculatorPage.resultText.getText();
    const totalCost = await TradeCalculatorPage.totalCostText.getText();
    const riskAmount = await TradeCalculatorPage.riskAmountText.getText();

    // Clean output (optional parsing)
    const extractNumber = str =>
      parseFloat(
        str
          .replace(/[^\d.,-]/g, '')  // Remove everything except digits, comma, dot, minus
          .replace(/\./g, '')        // Remove all dots (thousand separators)
          .replace(',', '.')         // Replace decimal comma with dot
      );

    const resultShares = extractNumber(result);
    const costValue = extractNumber(totalCost);
    const riskValue = extractNumber(riskAmount);

    // Assertions (±1 acceptable for rounding)
    expect(resultShares).toBeCloseTo(231, 0);
    expect(costValue).toBeCloseTo(807.69, 2);
    expect(riskValue).toBeCloseTo(300.00, 2);
  });
});
