<script setup>
    // Ajout d'un gestionnaire d'événement pour le bouton Tab 1
    function showTab1(){
        var tab1 = document.querySelector('.tab1');
        var tab2 = document.querySelector('.tab2');
        tab1.classList.add('active');
        tab2.classList.remove('active');
    };

    // Ajout d'un gestionnaire d'événement pour le bouton Tab 2
    function showTab2(){
        var tab1 = document.querySelector('.tab1');
        var tab2 = document.querySelector('.tab2');
        tab2.classList.add('active');
        tab1.classList.remove('active');
    }

    function toggleQuestions() {
        const questions = document.getElementById('questions');
        const toggleButton = document.getElementById('toggleButton');
        if (questions.style.display === 'none') {
            questions.style.display = 'block';
            toggleButton.textContent = 'Cacher les questions';
        } else {
            questions.style.display = 'none';
            toggleButton.textContent = 'Afficher les questions';
        }
    };

    function deplacerDiv() {
        const cliche1 = document.getElementById('cliche1');
        // Générer une direction aléatoire (angle en radians)
        const angle = Math.random() * Math.PI * 2;
        // Définir la vélocité (vitesse)
        const velocity = 250;
        // Calculer les composantes de la vélocité en x et y
        const velocityX = Math.cos(angle) * velocity;
        const velocityY = Math.sin(angle) * velocity;
        // Fonction pour mettre à jour la position de la div à intervalles réguliers
        function updatePosition() {
            const rect = cliche1.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            // Déplacer la div en utilisant une transformation translate
            cliche1.style.transform = `translate(${velocityX}px, ${velocityY}px)`;
        }
        const intervalId = setInterval(updatePosition, 1000 / 60);
        setTimeout(() => {
            clearInterval(intervalId);
        }, 300);
    }
</script>

<template>
    <div>
        
        <div class="game">
            <div class="left">
                <div id="money">
                    <p id="PointsCount">0 Ecopoints</p>
                    <p id="PointsPerSecond">0 pts/s</p>
                </div>
                <div class="planet"></div>
                <button id="toggleButton" @click="toggleQuestions()">Afficher/Cacher les questions</button>
                <button id="toggleButton" @click="deplacerDiv()">Go</button>
            </div>
            <div class="right">
                <div class="tabs">
                    <button id="tab1Button" @click="showTab1()">Afficher Tab 1</button>
                    <button id="tab2Button" @click="showTab2()">Afficher Tab 2</button>
                </div>
                <div class="tab1 tabContent active">
                    <div class="choices">
                        <ul id="countChoice">
                            <li><button>MAX</button></li>
                            <li><button>x1</button></li>
                            <li><button>x10</button></li>
                            <li><button>x100</button></li>
                            <li><button>x1000</button></li>
                        </ul>
                    </div>
                    <div class="upgrade">
                        <ul id="upgrade">
                            <li><button class="upgrade-button"><div class="upgrade-image"></div>Arbre<div class="price">1$</div></button></li>
                            <li><button class="upgrade-button"><div class="upgrade-image"></div>Arbre<div class="price">10$</div></button></li>
                            <li><button class="upgrade-button"><div class="upgrade-image"></div>Arbre<div class="price">100$</div></button></li>
                            <li><button class="upgrade-button"><div class="upgrade-image"></div>Arbre<div class="price">1000$</div></button></li>
                            <li><button class="upgrade-button"><div class="upgrade-image"></div>Arbre<div class="price">10000$</div></button></li>
                            <li><button class="upgrade-button"><div class="upgrade-image"></div>Arbre<div class="price">100000$</div></button></li>
                        </ul>
                    </div>
                </div>
                <div class="tab2 tabContent">
                    <ul>
                        <li>
                            <h3>Cliché 1</h3>
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <h3>Cliché 2</h3>
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <h3>Cliché 3</h3>
                            <p>Lorem ipsum</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="questions" style="display : none">
                <h3>Titre question</h3>
                <ul>
                    <li><div id="answer1">reponse 1</div></li>
                    <li><div id="answer2">reponse 2</div></li>
                    <li><div id="answer3">reponse 3</div></li>
                    <li><div id="answer4">reponse 4</div></li>
                </ul>
            </div>
            
        </div>
        <div class="cliche" id="cliche1"></div>
        <div class="cliche" id="cliche2"></div>
        <div class="cliche" id="cliche3"></div>
        <div class="cliche" id="cliche4"></div>
        <div class="cliche" id="cliche5"></div>
        <div class="cliche" id="cliche6"></div>
    </div>
</template>

