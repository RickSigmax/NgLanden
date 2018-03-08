export class Country {        
    public favorite: boolean = false;
    public rating : number = 0;
    
    constructor(public name: string,
                public capital: string,
                public region: string,
                public flag: string,
                public population: string,
                public nameNL:string,
                public timeZone: string,
                public lat: number,
                public lng: number,
                public rawJson: string ){
    }
}