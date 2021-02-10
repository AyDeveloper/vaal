
    function displayGift (giftItems) {

            let giftDisplay = giftItems.map(function(item){
                return `    <!-- gift section -->
                    <div class="giftCenter">
                        <button class="times">
                            <i class="fas fa-times"></i>
                        </button>
                            <h3>yay!!</h3>
                            <p>you might likely get this on Valentine</p>
                            <img src="${item.image}" alt="Car" class="giftImage">
                            <p class="name">$${item.itemName}</p>
                            <button class="pick"> Pick </button>
                            <div class="remarks">
                                    <p>with love from</p>
                                    <div class="logo remarksLogo">
                                        <h3>Vaal</h3>
                                        <i class="fas fa-heart"></i>
                                    </div>
                            </div>
                     </div>`
            })
            giftDisplay = giftDisplay.join(" ");
            giftSection.innerHTML = giftDisplay;
        
            
       // const giftCenter = document.querySelectorAll(".giftCenter");
        //giftCenter.forEach(function(gifts, index) {
           // gifts.style.left = `${index * 100}%`;
          //  gifts.style.marginLeft = "6%";
       // }); 
        

      /*  if (giftCenter.length > 0) {
            const random = Math.floor(Math.random() * giftCenter.length);
            console.log(random);
            giftCenter.forEach(function (gifts, index) {
                gifts.style.transform = `translateX(-${index * 250}%)`;
              });
        }
        */
    }
   
})



