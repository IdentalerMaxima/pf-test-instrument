class AttitudeIndicator extends GlassCockpitParent {
    constructor() {
        super();
    }

    get templateID() {
        return "PF-TEST-ATTITUDE";
    }

    get isInteractive() {
        return true;
    }

    onInteractionEvent(args) {
        console.log("click");
    }

    Init() {
        super.Init();
    }

    connectedCallback() {
        super.connectedCallback();

        this.elemPanel = document.createElement("div");
        this.elemPanel.id = "attitude-indicator-component";
        this.elemPanel.classList.add("page");

        this.elemPanel.setAttribute("active", "on");

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", "attitude-indicator-svg");
        svg.setAttribute("viewBox", "0 0 100 100");

        // Background
        const backgroundGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        backgroundGroup.setAttribute("id", "background");

        const sky = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        sky.setAttribute("x", "0");
        sky.setAttribute("y", "0");
        sky.setAttribute("width", "100");
        sky.setAttribute("height", "50");
        sky.setAttribute("fill", "#60a1fa");
        backgroundGroup.appendChild(sky);

        const ground = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        ground.setAttribute("x", "0");
        ground.setAttribute("y", "50");
        ground.setAttribute("width", "100");
        ground.setAttribute("height", "50");
        ground.setAttribute("fill", "#83623d");
        backgroundGroup.appendChild(ground);

        const horizonLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        horizonLine.setAttribute("x1", "0");
        horizonLine.setAttribute("x2", "100");
        horizonLine.setAttribute("y1", "50");
        horizonLine.setAttribute("y2", "50");
        horizonLine.setAttribute("stroke", "white");
        horizonLine.setAttribute("stroke-width", "0.5");
        backgroundGroup.appendChild(horizonLine);

        svg.appendChild(backgroundGroup);

        const artificialHorizonGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        artificialHorizonGroup.setAttribute("id", "artificial-horizon");

        const yellowSquare = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        yellowSquare.setAttribute("x", "49.5");
        yellowSquare.setAttribute("y", "49.7");
        yellowSquare.setAttribute("width", "1");
        yellowSquare.setAttribute("height", "1");
        yellowSquare.setAttribute("fill", "yellow");
        yellowSquare.setAttribute("stroke", "black");
        yellowSquare.setAttribute("stroke-width", "0.1");
        artificialHorizonGroup.appendChild(yellowSquare);

        const leftLShape = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        leftLShape.setAttribute("points", "20,49.7 41.5,49.7 41.5,51.2 40.9,51.2 40.9,50.3 20,50.3");
        leftLShape.setAttribute("fill", "yellow");
        leftLShape.setAttribute("stroke", "black");
        leftLShape.setAttribute("stroke-width", "0.1");
        artificialHorizonGroup.appendChild(leftLShape);

        const rightLShape = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        rightLShape.setAttribute("points", "58.5,49.7 80,49.7 80,50.3 59.1,50.3 59.1,51.2 58.5,51.2");
        rightLShape.setAttribute("fill", "yellow");
        rightLShape.setAttribute("stroke", "black");
        rightLShape.setAttribute("stroke-width", "0.1");
        artificialHorizonGroup.appendChild(rightLShape);

        svg.appendChild(artificialHorizonGroup);

        const arcGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        arcGroup.setAttribute("id", "arc");

        const arcPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        arcPath.setAttribute("d", "M 5,50 A 45,45 0 0,1 95,50");
        arcPath.setAttribute("fill", "none");
        arcPath.setAttribute("stroke", "white");
        arcPath.setAttribute("stroke-width", "0.5");
        arcGroup.appendChild(arcPath);
        svg.appendChild(arcGroup);

        const arcMarkingsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        arcMarkingsGroup.setAttribute("id", "arc-markings");

        const markingLines = [
            { rotation: -30 },
            { rotation: 30 },
            { rotation: -60 },
            { rotation: 60 },
        ];

        markingLines.forEach(({ rotation }) => {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", "50");
            line.setAttribute("y1", "5");
            line.setAttribute("x2", "50");
            line.setAttribute("y2", "-1");
            line.setAttribute("stroke", "white");
            line.setAttribute("stroke-width", "0.5");
            line.setAttribute("transform", `rotate(${rotation}, 50, 50)`);
            arcMarkingsGroup.appendChild(line);
        });

        svg.appendChild(arcMarkingsGroup);



























        this.elemPanel.appendChild(svg);




        // this.elemPanel.innerHTML =

        //     `<svg id="attitude-indicator-svg" viewBox="0 0 100 100">
        //         <!-- Background -->
        //             <g id="background">
        //                 <!-- Sky -->
        //                 <rect x="0" y="0" width="100" height="50" fill="#60a1fa" />
        //                 <!-- Ground -->
        //                 <rect x="0" y="50" width="100" height="50" fill="#83623d" />
        //                 <!-- Horizon Line -->
        //                 <line x1="0" x2="100" y1="50" y2="50" stroke="white" stroke-width="0.5"/>
        //             </g>

        //         <!-- Artificial Horizon -->
        //             <g id="artificial-horizon">
        //                 <!-- Yellow square in the center -->                    
        //                 <rect x="49.5" y="49.7" width="1" height="1" fill="yellow" stroke="black" stroke-width="0.1" />

        //                 <!--L shape left of the square -->
        //                 <polygon points="20,49.7 41.5,49.7 41.5,51.2 40.9,51.2 40.9,50.3 20,50.3   " fill="yellow" stroke="black" stroke-width="0.1" />

        //                 <!--L shape right of the square -->
        //                 <polygon points="58.5,49.7 80,49.7 80,50.3 59.1,50.3 59.1,51.2 58.5,51.2" fill="yellow" stroke="black" stroke-width="0.1"  />

        //             </g>


        //         <!-- Arc -->
        //             <g id="arc">
        //                 <path d="M 5,50 A 45,45 0 0,1 95,50" fill="none" stroke="white" stroke-width="0.5"/>
        //             </g>

        //         <!-- Arc Markings  -->
        //             <g id="arc-markings">
        //                 <line x1="50" y1="5" x2="50" y2="-1" stroke="white" stroke-width="0.5" transform="rotate(-30, 50, 50)"/>
        //                 <line x1="50" y1="5" x2="50" y2="-1" stroke="white" stroke-width="0.5" transform="rotate(30, 50, 50)"/>
        //                 <line x1="50" y1="5" x2="50" y2="-1" stroke="white" stroke-width="0.5" transform="rotate(-60, 50, 50)"/>
        //                 <line x1="50" y1="5" x2="50" y2="-1" stroke="white" stroke-width="0.5" transform="rotate(60, 50, 50)"/>

        //                 <!-- White Triangle  -->
        //                 <polygon points="50,4.8 48,1 52,1" fill="white" />

        //                 <!-- Bank Angle  -->
        //                 <polygon points="50,5.5 48,9 52,9" fill="yellow" stroke="black" stroke-width="0.2"/>

        //                 <!-- Slip Indicator -->
        //                 <rect x="48" y="9.4" width="4" height="0.4" fill="yellow" stroke="black" stroke-width="0.2" transform="rotate(35, 50, 50)" />

        //             </g>

        //         <!-- Yellow  -->

        //         <!-- Pitch Tape -->
        //             <g id="pitch-tape">

        //                 <!-- Upper Lines -->
        //                     <line x1="42" x2="58" y1="48.25" y2="48.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="47.75" fill="white" font-size="3">10</text>
        //                     <line x1="37" x2="63" y1="46.75" y2="46.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="47.75" fill="white" font-size="3">10</text>

        //                     <line x1="42" x2="58" y1="45.25" y2="45.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="44.75" fill="white" font-size="3">20</text>
        //                     <line x1="37" x2="63" y1="43.75" y2="43.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="44.75" fill="white" font-size="3">20</text>

        //                     <line x1="42" x2="58" y1="42.25" y2="42.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="41.75" fill="white" font-size="3">30</text>
        //                     <line x1="37" x2="63" y1="40.75" y2="40.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="41.75" fill="white" font-size="3">30</text>

        //                     <line x1="42" x2="58" y1="39.25" y2="39.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="38.75" fill="white" font-size="3">40</text>
        //                     <line x1="37" x2="63" y1="37.75" y2="37.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="38.75" fill="white" font-size="3">40</text>

        //                     <line x1="42" x2="58" y1="36.25" y2="36.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="35.75" fill="white" font-size="3">50</text>
        //                     <line x1="37" x2="63" y1="34.75" y2="34.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="35.75" fill="white" font-size="3">50</text>

        //                     <line x1="42" x2="58" y1="33.25" y2="33.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="32.75" fill="white" font-size="3">60</text>
        //                     <line x1="37" x2="63" y1="31.75" y2="31.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="32.75" fill="white" font-size="3">60</text>

        //                     <line x1="42" x2="58" y1="30.25" y2="30.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="29.75" fill="white" font-size="3">70</text>
        //                     <line x1="37" x2="63" y1="28.75" y2="28.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="29.75" fill="white" font-size="3">70</text>

        //                     <line x1="42" x2="58" y1="27.25" y2="27.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="26.75" fill="white" font-size="3">80</text>
        //                     <line x1="37" x2="63" y1="25.75" y2="25.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="26.75" fill="white" font-size="3">80</text>

        //                     <line x1="42" x2="58" y1="24.25" y2="24.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="31" y="23.75" fill="white" font-size="3">90</text>
        //                     <line x1="37" x2="63" y1="22.75" y2="22.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="23.75" fill="white" font-size="3">90</text>

        //                     <line x1="42" x2="58" y1="21.25" y2="21.25" stroke="white" stroke-width="0.5"</>

        //                     <text x="29.5" y="20.75" fill="white" font-size="3">100</text>
        //                     <line x1="37" x2="63" y1="19.75" y2="19.75" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="20.75" fill="white" font-size="3">100</text>


        //                 <!-- Lower Lines -->

        //                     <line x1="42" x2="58" y1="51.75" y2="51.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="54" fill="white" font-size="3">-10</text>
        //                     <line x1="37" x2="63" y1="53.25" y2="53.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="54" fill="white" font-size="3">-10</text>

        //                     <line x1="42" x2="58" y1="54.75" y2="54.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="57" fill="white" font-size="3">-20</text>
        //                     <line x1="37" x2="63" y1="56.25" y2="56.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="57" fill="white" font-size="3">-20</text>

        //                     <line x1="42" x2="58" y1="57.75" y2="57.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="60" fill="white" font-size="3">-30</text>
        //                     <line x1="37" x2="63" y1="59.25" y2="59.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="60" fill="white" font-size="3">-30</text>

        //                     <line x1="42" x2="58" y1="60.75" y2="60.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="63" fill="white" font-size="3">-40</text>
        //                     <line x1="37" x2="63" y1="62.25" y2="62.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="63" fill="white" font-size="3">-40</text>

        //                     <line x1="42" x2="58" y1="63.75" y2="63.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="66" fill="white" font-size="3">-50</text>
        //                     <line x1="37" x2="63" y1="65.25" y2="65.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="66" fill="white" font-size="3">-50</text>

        //                     <line x1="42" x2="58" y1="66.75" y2="66.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="69" fill="white" font-size="3">-60</text>
        //                     <line x1="37" x2="63" y1="68.25" y2="68.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="69" fill="white" font-size="3">-60</text>

        //                     <line x1="42" x2="58" y1="69.75" y2="69.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="72" fill="white" font-size="3">-70</text>
        //                     <line x1="37" x2="63" y1="71.25" y2="71.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="72" fill="white" font-size="3">-70</text>

        //                     <line x1="42" x2="58" y1="72.75" y2="72.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="75" fill="white" font-size="3">-80</text>
        //                     <line x1="37" x2="63" y1="74.25" y2="74.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="75" fill="white" font-size="3">-80</text>

        //                     <line x1="42" x2="58" y1="75.75" y2="75.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="30" y="78" fill="white" font-size="3">-90</text>
        //                     <line x1="37" x2="63" y1="77.25" y2="77.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="78" fill="white" font-size="3">-90</text>

        //                     <line x1="42" x2="58" y1="78.75" y2="78.75" stroke="white" stroke-width="0.5"</>

        //                     <text x="28.5" y="81" fill="white" font-size="3">-100</text>
        //                     <line x1="37" x2="63" y1="80.25" y2="80.25" stroke="white" stroke-width="0.5"</>
        //                     <text x="65" y="81" fill="white" font-size="3">-100</text>
        //             </g>
        //     </svg>`;



        document.getElementById("panel-container").appendChild(this.elemPanel);


    }

    Update() {
        super.Update();
        let electricity;

        if (isMsfs) {
            electricity = SimVar.GetSimVarValue(CIRCUIT, "Bool");
            if (!electricity) return this._turnOff();
        } else {
            electricity = VarGet(CIRCUIT, "Bool");
            if (electricity == false) return this._turnOff();
        }

        if (electricity && this.elemPanel.getAttribute("state") == "off") {
            this._turnOn();
        }
    }

    _turnOff() {
        this.elemPanel.setAttribute("state", "off");
        console.log("Component turned off");
    }

    _turnOn() {
        this.elemPanel.setAttribute("state", "on");
        console.log("Component turned on");
    }
}

// Registration logic
if (isMsfs) {
    registerInstrument("pf-test-attitude", AttitudeIndicator);
} else {
    const attitudeIndicator = new AttitudeIndicator();
    attitudeIndicator.Init();
    attitudeIndicator.connectedCallback();

    function loop(timestamp) {
        attitudeIndicator.Update();
        window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
}
