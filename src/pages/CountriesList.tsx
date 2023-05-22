import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Country } from '../types/typeDefs';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_CONTINENT } from '../api/Queries';

const CountriesList = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const params = useParams();
    console.log(params);

    const { loading, error } = useQuery(GET_SINGLE_CONTINENT, {
        variables: {
            code: params.code,
        },
        onCompleted: (data) => {
            setCountries(data.continent.countries);
        }
    })
    if (loading) return <p>Chargement ...</p>;
    if (error) return <p>{error.message}</p>
    return (
        <>
            <h2>List of countries:</h2>
            <>
                {countries.length > 0 && (
                    <ul className='countries-list'>
                        {countries.map((country) => (
                            <Link to={`/country/${country.code}`}>
                                <li>{country.name}</li>
                            </Link>
                        ))}
                    </ul>
                )}
            </>
        </>
    )
}

export default CountriesList;