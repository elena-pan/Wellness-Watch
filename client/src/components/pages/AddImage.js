import React, { useState } from 'react';
import axios from "axios"
import M from "materialize-css";

const serverUrl = process.env.REACT_APP_SERVER_URL;

function AddImage(props) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [image, setImage] = useState(null);
    const [privateImage, setPrivateImage] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
            const imageData = {
                name: imageName,
                description: imageDescription,
                blob: reader.result.toString().replace(/^data:(.*,)?/, '')
            };
            axios.post(`${serverUrl}/api/images`, { image: imageData, private: privateImage })
                .then(response => {
                    props.history.replace("/");
                })
                .catch(err => M.toast({html: 'An error has occurred. Please try again', classes: "red lighten-1"}));
        };
    };

    function privateImageCheckboxChanged(value) {
        const bool = value ? 1 : 0;
        setPrivateImage(bool);
    }

    return (
        <div className="container">
            <div style={{ marginTop: "4rem", marginBottom:"5rem" }} className="row">
                <div className="col s8 offset-s2">
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4>
                            <b>Add Image</b>
                        </h4>
                        <p className="grey-text">Please only upload images of less than 10KB</p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                    <div className="file-field input-field col s12">
                        <div className="btn blue accent-3">
                            <span>Upload image</span>
                            <input type="file" accept=".jpg,.jpeg,.png" onChange={e => setImage(e.target.files[0])} />
                            <i className="material-icons prefix black-text" onClick={() => setImage(null)} style={{right:0, fontSize:"24px"}}>delete</i>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" value={image ? image.name : ""} />
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <input
                            onChange={e => setImageName(e.target.value)}
                            value={imageName}
                            id="name"
                            type="text"
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input
                            onChange={e => setImageDescription(e.target.value)}
                            value={imageDescription}
                            id="description"
                            type="text"
                        />
                        <label htmlFor="description">Description</label>
                    </div>
                    { props.user ? (
                        <label className="col s12">
                            <input type="checkbox" className="filled-in" onChange={e => privateImageCheckboxChanged(e.target.checked)} value={privateImage}  />
                            <span>Set as private</span>
                        </label>
                        ): (<React.Fragment></React.Fragment>)
                    }
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <button
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        disabled={!image || !imageName || !imageDescription}
                        >
                            Add
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddImage;