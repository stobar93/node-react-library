const {Router} = require('express');
const router = Router();
const {User, Book} = require('../db');
const {createUser} = require('../utils/user')

// router.get('/', readUser)

router.post('/', createUser)

// router.put('/', updateUserInfo)

// router.delete('/', deleteUser)

module.exports = router;