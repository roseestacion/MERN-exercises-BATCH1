const Search = () => { 
    let searchTerm = '';
    const handleChange = (event) => { 
        searchTerm = event.target.value; 
    };
    return ( 
    <div> 
        <label htmlFor="search">Search: </label>
         <input id="search" type="text" onChange={handleChange} />

   <p> 
    Searching for <strong>{searchTerm}</strong>.
     </p>
    </div>
   ); 
};