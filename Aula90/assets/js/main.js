//XMLHttpRequest
// const request = obj => {
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
    
//         console.log(xhr.status);
//         console.log(xhr.responseText);
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// }

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try
    {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status!== 200) throw new Error('404 nosso');


        const html = await response.text();

        carregaResultado(html);
    }
    catch(err)
    {
        console.log(err);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    console.log(resultado);
    resultado.innerHTML = response;
}


fetch('p1.html')
    .then(response => {
        if(response.status !== 200){
            throw new Error('Error 404 nosso');
        }else{
            response.text();
        }
    })
    .then(response => carregaPagina(response))
    .catch(err => console.log(err));