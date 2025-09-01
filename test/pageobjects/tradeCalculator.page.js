class TradeCalculatorPage {
  // selectors
  get inputPortfolioValue() { return $('#portfoliovalue'); }
  get selectRisk() { return $('#risk'); }
  get inputPrice() { return $('#price'); }
  get inputStop() { return $('#stop'); }
  get buttonReset() { return $('#reset-button'); }
  get resultText() { return $('#result'); }
  get totalCostText() { return $('#total-cost'); }
  get riskAmountText() { return $('#risk-amount'); }
  get errorMessage() { return $('#error-message'); }

  async open() {
    await browser.url('http://localhost:3000');  // or your app's actual URL
  }

  async setPortfolioValue(value) {
    await this.inputPortfolioValue.setValue(value);
  }

  async setRisk(value) {
    await this.selectRisk.selectByAttribute('value', value);
  }

  async setPrice(value) {
    await this.inputPrice.setValue(value);
  }

  async setStop(value) {
    await this.inputStop.setValue(value);
  }

  async reset() {
    await this.buttonReset.click();
  }
}

module.exports = new TradeCalculatorPage();
