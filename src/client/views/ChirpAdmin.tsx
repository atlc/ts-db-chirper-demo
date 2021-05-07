import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChirpAdmin = () => {

    const { id } = useParams<{ id: string }>();
    const history = useHistory();

    const [chirp, setChirp] = useState(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`/api/chirps/${id}`)
            .then(res => res.json())
            .then(data => {
                setChirp(data);
                setContent(data.content)
            });
    }, [id]);

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetch(`/api/chirps/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.message === "The chirp was updated successfully!") {
                    setContent('');
                    Swal.fire({
                        title: "Success!",
                        text: res.message,
                        icon: 'success'
                    }).then(() => history.push(`/chirps/`));
                } else {
                    Swal.fire({
                        title: "Uh oh!",
                        text: res.message,
                        icon: 'error'
                    });
                }
            });
    }

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetch(`/api/chirps/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ content })
        })
            .then(res => res.json())
            .then(res => {
                if (res.message === "The chirp was updated successfully!") {
                    setContent('');
                    Swal.fire({
                        title: "Success!",
                        text: res.message,
                        icon: 'success'
                    }).then(() => history.push(`/chirps/${id}`));
                } else {
                    Swal.fire({
                        title: "Uh oh!",
                        text: res.message,
                        icon: 'error'
                    });
                }
            });
    }

    return (
        <div className="d-flex min-vw-100 justify-content-center">
            <div className="col-md-8">
                <div className="card-body text-center shadow-lg">
                    <h2 className="text-secondary">@{chirp?.username}</h2>
                    <textarea
                        defaultValue={content}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                        cols={100}
                        rows={10}
                    />
                    <div className="card-footer text-primary d-flex justify-content-around">
                        <button onClick={handleUpdate} className="btn btn-outline-warning">Save Edit</button>
                        <button onClick={handleDelete} className="btn btn-outline-danger">Delete Chirp</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChirpAdmin;
