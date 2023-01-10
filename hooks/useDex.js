import { useEffect } from 'react'
import {useRouter} from 'next/router';
import { useCookies } from "react-cookie";
import { onlyUnique, gtFlg, library as lb, dcrtpFlg } from '../utils';
import { useAppContext } from '../context/AppContext';
import { useAlert } from 'react-alert';

export default function useDex() {
    
    const  { pathname:location } = useRouter()
    
    const { state: { cpt, status }, dispatch } = useAppContext()

    const alert = useAlert();

    const params = new URLSearchParams(location.search);
                
    const [a,setCookie] = useCookies(["flag"]);
    
    const strt = () => {
        dispatch({type: "init_status"})
    }

    const getRandomArbitrary = (min = 1 , max = 151 ) => {
        let r = Math.round( Math.random() * (max - min) + min )
        if(!cpt.includes(r)){
            return r
        }else{
            return getRandomArbitrary()
        }         
    }

    const cptPkm = ( index = null ) => {
        if( index === null ){
            index = getRandomArbitrary()
        }
        if(!cpt.includes( index )){
            alert.show(`You caught ${lb[index-1].name.english}!`, {
                message: `You can now view ${lb[index-1].name.english} in your Pokedex`,
                type: 'success',
                timeout: 5000,
            });
            dispatch({
                type: "cpt",
                value: [
                    ...cpt,
                    index
                ].filter(onlyUnique)
            })
        }
    }

    const sbmtFlg = (flag) => {
        console.log('Submitting Flag', flag);
        try{
            const flg = dcrtpFlg(flag)
            if(flg.length >= 1 && flg[0] !== ''){
                return cptPkm( parseInt( flg[0] ) )
            } else {
                throw new Error('Invalid Flag');
            }

        }catch(err){
            alert.show(`Invalid Flag`,{
                message: `Please try again`,
                type: 'error',
                timeout: 5000,
            });
            console.log('Decrypting Error', err.message);
        }
    }

    const promtSmbt = () => {
        cptPkm(34)
        const text = prompt("Submit Flag");
        if(text === 'please'){
            cptPkm(99)
        }
        if(text === 'random'){
            cptPkm(32)
        }
        if (text === 'admin') {
            cptPkm()
        }
        else{
            if(text !== ""){
                sbmtFlg(text)
            }
        }
    }

    useEffect(()=>{
        setCookie("flag", gtFlg(23) );
        localStorage.setItem('flag', gtFlg(66)  );
    }, [setCookie])

    useEffect(()=>{
        let flagParams = params.get('flag')
        if(flagParams){
            cptPkm(12)
            if(flagParams !== ''){
                sbmtFlg(flagParams)
            }
        }  
        let slugParams = params.get('slug')
        if(slugParams){
            cptPkm(21)
        }
    }, [cptPkm])
    

    return {
        getRandomArbitrary,
        promtSmbt,
        sbmtFlg,
        cptPkm,
        status,
        strt,
        cpt,
    }
}