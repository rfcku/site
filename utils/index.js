import pokedexJson from "./pokedex.json"
import { encrypt, decrypt }from '../utils/crypto'
export const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}

export const padToFour = i => i <= 999 ? `000${i}`.slice(-3) : i;

export const library = pokedexJson.map( ( o , i ) => {
    o.img = `/media/sprites/${padToFour(i+1)}MS.png`
    return o
})

export const gtFlg = (id) => {
    const fl = encrypt( `${ library[id-1].id.toString()}-${library[id-1].name.english}` )
    return fl.content    
}