const baseUrl = 'https://api.nationalize.io';



const search = (event) => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value)
        .then((response) => response.json())
        .then((persona) => nacionalizar(persona));
};

const div$$ = document.createElement('div');





const nacionalizar = (persona) => {
    const divInside$$ = document.createElement('div');
    let text = `El nombre ${persona.name} `;

    for (const pais of persona.country) {
        const porcentage = Math.floor(pais.probability * 100);
        text += `tiene un ${porcentage}% de ser de ${pais.country_id}, `;
    }

    function borrarDato(){
        let eliminarDiv = div$$.removeChild(divInside$$);
        let eliminarBoton = div$$.removeChild(borrarButton$$);
    }

    const borrarButton$$ = document.createElement('button');
    borrarButton$$.textContent = 'Borrar';
    borrarButton$$.addEventListener('click', borrarDato);
    
    
    
    divInside$$.textContent = text;
    div$$.appendChild(divInside$$);
    div$$.appendChild(borrarButton$$);
    document.body.appendChild(div$$)
}




const button$$ = document.querySelector('button');
button$$.addEventListener('click', search);