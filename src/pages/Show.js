import { useState } from 'react';

const Show = (props) => {
    
    const avatarURL = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
    const id = props.match.params.id;
    const person = props.people.find(p =>  p._id === id); 
    
    const [ editForm, setEditForm ] = useState(person);

    const handleChange = (event) => {};
    const handleSubmit = (event) => {};

    return (
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            {
                person.image 
                ? <img src={person.image} alt={person.name} /> 
                : <img src={avatarURL} alt="placeholder" /> 
            }
            <form>
                <input 
                    name="name"
                    value={editForm.name}
                    onChange={handleChange} 
                    type="text" 
                />
                <input
                    name="title"
                    value={editForm.title}
                    onChange={handleChange}
                    type="text" />
                <input
                    name="image"
                    value={editForm.image}
                    onChange={handleChange}
                    type="text" />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Show;