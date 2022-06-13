const Index = (props) => {

    const loaded = () => {
        return props.people.map(person => (
            <div key={person._id} className="person">
                <h1>{person.name}</h1>
                { person.image && 
                    <img src={person.image} alt={person.name} />
                }
                <h3>{person.title}</h3>
            </div>
        ));
    }
    
    const loading = () => {
        return <h1>Loading ...</h1>
    }


    return props.people ? loaded() : loading();
};

export default Index;