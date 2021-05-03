const axios = require('axios')

// TODO externalize
const coinGeckoPath = {
    base_path: "/api/v3",
    scheme: "https",
    host: "api.coingecko.com"
}

// coingecko api -  https://www.coingecko.com/api/documentations/v3#/
const url = `${coinGeckoPath.scheme}://${coinGeckoPath.host}${coinGeckoPath.base_path}`

const getPing = async () => {
    try {
        const response = await axios.get(`${url}/ping`)
        return response.data
    } catch (error) {
        return { msg: error }
    }
}

const getCoinList = async () => {
    try {
        const response = await axios.get(`${url}/coins/list?include_platform=true`)
        return response.data
    } catch (error) {
        return { msg: error }
    }
}

const getCoinById = async props => {
    console.log(props)
    const { id } = props;
    try {
        const response = await axios.get(`${url}/coins/${id}`)
        return response.data
    } catch (error) {
        return { msg: error }
    }
}

const getMarketChartById = async props => {
    console.log(props)
    const { id, vs_currency, days } = props;
    try {
        const response = await axios.get(`${url}/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}`)
        return response.data
    } catch (error) {
        return { msg: error }
    }
}

const getExchangeRateList= async () => {
    try {
        const response = await axios.get(`${url}/exchange_rates`)
        return response.data
    } catch (error) {
        return { msg: error }
    }
}

const getStatusUpdateList= async () => {
    try {
        const response = await axios.get(`${url}/status_updates`)
        return response.data
    } catch (error) {
        return { msg: error }
    }
}

module.exports = {
    getPing,
    getCoinList,
    getCoinById,
    getMarketChartById,
    getExchangeRateList,
    getStatusUpdateList
}