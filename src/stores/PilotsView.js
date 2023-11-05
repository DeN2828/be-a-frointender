import { defineStore } from "pinia";

export const usepilots = defineStore('pilots',
    {
        state: () => ({
            pilots: null,
        }),

        actions: {
            async getPilots(page) {
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