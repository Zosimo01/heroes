import React from 'react'
import { heroes } from '../../data/heroes'

export const heroes_listas = (valor) => {

 const dc=heroes.filter(a=>a.publisher===valor)   

return {dc}
}
