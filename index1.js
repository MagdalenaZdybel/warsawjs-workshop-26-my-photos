function getPhotos() {
    let script = document.createElement('script');
    script.src = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags='+ document.getElementById('search').value;
    document.querySelector('head').appendChild(script);
}

function jsonFlickrFeed(data) {
    console.log('testowanie')
    let image = '';
    console.log('testowanie2')

    data.items.forEach(function(element) {
        image += '<img src="' + element.media.m + '"/>';
    });

    document.getElementById('outputDiv').innerHTML = image;
}
function getPhotos1() {
    let script = document.createElement('script');
    script.src = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags='+ document.getElementById('search').value;
    document.querySelector('head').appendChild(script);
}

    
// function fetchFlikrPhotos() {
//     console.log('testowanie3')
//     let image = '';
// }

getPhotos();
fetchFlikrPhotos();
getPhotos1();