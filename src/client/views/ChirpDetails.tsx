import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ChirpDetails = () => {

    const { id } = useParams<{ id: string }>();
    const [chirp, setChirp] = useState(null);
    const [formattedTime, setFormattedTime] = useState(null);

    useEffect(() => {
        fetch(`/api/chirps/${id}`)
            .then(res => res.json())
            .then(data => {
                setChirp(data);

                if (data.created_at === data.updated_at) {
                    setFormattedTime(`Created at ${new Date(data.created_at).toLocaleString()}`);
                } else {
                    setFormattedTime(`Last updated at ${new Date(data.updated_at).toLocaleString()}`);
                }
            });
    }, [id]);

    return (
        <div className="d-flex min-vw-100 justify-content-center">
            <div className="col-md-8">
                <div className="card-body text-center shadow-lg">
                    <h2 className="text-secondary">@{chirp?.username}</h2>
                    <p>{chirp?.content}</p>
                    <div className="card-footer text-primary d-flex justify-content-around">
                        <span>{formattedTime}</span>
                        <Link to={`/chirps/${id}/admin`} className="btn btn-outline-primary">Edit me!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChirpDetails;
