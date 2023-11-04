

//Filtering
    //all
document.querySelector('#all').addEventListener('click', showAll)
        function showAll(){
            const allArticle = document.querySelectorAll('#cards article')
            for (const el of allArticle) {
                el.style.display="block";
            }
        }

    //best seller
document.querySelector('#best').addEventListener("click", showBest)
    function showBest(){
        const bestArticle = document.querySelectorAll("#cards article");
        for (const el of bestArticle) {
            const verifBest = el.querySelector('.seller');
            if(verifBest.style.display == "none"){
                el.style.display = "none";
            } else{
                el.style.display = "block";
            }
        }
    }
        //all
let x= 1;
document.querySelector('#name').addEventListener('click', function(){
    x = -x;
    showNameOrder();


})
function showNameOrder(){
    let array = Array.from(document.querySelectorAll('#cards article'));
    let arraySort = array.sort(function(a,b){
        let first = a.querySelector('h3').innerText;
        let second = b.querySelector('h3').innerText;
        if (first < second) {
            return -x;
        }else if(first > second){
            return x;
        }
    });

    for (const el of arraySort) {
        document.querySelector('#cards').append(el);
    }
}
//Price
document.querySelector('#price').addEventListener('click',  function(){
    x =-x
    showPriceOrder();
})
function showPriceOrder(){
    let array = Array.from(document.querySelectorAll('#cards article'));
    let arraySort = array.sort(function(a,b){
        let first = parseFloat(a.querySelector('h4').innerText.substring(1));
        let second = parseFloat(b.querySelector('h4').innerText.substring(1));
        if (first < second) {
            return -x;
        }else if(first > second){
            return x;
        }
    });
    
    for (const el of arraySort) {
        document.querySelector('#cards').append(el);
    }
}