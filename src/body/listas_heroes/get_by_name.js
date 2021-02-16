import React from 'react'
import { heroes } from '../../data/heroes'

export const get_by_name = (valor) => {

const heroe=heroes;
const nuevo=heroe.filter(a=>a.id.replace(' ','').includes(valor.trim()))
const a='hello yes'
console.log(a.replace(' ',''))
console.log(a.trim())
console.log(nuevo)
return nuevo
}
