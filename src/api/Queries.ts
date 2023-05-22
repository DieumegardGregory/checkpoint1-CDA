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
}`;

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
}`;

export const GET_COUNTRY = gql`
query Country($code: ID!) {
    country(code: $code) {
        code
        name
        native
        phone
        capital
        currency
        languages {
            name
            native
            rtl
        }
        emoji
        emojiU
    }
}`;