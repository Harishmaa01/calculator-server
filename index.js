import express from 'express';
import mongoose from 'mongoose';
import Calculations from './src/resources/calculator/calculator.model.js';

const app = express();
const PORT = process.env.PORT || 8100;

app.use(express.json({ limit: "50mb" }));

mongoose
    .connect('mongodb+srv://harishma:Y78AedIzaGa2YYNz@calculator.ialgz.mongodb.net/?retryWrites=true&w=majority&appName=calculator')
    .then(() => {
        app.listen(PORT, async () => {
            console.log(`mongodb connected and server started in port ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error)
    });



app.post('/api/calculation', async (req, res) => {
    try {
        const { calculation, result } = req.body
        await Calculations.create({
            calculation, result
        })
        res.send({ message: "calculation created successfully" }).status(200)
    } catch (error) {
        res.send({ message: "Unknown error occurred" }).status(500)
    }
});

app.get('/api/calculation', async (req, res) => {
    const data = await Calculations.find();
    res.send(data).status(200)
});

app.get('/api/health', (req, res) => {
    res.send({ message: "server working" }).status(200)
})

