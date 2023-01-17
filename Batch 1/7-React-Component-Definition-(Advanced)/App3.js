const App = () => ( 
<div> 
    ... 
</div> 
);
const Search = () => ( 
<div> 
    <label htmlFor="search">Search: </label>
     <input id="search" type="text" /> 
</div> );
const List = () => (
     <ul> 
        {list.map((item) => (
             <li key={item.objectID}> 
             <span> 
                <a href={item.url}>{item.title}</a>
                 </span>
                  <span>{item.author}</span> 
                  <span>{item.num_comments}</span>
                   <span>{item.points}</span>
                </li> 
            ))}
         </ul> 
     );
