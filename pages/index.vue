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

    function toggleQuestions1() {
        const questions = document.getElementById('questions1');
        const toggleButton = document.getElementById('cliche1');
        if (questions1.style.display === 'none') {
            questions1.style.display = 'block';
        } else {
            questions1.style.display = 'none';
        }
    };
    function toggleQuestions2() {
        const questions = document.getElementById('questions2');
        const toggleButton = document.getElementById('cliche2');
        if (questions2.style.display === 'none') {
            questions2.style.display = 'block';
        } else {
            questions2.style.display = 'none';
        }
    };
    function toggleQuestions3() {
        const questions = document.getElementById('questions3');
        const toggleButton = document.getElementById('cliche3');
        if (questions3.style.display === 'none') {
            questions3.style.display = 'block';
        } else {
            questions3.style.display = 'none';
        }
    };
    function toggleQuestions4() {
        const questions = document.getElementById('questions4');
        const toggleButton = document.getElementById('cliche4');
        if (questions4.style.display === 'none') {
            questions4.style.display = 'block';
        } else {
            questions4.style.display = 'none';
        }
    };
    function toggleQuestions5() {
        const questions = document.getElementById('questions5');
        const toggleButton = document.getElementById('cliche5');
        if (questions5.style.display === 'none') {
            questions5.style.display = 'block';
        } else {
            questions5.style.display = 'none';
        }
    };
    function toggleQuestions6() {
        const questions = document.getElementById('questions6');
        const toggleButton = document.getElementById('cliche6');
        if (questions6.style.display === 'none') {
            questions6.style.display = 'block';
        } else {
            questions6.style.display = 'none';
        }
    };
    function toggleQuestions7() {
        const questions = document.getElementById('questions7');
        const toggleButton = document.getElementById('cliche7');
        if (questions7.style.display === 'none') {
            questions7.style.display = 'block';
        } else {
            questions7.style.display = 'none';
        }
    };

    function deplacerDiv() {
        const cliche = document.getElementById("cliche1");
        // Générer une direction aléatoire (angle en radians)
        const angle = Math.random() * Math.PI * 2;
        // Définir la vélocité (vitesse)
        const velocity = 250;
        // Calculer les composantes de la vélocité en x et y
        const velocityX = Math.cos(angle) * velocity;
        const velocityY = Math.sin(angle) * velocity;
        // Fonction pour mettre à jour la position de la div à intervalles réguliers
        function updatePosition() {
            const rect = cliche.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            // Déplacer la div en utilisant une transformation translate
            cliche.style.transform = `translate(${velocityX}px, ${velocityY}px)`;
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
                    <p id="PointsCount"><Cookies/></p>
                    <p id="PointsPerSecond">0 pts/s</p>
                </div>
                <div id="planets"><img id="planet" src="/Earth1.png"></div>
                <button id="toggleButton" @click="toggleQuestions()">Afficher/Cacher les questions</button>
                <button id="toggleButton" @click="deplacerDiv()">Go</button>
            </div>
            <div class="right">
                <div class="tabs">
                    <button id="tab1Button" @click="showTab1()">Afficher Tab 1</button>
                    <button id="tab2Button" @click="showTab2()">Afficher Tab 2</button>
                </div>
                <div class="tab1 tabContent active">
                    <Choices/>
                    <div class="upgrade">
                        <Upgrade/>
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
            <div id="questions1" style="display : none">
                <h3>Titre question</h3>
                <ul>
                    <li><div id="answer11">reponse 1</div></li>
                    <li><div id="answer12">reponse 2</div></li>
                    <li><div id="answer13">reponse 3</div></li>
                    <li><div id="answer14">reponse 4</div></li>
                </ul>
            </div>
            <div id="questions2" style="display : none">
                <h3>Titre question</h3>
                <ul>
                    <li><div id="answer21">reponse 1</div></li>
                    <li><div id="answer22">reponse 2</div></li>
                    <li><div id="answer23">reponse 3</div></li>
                    <li><div id="answer24">reponse 4</div></li>
                </ul>
            </div>
            <div id="questions3" style="display : none">
                <h3>Titre question</h3>
                <ul>
                    <li><div id="answer31">reponse 1</div></li>
                    <li><div id="answer32">reponse 2</div></li>
                    <li><div id="answer33">reponse 3</div></li>
                    <li><div id="answer34">reponse 4</div></li>
                </ul>
            </div>
            <div id="questions4" style="display : none">
                <h3>Titre question</h3>
                <ul>
                    <li><div id="answer41">reponse 1</div></li>
                    <li><div id="answer42">reponse 2</div></li>
                    <li><div id="answer43">reponse 3</div></li>
                    <li><div id="answer44">reponse 4</div></li>
                </ul>
            </div>
            <div id="questions5" style="display : none">
                <h3>Titre question</h3>
                <ul>
                    <li><div id="answer51">reponse 1</div></li>
                    <li><div id="answer52">reponse 2</div></li>
                    <li><div id="answer53">reponse 3</div></li>
                    <li><div id="answer54">reponse 4</div></li>
                </ul>
            </div>
            <div id="questions6" style="display : none">
                <h3>Titre question</h3>
                <ul>
                    <li><div id="answer61">reponse 1</div></li>
                    <li><div id="answer62">reponse 2</div></li>
                    <li><div id="answer63">reponse 3</div></li>
                    <li><div id="answer64">reponse 4</div></li>
                </ul>
            </div>
            <div id="questions7" style="display : none">
                <h3>Titre question</h3>
                <ul>
                    <li><div id="answer71">reponse 1</div></li>
                    <li><div id="answer72">reponse 2</div></li>
                    <li><div id="answer73">reponse 3</div></li>
                    <li><div id="answer74">reponse 4</div></li>
                </ul>
            </div>
            
        </div>
        <div class="cliche" id="cliche1" @click="toggleQuestions1()"></div>
        <div class="cliche" id="cliche2" @click="toggleQuestions2()"></div>
        <div class="cliche" id="cliche3" @click="toggleQuestions3()"></div>
        <div class="cliche" id="cliche4" @click="toggleQuestions4()"></div>
        <div class="cliche" id="cliche5" @click="toggleQuestions5()"></div>
        <div class="cliche" id="cliche6" @click="toggleQuestions6()"></div>
        <div class="cliche" id="cliche7" @click="toggleQuestions7()"></div>
    </div>
</template>

