export interface Advisee{
    nameid: string,
    major: string,
    studentUrl: string,
    picture: string
}

export class Lionet{
    static getAdvisees():Promise<Advisee[]>{
        return fetch("https://sungard02.mssu.edu:9001/StudentSelfService/adviseeList/viewRoster?pageOffset=0&pageMaxSize=100&sortColumn=nameid&sortDirection=asc")
        // the JSON body is taken from the response
        .then(res => res.json())
        .then(res => {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res.data as Advisee[]
        })
    }
}