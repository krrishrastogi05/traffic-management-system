// locations.js
const LOCATIONS = [
    {
        origin: { address: 'CM House, Ranchi, Jharkhand' },
        destination: { address: 'Harmu Chowk, Ranchi, Jharkhand' },
        freeload_time: 7.3
    },
    {
        origin: { address: 'Harmu Chowk, Ranchi, Jharkhand' },
        destination: { address: 'CM House, Ranchi, Jharkhand' },
        freeload_time: 6.1
    },
    {
        origin: { address: 'Harmu Chowk, Ranchi, Jharkhand' },
        destination: { address: 'HEC Gate, Ranchi, Jharkhand' },
        freeload_time: 13.2
    },
    {
        origin: { address: 'HEC Gate, Ranchi, Jharkhand' },
        destination: { address: 'Harmu Chowk, Ranchi, Jharkhand' },
        freeload_time: 13.5
    },
    {
        origin: { address: 'Radium Road, Ranchi, Jharkhand' },
        destination: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        freeload_time: 2.5
    },
    {
        origin: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Radium Road, Ranchi, Jharkhand' },
        freeload_time: 2.6
    },
    {
        origin: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Rajendra Chowk, Ranchi, Jharkhand' },
        freeload_time: 5.9
    },
    {
        origin: { address: 'Rajendra Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        freeload_time: 6.3
    },
    {
        origin: { address: 'Rajbhawan Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Booty More Chowk, Ranchi, Jharkhand' },
        freeload_time: 13.6
    },
    {
        origin: { address: 'Booty More Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Rajbhawan Chowk, Ranchi, Jharkhand' },
        freeload_time: 13.2
    },
    {
        origin: { address: 'Mecon Flyover, Ranchi, Jharkhand' },
        destination: { address: 'Booty More Chowk, Ranchi, Jharkhand' },
        freeload_time: 14.2
    },
    {
        origin: { address: 'Booty More Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Mecon Flyover, Ranchi, Jharkhand' },
        freeload_time: 18.0
    },
    {
        origin: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Airport, Ranchi, Jharkhand' },
        freeload_time: 14.2
    },
    {
        origin: { address: 'Airport, Ranchi, Jharkhand' },
        destination: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        freeload_time: 9.8
    },
    {
        origin: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Birsa Chowk, Ranchi, Jharkhand' },
        freeload_time: 12.7
    },
    {
        origin: { address: 'Birsa Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        freeload_time: 6.6
    },
    {
        origin: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Argora Chowk, Ranchi, Jharkhand' },
        freeload_time: 9.3
    },
    {
        origin: { address: 'Argora Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Mecon Chowk, Ranchi, Jharkhand' },
        freeload_time: 8.9
    },
    {
        origin: { address: 'Argora Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Daladali Chowk, Ranchi, Jharkhand' },
        freeload_time: 13.9
    },
    {
        origin: { address: 'Daladali Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Argora Chowk, Ranchi, Jharkhand' },
        freeload_time: 14.7
    },
    {
        origin: { address: 'CM House, Ranchi, Jharkhand' },
        destination: { address: 'Chandni Chowk Kanke, Ranchi, Jharkhand' },
        freeload_time: 22.7
    },
    {
        origin: { address: 'Chandni Chowk Kanke, Ranchi, Jharkhand' },
        destination: { address: 'CM House, Ranchi, Jharkhand' },
        freeload_time: 21.1
    },
    {
        origin: { address: 'Ambedkar Chowk Doranda, Ranchi, Jharkhand' },
        destination: { address: 'Namkum Bazar, Ranchi, Jharkhand' },
        freeload_time: 10.4
    },
    {
        origin: { address: 'Namkum Bazar, Ranchi, Jharkhand' },
        destination: { address: 'Ambedkar Chowk Doranda, Ranchi, Jharkhand' },
        freeload_time: 10.8
    },
    {
        origin: { address: 'Kachahray Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        freeload_time: 6.6
    },
    {
        origin: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Kachahray Chowk, Ranchi, Jharkhand' },
        freeload_time: 6.8
    },
    {
        origin: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Kantatoli Chowk, Ranchi, Jharkhand' },
        freeload_time: 2.3
    },
    {
        origin: { address: 'Kantatoli Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        freeload_time: 2.2
    },
    {
        origin: { address: 'New Market Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Piska More Chowk, Ranchi, Jharkhand' },
        freeload_time: 5.3
    },
    {
        origin: { address: 'Piska More Chowk, Ranchi, Jharkhand' },
        destination: { address: 'New Market Chowk, Ranchi, Jharkhand' },
        freeload_time: 4.5
    },
    {
        origin: { address: 'Piska More Chowk, Ranchi, Jharkhand' },
        destination: { address: 'ITI Bus Stand, Ranchi, Jharkhand' },
        freeload_time: 6.9
    },
    {
        origin: { address: 'ITI Bus Stand, Ranchi, Jharkhand' },
        destination: { address: 'Piska More Chowk, Ranchi, Jharkhand' },
        freeload_time: 5.8
    },
    {
        origin: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Kokar Chowk, Ranchi, Jharkhand' },
        freeload_time: 6.8
    },
    {
        origin: { address: 'Kokar Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        freeload_time: 6.6
    },
    {
        origin: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        freeload_time: 3.3
    },
    {
        origin: { address: 'Lalpur Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        freeload_time: 3.1
    },
    {
        origin: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Karmtoli Chowk, Ranchi, Jharkhand' },
        freeload_time: 3.6
    },
    {
        origin: { address: 'Karmtoli Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Albertekka Chowk, Ranchi, Jharkhand' },
        freeload_time: 3.9
    },
    {
        origin: { address: 'Karam Toli Chowk, Ranchi, Jharkhand' },
        destination: { address: 'Boriya Road, Ranchi, Jharkhand' },
        freeload_time: 13.4
    },
    {
        origin: { address: 'Boriya Road, Ranchi, Jharkhand' },
        destination: { address: 'Karam Toli Chowk, Ranchi, Jharkhand' },
        freeload_time: 13.0
    }
];


module.exports = LOCATIONS;
