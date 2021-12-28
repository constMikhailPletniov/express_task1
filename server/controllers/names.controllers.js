const { STATUS_CODE } = require('../configuration');
const client = require('../dataBases/dataBases');

module.exports = {

    getNamesByInterval: async (req, res) => {
        try {

            const { user_id } = req.query;


            const setPromise = (item) => setTimeout(() => {
                console.log(item)
                return item
            }, 4000);
            const result = await client.query(`SELECT first_name, last_name FROM  users`);
            user_id.forEach(item => setPromise(item));
            if (!result.rowCount) return res.status(STATUS_CODE.NOT_FOUND).json({ message: "NOT FOUND User" });

            res.status(STATUS_CODE.OK).json(result.rows);
        } catch (err) {
            console.error('getNamesByInterval: ', err);
        }
    },
    getInterval: (req, res) => {
        try {
            const { user_id } = req.query;
            console.log(user_id);
            const setPromise = (item) => setTimeout(this.getNamesByInterval(item, res), 2000)
            user_id.forEach(item => setPromise(item));
        } catch (err) {
            console.error('getInterval: ', err);
        }
    },
}