// locations.js
const LOCATIONS = [
    {
        origin: { address: 'CM House, Ranchi, Jharkhand' },
        destination: { address: 'Harmu Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Harmu Chowk, Ranchi, Jharkhand' },
        destination: { address: 'CM House, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Harmu Chowk, Ranchi, Jharkhand' },
        destination: { address: 'HEC Gate, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'HEC Gate, Ranchi, Jharkhand' },
        destination: { address: 'Harmu Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Radium Road, Ranchi, Jharkhand' },
        destination: { address: 'Albertekka Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Radium Road, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Rajendra Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Rajendra Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Albertekka Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Rajbhawan Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Booty More Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Booty More Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Rajbhawan Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Mecon Flyover, Ranchi, Jharkhand' },
        destination: { address: 'Booty More Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Booty More Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Mecon Flyover, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Airport, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Airport, Ranchi, Jharkhand' },
        destination: { address: 'Mecon Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Birsa Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Birsa Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Mecon Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Argora Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Argora Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Mecon Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Argora Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Daladali Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Daladali Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Argora Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'CM House, Ranchi, Jharkhand' },
        destination: { address: 'Chandni Chowk Kanke, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Chandni Chowk Kanke, Ranchi, Jharkhand' },
        destination: { address: 'CM House, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Ambedkar Chowk Doranda, Ranchi, Jharkhand' },
        destination: { address: 'Namkum Bazar, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Namkum Bazar, Ranchi, Jharkhand' },
        destination: { address: 'Ambedkar Chowk Doranda, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Kachahray Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Lalpur Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Kachahray Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Kantatoli Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Kantatoli Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Lalpur Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'New Market Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Piska More Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Piska More Chowk, Ranchi, Jharkhand' },
        destination: { address: 'New Market Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Piska More Chowk, Ranchi, Jharkhand' },
        destination: { address: 'ITI Bus Stand, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'ITI Bus Stand, Ranchi, Jharkhand' },
        destination: { address: 'Piska More Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Kokar Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Kokar Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Lalpur Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Lalpur Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Albertekka Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Karmtoli Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Karmtoli Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Albertekka Chowk, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Karam Toli Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Boriya Road, Ranchi, Jharkhand' }
    },
    {
        origin: { address: 'Boriya Road, Ranchi, Jharkhand' },
        destination: { address: 'Karam Toli Chowk, Ranchi, Jharkhand' }
    }
];

module.exports = LOCATIONS;
