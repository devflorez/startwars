export interface IResponseAPI {
    count:    number;
    next:     string;
    previous: null;
    results:  IPeople[];
   }
   
   export interface IPeople {
    birth_year: string;
    created:    Date;
    edited:     Date;
    eye_color:  string;
    films:      string[];
    gender:     IGender;
    hair_color: string;
    height:     string;
    homeworld:  string;
    mass:       string;
    name:       string;
    skin_color: string;
    species:    string[];
    starships:  string[];
    url:        string;
    vehicles:   string[];
   }
   
   export enum IGender {
    Female = "female",
    Male = "male",
    NA = "n/a",
   }
   