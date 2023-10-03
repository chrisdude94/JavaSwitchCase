/*Bruk eventlistener (klarer man uten går det greit)
fang opp html elementene med document.getElementById (eller f.eks querySelector)
addEventListener("change", function () {code som skal kjøres}): Kan brukes til å endre src når man velger forskjellige options
funksjon som bruker switch/case for å velge riktig src */

let imageElement = document.getElementById("image");

document.getElementById("imageSelect").addEventListener("change", function () {
    let selectedImage = this.value;
    let imageWrapper = document.getElementById("imageWrapper");

switch (selectedImage) {

    case "image1":
        imageElement.src = "https://images7.alphacoders.com/493/493639.jpg";
    break;

    case "image2":
        imageElement.src = "https://cdnb.artstation.com/p/assets/images/images/030/685/393/large/dark-light-dark-souls-wallpaper-fan-art-by-darklihgt555-de5uwlw.jpg?1601347619";
    break;

    case "image3":
        imageElement.src = "https://cdn.wallpapersafari.com/21/2/R76wSx.jpg";
    break;

    case "image4":
        imageElement.src = "https://cutewallpaper.org/21/souls-wallpaper/Dark-Souls-III-Wallpapers-in-Ultra-HD-4K-Gameranx.jpg";
    break;

    case "image5":
        imageElement.src = "https://p4.wallpaperbetter.com/wallpaper/493/371/733/dark-souls-iii-4k-dark-souls-3-dark-souls-soul-of-cinder-hd-wallpaper-preview.jpg";
    break;
    }
});