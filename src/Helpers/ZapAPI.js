const BASEAPI = 'http://localhost:3333';

// enviar os dados para o webservice via POST
const apiFechPost = async (endpoint, body) => {
    
    // cria uma constante de comunicação com o webservice envaindo o endereço (BASEAPI) + a rota (endpoint)
    // enviando os dados para o webservice
    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });

    // a const json recebe a resposta de um json vindo do webservice
    const json = await res.json();

    // retorna o json para o solicitante
    return json;

}

// objeto com solicitações de acesso ao webserver para busca ou cadastros
const ZapAPI = {

    getMessages: async () => {
        const json = await apiFechPost (
            '/messages'
        );

        return json;
    }
};

// export default () => ZapAPI;