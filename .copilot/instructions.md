# Trade Calculator - Copilot Instructions

## Project Overview

This is a **Trade Calculator** - a privacy-focused web application that helps traders calculate position sizes based on their portfolio value, risk percentage, stock price, and stop-loss levels.

### Key Features
- Single-page HTML application with pure JavaScript (no external dependencies)
- Privacy-focused: all calculations happen client-side, no data collection
- Supports both comma and dot decimal separators (European and US formats)
- URL parameter support for pre-filling values
- Responsive design for desktop and mobile

## Architecture

### Frontend
- **File**: `index.html` - Single-page application containing HTML, CSS, and JavaScript
- **Technology**: Pure JavaScript (vanilla JS), no external libraries
- **Styling**: Embedded CSS with responsive design
- **Deployment**: GitHub Pages at `https://luckynrslevin.github.io/trade-calculator/`

### Testing
- **Framework**: WebdriverIO with Mocha
- **Test Files**: `test/specs/*.js` - End-to-end browser tests
- **Page Objects**: `test/pageobjects/tradeCalculator.page.js`
- **Configuration**: `wdio.conf.js`
- **Test URL**: Tests run against file:// protocol or localhost (configure in page object)

## Development Guidelines

### Code Style
- Use pure JavaScript (ES5/ES6) - no external libraries or frameworks
- Maintain privacy-first approach - no data collection or external API calls
- Keep all functionality in a single HTML file for easy deployment
- Use semantic HTML elements and accessible design
- Follow consistent indentation and naming conventions

### Testing
- All new features must include comprehensive WebdriverIO tests
- Test files should follow the naming pattern: `test/specs/##-descriptive-name.js`
- Each test should include expected values in comments at the top
- Use the existing page object pattern in `test/pageobjects/tradeCalculator.page.js`
- Run tests with: `npm run wdio`

### Calculations
The core calculation logic:
```
Risk Amount = Portfolio Value × Risk Percentage
Price Difference = Stock Price - Stop Loss Price
Position Size = Risk Amount ÷ Price Difference
Total Cost = Position Size × Stock Price
```

### Number Format Support
- Accept both comma (`,`) and dot (`.`) as decimal separators
- Handle leading zeros in input values
- Display results in European format (comma as decimal separator)
- URL parameters should use dot (`.`) format

## File Structure

```
├── index.html              # Main application file (HTML + CSS + JS)
├── package.json            # Node.js dependencies for testing
├── wdio.conf.js           # WebdriverIO test configuration
├── test/
│   ├── pageobjects/
│   │   └── tradeCalculator.page.js  # Page object for tests
│   └── specs/
│       ├── 01-basic-risk1.js        # Basic functionality tests
│       ├── 02-basic-risk05.js       # Different risk percentage
│       ├── 03-basic-risk2.js        # Higher risk testing
│       ├── 04-basic-leading0.js     # Leading zeros handling
│       ├── 05-basic-3decimal.js     # Decimal precision
│       └── 06-basic-stop-greater-price.js  # Error condition
└── README.md               # Documentation
```

## Common Tasks

### Adding New Features
1. Implement functionality directly in `index.html`
2. Create comprehensive tests in `test/specs/`
3. Update README.md if user-facing changes
4. Test manually in browser and with WebdriverIO

### Bug Fixes
1. Reproduce the issue with a test case first
2. Fix the issue in `index.html`
3. Verify the test passes
4. Ensure existing tests still pass

### Deployment
- Changes to `index.html` are automatically deployed to GitHub Pages
- No build process required - it's a static HTML file

## Testing Commands

```bash
# Install dependencies
npm install

# Run all tests
npm run wdio

# Run specific test file
npx wdio run wdio.conf.js --spec test/specs/01-basic-risk1.js
```

## Important Considerations

### Privacy & Security
- Never add external libraries or API calls that could compromise privacy
- All calculations must remain client-side
- No data should be stored or transmitted

### Browser Compatibility
- Ensure compatibility with modern browsers (Chrome, Firefox, Safari, Edge)
- Test on both desktop and mobile devices
- Avoid cutting-edge JavaScript features without fallbacks

### URL Parameters
Supported URL parameters for pre-filling values:
- `price` - Stock price (use dot format: `3.5`)
- `stop` - Stop loss price (use dot format: `2.2`)
- `risk` - Risk percentage (use decimal: `0.01` for 1%)

Example: `index.html?price=3.5&stop=2.2&risk=0.01`

### Error Handling
- Validate that stop loss is less than stock price
- Handle edge cases like zero values or negative numbers
- Provide clear user feedback for invalid inputs

## Questions to Ask Before Making Changes

1. Does this change maintain the privacy-first approach?
2. Will this work offline (no external dependencies)?
3. Have I added appropriate test coverage?
4. Does this work with both comma and dot decimal formats?
5. Is the change backwards compatible with existing URL parameters?