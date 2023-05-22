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