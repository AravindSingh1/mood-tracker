async function getPrice() {
    try {
        let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=GOOG&token=clsrqvpr01qhnjgqni8gclsrqvpr01qhnjgqni90`);
        let googleStock = await response.json();
        // console.log(googleStock);
        document.getElementById("gStockPrice").textContent = googleStock.c;
        let upDown = googleStock.d.toFixed(2);
        document.getElementById("gStockUpDownValue").textContent = upDown + " ";
        if(upDown>0){
            document.getElementById("gStockUpDownValue").style.color = "green";
            document.getElementById("gStockUpDownArrow").innerHTML = `<i class="fa-solid fa-up-long"></i>`;
            document.getElementById("gStockUpDownArrow").style.color = "green";
        }else if(upDown<0){
            document.getElementById("gStockUpDownValue").style.color = "red";
            document.getElementById("gStockUpDownArrow").innerHTML = `<i class="fa-solid fa-down-long"></i>`;
            document.getElementById("gStockUpDownArrow").style.color = "red";
        }
  
    }
    catch{
        console.log("nothing");
    }
  
    try {
        let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=clsrqvpr01qhnjgqni8gclsrqvpr01qhnjgqni90`);
        let AppleStock = await response.json();
        // console.log(AppleStock);
        document.getElementById("AStockPrice").textContent = AppleStock.c;
        let upDown = AppleStock.d.toFixed(2);
        document.getElementById("AStockUpDownValue").textContent = upDown + " ";
        if(upDown>0){
            document.getElementById("AStockUpDownValue").style.color = "green";
            document.getElementById("AStockUpDownArrow").innerHTML = `<i class="fa-solid fa-up-long"></i>`;
            document.getElementById("AStockUpDownArrow").style.color = "green";
        }else if(upDown<0){
            document.getElementById("AStockUpDownValue").style.color = "red";
            document.getElementById("AStockUpDownArrow").innerHTML = `<i class="fa-solid fa-down-long"></i>`;
            document.getElementById("AStockUpDownArrow").style.color = "red";
        }
    } catch (error) {
        console.log("nothing");
    }
  
    try {
        let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=MSFT&token=clsrqvpr01qhnjgqni8gclsrqvpr01qhnjgqni90`);
        let msftStock = await response.json();
        // console.log(msftStock);
        document.getElementById("MStockPrice").textContent = msftStock.c;
        let upDown = msftStock.d.toFixed(2);
        document.getElementById("MStockUpDownValue").textContent = upDown + " ";
        if(upDown>0){
            document.getElementById("MStockUpDownValue").style.color = "green";
            document.getElementById("MStockUpDownArrow").innerHTML = `<i class="fa-solid fa-up-long"></i>`;
            document.getElementById("MStockUpDownArrow").style.color = "green";
        }else if(upDown<0){
            document.getElementById("MStockUpDownValue").style.color = "red";
            document.getElementById("MStockUpDownArrow").innerHTML = `<i class="fa-solid fa-down-long"></i>`;
            document.getElementById("MStockUpDownArrow").style.color = "red";
        }
    } catch (error) {
        console.log("nothing");
    }
  
    try {
        let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=AMZN&token=clsrqvpr01qhnjgqni8gclsrqvpr01qhnjgqni90`);
        let amznStock = await response.json();
        // console.log(amznStock);
        document.getElementById("amzStockPrice").textContent = amznStock.c;
        let upDown = amznStock.d.toFixed(2);
        document.getElementById("amzStockUpDownValue").textContent = upDown + " ";
        if(upDown>0){
            document.getElementById("amzStockUpDownValue").style.color = "green";
            document.getElementById("amzStockUpDownArrow").innerHTML = `<i class="fa-solid fa-up-long"></i>`;
            document.getElementById("amzStockUpDownArrow").style.color = "green";
        }else if(upDown<0){
            document.getElementById("amzStockUpDownValue").style.color = "red";
            document.getElementById("amzStockUpDownArrow").innerHTML = `<i class="fa-solid fa-down-long"></i>`;
            document.getElementById("amzStockUpDownArrow").style.color = "red";
        }
  
    }
    catch{
        console.log("nothing");
    }
  }
  
  getPrice();
  
  