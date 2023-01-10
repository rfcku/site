import { Grid, Text, Link } from "@nextui-org/react";
import ReactPlayer from 'react-player'
import Social from './Social'
import { AiOutlineCoffee } from "react-icons/ai";
import useDex from '../hooks/useDex';
import { gtFlg } from '../utils';
import Header from './Header';
const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export default function Base({flag}) {
    
    const {
        promtSmbt,
        cptPkm,
        status,
        strt,
        cpt,
    } = useDex()
    if (!cpt) return <>No Data</>
    return (
        <section flag={flag}
            >
            <Header />
            <div key={'main-container'} className="container">
                {
                    status && (
                        <div className='player-wrapper' onClick={ ()=>{ window.open(`${baseUrl}?slug=true`) }}>
                            <ReactPlayer 
                                controls={false} 
                                flag={gtFlg(111)} 
                                playing={true} 
                                onEnded={() => cptPkm(151) } 
                                url={'/media/2.mp4'} 
                            />
                        </div>
                    )
                }
                <div>
                    <Grid align="center" justify="center">
                        <Text
                            h1
                            size={60}
                            css={{
                                textGradient: "45deg, $blue600 -20%, $pink600 100%",
                            }}
                            weight="bold"
                            onClick={() => {strt(true);cptPkm(76)}}
                            href="https://www.instagram.com/rfcku/" target="_blank"
                        >
                            @rfcku
                        </Text>
                    </Grid>
                    <Social strt={strt} handleClick={cptPkm} />
                    <Grid align="center" justify="center">
                        <Text

                            h1
                            size={14}
                            css={{
                                textGradient: "45deg, $blue600 -20%, $pink600 100%",
                            }}
                            weight="bold"
                            onClick={() => window.open('https://opensea.io/collection/rfcku-collection')}
                        >
                            ntf's
                        </Text>
                    </Grid>
                </div>
                {
                    cpt.length >= 1 && (<div className="stats" onClick={() => promtSmbt() }>Captured: {cpt.length}/151</div>)
                }
            </div>
            <div style={{position: 'fixed', bottom: 25, right: 25}}>
                <Link
                    color="secondary"
                    href="https://www.buymeacoffee.com/rfcku"
                    target={"_blank"}
                >
                    <AiOutlineCoffee size="2em" />
                </Link>
            </div>
        </section>
    )
}

export async function getServerSideProps(context) {
    
    
    return {
      props: {
        flag: gtFlg(122) 
      }, // will be passed to the page component as props
    }
  }