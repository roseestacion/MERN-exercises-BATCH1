const App = () => {
     const stories = [ ];

    return ( 
    <div> 
        <h1>My Hacker Stories</h1>

    <Search />

    <hr />

    <List list={stories} /> 
    </div>
   ); 
};
    