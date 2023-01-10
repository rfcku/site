import { useState } from 'react';
import useDex from '../hooks/useDex';
import Pkm from './pkm';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import {BsFillLightbulbFill, BsFillLightbulbOffFill} from 'react-icons/bs'
import {MdCatchingPokemon} from 'react-icons/md'

export default function Header(){
    
    const { setTheme } = useNextTheme();
    const [visible, setVisible] = useState(true);
    const {
        cpt,
    } = useDex()

    const { isDark, type } = useTheme();

    return (
        <div key={'img-container'} className="img-container">
            {
                visible && cpt.map( (o, i) => (
                    <Pkm 
                        key={`${Math.random() * i / o}}`}
                        o={o} 
                    />
                ))
            }
            <div style={{ position: 'fixed', top: 20, right: 20}}>
            <div>
            <Switch
                    checked={!isDark}
                    onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
                    iconOn={<BsFillLightbulbFill />}
                    iconOff={<BsFillLightbulbOffFill />}
                />
            </div>
            <div>
            <Switch
                    checked={visible}
                    onChange={(e) => setVisible(e.target.checked ? true : false)}
                    iconOn={<MdCatchingPokemon />}
                    iconOff={<MdCatchingPokemon />}
                />

            </div>
            </div>
        </div>
    )
}