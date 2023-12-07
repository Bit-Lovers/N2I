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
</script>

<template>
    <div>
        <header>
            <div>
                <a href="options">
                    <IconsOptions/>
                </a>
                <a href="informations">
                    <IconsInformations />
                </a>
            </div>
            <p>EcoClicker</p>
            <a href="documentation">
                Documentation
            </a>
        </header>
        <div class="game">
            <div class="left">
                <div id="money">
                    <p id="PointsCount">0 Ecopoints</p>
                    <p id="PointsPerSecond">0 pts/s</p>
                </div>
                <div class="planet">
                    <button id="planet"></button>
                </div>
                <button id="toggleButton" @click="toggleQuestions()">Afficher/Cacher les questions</button>
            </div>
            <div class="right">
                <div class="tabs">
                    <button id="tab1Button" @click="showTab1()">Afficher Tab 1</button>
                    <button id="tab2Button" @click="showTab2()">Afficher Tab 2</button>
                </div>
                <div class="tab1 tabContent active">
                    <div class="choices">
                        <ul id="countChoice">
                            <li>MAX</li>
                            <li>*1</li>
                            <li>*10</li>
                        </ul>
                    </div>
                    <div class="upgrade">
                        <ul id="upgrade">
                            <li>Arbres</li>
                            <li>MArche à pied</li>
                            <li>Velo</li>
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
    </div>

    
</template>

