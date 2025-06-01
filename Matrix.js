function addition() {
    let a;
    let b;
    let c;
    let d;
    let e;
    let f;
    let g;
    let h;
    a = parseFloat(document.getElementById('num1').value); // Change .Value to .value
    b = parseFloat(document.getElementById('num5').value);
    c = parseFloat(document.getElementById('num2').value); // Change .Value to .value
    d = parseFloat(document.getElementById('num6').value);
    e = parseFloat(document.getElementById('num3').value); // Change .Value to .value
    f = parseFloat(document.getElementById('num7').value);
    g = parseFloat(document.getElementById('num4').value); // Change .Value to .value
    h = parseFloat(document.getElementById('num8').value);

    document.getElementById('res1').value = a + b;
    document.getElementById('res2').value = c + d;
    document.getElementById('res3').value = e + f;
    document.getElementById('res4').value = g + h;
}
function mult() {
    let a;
    let b;
    let c;
    let d;
    let e;
    let f;
    let g;
    let h;
    a = parseFloat(document.getElementById('num1').value); // Change .Value to .value
    b = parseFloat(document.getElementById('num5').value);
    c = parseFloat(document.getElementById('num2').value); // Change .Value to .value
    d = parseFloat(document.getElementById('num6').value);
    e = parseFloat(document.getElementById('num3').value); // Change .Value to .value
    f = parseFloat(document.getElementById('num7').value);
    g = parseFloat(document.getElementById('num4').value); // Change .Value to .value
    h = parseFloat(document.getElementById('num8').value);

    document.getElementById('res1').value = (a*b) + (c*f);
    document.getElementById('res2').value = (a*d) + (c*h);
    document.getElementById('res3').value = (e*b) + (g*f);
    document.getElementById('res4').value = (e*d) + (g*h);
}