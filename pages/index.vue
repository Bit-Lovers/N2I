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


    function deplacerDiv1() {
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
    function deplacerDiv2() {
        const cliche = document.getElementById("cliche2");
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
    function deplacerDiv3() {
        const cliche = document.getElementById("cliche3");
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
    function deplacerDiv4() {
        const cliche = document.getElementById("cliche4");
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
    function deplacerDiv5() {
        const cliche = document.getElementById("cliche5");
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
    function deplacerDiv6() {
        const cliche = document.getElementById("cliche6");
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

    function changeBackgroundColor1() {
        console.log("test");
        const answer1 = document.getElementById("answer12");
        answer1.style.backgroundColor = "green"
        const answer2 = document.getElementById("answer11");
        answer2.style.display = "none"
        const answer3 = document.getElementById("answer13");
        answer3.style.display = "none"
        const answer4 = document.getElementById("answer14");
        answer4.style.display = "block"
    }

    function changeBackgroundColor2() {
        console.log("test");
        const answer1 = document.getElementById("answer21");
        answer1.style.backgroundColor = "green"
        const answer2 = document.getElementById("answer22");
        answer2.style.display = "none"
        const answer3 = document.getElementById("answer23");
        answer3.style.display = "none"
        const answer4 = document.getElementById("answer24");
        answer4.style.display = "block"
    }

    function changeBackgroundColor3() {
        console.log("test");
        const answer1 = document.getElementById("answer32");
        answer1.style.backgroundColor = "green"
        const answer2 = document.getElementById("answer33");
        answer2.style.display = "none"
        const answer3 = document.getElementById("answer31");
        answer3.style.display = "none"
        const answer4 = document.getElementById("answer34");
        answer4.style.display = "block"
    }

    function changeBackgroundColor4() {
        console.log("test");
        const answer1 = document.getElementById("answer43");
        answer1.style.backgroundColor = "green"
        const answer2 = document.getElementById("answer42");
        answer2.style.display = "none"
        const answer3 = document.getElementById("answer41");
        answer3.style.display = "none"
        const answer4 = document.getElementById("answer44");
        answer4.style.display = "block"
    }

    function changeBackgroundColor5() {
        console.log("test");
        const answer1 = document.getElementById("answer51");
        answer1.style.backgroundColor = "green"
        const answer2 = document.getElementById("answer52");
        answer2.style.display = "none"
        const answer3 = document.getElementById("answer53");
        answer3.style.display = "none"
        const answer4 = document.getElementById("answer54");
        answer4.style.display = "block"
    }

    function changeBackgroundColor6() {
        console.log("test");
        const answer1 = document.getElementById("answer63");
        answer1.style.backgroundColor = "green"
        const answer2 = document.getElementById("answer62");
        answer2.style.display = "none"
        const answer3 = document.getElementById("answer61");
        answer3.style.display = "none"
        const answer4 = document.getElementById("answer64");
        answer4.style.display = "block"
    }

    function hide2(){
        const answer = document.getElementById('questions2')
        answer.style.display = none;
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
                <button id="toggleButton" @click="deplacerDiv2()">Go</button>
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
            <div class="questions" id="questions1" style="display : none" @click=changeBackgroundColor1()>
                <h3>1. Le changement climatique n'est qu'un cycle naturel de la Terre</h3>
                <ul>
                    <li><div id="answer11"><b>a)</b> Il y a eu beaucoup de changement climatique par le passé, le changement climatique constaté actuellement est naturel</div></li>
                    <li><div id="answer12"><b>b)</b> La température de l’atmosphère terrestre a beaucoup évolué sur longue une échelle de temps, mais les activités de l’homme sont responsable d’un changement climatique beaucoup plus rapide que les précédents</div></li>
                    <li><div id="answer13"><b>c)</b> Les changements climatiques naturels n’existent pas, ce sont les activités humaines qui en sont responsable</div></li>
                    <li><div id="answer14" style="display : none" >Il y a eu des changement climatique par le passé, qu’on est capable de retracer grâce aux carottes de glace réalisé par les scientifiques (http://www2.cnrs.fr/sites/communique/fichier/fiche_epica_last.pdf) mais le changement climatique d’aujourd’hui est </div></li>
                </ul>
            </div>
            <div class="questions" id="questions2" style="display : none" @click=changeBackgroundColor2()>
                <h3>2. La France émet seulement 1% du CO2 mondial, c'est à la Chine et aux États-Unis de réduire leurs émissions</h3>
                <ul>
                    <li><div id="answer21"><b>a)</b>Ce chiffre est vrai mais masque la réelle responsabilité de la France dans le changement climatique</div></li>
                    <li><div id="answer22"><b>b)</b>Ce chiffre est faux et relève d’une erreur d’un seul rapport scientifique</div></li>
                    <li><div id="answer23"><b>c)</b>C’est Vrai</div></li>
                    <li><div id="answer24" style="display : none" >Le Haut Conseil du climat explique qu’il faut privilégier les chiffre donné t éq co2/h/an car ils exprime de manière plus juste la responsabilité dans le changement climatique des pays. Tout le monde doit contribuer à la réduction de GES 
      HCC: https://www.hautconseilclimat.fr/wp-content/uploads/2020/10/hcc_rapport_empreinte-carbone.pdf#%5B%7B%22num%22%3A52%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22FitR%22%7D%2C-421%2C-1%2C1017%2C843%5D</div></li>
                </ul>
            </div>
            <div class="questions" id="questions3" style="display : none" @click=changeBackgroundColor3()>
                <h3>3. Réchauffement climatique ? Alors qu'il fait -5 degrés dehors ?</h3>
                <ul>
                    <li><div id="answer31"><b>a)</b> Votez Trump</div></li>
                    <li><div id="answer32"><b>b)</b> Il ne faut pas confondre Climat et météo</div></li>
                    <li><div id="answer33"><b>c)</b> Oui mais cet été il a fait super chaud c’est bien la preuve du changement climatique</div></li>
                    <li><div id="answer34" style="display : none">Le Climat est l’ ensemble des phénomènes météorologiques qui caractérisent l'état moyen de l'atmosphère en un lieu donné. (Larousse)
