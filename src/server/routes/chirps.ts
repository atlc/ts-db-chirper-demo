import * as express from 'express';
import { v4 as uuidv4 } from 'uuid';

import db from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allChirps = await db.Chirps.get_with_authors();
        res.json(allChirps);
    } catch (error) {
        res.status(500).json({ message: "An unknown error occurred!", error });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [singleChirp] = await db.Chirps.get_by_id_with_author(id);
        res.json(singleChirp);
    } catch (error) {
        res.status(500).json({ message: "An unknown error occurred!", error });
    }
});


router.post('/', async (req, res) => {
    const id = uuidv4();
    const user_id = "234jkhf978dy34ew8u"; // Hardcoding a user id here since this is pre-auth
    
    const newChirp = {
        id,
        user_id,
        ...req.body
    };

    try {
        console.log(newChirp)
        const dbResponse = await db.Chirps.create(newChirp);

        if (dbResponse.errno) {
            res.status(500).json({ message: "There was an error creating the chirp", error: dbResponse.sqlMessage });
        } else {
            res.status(201).json({ message: "The chirp was created successfully!", newChirpId: id });
        }
    } catch (error) {
        res.status(500).json({ message: "An unknown error occurred!", error });
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const chirp = req.body;

    try {
        const dbResponse = await db.Chirps.update({ id, ...chirp });

        if (dbResponse.errno) {
            res.status(500).json({ message: "There was an error updating the chirp", error: dbResponse.sqlMessage });
        } else {
            res.status(201).json({ message: "The chirp was updated successfully!" });
        }
    } catch (error) {
        res.status(500).json({ message: "An unknown error occurred!", error });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const dbResponse = await db.Chirps.destroy(id);

        if (dbResponse.errno) {
            res.status(500).json({ message: "There was an error deleting the chirp", error: dbResponse.sqlMessage });
        } else {
            res.status(201).json({ message: "The chirp was deleted successfully!" });
        }
    } catch (error) {
        res.status(500).json({ message: "An unknown error occurred!", error });
    }
});


export default router;