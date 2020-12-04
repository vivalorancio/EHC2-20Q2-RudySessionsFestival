/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import 'bootstrap';
import 'leaflet';

/**
 * Write any other JavaScript below
 */

// +(function () {
//   console.log('Hello, UOC!');
// })();

let map = L.map('map').setView([39.5794644, 2.6371057], 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
