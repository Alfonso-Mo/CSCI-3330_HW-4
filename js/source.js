// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "12GqGscKJx3aE4t07u7eVZ");
localStorage.setItem("access_token", "");
localStorage.setItem("track_id_1", "");
localStorage.setItem("track_id_2", "");
localStorage.setItem("track_id_3", "");

const artistName_Displayed = document.getElementById("artist-name");


function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    

  artistName_Displayed.textContent("")




    
}
load();


   