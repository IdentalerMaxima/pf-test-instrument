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

        this.elemPanel = document.createElement("div");
        this.elemPanel.id = "status-component";
        this.elemPanel.classList.add("page");

        this.elemPanel.setAttribute("active", "off");

        this.elemPanel.innerHTML = `<h1>Status</h1>`;

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
