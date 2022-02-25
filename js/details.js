
const url = "https://genius.p.rapidapi.com/artists/16775/songs/";

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
  } 
};

mainContent.innerHTML = "";

function createHtml(results) {
  mainContent.innerHTML = `<h1>${results.response.songs[5].full_title}</h1>
                          <div>${results.response.songs[5].lyrics_state} </div>
                          <div>${results.response.songs[5].title}</div>`;
};


fetchTheTitle();