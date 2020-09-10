import express from 'express'
import userRoutes from './routes/userRoutes'
import morgan from 'morgan';
import cors from 'cors';
const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
	console.log(`Server listening at port 3000`)
})

