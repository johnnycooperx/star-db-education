import React from 'react';
//http - swapi.co

class SwapiService{
    _apiBase = 'https://swapi.co/api'
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok){
            throw new Error(`Could not fetch ${url}`)
        }
        const body = await res.json()

        return body;
    }

    async getAllPeople(){
        const res = await this.getResource('/people/')
        return res.results;
    }
    getPerson(id){
        return this.getResource(`/people/${id}`)

    }

    async getAllPlanets(){
        const res = await this.getResource('/planets/')
        return res.results;
    }

    getPlanet(id){
        return this.getResource(`/planet/${id}`)

    }


}



const swapi = new SwapiService();
swapi.getAllPeople().then((people)=>
{
    people.forEach((p)=>
    {
        console.log(p.name);
    })
});

swapi.getAllPlanets().then((people)=>
{
    people.forEach((p)=>
    {
        console.log(p.name);
    })
});

var a = ["g","d"];
console.log(a[0]);
// const getResource = async(url) => {
//
// }
// getResource('https://swapi.co/api/people/1676555454/').then(
//     (body) => {
//         // console.log(res);
//       console.log(body)
//     }
// ).catch((err) => {
//     console.error(err)
// })
