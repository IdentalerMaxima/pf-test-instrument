class Status extends GlassCockpitParent {
    constructor() {
        super();
    }

    get templateID() {
        return "PF-TEST-STATUS";
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

        const container = document.getElementById("panel-container");

        // Bg
        const spaceBetweenBg = 20;
        const widthOfBg = 8;
        const heightOfBg = 32;
        const yBg = 30;

        // Title text
        const textY = 22;
        const titleFontSize = 3;

        // Flap text
        const flapTextY = yBg + heightOfBg + 10;

        // Magenta indicators
        const leftMagentaX = 0.72;
        const leftMagentaY = 30;
        const magentaStrokeWidth = 0.5;

        // EGIndicators
        const EGLX = 80;
        const EGRX = 100;

        const EGLTemp = 80;
        const EGRTemp = 100;




        this.elemPanel = document.createElement("div");
        this.elemPanel.id = "status-component";
        this.elemPanel.classList.add("page");

        this.elemPanel.setAttribute("active", "on");

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", "svg");
        svg.setAttribute("viewBox", "0 0 100 100");

        const flapsTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
        flapsTitle.setAttribute("id", "flapsTitle");
        flapsTitle.setAttribute("x", "9");
        flapsTitle.setAttribute("y", textY);
        flapsTitle.setAttribute("fill", "white");
        flapsTitle.setAttribute("font-size", titleFontSize);
        flapsTitle.setAttribute("font-family", "Arial");
        flapsTitle.setAttribute("font-weight", "bold");
        flapsTitle.textContent = "FLAPS";

        svg.appendChild(flapsTitle);


        const leftFlapBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        leftFlapBg.setAttribute("id", "leftFlapBg");
        leftFlapBg.setAttribute("width", widthOfBg);
        leftFlapBg.setAttribute("height", heightOfBg);
        leftFlapBg.setAttribute("fill", "none");
        leftFlapBg.setAttribute("stroke", "white");
        leftFlapBg.setAttribute("stroke-width", "0.5");
        leftFlapBg.setAttribute("x", "1");
        leftFlapBg.setAttribute("y", yBg);

        svg.appendChild(leftFlapBg);

        const leftFlapIndicator = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        leftFlapIndicator.setAttribute("id", "leftFlapIndicator");
        leftFlapIndicator.setAttribute("width", widthOfBg);
        leftFlapIndicator.setAttribute("height", 0);
        leftFlapIndicator.setAttribute("fill", "white");
        leftFlapIndicator.setAttribute("stroke", "white");
        leftFlapIndicator.setAttribute("stroke-width", "0.5");
        leftFlapIndicator.setAttribute("x", "1");
        leftFlapIndicator.setAttribute("y", yBg);

        svg.appendChild(leftFlapIndicator);

        const leftFlapText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        leftFlapText.setAttribute("id", "leftFlapText");
        leftFlapText.setAttribute("x", "0");
        leftFlapText.setAttribute("y", flapTextY);
        leftFlapText.setAttribute("fill", "white");
        leftFlapText.setAttribute("font-size", titleFontSize);
        leftFlapText.setAttribute("font-family", "Arial");
        leftFlapText.setAttribute("font-weight", "bold");
        leftFlapText.textContent = "LEFT";

        svg.appendChild(leftFlapText);

        // Magenta indicators

        const lMagenta20 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        lMagenta20.setAttribute("id", "lMagenta20");
        lMagenta20.setAttribute("x1", leftMagentaX);
        lMagenta20.setAttribute("y1", leftMagentaY + (heightOfBg / 100 * 20));
        lMagenta20.setAttribute("x2", leftMagentaX + 8.57);
        lMagenta20.setAttribute("y2", leftMagentaY + (heightOfBg / 100 * 20));
        lMagenta20.setAttribute("stroke", "magenta");
        lMagenta20.setAttribute("stroke-width", magentaStrokeWidth);
        lMagenta20.setAttribute("visibility", "hidden");

        svg.appendChild(lMagenta20);

        const lMagenta40 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        lMagenta40.setAttribute("id", "lMagenta40");
        lMagenta40.setAttribute("x1", leftMagentaX);
        lMagenta40.setAttribute("y1", leftMagentaY + (heightOfBg / 100 * 40));
        lMagenta40.setAttribute("x2", leftMagentaX + 8.57);
        lMagenta40.setAttribute("y2", leftMagentaY + (heightOfBg / 100 * 40));
        lMagenta40.setAttribute("stroke", "magenta");
        lMagenta40.setAttribute("stroke-width", magentaStrokeWidth);
        lMagenta40.setAttribute("visibility", "hidden");

        svg.appendChild(lMagenta40);

        const rightFlapText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        rightFlapText.setAttribute("id", "rightFlapText");
        rightFlapText.setAttribute("x", "0" + spaceBetweenBg - 0.5);
        rightFlapText.setAttribute("y", flapTextY);
        rightFlapText.setAttribute("fill", "white");
        rightFlapText.setAttribute("font-size", titleFontSize);
        rightFlapText.setAttribute("font-family", "Arial");
        rightFlapText.setAttribute("font-weight", "bold");
        rightFlapText.textContent = "RIGHT";

        svg.appendChild(rightFlapText);

        const rightFlapBg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rightFlapBg.setAttribute("id", "rightFlapBg");
        rightFlapBg.setAttribute("width", widthOfBg);
        rightFlapBg.setAttribute("height", heightOfBg);
        rightFlapBg.setAttribute("fill", "none");
        rightFlapBg.setAttribute("stroke", "white");
        rightFlapBg.setAttribute("stroke-width", magentaStrokeWidth);
        rightFlapBg.setAttribute("x", 0 + spaceBetweenBg);
        rightFlapBg.setAttribute("y", yBg);

        svg.appendChild(rightFlapBg);

        const rightFlapIndicator = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rightFlapIndicator.setAttribute("id", "rightFlapIndicator");
        rightFlapIndicator.setAttribute("width", widthOfBg);
        rightFlapIndicator.setAttribute("height", 0);
        rightFlapIndicator.setAttribute("fill", "white");
        rightFlapIndicator.setAttribute("stroke", "white");
        rightFlapIndicator.setAttribute("stroke-width", "0.5");
        rightFlapIndicator.setAttribute("x", 0 + spaceBetweenBg);
        rightFlapIndicator.setAttribute("y", yBg);

        svg.appendChild(rightFlapIndicator);

        const rMagenta20 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        rMagenta20.setAttribute("id", "rMagenta20");
        rMagenta20.setAttribute("x1", leftMagentaX + spaceBetweenBg - 1);
        rMagenta20.setAttribute("y1", leftMagentaY + (heightOfBg / 100 * 20));
        rMagenta20.setAttribute("x2", leftMagentaX + 8.57 + spaceBetweenBg - 1);
        rMagenta20.setAttribute("y2", leftMagentaY + (heightOfBg / 100 * 20));
        rMagenta20.setAttribute("stroke", "magenta");
        rMagenta20.setAttribute("stroke-width", magentaStrokeWidth);
        rMagenta20.setAttribute("visibility", "hidden");

        svg.appendChild(rMagenta20);

        const rMagenta40 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        rMagenta40.setAttribute("id", "rMagenta40");
        rMagenta40.setAttribute("x1", leftMagentaX + spaceBetweenBg - 1);
        rMagenta40.setAttribute("y1", leftMagentaY + (heightOfBg / 100 * 40));
        rMagenta40.setAttribute("x2", leftMagentaX + 8.57 + spaceBetweenBg - 1);
        rMagenta40.setAttribute("y2", leftMagentaY + (heightOfBg / 100 * 40));
        rMagenta40.setAttribute("stroke", "magenta");
        rMagenta40.setAttribute("stroke-width", magentaStrokeWidth);
        rMagenta40.setAttribute("visibility", "hidden");

        svg.appendChild(rMagenta40);

        const exhaustGasTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
        exhaustGasTitle.setAttribute("id", "exhaustGasTitle");
        exhaustGasTitle.setAttribute("x", "73");
        exhaustGasTitle.setAttribute("y", textY - 2);
        exhaustGasTitle.setAttribute("fill", "white");
        exhaustGasTitle.setAttribute("font-size", titleFontSize);
        exhaustGasTitle.setAttribute("font-family", "Arial");
        exhaustGasTitle.setAttribute("font-weight", "bold");
        exhaustGasTitle.textContent = "EXHAUST GAS";

        svg.appendChild(exhaustGasTitle);

        const exhaustGasTitle2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        exhaustGasTitle2.setAttribute("id", "exhaustGasTitle2");
        exhaustGasTitle2.setAttribute("x", "72.5");
        exhaustGasTitle2.setAttribute("y", textY + 2);
        exhaustGasTitle2.setAttribute("fill", "white");
        exhaustGasTitle2.setAttribute("font-size", titleFontSize);
        exhaustGasTitle2.setAttribute("font-family", "Arial");
        exhaustGasTitle2.setAttribute("font-weight", "bold");
        exhaustGasTitle2.textContent = "TEMPERATURE";

        svg.appendChild(exhaustGasTitle2);

        const EGLFilling = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        EGLFilling.setAttribute("id", "EGLFilling");
        EGLFilling.setAttribute("width", widthOfBg);

        EGLFilling.setAttribute("fill", "#00aa11");
        EGLFilling.setAttribute("x", 70);
        EGLFilling.setAttribute("y", yBg + 10);

        svg.appendChild(EGLFilling);

        const exhaustGasTempLeft = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        exhaustGasTempLeft.setAttribute("id", "exhaustGasTempLeft");
        exhaustGasTempLeft.setAttribute("width", widthOfBg);
        exhaustGasTempLeft.setAttribute("height", heightOfBg);
        exhaustGasTempLeft.setAttribute("fill", "none");
        exhaustGasTempLeft.setAttribute("stroke", "white");
        exhaustGasTempLeft.setAttribute("stroke-width", "0.5");
        exhaustGasTempLeft.setAttribute("x", "70");
        exhaustGasTempLeft.setAttribute("y", yBg);

        svg.appendChild(exhaustGasTempLeft);

        const EGLIndicatorRed = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        EGLIndicatorRed.setAttribute("id", "EGLIndicatorRed");
        EGLIndicatorRed.setAttribute("width", 1.8);
        EGLIndicatorRed.setAttribute("height", 0.2);
        EGLIndicatorRed.setAttribute("fill", "#ff0000");
        EGLIndicatorRed.setAttribute("stroke", "#ff0000");
        EGLIndicatorRed.setAttribute("stroke-width", "0.5");
        EGLIndicatorRed.setAttribute("x", EGLX - 2);
        EGLIndicatorRed.setAttribute("y", yBg + 4);

        svg.appendChild(EGLIndicatorRed);

        const EGLIndicatorYellow = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        EGLIndicatorYellow.setAttribute("id", "EGLIndicatorYellow");
        EGLIndicatorYellow.setAttribute("width", 1.8);
        EGLIndicatorYellow.setAttribute("height", 0.2);
        EGLIndicatorYellow.setAttribute("fill", "#ffc700");
        EGLIndicatorYellow.setAttribute("stroke", "#ffc700");
        EGLIndicatorYellow.setAttribute("stroke-width", "0.5");
        EGLIndicatorYellow.setAttribute("x", EGLX - 2);
        EGLIndicatorYellow.setAttribute("y", yBg + 8);

        svg.appendChild(EGLIndicatorYellow);

        const leftExhaustText1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        leftExhaustText1.setAttribute("id", "leftExhaustText1");
        leftExhaustText1.setAttribute("x", "70" - 1);
        leftExhaustText1.setAttribute("y", flapTextY - 3);
        leftExhaustText1.setAttribute("fill", "white");
        leftExhaustText1.setAttribute("font-size", titleFontSize);
        leftExhaustText1.setAttribute("font-family", "Arial");
        leftExhaustText1.setAttribute("font-weight", "bold");
        leftExhaustText1.textContent = "E1 EGT";

        svg.appendChild(leftExhaustText1);

        const leftExhaustText2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        leftExhaustText2.setAttribute("id", "leftExhaustText2");
        leftExhaustText2.setAttribute("x", "70" - 1);
        leftExhaustText2.setAttribute("y", flapTextY - 3 + 6);
        leftExhaustText2.setAttribute("fill", "white");
        leftExhaustText2.setAttribute("font-size", titleFontSize);
        leftExhaustText2.setAttribute("font-family", "Arial");
        leftExhaustText2.setAttribute("font-weight", "bold");
        leftExhaustText2.textContent = "100C°";
        leftExhaustText2.setAttribute("fill", "#00aa11");

        svg.appendChild(leftExhaustText2);

        const EGRFilling = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        EGRFilling.setAttribute("id", "EGRFilling");
        EGRFilling.setAttribute("width", widthOfBg);
        EGRFilling.setAttribute("height", 20);
        EGRFilling.setAttribute("fill", "#00aa11");
        EGRFilling.setAttribute("x", 70 + spaceBetweenBg);
        EGRFilling.setAttribute("y", yBg);

        svg.appendChild(EGRFilling);

        const exhaustGasTempRight = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        exhaustGasTempRight.setAttribute("id", "exhaustGasTempRight");
        exhaustGasTempRight.setAttribute("width", widthOfBg);
        exhaustGasTempRight.setAttribute("height", heightOfBg);
        exhaustGasTempRight.setAttribute("fill", "none");
        exhaustGasTempRight.setAttribute("stroke", "white");
        exhaustGasTempRight.setAttribute("stroke-width", "0.5");
        exhaustGasTempRight.setAttribute("x", 70 + spaceBetweenBg);
        exhaustGasTempRight.setAttribute("y", yBg);

        svg.appendChild(exhaustGasTempRight);

        const EGRIndicatorRed = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        EGRIndicatorRed.setAttribute("id", "EGRIndicatorRed");
        EGRIndicatorRed.setAttribute("width", 1.8);
        EGRIndicatorRed.setAttribute("height", 0.2);
        EGRIndicatorRed.setAttribute("fill", "#ff0000");
        EGRIndicatorRed.setAttribute("stroke", "#ff0000");
        EGRIndicatorRed.setAttribute("stroke-width", "0.5");
        EGRIndicatorRed.setAttribute("x", EGRX - 2);
        EGRIndicatorRed.setAttribute("y", yBg + 4);

        svg.appendChild(EGRIndicatorRed);

        const EGRIndicatorYellow = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        EGRIndicatorYellow.setAttribute("id", "EGRIndicatorYellow");
        EGRIndicatorYellow.setAttribute("width", 1.8);
        EGRIndicatorYellow.setAttribute("height", 0.2);
        EGRIndicatorYellow.setAttribute("fill", "#ffc700");
        EGRIndicatorYellow.setAttribute("stroke", "#ffc700");
        EGRIndicatorYellow.setAttribute("stroke-width", "0.5");
        EGRIndicatorYellow.setAttribute("x", EGRX - 2);
        EGRIndicatorYellow.setAttribute("y", yBg + 8);

        svg.appendChild(EGRIndicatorYellow);

        const rightExhaustText1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        rightExhaustText1.setAttribute("id", "rightExhaustText1");
        rightExhaustText1.setAttribute("x", 70 + spaceBetweenBg - 1);
        rightExhaustText1.setAttribute("y", flapTextY - 3);
        rightExhaustText1.setAttribute("fill", "white");
        rightExhaustText1.setAttribute("font-size", titleFontSize);
        rightExhaustText1.setAttribute("font-family", "Arial");
        rightExhaustText1.setAttribute("font-weight", "bold");
        rightExhaustText1.textContent = "E2 EGT";

        svg.appendChild(rightExhaustText1);

        const rightExhaustText2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        rightExhaustText2.setAttribute("id", "rightExhaustText2");
        rightExhaustText2.setAttribute("x", 70 + spaceBetweenBg - 1);
        rightExhaustText2.setAttribute("y", flapTextY - 3 + 6);
        rightExhaustText2.setAttribute("fill", "white");
        rightExhaustText2.setAttribute("font-size", titleFontSize);
        rightExhaustText2.setAttribute("font-family", "Arial");
        rightExhaustText2.setAttribute("font-weight", "bold");
        rightExhaustText2.textContent = "100C°";
        rightExhaustText2.setAttribute("fill", "#00aa11");

        svg.appendChild(rightExhaustText2);

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

        let lflap = VarGet(LEFT_FLAP, "Degrees");
        let rflap = VarGet(RIGHT_FLAP, "Degrees");

        this.updateFlapIndicator(lflap, rflap);

        let E1EGT = VarGet(E1_EGT, "Degrees");
        let E2EGT = VarGet(E2_EGT, "Degrees");

        this.updateEGT(E1EGT, E2EGT);
        this.updateEGTText(E1EGT, E2EGT);
    }

    updateFlapIndicator(leftValue, rightValue) {
        const lMagenta20 = document.getElementById("lMagenta20");
        const rMagenta20 = document.getElementById("rMagenta20");
        const lMagenta40 = document.getElementById("lMagenta40");
        const rMagenta40 = document.getElementById("rMagenta40");
        const leftFlapIndicator = document.getElementById("leftFlapIndicator");
        const rightFlapIndicator = document.getElementById("rightFlapIndicator");

        if (lMagenta20 && rMagenta20 && lMagenta40 && rMagenta40) {

            // Helper function to show element and set height for specified duration
            const showAndSetHeight = (element, value, duration) => {
                if (element) {
                    element.style.visibility = "visible";
                    setTimeout(() => {
                        element.style.visibility = "hidden";
                    }, duration);
                }
            };

            if (leftValue >= 40) {
                if ((leftFlapIndicator.getAttribute("height")) != 12.5) {
                    showAndSetHeight(lMagenta40, leftValue, 1000);
                }
                leftFlapIndicator.setAttribute("height", 12.5)
            } else if (leftValue > 0) {
                if ((leftFlapIndicator.getAttribute("height")) != 6) {
                    showAndSetHeight(lMagenta20, leftValue, 1000);
                }
                leftFlapIndicator.setAttribute("height", 6)
            } else {
                leftFlapIndicator.setAttribute("height", 0);
            }

            if (rightValue >= 40) {
                if ((rightFlapIndicator.getAttribute("height")) != 12.5) {
                    showAndSetHeight(rMagenta40, rightValue, 1000);
                }
                rightFlapIndicator.setAttribute("height", 12.5)
            } else if (rightValue > 0) {
                if ((rightFlapIndicator.getAttribute("height")) != 6) {
                    showAndSetHeight(rMagenta20, rightValue, 1000);
                }
                rightFlapIndicator.setAttribute("height", 6)
            } else {
                rightFlapIndicator.setAttribute("height", 0);
            }
        }
    }

    updateEGT(leftEgtTemp, rightEgtTemp) {
        const minTemp = 100;
        const maxTemp = 899;
        const maxFillHeight = 32;
        const containerBottom = 62;

        const yellowLimit = 680;
        const redLimit = 750;

        const EGLFilling = document.getElementById("EGLFilling");
        const EGRFilling = document.getElementById("EGRFilling");


        const leftFillHeight = ((leftEgtTemp - minTemp) / (maxTemp - minTemp)) * maxFillHeight;
        const rightFillHeight = ((rightEgtTemp - minTemp) / (maxTemp - minTemp)) * maxFillHeight;

        EGLFilling.setAttribute("height", leftFillHeight);
        EGLFilling.setAttribute("y", containerBottom - leftFillHeight);

        EGRFilling.setAttribute("height", rightFillHeight);
        EGRFilling.setAttribute("y", containerBottom - rightFillHeight);


        const getColorByTemp = (temp) => {
            if (temp >= redLimit) return "#ff0000";
            if (temp >= yellowLimit) return "#ffc700";
            return "#00aa11";
        };

        EGLFilling.setAttribute("fill", getColorByTemp(leftEgtTemp));
        EGRFilling.setAttribute("fill", getColorByTemp(rightEgtTemp));
    }

    updateEGTText(leftEgtTemp, rightEgtTemp) {
        const leftExhaustText = document.getElementById("leftExhaustText2");
        const rightExhaustText = document.getElementById("rightExhaustText2");

        const yellowLimit = 680;
        const redLimit = 750;

        if (leftExhaustText) {
            leftExhaustText.textContent = `${leftEgtTemp}°C`;

            if (leftEgtTemp > redLimit) {
                leftExhaustText.setAttribute("fill", "#ff0000");
            } else if (leftEgtTemp > yellowLimit) {
                leftExhaustText.setAttribute("fill", "#ffc700");
            } else {
                leftExhaustText.setAttribute("fill", "#00aa11");
            }
        }


        if (rightExhaustText) {
            rightExhaustText.textContent = `${rightEgtTemp}°C`;

            if (rightEgtTemp > redLimit) {
                rightExhaustText.setAttribute("fill", "#ff0000");
            } else if (rightEgtTemp > yellowLimit) {
                rightExhaustText.setAttribute("fill", "#ffc700");
            } else {
                rightExhaustText.setAttribute("fill", "#00aa11");
            }
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
    registerInstrument("pf-test-attitude", Status);
} else {
    const status = new Status();
    status.Init();
    status.connectedCallback();

    function loop(timestamp) {
        status.Update();
        window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
}
