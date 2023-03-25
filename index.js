const express = require("express");
const app = express();
const axios = require("axios");
const redis = require("redis");

const client = redis.createClient();


app.get("/rockets", async(req, res) => {
      try {
        const rocketsCache = await client.get("myRockets");
        if (rocketsCache) {
            return res.status(200).send(JSON.parse(rocketsCache));
        }
        const allRockets = await axios.get("https://api.spacexdata.com/v3/rockets");
        await client.set("myRockets", JSON.stringify(allRockets.data), {EX: 5});
        res.status(200).send(allRockets.data);

    } catch(e){
        res.status(400).json({status: "Error", message: e});
    }

});

const startup = async() => {
    await client.connect();
    app.listen(3000, () => {
        console.log("Server is on!");
    });
};
startup();
