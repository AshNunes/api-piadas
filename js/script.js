    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt')
    .then(response => {
        console.log(response.data)
        const enun = response.data.setup;
        console.log(enun);
        
        const resp = response.data.delivery;
        console.log(resp);
        
        const resultElement = document.getElementById('piada');
        resultElement.innerHTML = `Piada: ${response.data.setup}`;

        const respElement = document.getElementById('resp');
        respElement.innerHTML = `Resposta: ${response.data.delivery}`;

        
    }
    )
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        return response.json();
    })
    .then(function(data){
        display_image(data.message);
        console.log(data.message);

    })
    .catch(function(error){
        console.log("ERROR" + error);
    })

    function display_image(image_url) {
        document.getElementById("reacao").src = image_url
    }

    function recarrega() {
        const reconect = document.getElementById("recarregar");

        window.location.reload();
    }