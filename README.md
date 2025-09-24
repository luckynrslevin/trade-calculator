## trade-calculator

A simple calculator to determin the position size of a stock trade. Calculating your position size in units based on defined portfolio value, risk, stock price and stop loss.

Your personal money is a sensitive and private thing. The calculator is implemented as a single html page with pure javascript, without use of any external 3rd party libraries. Therefore the page itself is not collecting any data.

## 1. Example
Your overall trading portfolio value is 30000 €  
Your want to trade with a portfolio risk of 1%  
The stock price is 3,50 €  
The defined stop loss is 2,20 €  
=> You would need to buy 231 units and the overall cost will be 807,69 €  

<img src="https://github.com/luckynrslevin/trade-calculator/blob/main/screenshot-example.jpg?raw=true" alt="drawing" width="300"/>


## 2. How to use

⚠️ __USE AT YOUR OWN RISK!__

### 2.1. Use the version on github pages

[You can simply open this link on github pages](https://luckynrslevin.github.io/trade-calculator/index.html)  
As mentioned before the page itself does not collect any data. However, like with any other webpage you access in the internet, you will leave a footprint at the hoster of the page (in this case github).   
Using this method, default portfolio value is set to 0 and portfolio risk is set to 1% and you need to manually change it to your needs.  

You can pass values for parameters price, stop loss and risk in the URL, e.g. if you want to pass the values of the above example you can do it like this and send this link to a user who just needs to fill in his personal portfolio value:   
```
https://luckynrslevin.github.io/trade-calculator/index.html?price=3.5&stop=2.2&risk=0.01
```

In case you want to prefill your personal portfolio value and e.g. save this link to your iPhone homescreen to save time filling it in, you can do it like this:
```
https://luckynrslevin.github.io/trade-calculator/index.html?portfoliovalue=30000
```


⚠️ You need to use english number format in the URL parameters. Instead of a comma "," you need to use a dot "." as separator. 
And afterwards update the default portfolio value of 0 to 30000 in the UI.

### 2.2. Download as local file on your computer
For even more privacy and possibility to customize the default portfolio value, you can <a id="raw-url" href="https://raw.githubusercontent.com/luckynrslevin/trade-calculator/main/index.html">download the trade calculator html file</a> and  store it on your laptop to open it directly from there with your browser.  
However, this method will only work on your laptop and maybe not on a smart phone.

### 2.3. Deploy on your webserver
If you have a webserver you obviously just can deploy the html file to your server.

## 3. How to develop and test

### 3.1. Development
Not a lot to say, use editor of your choice ;-)

### 3.2. Testing
I am using WebdriverIO framework to to end to end tests via the WebBrowser UI.

You need to clone the repository.
Install necessary tools and dependencies. (TODO: Elaborate on installation procedure)

To execute the tests run the following command in the root directory of the project:
````
npx wdio run wdio.conf.js
````
