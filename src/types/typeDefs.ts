export type Continent = {
    code: string;
    name: string;
    countries: Country[];
}

export type Country = {
    code: string;
    name: string;
    capital: string;
    currency: string;
    emoji: string;
}

export type Language = {
    code: string;
    name: string;
    native: string;
    rtl : boolean;
}