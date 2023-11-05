<script setup>
import { usespaceship } from '../stores/SpaceShipView';

const store = usespaceship();

let currentPage = 1;
let selectedPilots = [];

  store.getSpaceShip(1);
function getSpaceShip(page) {
  if (currentPage !== page) {
    store.getSpaceShip(page);
    currentPage = page;
  }
}

async function viewPilots(pilots) {
  selectedPilots = await fetchPilotData(pilots);
  alert(selectedPilots.map(item => item.name));
}

async function fetchPilotData(pilotURLs) {
  const pilotPromises = pilotURLs.map(url => fetch(url).then(response => response.json()));
  const pilotData = await Promise.all(pilotPromises);
  return pilotData;
}

console.log(store.spaceship);
</script>

<template>
  <div>
    <table className="table table-dark table-striped-columns">
      <thead>
        <tr>
          <th>Name</th>
          <th>model</th>
          <th>manufacturer</th>
          <th>max_atmosphering_speed</th>
          <th>passengers</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ship of store.spaceship" :key="ship.url">
          <td>{{ ship.name }}</td>
          <td>{{ ship.model }}</td>
          <td>{{ ship.manufacturer }}</td>
          <td>{{ ship.max_atmosphering_speed }}</td>
          <td>{{ ship.passengers }}</td>
          <td>
            <button className="btn btn-primary" @click="viewPilots(ship.pilots)" :disabled="ship.pilots.length === 0">View pilots</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button className="btn btn-primary" @click="getSpaceShip(1)" :class="{ active: currentPage === 1 }">Page 1</button>
    <button className="btn btn-primary" @click="getSpaceShip(2)" :class="{ active: currentPage === 2 }">Page 2</button>
  </div>
</template>
