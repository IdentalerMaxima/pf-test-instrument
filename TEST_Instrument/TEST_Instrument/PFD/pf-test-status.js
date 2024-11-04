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
        rightFlapBg.setAttribute("stroke-width", "0.5");
        rightFlapBg.setAttribute("x", 0 + spaceBetweenBg);            
        rightFlapBg.setAttribute("y", yBg);            

        svg.appendChild(rightFlapBg);

        const exhaustGasTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
        exhaustGasTitle.setAttribute("id", "exhaustGasTitle");
        exhaustGasTitle.setAttribute("x", "73");
        exhaustGasTitle.setAttribute("y", textY - 2 );
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
        leftExhaustText2.textContent = "TEMP";

        svg.appendChild(leftExhaustText2);
        
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

        const rightExhaustText1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        rightExhaustText1.setAttribute("id", "rightExhaustText1");
        rightExhaustText1.setAttribute("x", 70 + spaceBetweenBg -1);
        rightExhaustText1.setAttribute("y", flapTextY - 3);
        rightExhaustText1.setAttribute("fill", "white");
        rightExhaustText1.setAttribute("font-size", titleFontSize);
        rightExhaustText1.setAttribute("font-family", "Arial");
        rightExhaustText1.setAttribute("font-weight", "bold");
        rightExhaustText1.textContent = "E2 EGT";

        svg.appendChild(rightExhaustText1);

        const rightExhaustText2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        rightExhaustText2.setAttribute("id", "rightExhaustText2");
        rightExhaustText2.setAttribute("x", 70 + spaceBetweenBg -1);
        rightExhaustText2.setAttribute("y", flapTextY - 3 + 6);
        rightExhaustText2.setAttribute("fill", "white");
        rightExhaustText2.setAttribute("font-size", titleFontSize);
        rightExhaustText2.setAttribute("font-family", "Arial");
        rightExhaustText2.setAttribute("font-weight", "bold");
        rightExhaustText2.textContent = "TEMP2";

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
