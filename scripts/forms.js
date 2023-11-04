

        const form = document.querySelector('form');
        const commentInput = document.querySelector('#comment');
        form.addEventListener('submit', verifyInputs);
    
        function verifyInputs(event){
            event.preventDefault(); //block form submission
            //Name
            const commentValue = commentInput.value;
            const lengthValue = commentValue.length >=4;
            if(lengthValue ){
            commentInput.style.borderColor = "green";
            const mycomment = document.querySelector('#coms li');
            const commentClone = mycomment.cloneNode(true);
            document.querySelector('#coms').append(commentClone);
                // 3. Customize
            commentClone.querySelector('p').innerText =commentValue
            commentClone.querySelector('img').src = "images/friend4.png";
            document.querySelector('form').style.display = "none";
            document.querySelector('#alarm').innerText = "already posted or else, I will se";
            }else{
                commentInput.style.borderColor = "red";
            }
          }