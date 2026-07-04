// to load the html components into the index.html file
const loadComponents = (id, url) =>  {
    fetch(url)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById(id).innerHTML = html;
    });
}

window.onload = () => {
    loadComponents('header', 'src/sections/header.html');
    loadComponents('hero', 'src/sections/hero.html');
    loadComponents('contact', 'src/sections/contact.html');
    loadComponents('footer', 'src/sections/footer.html');
}

//null
const impressumLink = document.getElementById('impressum');
const datenschutzLink = document.getElementById('datenschutz');

console.log(impressumLink);
console.log(datenschutzLink);

// to handle the click events for the Impressum and Datenschutz links
// const impressumLink = document.getElementById('impressum');
// const datenschutzLink = document.getElementById('datenschutz');

// impressumLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Impressum link clicked');
// });

// datenschutzLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Datenschutz link clicked');
// });