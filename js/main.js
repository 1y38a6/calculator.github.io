function shortChanged()
{
    var v1 = parseFloat($("#short1").val());
    var v2 = parseFloat($("#short2").val());
    $("#short3").val(parseFloat((v2*0.2)+v1));
}

function longChanged()
{
    var v1 = parseFloat($("#long1").val());
    var v2 = parseFloat($("#long2").val());
    $("#long3").val(parseFloat(v1-(v2*0.2)));
}