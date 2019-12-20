// const axios = require('axios');
import axios from 'axios'

export default {
    getRate,
    getMarketPrice
}

function getRate() {
    return new Promise((resolve, reject) => {
        axios.get(`https://blockchain.info/tobtc?currency=USD&value=1&cors=true`)
            .then(res => {
                resolve(res.data)
            })
    })
}


function getMarketPrice() {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.blockchain.info/charts/market-price?timespan=12months&format=json&cors=true`)
            .then(res => {
                console.log(res.data)
                resolve(res.data)
            })
    })
}

// function getConfirmedTransactions(){

// }