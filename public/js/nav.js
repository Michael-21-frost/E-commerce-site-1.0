 function createNav() {
    const nav =document.querySelector('.navbar');
    nav.innerHTML =`
    <div class="nav">
    <img src="img/icon.jpg" class="icon-img" alt="">
            <h1>Elielonline Store</h1>
            <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search Books, Music, etc">
                <button class="btn">Search</button>
            </div>
            <a href="#"><img src="img/user.png" alt="logo"></a>
            <a href="#"><img src="img/cart.png" alt="logo"></a>
            
            </div>
        </div>
        <ul class="links-container">
                    <li class="link-item"><a href="index.html" class="link">Home</a> </li>
                    <li class="link-item"><a href="#books" class="link">Books</a> </li>
                        <li class="link-item"><a href="#music" class="link">Music</a> </li>
                            <li class="link-item"><a href="#store" class="link">Store</a> </li>
                            </ul>
    `;
}
createNav();