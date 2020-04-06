//XMLHttpRequest
const request = obj => {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        console.log(xhr.status);
        console.log(xhr.responseText);
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText);
            }
        });
    });
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    console.log(href);
    
    const response = await request({
        method: 'GET',
        url: href
    });

    carregaResultado(response);
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    console.log(resultado);
    resultado.innerHTML = response;
}