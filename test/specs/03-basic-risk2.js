/**
 * Test case: 03-basic-risk2
 * Portfolio Value: 30000
 * Risk: 0.02
 * Price: 3,5
 * Stop: 2,20
 * Expected Output:
 *   - Total cost: 1.615,38 €
 *   - Risk amount: 600,00 €
 *   - Shares: 462
 */

const TradeCalculatorPage = require('../pageobjects/tradeCalculator.page');

describe('03-basic-risk2', () => {
  beforeEach(async () => {
    await TradeCalculatorPage.open();
    await TradeCalculatorPage.reset(); // Clear previous inputs
  });

  it('should correctly calculate trade values for valid input', async () => {
    await TradeCalculatorPage.setPortfolioValue('30000');
    await TradeCalculatorPage.setRisk('0.02');
    await TradeCalculatorPage.setPrice('3,5');
    await TradeCalculatorPage.setStop('2,20');

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
    expect(resultShares).toBeCloseTo(462, 0);
    expect(costValue).toBeCloseTo(1615.38, 2);
    expect(riskValue).toBeCloseTo(600.00, 2);
  });
});
