const baseUrl = 'https://api.nationalize.io';

const search = (event) => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value)
        .then((response) => response.json())
        .then((response) => console.log(response));
};

const button$$ = document.querySelector('button');
button$$.addEventListener('click', search);