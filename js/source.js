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
localStorage.setItem("access_token", "BQDITdDDocSBouyK7deGneCc1E0nkkHbkQjMJTZGtY0fSaULk4klTqwI_-aFZbuWrVjzFoGR4LAH-KVZ17q2VVjXHs_QrJDU8-kdOaNf2ybI3wtgd_9ZUVhgTsKNwjP6uZQeWmMAmuRk");
localStorage.setItem("track_id_1", "3HOKxuTDmNVmIlCIpBiD8m");
localStorage.setItem("track_id_2", "7mXuWTczZNxG5EDcjFEuJR");
localStorage.setItem("track_id_3", "02cRoSfWU3RJNFyU3o4lhV");


async function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");

    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");

    const trackIDs = [trackID1, trackID2, trackID3];

    const trackNames = document.getElementsByClassName("track-title");
    const trackImages = document.querySelectorAll(".track img");
    const trackNum = document.getElementsByClassName("track-number");
    const trackDuration = document.getElementsByClassName("track-duration");
    const trackAlbum = document.getElementsByClassName("track-album");

    for(let i = 0; i < trackIDs.length; i++){

      const response = await fetch(
        `https://api.spotify.com/v1/tracks/${trackIDs[i]}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
      );

      const data = await response.json();
    
      trackNames[i].textContent = data.name;
      trackImages[i].src = data.album.images[0].url;
      trackNum[i].textContent = data.track_number;
      trackDuration[i].textContent = convertMsToMinSec(data.duration_ms);
      trackAlbum[i].textContent = data.album.name;
    };

    
}

load();


   