Donc pour parler de changement climatique il faut considérer un plus grand échantillons de données météorologiques que celle du jour même c’est pour cela que le GIEC publie des données à partir de 1850 : https://report.ipcc.ch/ar6syr/pdf/IPCC_AR6_SYR_LongerReport.pdf#%5B%7B%22num%22%3A18%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C569%2C0%5D</div></li>
                </ul>
            </div>
            <div class="questions" id="questions4" style="display : none" @click=changeBackgroundColor4()>
                <h3>4. Cela fait 30 ans qu'on nous dit que le pétrole va s'épuiser ! Il n'en est rien, on en aura toujours assez</h3>
                <ul>
                    <li><div id="answer41"><b>a)</b> Les nouvelle technologies permettent d’exploiter très facilement le pétrole de schiste présent en très grande quantité autour du globe</div></li>
                    <li><div id="answer42"><b>b)</b> Les lois du marché mondiale va naturellement faire augmenter le prix du pétrole et faire donc baisser les consommations</div></li>
                    <li><div id="answer43"><b>c)</b>  Produire davantage de pétrole n’est pas une solution</div></li>
                    <li><div id="answer44" style="display : none">La combustion des énergie fossiles représentent 75 % des émissions de CO2, sachant que les émissions mondiale de gaz à effet de serre doivent être réduite de 43 % d’après le Giec	https://www.ouest-france.fr/environnement/rechauffement-climatique/le-giec-a-publie-le-resume-de-ses-six-derniers-rapports-voici-ce-quil-faut-en-retenir-730e4174-c5c8-11ed-bd88-a48dbce3e894
Il serait donc contre productif de tenter de produire davantage de pétrole au lieu d’essayer de réguler la consommation 
A cause de la dépendance en pétrole de l’économie : il n’y pas de lien entre le prix du pétrole et son volume, on ne peut pas prédire le prix du pétrole en fonction de sa disponibilité. https://jancovici.com/publications-et-co/articles-de-presse/le-petrole-est-il-elastique/</div></li>
                </ul>
            </div>
            <div class="questions" id="questions5" style="display : none" @click=changeBackgroundColor5()>
                <h3>5. Le changement climatique provoque la fonte des glace qui provoque une montée des eaux</h3>
                <ul>
                    <li><div id="answer51"><b>a)</b>La montée des eau est principalement due à la dilatation thermique</div></li>
                    <li><div id="answer52"><b>b)</b>La montée des eaux est principalement due à la fonte de la banquise</div></li>
                    <li><div id="answer53"><b>c)</b>La montée des eaux est principalement due à la fonte des glace continentales</div></li>
                    <li><div id="answer54" style="display : none">La fonte de la banquise ne fait pas monter le niveau de la mer car le volume immergé de la banquise est égale au volume totale de l’eau de la banquise sous forme liquide.
La monté des eaux lié à la fonte de l’antarctique est négligeable face à la dilatation thermique 
https://www.pnas.org/doi/full/10.1073/pnas.1519132113</div></li>
                </ul>
            </div>
            <div class="questions" id="questions6" style="display : none" @click=changeBackgroundColor6()>
                <h3>6. Les conséquences du changement climatiques ne concernent que nos enfants et petits enfants</h3>
                <ul>
                    <li><div id="answer61"><b>a)</b>Les conséquences du changements climatiques sont déjà visible aujourd’hui mais ne sont pas encore trop grave</div></li>
                    <li><div id="answer62"><b>b)</b>l’Europe ne subit pas encore les conséquences du changement climatique c’est l’Afrique qui est principalement concernée</div></li>
                    <li><div id="answer63"><b>c)</b>La France se réchauffe plus vite que la moyenne planétaire et subie déjà des phénomène climatiques exceptionnel qui perturbe l ‘économie</div></li>
                    <li><div id="answer64" style="display : none">Le  GIEC avertis sur de nombreux risques à long terme mais aussi à court terme du changement climatique comme une perte importante de biodiversité, une hausse de la mortalité ainsi qu’un multiplication des phénomène métrologique extrême 
https://report.ipcc.ch/ar6syr/pdf/IPCC_AR6_SYR_LongerReport.pdf#%5B%7B%22num%22%3A108%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54%2C620%2C0%5D</div></li>
                </ul>
            </div>
            <div id="reponse1" style="display : none">La température de l’atmosphère terrestre a beaucoup évolué sur longue une échelle de temps, mais les activités de l’homme sont responsable d’un changement climatique beaucoup plus rapide que les précédents.</div>
            <div id="reponse2" style="display : none">Ce chiffre est vrai mais masque la réelle responsabilité de la France dans le changement climatique.</div>
            <div id="reponse3" style="display : none">Il ne faut pas confondre Climat et météo</div>
            <div id="reponse4" style="display : none">Produire davantage de pétrole n’est pas une solution</div>
            <div id="reponse5" style="display : none">La montée des eau est principalement due à la dilatation thermique</div>
            <div id="reponse6" style="display : none">La France se réchauffe plus vite que la moyenne planétaire et subie déjà des phénomène climatiques exceptionnel qui perturbe l ‘économie et tende à se multiplier </div>
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

