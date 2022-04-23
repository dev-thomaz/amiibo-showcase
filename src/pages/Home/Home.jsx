import React, {useEffect, useState} from 'react';
import api from '../../services/api'
import { Container } from './styles';
import {CharacterSelector, Loading} from '../../components'
function Home() {

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsloading] = useState(true)

  

    useEffect(() => {
        api.get(`amiibo?type=Figure`).then(resp => {
            setCharacters(resp.data.amiibo)
            setIsloading(false)
        }).catch(e => {
            setIsloading(false)
        })
    }, [])
   
    return(
        <Container>
            {isLoading ? <Loading /> : characters.map(({name, image}) => {
                return(
                    <CharacterSelector url={image} name={name} />
                )
            })}
        </Container>
    )
}

export default Home;