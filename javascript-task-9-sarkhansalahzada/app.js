document.addEventListener("DOMContentLoaded", () => {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const result = document.getElementById("result");
  const sound = document.getElementById("sound");
  const btn = document.getElementById("search-btn");

  btn.addEventListener("click", async () => {
    let inpWord = document.getElementById("inp-word").value;
    try {
      const response = await fetch(`${url}${inpWord}`);
      const [data] = await response.json();
      console.log(data);
      
      if (data) {
        const word = data.word;
        const phonetic = data.phonetics[0]?.text || "";
        const partOfSpeech = data.meanings[0]?.partOfSpeech || "";
        const definition = data.meanings[0]?.definitions[0]?.definition || "";
        const pronunciationUrl = data.phonetics[0]?.audio;

        result.innerHTML = `
          <div class="word">
            <h1>${word}</h1>
            <button class="play-button"><img src="./assets/images/icon-play.svg" alt="play-button"></button>
          </div>
          <div class="details">
            <p>/${phonetic}/</p>
          </div>
          <div class="word-explanation">
            <div class="meaning-top">
              <p><b>${partOfSpeech}</b></p><hr>
            </div>
            <div class="word-meaning">
              <p>Meaning</p>
              <p><b>·</b> ${definition}</p>
            </div>
          </div>
          <div class="footer">
          <!-- <hr> -->
          <p>Source</p>
          <a href="https://en.wiktionary.org">https://en.wiktionary.org</a>
          </div>
          `;

        const playButton = document.querySelector(".play-button");
        if (pronunciationUrl) {
          playButton.addEventListener("click", () => {
            const audio = new Audio(pronunciationUrl);
            audio.play();
          });
        } else {
          playButton.style.display = "none";
        }
      } else {
        result.innerHTML = "No results found.";
      }
    } catch (error) {
      console.log("An error occurred:", error);
      result.innerHTML = "An error occurred. Please try again later.";
    }
  });
});
  