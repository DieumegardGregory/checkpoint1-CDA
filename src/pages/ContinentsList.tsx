import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from '../api/Queries';
import { Continent } from '../types/typeDefs';

const ContinentsList = () => {
    const [continents, setContinents] = useState<Continent[]>([]);

    const {loading, error} = useQuery(GET_ALL_CONTINENTS, {
        onCompleted: (data) => {
            setContinents([...data.continents])
        }
    })
    if (loading) return <p>Chargement...</p>
    if (error) return <p>{error.message}</p>
    
    return (
        <>
            <h2>Our amazing list of continents:</h2>
            <div className='continents-container'>
                {continents.length > 0 && 
                    <>
                        {continents.map((continent) => (
                            <div className='continent-card' key={continent.code}>
                                <h3>{continent.name}</h3>
                                <button>See my countries</button>
                            </div>
                        ))}
                    </>}
            </div>
        </>
    )
}

export default ContinentsList;