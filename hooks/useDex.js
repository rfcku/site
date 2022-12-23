import { useEffect, useState } from 'react'
import {useRouter} from 'next/router';
import { useCookies } from "react-cookie";
import { decrypt, iv }from '../utils/crypto'
import { onlyUnique, gtFlg, library as lb, dcrtpFlg } from '../utils';
import { useAppContext } from '../context/AppContext';


export default function useDex() {
    
    const  { pathname:location } = useRouter()
    
    const { state: { cpt, status }, dispatch } = useAppContext()

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
            dispatch({
                type: "cpt",
                value: [
                    ...cpt,
                    index
                ].filter(onlyUnique)
            })
        }
    }
    console.log('Flag', gtFlg(2))
    const sbmtFlg = (flag) => {
        console.log('Submitting Flag', flag);
        try{
            const flg = dcrtpFlg(flag)
            console.log('Decripted flag', flg);

            flag = decrypt({
                iv:iv,
                content:flag
            }).split('-');
            
            console.log('Decripted flag 2', flag);
            if(flag.length >= 1){
                cptPkm(parseInt( flag[0] ))
            }

        }catch(err){
            console.log('Decrypting Error', err);
        }
    }

    const promtSmbt = () => {
        cptPkm(34)
        const text = prompt("Submit Flag");
        if(text === 'please'){
            cptPkm(99)
        }
        if(text === 'random'){
            cptPkm(37)
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