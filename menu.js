document.addEventListener("DOMContentLoaded", function () {
    const footHTML = `© 2025 Zoo`;
    const menuHTML = `
        <div class="logo"></div>
        <div class="nav-buttons">
            <a href="index.html">Mājas</a>
            <a href="biletes.html">Biļetes</a>
            <a href="grozs.html">Ekskursijas</a>
            <a href="jaunumi.html">Jaunumi</a>
            <a href="par_mums.html">Par Mums</a>
            <a href="404.html">Atsauksmes</a>
        </div>
    `;
    document.getElementById("hederis").innerHTML = menuHTML;
    document.getElementById("futeris").innerHTML = footHTML;
});
