function bhaskara() {
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let c = document.querySelector('#c').value;
    let rBhaskara = document.querySelector('p');
    let x1 = parseFloat((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)).toFixed(2);
    let x2 = parseFloat((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)).toFixed(2);
    rBhaskara.innerHTML = `O valor de X1 é ${x1} e o valor de X2 é ${x2}`;
    document.getElementById('botaoLimpar').removeAttribute('disabled');
}

function limparResposta() {
    let a = document.querySelector('#a');
    let b = document.querySelector('#b');
    let c = document.querySelector('#c');
    let rBhaskara = document.querySelector('p');
    a.value = '';
    b.value = '';
    c.value = '';
    rBhaskara.innerHTML = '';
    document.getElementById('botaoLimpar').setAttribute('disabled', true);
}