search_btn.addEventListener("click", () => {
  const search_term = search_btn.innerText;

  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search_term}&key=AIzaSyA16_iVbT5wWrMaO8hw-SGOfK8_nfUmhYE`;

  fetch(API_URL)
    .then((res) => res.json())
    .then(({ items: googleBookImgs }) => {
      for (const image of googleBookImgs) {
        const imgUrl = image.volumeInfo.imageLinks.smallThumbnail;

        const img = document.createElement("img");
        img.setAttribute("src", imgUrl);
        img.setAttribute("alt", image.alt_description);

        photos_container.appendChild(img);
      }
    });
});
