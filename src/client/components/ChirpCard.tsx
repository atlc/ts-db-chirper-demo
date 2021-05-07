import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChirpWithAuthor } from '../../utilities/types';

import dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ChirpCard = ({ username, content, created_at, updated_at, id }: ChirpWithAuthor) => {

    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        if (created_at !== updated_at) {
            setIsUpdated(true);
        }
    }, []);

    return (
        <div className="mx-2 card col-md-5 m-2 p-2 bg-dark shadow-lg">
            <div className="card-body">
                <h2 className="text-secondary">@{username}</h2>
                <p>{content}</p>
                <div className="card-footer text-primary d-flex justify-content-around">
                    <span>{isUpdated ? `Last updated: ` : `Created: `}{dayjs(updated_at).fromNow()}</span>
                    <Link to={`/chirps/${id}`} className="btn btn-outline-primary">See my details!</Link>
                </div>
            </div>
        </div>
    );
}

export default ChirpCard;