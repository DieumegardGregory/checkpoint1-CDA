import React, { useState } from 'react';
import Filter from '../components/Filter/Filter';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from '../api/Queries';
import { Continent } from '../types/typeDefs';

const ContinentsList = () => {
    const [filterValue, setFilterValue] = useState("");
    const [continents, setContinents] = useState<Continent[]>([]);
    const navigate = useNavigate();

    const {loading, error} = useQuery(GET_ALL_CONTINENTS, {
        onCompleted: (data) => {
            setContinents([...data.continents])
        }
    })
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error.message}</p>;

    const handleContinentClick = (code: string) => {
        navigate(`/countries/${code}`)
    }

    const handleChange = (e: any) => {
        setFilterValue(e.target.value);
    }
    
    return (
        <>
            <h2>Our amazing list of continents:</h2>
            <Filter handleChange={handleChange} />
            <div className='continents-container'>
                {continents.length > 0 && 
                    <>
                        {continents.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase())).map((continent) => (
                            <div className='continent-card' key={continent.code}>
                                <h3>{continent.name}</h3>
                                <button onClick={() => handleContinentClick(continent.code)}>See my countries</button>
                            </div>
                        ))}
                    </>}
            </div>
        </>
    )
}

export default ContinentsList;