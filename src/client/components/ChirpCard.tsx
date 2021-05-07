import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChirpWithAuthor } from '../../utilities/types';

const ChirpCard = ({ username, content, created_at, updated_at, id }: ChirpWithAuthor) => {

    const [formattedTime, setformattedTime] = useState(created_at);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        if (created_at === updated_at) {
            setformattedTime(new Date(created_at).toLocaleString());
        } else {
            setIsUpdated(true);
            setformattedTime(new Date(created_at).toLocaleString());
        }
    }, []);

    return (
        <div className="card col-md-5 m-2 p-2 bg-dark shadow-lg">
            <div className="card-body">
                <h2 className="text-secondary">@{username}</h2>
                <p>{content}</p>
                <div className="card-footer text-primary d-flex justify-content-around">
                    <span>{isUpdated ? `Last updated ${formattedTime}` : `Created at ${formattedTime}`}</span>
                    <Link to={`/chirps/${id}`} className="btn btn-outline-primary">See my details!</Link>
                </div>
            </div>
        </div>
    );
}

export default ChirpCard;