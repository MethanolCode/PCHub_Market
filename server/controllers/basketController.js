const { Pool } = require("pg")
const { Device, BasketDevice, Basket } = require("../models/models")

class BasketController {
    async addToBasket(req,res,next){
        const user = req.user
        const {deviceId} = req.body
        const basket = await BasketDevice.create({basketId : user.id, deviceId : deviceId})
        return res.json(basket)
    }

    async delFromBasket(req,res,next){
        const user = req.user
        const deviceId = req.body.deviceId
        const pool = new Pool({
            host: 'localhost',
            port: 5432,
            database: 'market_db',
            user: 'postgres',
            password: '11042003',
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
        })
        await pool.query('DELETE FROM basket_devices WHERE "deviceId"=$1 AND "basketId"=$2 and ctid = (select min(ctid) from basket_devices where "deviceId"=$1 and "basketId"=$2);', [deviceId, user.id])
        await pool.end()
        //const basket = await BasketDevice.destroy({basketId : user.id, deviceId : deviceId})
        //res.set('Access-Control-Allow-Origin', 'http://localhost');
        //res.set('Access-Control-Allow-Headers', 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken')
        //res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
        //res.set('Access-Control-Allow-Credentials', 'true')
        return res.status(200);
    }

    async getBasketUser(req,res){
        const {id} = req.user
        const basket = await BasketDevice.findAll({include: {
                model: Device
            }, where: {basketId: id}})

        return res.json(basket)
    }

}

module.exports = new BasketController()