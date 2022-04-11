var coef = 3.5;

function shortChanged()
{
    var short = parseFloat($("#short1").val());
    var atr = parseFloat($("#short2").val());
    $("#short3").val(parseFloat((atr*0.2)+short));
    $("#short4").val(parseFloat(short-(atr*0.2*coef)));
}

function longChanged()
{
    var long = parseFloat($("#long1").val());
    var atr = parseFloat($("#long2").val());
    $("#long3").val(parseFloat(long-(atr*0.2)));
    $("#long4").val(parseFloat(long+(atr*0.2*coef)));
}

function coefChanged()
{
    coef = parseFloat($("#coef").val());
    longChanged();
    shortChanged();
}

function longChangedNew()
{
    var price = parseFloat($("#longPrice").val());
    var stop = parseFloat($("#longStopPrecent").val());
    var take = parseFloat($("#longTakePercent").val());

    localStorage.setItem("longStopPrecent", stop);
    localStorage.setItem("longTakePercent", take);

    $("#longST").val(price + (price * stop/100));
    $("#longTP").val(price + (price * take/100));
}

function shortChangedNew()
{
    var price = parseFloat($("#shortPrice").val());
    var plusPrice = price * parseFloat($("#shortAddPricePercent").val())/100;
    price += plusPrice;
    var stop = parseFloat($("#shortStopPrecent").val());
    var take = parseFloat($("#shortTakePercent").val());

    localStorage.setItem("shortStopPrecent", stop);
    localStorage.setItem("shortTakePercent", take);

    $("#shortST").val(price + (price * stop/100));
    $("#shortTP").val(price + (price * take/100));
    $("#shortPP").val(price);
}

function riskChanged()
{
    var money = parseFloat($("#risk1").val());
    var inprice = parseFloat($("#risk2").val());
    var out = parseFloat($("#risk3").val());
    var count = parseFloat(money/(inprice-out));
    $("#risk4").val(count);
    $("#risk5").val(count*inprice);
}

function PercentChanged()
{
    var atr = parseFloat($("#atr1").val());;
    var price = parseFloat($("#price1").val());;
    
    var firstOrder = atr/100*30;
    // $("#first").val(firstOrder + "%");
    var betweenOrder = atr/100*20;
    // $("#between").val(betweenOrder + "%");
    var longFirstOrderCost = price-price*(firstOrder/100);
    $("#long1").val(longFirstOrderCost);
    for(var i = 2; i<6; i++)
    {
        longFirstOrderCost-=longFirstOrderCost*(betweenOrder/100);
        $("#long" + i).val(longFirstOrderCost);
    }
    var shortFirstOrderCost = price+price*(firstOrder/100);
    $("#short1").val(shortFirstOrderCost);
    for(var i = 2; i<6; i++)
    {
        shortFirstOrderCost+=shortFirstOrderCost*(betweenOrder/100);
        $("#short"+i).val(shortFirstOrderCost);
    }
}