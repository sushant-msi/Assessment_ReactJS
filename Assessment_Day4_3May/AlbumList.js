import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AlbumList(){
    const[albums, setAlbums] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState();

    useEffect ( () => {
            axios.get("https://jsonplaceholder.typicode.com/albums")

            //once response is ready from server, load it into album array
            //set isloading to false since the data is loaded now
            .then((response) => {
                setAlbums(response.data);
                setIsLoading(false);
            })
            //if any errors encountered, update error array with error message
            //also set isloading to false, since the response is recieved
            .catch((error) => {
                setError("Failed to fetch data");
                setIsLoading(false);
            })
        //Empty dependency in order to call the hook only during load
        },[]
    );

    //if server has not responded yet, keep showing Loading message
    if (isLoading) {
        return<h1>Loading albums...</h1>
   }

   //if there are any error, display it
   if (error) {
        return <h1>{error}</h1>
   }

   return (
       <div>
           <h1>Album List</h1>
           <ul>
               {albums.map((album) => (
                   <li key={album.id}>{album.title}</li>
               ))}
           </ul>
       </div>
   );
}   

export default AlbumList;