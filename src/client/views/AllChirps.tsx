import * as React from 'react';
import { useState, useEffect } from 'react';
import { ChirpWithAuthor } from '../../utilities/types';
import ChirpCard from '../components/ChirpCard';



const AllChirps = () => {

    const [chirps, setChirps] = useState<ChirpWithAuthor[]>(null);

    useEffect(() => {
        fetch('/api/chirps')
            .then(res => res.json())
            .then(data => setChirps(data));
    }, []);

    return (
        <>
            <div className="d-flex justify-content-center row px-1">
                {chirps?.map(chirp => (
                    <ChirpCard key={chirp.id} {...chirp} />
                ))}
            </div>
        </>
    )
}

export default AllChirps
