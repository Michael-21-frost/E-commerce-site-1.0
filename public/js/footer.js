function createFooter(){
    let footer=document.querySelector('footer');
    footer.innerHTML=`
    <div class="footer-content">
            <h1>Elielonline Store</h1>
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title"> Music</li>
                    <li><a href="#music" class="footer-link"> O Africa</a></li>
                    <li><a href="#music" class="footer-link"> Friends</a></li>
                    <li><a href="#music" class="footer-link"> Ohue</a></li>
                    <li><a href="#music" class="footer-link"> Monitoring spirit</a></li>
                    <li><a href="#music" class="footer-link"> 1897</a></li>
                                  </ul>
                <ul class="category">
                    <li class="category-title"> Books</li>
                    <li><a href="#books" class="footer-link"> Getting into Nollywood professionally</a></li>
                    <li><a href="#books" class="footer-link"> silent talks</a></li>
                    <li><a href="#books" class="footer-link"> no baby food</a></li>
                    <li><a href="#books" class="footer-link"> the psychology of acting</a></li>
                    
                </ul>
            </div>
           

        </div>
        <hr>
        <p class="footer-title">About Store</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non quibusdam consectetur in, eveniet ipsam perspiciatis similique unde ab harum voluptatibus animi nam nihil? Consectetur aperiam placeat voluptatibus repellat id.dihidhidgdiogjdogjdogjdogjopdgodngodngodogjdogodhgopdhgiopdhgopjh</p>
        <p class="info">support and customer service mail - <a href="mailto:elielonlinestore@gmail.com?subject={subject}&body={content}">elielonlinestore@gmail.com</a>
        </p>
        <p class="info"> Telephone: +2348160816821,  +2348033742167</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link"> terms & services</a>
                <a href="#" class="social-link"> privacy page</a> 
        
            </div>
         
            <div class="social-icons">
                <a href="#" class="social-link"><i class="fa fa-facebook"></i></a>
                <a href="#" class="social-link"> <i class="fa fa-instagram"></i></a>
                <a href="#" class="social-link"><i class="fa fa-twitter"></i></a>
            </div>
        </div>
        <p class="footer-credit"> The best entertainment store at your service. <br>
            <span>Designed: <a href="https://michael-21-frost.github.io/My-portfolio/" target="_parent" class="ref">Michael Otote</a></span>
        </p>
    
    
    `;
}
createFooter();