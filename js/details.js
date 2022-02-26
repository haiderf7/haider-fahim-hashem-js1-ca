
const url = "https://genius.p.rapidapi.com/artists/16775/songs/";
const loader = document.querySelector(".loaderscreen");

const keyHeadersInfo = {
  headers: {
    "x-rapidapi-host": "genius.p.rapidapi.com",
    "x-rapidapi-key": "4e34bcda43mshdde7ef663126703p173f39jsnab01eb494598",
  },
};


const mainContent = document.querySelector(".mainContent");

async function fetchTheTitle() {

  try {
    const response = await fetch(url, keyHeadersInfo);
    const results = await response.json();


    console.log(results);

    createHtml(results);

}catch (error) {
    console.log(error);
  loader.style.display = "none";
  } 
};

mainContent.innerHTML = "";

function createHtml(results) {
  loader.style.display = "none";
  mainContent.innerHTML = `<h1 class="details-text">${results.response.songs[5].full_title}</h1>
                          <div class="details-text">${results.response.songs[5].lyrics_state} </div>
                          <div class="details-text">${results.response.songs[5].title}</div>`;
};


fetchTheTitle();