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

function riskChanged()
{
    var money = parseFloat($("#risk1").val());
    var inprice = parseFloat($("#risk2").val());
    var out = parseFloat($("#risk3").val());
    var count = parseFloat(money/(inprice-out)*inprice);
    $("#risk4").val(count);
    // $("#risk5").val(count*inprice);
}