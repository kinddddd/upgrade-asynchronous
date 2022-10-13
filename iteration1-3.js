const baseUrl = 'https://api.nationalize.io';



const search = (event) => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value)
        .then((response) => response.json())
        .then((persona) => nacionalizar(persona));
};

const nacionalizar = (persona) => {
    const p$$ = document.createElement('p');
    let text = `El nombre ${persona.name} `;

    for (const pais of persona.country) {
        const porcentage = Math.floor(pais.probability * 100);
        text += `tiene un ${porcentage}% de ser de ${pais.country_id}, `
    }
    text += 'etc.'

    p$$.textContent = text;
    document.body.appendChild(p$$);
}




const button$$ = document.querySelector('button');
button$$.addEventListener('click', search);