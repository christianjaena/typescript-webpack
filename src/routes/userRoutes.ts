import express from 'express'
import {get_users} from '../controllers/userController'
const route = express.Router();

route.get('/', get_users);

export default route;