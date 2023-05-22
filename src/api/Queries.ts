import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql`
query GetContinents {
    continents {
        code
        name
        countries {
            name
        }
    }
}`

export const GET_SINGLE_CONTINENT = gql`
query Continent($code: ID!) {
    continent(code: $code) {
        code
        name
        countries {
            code
            name
        }
    }
}`