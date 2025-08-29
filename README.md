# trade-calculator

A simple calculator for trading. Calculating your position size for a trade in units base on defined portfolio value, risk, price and stop loss.

Your personal money is a sensitive and private thing. The calculator is implemented as a single html page with pure javascript, without use of any external 3rd party libraries. Therefore the page itself is not collecting any data.

## Example
Your overall trading portfolio value is 30000 €  
Your want to trade with a portfolio risk of 1%  
The stock price is 3,50 €  
The defined stop loss is 2,20 €  
=> You would need to buy 231 units and the overall cost will be 807,69 €  

![example screenshot](https://github.com/luckynrslevin/trade-calculator/blob/main/screenshot-example.jpg?raw=true)


## How to use

⚠️ __USE AT YOUR OWN RISK!__

[You can simply open this link on github pages](https://luckynrslevin.github.io/trade-calculator/index.html)  
As mentioned before the page itself does not collect any data. However like with any other webpage you access in the internet, you will leave a footprint at the hoster of the page (in this case github).   
Using this method, you will not be able to change the default portfolio value.

For even more privacy and possibiolity to customize the default portfolio value, you can <a id="raw-url" href="https://raw.githubusercontent.com/luckynrslevin/trade-calculator/main/index.html">download the trade calculator html file</a> and  store it on your laptop to open it directly from there with your browser.  
However, this method will only work on your laptop and maybe not on a smart phone.

## How can I change the default portfolio value settings
You will need to download the file and change the content of the html file in a text editor of your choice.  
Change the default value of 30000 value here, save and reload the file in your browser:
```
....
        <input
          type="number"
          id="depotvolumen"
          value="30000"
          required
          min="0.01"
          step="0.01"
        />
...
```
