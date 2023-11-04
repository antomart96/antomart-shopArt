
// Cloning the card


const template = document.querySelector('#cards article');
for (const photoData of photosArray) {
     // 1. Create a clone of the model
    const cardClone = template.cloneNode(true);
     // 2. Put the clone where I want (usually the same parent)
    document.querySelector('#cards').append(cardClone);
     // 3. Customize
    cardClone.querySelector('img').src = photoData.imgUrl;
    cardClone.querySelector('h3').innerText = photoData.name;
    cardClone.querySelector('h4').innerText = photoData.price;
    if (!photoData.bestSeller) {
        cardClone.querySelector('.seller').style.display = "none";
    } 
} 
//remove the mother element
template.remove();



const templateComment = document.querySelector('#coms li');
for (const commentData of comments) {
     // 1. Create a clone of the model
    const commentClone = templateComment.cloneNode(true);
     // 2. Put the clone where I want (usually the same parent)
    document.querySelector('#coms').append(commentClone);
     // 3. Customize
     commentClone.querySelector('p').innerText = commentData.message;
     commentClone.querySelector('img').src = "images/" + commentData.user + ".png";
} 
//remove the mother element
templateComment.remove();