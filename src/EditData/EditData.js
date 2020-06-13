import React, {useState} from 'react';

const EditData = (props) => {
    const [data, setData] = useState(props.data['value']);
    const [editMode, setEditMode] = useState(false);
    const [isValidData, setIsValidData] = useState(data.length > 0);

    const handleChange = (e) => {
        setData(e.target.value);
        setIsValidData(e.target.value.length > 0);
    }

    const handleSave = (e) => {
        props.handleData({id: props.data['id'], key: props.data['key'], value: data});
        setEditMode(false);
    }

    const handleCancel = (e) => {
        setData(props.data['value']);
        setEditMode(false);
    }

    return (
        <>
            {editMode ?
                <div>
                    <div>
                        <input value={data} onChange={handleChange}/>
                    </div>

                    <button className="btn btn-success btn-sm m-1" onClick={handleSave} disabled={!isValidData}>Save</button>
                    <button className="btn btn-secondary btn-sm m-1" onClick={handleCancel}>Cancel</button>
                </div>
                :
                <div>
                    <div>
                        {data}
                        <button className="btn btn-outline-primary btn-sm m-1" onClick={() => setEditMode(true)}>Edit</button>
                    </div>
                </div>
            }
        </>
    );
};

export default EditData;