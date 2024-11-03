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

        // Make the background wider than 100 to ensure it fills the area when rotated
        const backgroundWidth = 200; 
        const backgroundHeight = 200;

        const sky = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        sky.setAttribute("id", "sky");
        sky.setAttribute("x", "-50"); 
        sky.setAttribute("y", "=100");
        sky.setAttribute("width", backgroundWidth); 
        sky.setAttribute("height", backgroundHeight);
        sky.setAttribute("fill", "#60a1fa");
        backgroundGroup.appendChild(sky);

        const ground = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        ground.setAttribute("id", "ground");
        ground.setAttribute("x", "-50"); 
        ground.setAttribute("y", "50");
        ground.setAttribute("width", backgroundWidth); 
        ground.setAttribute("height", 100);
        ground.setAttribute("fill", "#83623d");
        backgroundGroup.appendChild(ground);

        svg.appendChild(backgroundGroup);

        const horizonLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        horizonLine.setAttribute("id", "horizon");
        horizonLine.setAttribute("x1", "-50");
        horizonLine.setAttribute("x2", "150");
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

        const whiteTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        whiteTriangle.setAttribute("points", "50,4.8 48,1 52,1");
        whiteTriangle.setAttribute("fill", "white");
        arcMarkingsGroup.appendChild(whiteTriangle);

        const bankAngle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        bankAngle.setAttribute("points", "50,5.5 48,9 52,9");
        bankAngle.setAttribute("fill", "yellow");
        bankAngle.setAttribute("stroke", "black");
        bankAngle.setAttribute("stroke-width", "0.2");
        svg.appendChild(bankAngle);

        const slipIndicator = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        slipIndicator.setAttribute("x", "48");
        slipIndicator.setAttribute("y", "9.4");
        slipIndicator.setAttribute("width", "4");
        slipIndicator.setAttribute("height", "0.4");
        slipIndicator.setAttribute("fill", "yellow");
        slipIndicator.setAttribute("stroke", "black");
        slipIndicator.setAttribute("stroke-width", "0.2");
        svg.appendChild(slipIndicator);

        svg.appendChild(arcMarkingsGroup);

        const pitchTapeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        pitchTapeGroup.setAttribute("id", "pitch-tape");

        const upperLines = [
            { y: 48.25, degree: 5 },
            { y: 46.75, degree: 10 },
            { y: 45.25, degree: 15 },
            { y: 43.75, degree: 20 },
            { y: 42.25, degree: 25 },
            { y: 40.75, degree: 30 },
            { y: 39.25, degree: 35 },
            { y: 37.75, degree: 40 },
            { y: 36.25, degree: 45 },
            { y: 34.75, degree: 50 },
            { y: 33.25, degree: 55 },
            { y: 31.75, degree: 60 },
            { y: 30.25, degree: 65 },
            { y: 28.75, degree: 70 },
            { y: 27.25, degree: 75 },
            { y: 25.75, degree: 80 },
            { y: 24.25, degree: 85 },
            { y: 22.75, degree: 90 },
            { y: 21.25, degree: 95 },
            { y: 19.75, degree: 100 },


        ];

        upperLines.forEach(({ y, degree }) => {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

            if (degree % 10 === 0) {

                line.setAttribute("x1", "37");
                line.setAttribute("x2", "63");
                line.setAttribute("y1", y);
                line.setAttribute("y2", y);
                line.setAttribute("stroke", "white");
                line.setAttribute("stroke-width", "1");
                pitchTapeGroup.appendChild(line);

                const textLeft = document.createElementNS("http://www.w3.org/2000/svg", "text");

                textLeft.setAttribute("x", degree === 100 ? "29.19" : "30");
                textLeft.setAttribute("y", y);

                textLeft.setAttribute("text-anchor", "middle");
                textLeft.setAttribute("dominant-baseline", "middle");

                textLeft.setAttribute("fill", "white");
                textLeft.setAttribute("font-size", "3");
                textLeft.textContent = degree;

                pitchTapeGroup.appendChild(textLeft);

                const textRight = document.createElementNS("http://www.w3.org/2000/svg", "text");

                textRight.setAttribute("x", degree === 100 ? "70.79" : "70");
                textRight.setAttribute("y", y);

                textRight.setAttribute("text-anchor", "middle");
                textRight.setAttribute("dominant-baseline", "middle");

                textRight.setAttribute("fill", "white");
                textRight.setAttribute("font-size", "3");
                textRight.textContent = degree;

                pitchTapeGroup.appendChild(textRight);

            } else {
                line.setAttribute("x1", "42");
                line.setAttribute("x2", "58");
            }

            line.setAttribute("y1", y);
            line.setAttribute("y2", y);
            line.setAttribute("stroke", "white");
            line.setAttribute("stroke-width", "0.5");
            pitchTapeGroup.appendChild(line);

        });

        const lowerLines = [
            { y: 51.75, degree: -5 },
            { y: 53.25, degree: -10 },
            { y: 54.75, degree: -15 },
            { y: 56.25, degree: -20 },
            { y: 57.75, degree: -25 },
            { y: 59.25, degree: -30 },
            { y: 60.75, degree: -35 },
            { y: 62.25, degree: -40 },
            { y: 63.75, degree: -45 },
            { y: 65.25, degree: -50 },
            { y: 66.75, degree: -55 },
            { y: 68.25, degree: -60 },
            { y: 69.75, degree: -65 },
            { y: 71.25, degree: -70 },
            { y: 72.75, degree: -75 },
            { y: 74.25, degree: -80 },
            { y: 75.75, degree: -85 },
            { y: 77.25, degree: -90 },
            { y: 78.75, degree: -95 },
            { y: 80.25, degree: -100 },
        ];

        lowerLines.forEach(({ y, degree }) => {

            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

            if (degree % 10 === 0) {

                line.setAttribute("x1", "37");
                line.setAttribute("x2", "63");
                line.setAttribute("y1", y);
                line.setAttribute("y2", y);
                line.setAttribute("stroke", "white");
                line.setAttribute("stroke-width", "1");
                pitchTapeGroup.appendChild(line);

                const textLeft = document.createElementNS("http://www.w3.org/2000/svg", "text");

                textLeft.setAttribute("x", degree === -100 ? "29.19" : "30");
                textLeft.setAttribute("y", y);

                textLeft.setAttribute("text-anchor", "middle");
                textLeft.setAttribute("dominant-baseline", "middle");

                textLeft.setAttribute("fill", "white");
                textLeft.setAttribute("font-size", "3");
                textLeft.textContent = degree;

                pitchTapeGroup.appendChild(textLeft);

                const textRight = document.createElementNS("http://www.w3.org/2000/svg", "text");

                textRight.setAttribute("x", degree === -100 ? "70.79" : "70");
                textRight.setAttribute("y", y);

                textRight.setAttribute("text-anchor", "middle");
                textRight.setAttribute("dominant-baseline", "middle");

                textRight.setAttribute("fill", "white");
                textRight.setAttribute("font-size", "3");
                textRight.textContent = degree;

                pitchTapeGroup.appendChild(textRight);

            } else {
                line.setAttribute("x1", "42");
                line.setAttribute("x2", "58");
            }

            line.setAttribute("y1", y);
            line.setAttribute("y2", y);
            line.setAttribute("stroke", "white");
            line.setAttribute("stroke-width", "0.5");
            pitchTapeGroup.appendChild(line);
        });


        svg.appendChild(pitchTapeGroup);

        this.elemPanel.appendChild(svg);

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

        let pitch = VarGet(PITCH, "Degrees") / Math.PI;
        let bank = VarGet(BANK_ANGLE, "Radians");

        this.updateArtificialHorizon(pitch, bank);

    }

    updateArtificialHorizon(pitch, bank) {
        const arc = document.getElementById("arc");
        const arcMarkings = document.getElementById("arc-markings");
        const pitchTape = document.getElementById("pitch-tape");
        const backgroundGroup = document.getElementById("background");
        const sky = document.getElementById("sky");
        const ground = document.getElementById("ground");

        arc.setAttribute("transform", `rotate(${bank}, 50, 50)`);
        arcMarkings.setAttribute("transform", `rotate(${bank}, 50, 50)`);
        backgroundGroup.setAttribute("transform", `rotate(${bank}, 50, 50)`);
    
        pitchTape.setAttribute("transform", `
            rotate(${bank}, 50, 50)
            translate(0, ${pitch})
        `);

        backgroundGroup.setAttribute("transform", `
            rotate(${bank}, 50, 50)
            translate(0, ${pitch})`);
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
