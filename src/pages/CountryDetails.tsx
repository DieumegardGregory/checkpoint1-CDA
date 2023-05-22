import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../api/Queries';
import { useParams } from 'react-router-dom';
import { Country } from '../types/typeDefs';

const CountryDetails = () => {
    const [country, setCountry] = useState<Country>();
    const params = useParams();

    const { loading, error } = useQuery(GET_COUNTRY, {
        variables: {
            code: params.code,
        },
        onCompleted: (data) => {
            setCountry(data.country);
        }
    })
    if (loading) return <p>Chargement ...</p>;
    if (error) return <p>{error.message}</p>;
    
        return (
        <>
            <h2>Details</h2>
            <div className="country-card">
                <h3>{country?.emoji} {country?.name} </h3>
                <p>Capital: {country?.capital}</p>
                <p>Currency: {country?.currency}</p>
            </div>
        </>
    )
}

export default CountryDetails;