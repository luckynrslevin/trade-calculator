/**
 * Test case: 05-basic-3decimal
 * Portfolio Value: 30000,000
 * Risk: 0.01
 * Price: 3,59
 * Stop: 2,201
 * Expected Output:
 *   - Total cost: 807,69 €
 *   - Risk amount: 300,00 €
 *   - Shares: 231
 */

const TradeCalculatorPage = require('../pageobjects/tradeCalculator.page');

describe('05-basic-3decimal', () => {
  beforeEach(async () => {
    await TradeCalculatorPage.open();
    await TradeCalculatorPage.reset(); // Clear previous inputs
  });

  it('should correctly calculate trade values for valid input', async () => {
    await TradeCalculatorPage.setPortfolioValue('30000,000');
    await TradeCalculatorPage.setRisk('0.01');
    await TradeCalculatorPage.setPrice('3,509');
    await TradeCalculatorPage.setStop('2,201');

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
