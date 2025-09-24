/**
 * Test case: 08-url-param-portfoliovalue
 * Test URL parameter functionality for portfoliovalue
 * URL: ?portfoliovalue=30000&price=3,5&stop=2,20&risk=0.01
 * Expected Output:
 *   - Total cost: 807,69 €
 *   - Risk amount: 300,00 €
 *   - Shares: 231
 */

const TradeCalculatorPage = require('../pageobjects/tradeCalculator.page');

describe('08-url-param-portfoliovalue', () => {
  it('should correctly load portfoliovalue from URL parameter and calculate trade values', async () => {
    // Navigate directly to URL with portfoliovalue parameter
    await browser.url('http://localhost:3000?portfoliovalue=30000&price=3,5&stop=2,20&risk=0.01');

    // Wait for the result to be displayed
    await browser.waitUntil(async () => {
      return (await TradeCalculatorPage.resultText.getText()).length > 0;
    }, {
      timeout: 3000,
      timeoutMsg: 'Expected result text to be populated'
    });

    // Verify that the form fields were populated from URL parameters
    const portfolioValueInput = await TradeCalculatorPage.inputPortfolioValue.getValue();
    const priceInput = await TradeCalculatorPage.inputPrice.getValue();
    const stopInput = await TradeCalculatorPage.inputStop.getValue();
    const riskSelect = await TradeCalculatorPage.selectRisk.getValue();

    expect(portfolioValueInput).toBe('30000');
    expect(priceInput).toBe('3,5');
    expect(stopInput).toBe('2,20');
    expect(riskSelect).toBe('0.01');

    // Verify calculation results
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

  it('should correctly load only portfoliovalue from URL parameter', async () => {
    // Navigate to URL with only portfoliovalue parameter
    await browser.url('http://localhost:3000?portfoliovalue=50000');

    // Give the page time to load
    await browser.pause(1000);

    // Verify that only the portfolio value field was populated
    const portfolioValueInput = await TradeCalculatorPage.inputPortfolioValue.getValue();
    const priceInput = await TradeCalculatorPage.inputPrice.getValue();
    const stopInput = await TradeCalculatorPage.inputStop.getValue();

    expect(portfolioValueInput).toBe('50000');
    expect(priceInput).toBe('');
    expect(stopInput).toBe('');

    // Should show error since price and stop are missing
    const errorMessage = await TradeCalculatorPage.errorMessage.getText();
    expect(errorMessage).toBe('Error: Please enter valid numbers!');
  });
});