export type Continent = {
    code: string;
    name: string;
    countries: Country[];
}

export type Country = {
    code: string;
    name: string;
    native: string;
    phone: string;
    continent: Continent;
    capital: string;
    currency: string;
    languages: Language[];
    emoji: string;
    emojiU: string;
}

export type Language = {
    code: string;
    name: string;
    native: string;
    rtl : boolean;
}