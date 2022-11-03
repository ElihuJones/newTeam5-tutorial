search_btn.addEventListener("click", () => {
  const search_term = search_btn.innerText;

  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${search_term}&key=AIzaSyA16_iVbT5wWrMaO8hw-SGOfK8_nfUmhYE`;

  fetch(API_URL)
    .then((res) => res.json())
    .then(({ items: googleBooks }) => {
      for (const gbElement of googleBooks) {
        const imgUrl = gbElement.volumeInfo.imageLinks.smallThumbnail;
        const preview = gbElement.volumeInfo.previewLink;

        const card = document.createElement("div");
        card.setAttribute("class", card);
        card.setAttribute(
          "style",
          "width: 11rem; border: solid #D3D3D3; border-radius: 5%; margin: 5px; ; padding: 5px;"
        );

        const anchorTag = document.createElement("a");
        anchorTag.setAttribute("href", preview);

        card.appendChild(anchorTag);

        const img = document.createElement("img");
        img.setAttribute("src", imgUrl);
        img.setAttribute("alt", gbElement.alt_description);
        // img.setAttribute("id");

        anchorTag.appendChild(img);

        bookCard_container.appendChild(card);
      }
    });
});
