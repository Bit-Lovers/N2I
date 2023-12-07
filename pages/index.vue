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
            </div>
            <div class="right">
                <div class="tab1">
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
                <div class="tab2">
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
            <div class="questions">
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