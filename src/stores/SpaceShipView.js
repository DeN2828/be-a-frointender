import { defineStore } from "pinia";

export const usespaceship = defineStore('spaceship',
    {
        state: () => ({
            spaceship: null,
        }),

        actions: {
            async getSpaceShip(page) {
                try {
                    let getship = await fetch(`https://swapi.dev/api/starships?page=${page}`);
                    let getresult = await getship.json();
                    this.spaceship = getresult.results;
                } catch (error) {
                    return error
                }
            }
        }
    })