$("#btn").click(function () {
    a = parseFloat($("#in1").val());
    b = parseFloat($("#in2").val());
    r = a > b ? a - b : a + b;
    $('#res').html('<h1>' + r + '</h1>')
});