import { heroes } from "../../data/heroes"


export const get_listas = (valor) => {
   
    const dc=heroes.find(a=>a.id===valor)   
    return {dc}

}
