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
localStorage.setItem("access_token", "BQDlZrUdTPDpkvx_1PX2RXKhmW2X7q57rn3lkjRNDiK5_YGTT4SM65-LqM1HjdGzyiCIQcVpBnXzV15cYRqDyMqn9hmFDWU5el2q_sJ1zhDXEg2acmmwIZjsFYb9tfclz8jb4NYIYDrJ");
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


    const artistName = document.getElementById("artist-name");
    const artistImage = document.querySelector(".artist-image img");

    const trackNames = document.getElementsByClassName("track-title");
    const trackImages = document.querySelectorAll(".track img");
    const trackNum = document.getElementsByClassName("track-number");
    const trackDuration = document.getElementsByClassName("track-duration");
    const trackAlbum = document.getElementsByClassName("track-album");

    const albumImages = document.querySelectorAll(".album-card img");
    const albumNames = document.querySelectorAll(".album-card h3");
    const albumDetails = document.querySelectorAll(".album-card p");

   



    const artistResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}`,
      {
          headers: {
              Authorization: `Bearer ${accessToken}`
          }
      }
    );

    const artistData = await artistResponse.json();

    artistName.textContent = artistData.name;
    artistImage.src = artistData.images[0].url;



    // tracks
    
    for(let i = 0; i < trackIDs.length; i++){

      const response = await fetch(
        `https://api.spotify.com/v1/tracks/${trackIDs[i]}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
      );


      const trackdata = await response.json();
    
      trackNames[i].textContent = trackdata.name;
      trackImages[i].src = trackdata.album.images[0].url;
      trackNum[i].textContent = trackdata.track_number;
      trackDuration[i].textContent = convertMsToMinSec(trackdata.duration_ms);
      trackAlbum[i].textContent = trackdata.album.name;
    };




    const albumResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums`,
      {
          headers: {
              Authorization: `Bearer ${accessToken}`
          }
      }
    );

    const albumData = await albumResponse.json();

    for(let i = 0; i < 4; i++){

      const album = albumData.items[i];

      albumImages[i].src = album.images[0].url;
      albumNames[i].textContent = album.name;
      albumDetails[i].textContent = album.release_date + " • " + album.album_type;

    };
    
}

load();


   