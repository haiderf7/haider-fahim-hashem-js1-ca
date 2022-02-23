// JS MA1

const resultsBag = document.querySelector(".results");

async function forTheApi() {
  const response = await fetch(
    "https://genius.p.rapidapi.com/artists/16775/songs",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "4e34bcda43mshdde7ef663126703p173f39jsnab01eb494598",
      },
    }
  );

  const json = await response.json();

  console.log(json);

  const results = json.response.songs;

  results.forEach(function (results) {
    console.log(results.annotation_count);
    console.log(results.full_title);
    console.log(results.path);
    resultsBag.innerHTML += `<div>${results.annotation_count}</div>
                                   <div>${results.full_title}</div>
                                   <div>${results.path}</div>`;
  });
};

forTheApi();


