const express = require('express');
const router = express.Router();
const coinGecko = require("../logic/coin-gecko")

//Middle-ware
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });

// Root
router.get("/", async function (req, res) {
  res.send("root")
});

// Ping
router.get("/ping", async function (req, res) {
  res.send(await coinGecko.getPing());
});

// Coins
router.get("/coins/list", async function (req, res) {
  res.send(await coinGecko.getCoinList());
});

router.get("/coins/:id", async function (req, res) {
  res.send(await coinGecko.getCoinById({...req.params, ...req.query}));
});

router.get("/coins/:id/market_chart", async function (req, res) {
  res.send(await coinGecko.getMarketChartById({...req.params, ...req.query}));
});

// Excange Rate
router.get("/exchange_rates", async function (req, res) {
  res.send(await coinGecko.getExchangeRateList());
});

// Status
router.get("/status_updates", async function (req, res) {
  res.send(await coinGecko.getStatusUpdateList());
});

module.exports = router;