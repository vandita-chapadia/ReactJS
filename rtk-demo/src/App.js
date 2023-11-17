import React from "react";
import "./App.css";
import { usePostsQuery } from "./features/api/usersAPI";

function App() {
  const {data,isSuccess,isLoading,isFetching,error}= usePostsQuery();
  return (
    <div className="App">
      <h1> RTK query</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2> Fetching</h2>}
      {error && <h2>Error</h2>}
      {isSuccess && (<div>
        {data.map((post)=>(<p key={post.id}>{post.title}</p>))}
        </div>)}
    </div>

  );
}

export default App;
