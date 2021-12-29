const { STATUS_CODE } = require('../configuration');
const { userValidate } = require('../utils/users.validate');

const userArray = [];

module.exports = {
    getLastUser: (req, res) => {
        try {
            const result = userArray.at(-1);
            res.status(STATUS_CODE.OK).json(result);
        } catch (err) {
            console.error('getLastUser: ', err);
        }
    },
    getNamesByInterval: (req, res) => {
        try {

            userArray.forEach((e, index) => {
                function setTime(iter, index) {
                    setTimeout(() => {
                        console.log(iter);
                    }, 2000 + (2000 * index));
                }
                setTime(e, index);
            });

            res.status(STATUS_CODE.OK).json({ message: "work" });
        } catch (err) {
            console.error('getNamesByInterval: ', err);
        }
    },
    postNewUser: (req, res) => {
        try {
            const { body } = req;

            if (Object.keys(body).length === 0 || Object.values(body)[0] === '') {

                res.status(STATUS_CODE.BAD_REQUEST).json({ message: "Body is empty" });
                return;
            }
            const validate = userValidate.validate(body);
            if (Object.values(validate).length === 0) {
                res.status(STATUS_CODE.BAD_REQUEST).json({ message: "not correct value" })
            }
            userArray.push(body);

            res.status(STATUS_CODE.CREATED).json({ message: "User was created" });
        } catch (err) {
            console.error('postNewUser: ', err);
        }
    }
}

