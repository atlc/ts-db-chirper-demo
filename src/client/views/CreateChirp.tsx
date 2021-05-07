import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateChirp = () => {

    const history = useHistory();
    const [content, setContent] = useState('What do you want to chirp today?');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        fetch(`/api/chirps/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ content })
        })
            .then(res => res.json())
            .then(res => {
                if (res.message === "The chirp was created successfully!") {
                    setContent('');
                    Swal.fire({
                        title: "Success!",
                        text: res.message,
                        icon: 'success'
                    }).then(() => history.push(`/chirps/${res.newChirpId}`));
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
                    <textarea
                        defaultValue={content}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                        cols={100}
                        rows={10}
                    />
                    <div className="card-footer text-primary d-flex justify-content-around">
                        <button onClick={handleSubmit} className="btn btn-outline-success">Post Your Chirp!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateChirp;
