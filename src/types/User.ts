export interface User {
    id ? : number,
    name : {
        first : string,
        last : string
    },
    location : {
        city : string,
        state : string,
        country : string
    },
    email : string
    dob : {
        age : number
    },
    phone : string,
    cell : string,
    picture : {
        large : string,
        medium : string
    }
    nat : string
}