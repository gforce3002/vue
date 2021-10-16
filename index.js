const web = {
    redesSociales:{
        youtube:{
            enlace: "http://youtube.com/prueba",
            nombre: "prueba yt"
        },
        facebook:{
            enlace: "http://facebook.com/prueba",
            nombre: "prueba fb"
        }
    }
}

console.log(web)
//Destructurig object
const{enlace, nombre} = web.redesSociales.youtube

console.log(enlace, nombre)

/* Sirve para consumir Apis */

fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(data=>{
        const arrayName = []
        data.results.forEach(e => {
            arrayName.push(e.name)
        })
        console.log(arrayName)
    })
    .catch(error => console.log(error))

    // async && await

    const obtenerpokemones = async()=>{
        try {   
            const res = await  fetch("https://pokeapi.co/api/v2/pokemon/")
            const data = await res.json();
            const arrayName = data.results.map(e => e.name)
            console.log(arrayName) 
        } catch (error) {
            console.log(error);
        }
    }

    obtenerpokemones();