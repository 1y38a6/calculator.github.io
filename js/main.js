//#region ST & TP

function longChangedNew()
{
    var price = parseFloat( $( "#longPrice" ).val() );
    var plusPrice = PlusPrice( price, false );
    price += plusPrice;
    var stop = parseFloat( $( "#longStopPrecent" ).val() );
    var take = parseFloat( $( "#longTakePercent").val() );

    localStorage.setItem( "longStopPrecent", stop );
    localStorage.setItem( "longTakePercent", take );
    
    var st = Take( price, stop );
    var tp = Take( price, take );

    $( "#longST" ).val( st );
    $( "#longTP" ).val( tp );
    $( "#longPP" ).val( price );

    var signal = Signal( "⬆️LONG⬆️", $( "#longCoin" ).val(), price, tp, st );
    $("#longSignal").html( signal );
}

function shortChangedNew()
{
    var price = parseFloat( $( "#shortPrice" ).val() );
    var plusPrice = PlusPrice( price, true );
    price += plusPrice;
    var stop = parseFloat( $( "#shortStopPrecent" ).val() );
    var take = parseFloat( $( "#shortTakePercent").val() );

    localStorage.setItem( "shortStopPrecent", stop );
    localStorage.setItem( "shortTakePercent", take );

    var st = Take( price, stop );
    var tp = Take( price, take );

    $( "#shortST" ).val( st );
    $( "#shortTP" ).val( tp );
    $( "#shortPP" ).val( price );

    var signal = Signal( "⬇️SHORT⬇️", $( "#shortCoin" ).val(), price, tp, st );
    $( "#shortSignal" ).html( signal );
}

function Take( price, take )
{
    return Round( price + ( price * take / 100 ) );
}

function PlusPrice( price, isShort )
{
    if( isShort )
        return price * parseFloat( $( "#shortAddPricePercent" ).val() ) / 100;
    else
        return price * parseFloat( $( "#longAddPricePercent" ).val() ) / 100;
}

function Signal( name, coin, price, tp, st )
{
    roundedPrice = Round( price );
    roundedSt = Round( st );
    roundedTp = Round( tp );

    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)

    var priceString = roundedPrice ;
    var stString = roundedSt;
    var tpString = roundedTp;
    
    /*
    if( isMobile )
    {
        priceString = ReplaceDot( roundedPrice );
        stString = ReplaceDot( roundedSt );
        tpString = ReplaceDot( roundedTp );
    }
    */

    return signal = name + "<br><br>" + coin + "<br>Stop-Market " + priceString + "<br>TP " + tpString + "<br>SL " + stString;
}

function Round( num )
{
    return Math.round( num * 100 ) / 100;
}

function ReplaceDot( str )
{
    return str.toString().replace( ".", "," );
}

//#endregion

//#region ATR

function PercentChanged()
{
    var atr = parseFloat( $( "#atr1" ).val() );;
    var price = parseFloat( $( "#price1" ).val() );;
    
    var firstOrder = atr / 100 * 30;
    var betweenOrder = atr / 100 * 20;
    var longFirstOrderCost = price - price * ( firstOrder / 100 );
    $( "#long1" ).val( longFirstOrderCost );
    for( var i = 2; i < 6; i++ )
    {
        longFirstOrderCost -= longFirstOrderCost * ( betweenOrder / 100 );
        $( "#long" + i ).val( longFirstOrderCost );
    }
    var shortFirstOrderCost = price + price * ( firstOrder / 100 );
    $( "#short1" ).val( shortFirstOrderCost );
    for( var i = 2; i < 6; i++ )
    {
        shortFirstOrderCost += shortFirstOrderCost * ( betweenOrder / 100 );
        $( "#short" + i ).val( shortFirstOrderCost );
    }
}

function riskChanged()
{
    var money = parseFloat( $( "#risk1" ).val() );
    var inprice = parseFloat( $( "#risk2").val() );
    var out = parseFloat( $( "#risk3" ).val() );
    var count = parseFloat( money / ( inprice-out ) );
    $( "#risk4" ).val( count );
    $( "#risk5" ).val( count*inprice );
}

var coef = 3.5;

function shortChanged()
{
    var short = parseFloat( $( "#short1" ).val() );
    var atr = parseFloat( $( "#short2" ).val() );
    $( "#short3" ).val( parseFloat( ( atr * 0.2 ) + short ) );
    $( "#short4" ).val( parseFloat( short - ( atr * 0.2 * coef ) ) );
}

function longChanged()
{
    var long = parseFloat( $( "#long1" ).val() );
    var atr = parseFloat( $( "#long2" ).val() );
    $( "#long3" ).val(parseFloat( long - ( atr * 0.2 ) ) );
    $( "#long4" ).val(parseFloat( long + ( atr * 0.2 * coef ) ) );
}

function coefChanged()
{
    coef = parseFloat( $( "#coef" ).val() );
    longChanged();
    shortChanged();
}

//#endregion