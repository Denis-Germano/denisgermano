document.addEventListener("DOMContentLoaded", function() {
    // Exibe a seção de boas-vindas inicialmente
    document.getElementById("welcome-section").style.display = "flex";
    document.getElementById("main-content").style.display = "none";
});

function showTab(tabName) {
    // Esconde a seção de boas-vindas e exibe o conteúdo principal
    document.getElementById("welcome-section").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    // Esconde todas as abas
    const tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // Exibe a aba selecionada
    document.getElementById(tabName).style.display = "block";
}

function showWriteups(platform) {
    document.getElementById("welcome-section").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    // Limpa o conteúdo anterior
    document.getElementById("writeup-container").innerHTML = "";

    let content = '';

    if (platform === 'hackthebox') {
        content = `
            <div class="writeup-item">
                <a href="writeups/hackthebox-writeup1.html">
                    <img src="img/writeup1.jpg" alt="HackTheBox Writeup 1" class="writeup-cover">
                    <h3>HackTheBox Challenge 1</h3>
                    <p>Breve descrição do desafio HackTheBox 1.</p>
                </a>
            </div>
            <div class="writeup-item">
                <a href="writeups/hackthebox-writeup2.html">
                    <img src="img/writeup2.jpg" alt="HackTheBox Writeup 2" class="writeup-cover">
                    <h3>HackTheBox Challenge 2</h3>
                    <p>Breve descrição do desafio HackTheBox 2.</p>
                </a>
            </div>`;
    } else if (platform === 'tryhackme') {
        content = `
            <div class="writeup-item">
                <a href="writeups/tryhackme-writeup1.html">
                    <img src="img/writeup3.jpg" alt="TryHackMe Writeup 1" class="writeup-cover">
                    <h3>TryHackMe Challenge 1</h3>
                    <p>Breve descrição do desafio TryHackMe 1.</p>
                </a>
            </div>
            <div class="writeup-item">
                <a href="writeups/tryhackme-writeup2.html">
                    <img src="img/writeup4.jpg" alt="TryHackMe Writeup 2" class="writeup-cover">
                    <h3>TryHackMe Challenge 2</h3>
                    <p>Breve descrição do desafio TryHackMe 2.</p>
                </a>
            </div>`;
    } else if (platform === 'vulnhub') {
        content = `
            <div class="writeup-item">
                <a href="writeups/vulnhub-writeup1.html">
                    <img src="img/writeup5.jpg" alt="VulnHub Writeup 1" class="writeup-cover">
                    <h3>VulnHub Challenge 1</h3>
                    <p>Breve descrição do desafio VulnHub 1.</p>
                </a>
            </div>
            <div class="writeup-item">
                <a href="writeups/vulnhub-writeup2.html">
                    <img src="img/writeup6.jpg" alt="VulnHub Writeup 2" class="writeup-cover">
                    <h3>VulnHub Challenge 2</h3>
                    <p>Breve descrição do desafio VulnHub 2.</p>
                </a>
            </div>`;
    }

    document.getElementById("writeup-container").innerHTML = content;
    document.getElementById("writeups").style.display = "block";
}
