const TradeCalculatorPage = require('../pageobjects/tradeCalculator.page');

describe('06-basic-stop-greater-price', () => {
  beforeEach(async () => {
    await TradeCalculatorPage.open();
    await TradeCalculatorPage.reset(); // Clear previous inputs
  });

  it('should correctly display error when stop is greater than price', async () => {
    await TradeCalculatorPage.setPortfolioValue('30000');
    await TradeCalculatorPage.setRisk('0.01');
    await TradeCalculatorPage.setPrice('3,5');
    await TradeCalculatorPage.setStop('3,51');

    // Wait a short time to allow UI to update
    await browser.pause(500);

    // Capture UI values
    // const result = await TradeCalculatorPage.resultText.getText();
    // const totalCost = await TradeCalculatorPage.totalCostText.getText();
    // const riskAmount = await TradeCalculatorPage.riskAmountText.getText();
    const errorMessage = await TradeCalculatorPage.errorMessage.getText();

    // Log them to the console
    // console.log('🔍 Result:', result);
    // console.log('💰 Total Cost:', totalCost);
    // console.log('⚠️ Risk Amount:', riskAmount);
    // console.log('🚨 Error Message:', errorMessage);

    // Example assertion
    expect(errorMessage).toContain('The stop value cannot be greater than the price!');
  });
});
