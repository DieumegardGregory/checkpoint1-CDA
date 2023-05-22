import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Country, Continent } from '../types/typeDefs';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_CONTINENT } from '../api/Queries';

const CountriesList = () => {
    const [filterValue, setFilterValue] = useState("");
    const [continent, setContinent] = useState<Continent>()
    const [countries, setCountries] = useState<Country[]>([]);
    const params = useParams();

    const { loading, error } = useQuery(GET_SINGLE_CONTINENT, {
        variables: {
            code: params.code,
        },
        onCompleted: (data) => {
            setContinent(data.continent);
            setCountries(data.continent.countries);
        }
    })
    if (loading) return <p>Chargement ...</p>;
    if (error) return <p>{error.message}</p>;

    const handleChange = (e: any) => {
        setFilterValue(e.target.value);
    }

    return (
        <>
            <h2>List of countries for {continent?.name}</h2>
            <>
                <label htmlFor="filter">Filter the list:</label>
                <input type="text" name="filter" onChange={(e) => handleChange(e)}/>
            </>
            <>
                {countries.length > 0 && (
                    <ul className='countries-list'>
                        {countries.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase())).map((country) => (
                            <Link to={`/country/${country.code}`}>
                                <li key={country.code}>{country.name}</li>
                            </Link>
                        ))}
                    </ul>
                )}
            </>
        </>
    )
}

export default CountriesList;