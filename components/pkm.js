import Image from 'next/image'
import { library } from '../utils';

export default function pkm({o}){
    
    const p = library[o-1];
    if (!p) return null;

    const { name, img } = p;

    return (
        <div key={`${name.english}`} className="img-item">
            <Image 
                width={35}
                height={35}
                alt={`${name.english}`} 
                src={img}
            />
            <div className="img-desc">{name.english}</div>
        </div>
    )
}