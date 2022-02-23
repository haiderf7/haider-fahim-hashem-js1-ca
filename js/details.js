
const url = "https://genius.p.rapidapi.com/artists/16775/songs/";

const keyHeadersInfo = {
  headers: {
    "x-rapidapi-host": "genius.p.rapidapi.com",
    "x-rapidapi-key": "4e34bcda43mshdde7ef663126703p173f39jsnab01eb494598",
  },
};

const mainInfo = document.querySelector(".main-content");

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
 

function createHtml(results) {
    container.innerHTML = `<h1>${results.full_title}</h1>`;
};


fetchTheTitle();