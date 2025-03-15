document.addEventListener("DOMContentLoaded", function () {
  const footHTML = `
       <div class="footer-content">
           <div class="contact-info-footer">
               <p>📞 +37122558899</p>
               <p>📍 Rīga, Atmodas iela 88</p>
               <p>✉️ <a href="mailto:zoo@zoo.lv">zoo@zoo.lv</a></p>
           </div>
           <div class="social-icons-footer">
               <a href="#"><img src="img/whatsapp.svg" alt="WhatsApp"></a>
               <a href="#"><img src="img/linkedin.svg" alt="LinkedIn"></a>
               <a href="#"><img src="img/instagram.svg" alt="Instagram"></a>
               <a href="#"><img src="img/facebook.svg" alt="Facebook"></a>
           </div>
           <div class="footer-links">
               <a href="#">Biļetes</a>
               <a href="#">Ekskursijas</a>
               <a href="#">Jaunumi</a>
               <a href="#">Atsauksmes</a>
               <a href="#">Par mums</a>
           </div>
       </div>
       <div class="footer-bottom">
           <p>©2025 Copyright</p>
      </div>
	`;
  const menuHTML = `
          <div class="logo"></div>
          <div class="nav-buttons">
              <a href="index.html">Mājas</a>
              <a href="biletes.html">Biļetes</a>
              <a href="ekskursijas.html">Ekskursijas</a>
              <a href="jaunumi.html">Jaunumi</a>
              <a href="par_mums.html">Par Mums</a>
              <a href="404.html">Atsauksmes</a>
              <a href="grozs.html" class="basket-link">
                  <i class="fas fa-shopping-basket"></i>
                  <img src="img/Icon.svg" alt="basket">
                  <span class="cart-count" id="cart-count">0</span>
              </a>
          </div>
      `;
  document.getElementById("hederis").innerHTML = menuHTML;
  document.getElementById("futeris").innerHTML = footHTML;
});
