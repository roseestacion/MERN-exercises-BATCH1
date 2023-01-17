function App() {
    return (
      <div>
        ...
  
        <hr />
  
        <ul>
          {list.map(function (item) {
            return <li>{item.title}</li>;
           })}
        </ul>
      </div>
    );
  }
    