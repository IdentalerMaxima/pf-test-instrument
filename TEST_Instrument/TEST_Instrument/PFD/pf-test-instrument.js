// This is a temporary solution:
// In MSFS the BaseInstrument class exists, so we can use that as the parent (required by the SDK),
// but in the browser, it doesn't exist, so we are using an empty parent class.
// Obviously this useless indirection should be removed from the shipped solution,
// it is only for easier browser testing.
let isMsfs = (typeof(BaseInstrument) === "function");

let GlassCockpitParent = isMsfs ? BaseInstrument : class {

    // empty functions just for the super() calls 
    constructor() {}
    Init() {}
    connectedCallback() {}
    Update() {}
};

class PfTestInstrument extends GlassCockpitParent {
    constructor() {
        super();

        // Not safe to call getElementById here in MSFS, only in connectedCallback()
    }

    get templateID() {
        return "PF-TEST-INSTRUMENT";
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
        this.elemPanel = document.getElementById("panel-container");
        //get the static elements from html here
    }

    Update() {
        super.Update();
        let electricity;

        if (isMsfs) {
            // TODO CHANGE CIRCUIT VARIABLE TO THE RIGHT ONE FOR THE CURRENT USECASE
            electricity = SimVar.GetSimVarValue(CIRCUIT, "Bool");
            if (!electricity) return this._turnOff();
        }
        else {
            electricity = VarGet(CIRCUIT, "Bool");
            if (electricity == false) return this._turnOff();
        }

        if (electricity && this.elemPanel.getAttribute("state") == "off") {
            this._turnOn();
        }

        // do the updates here 
    }

    _turnOff() {
        this.elemPanel.setAttribute("state", "off");
    }

    _turnOn() {
        this.elemPanel.setAttribute("state", "on");
    }
}


if (isMsfs) {
    registerInstrument("pf-test-instrument", PfTestInstrument);
}
else {
    const glasscockpit = new PfTestInstrument();
    glasscockpit.Init();
    glasscockpit.connectedCallback();
    
    function loop(timestamp) {
        glasscockpit.Update();
        window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
}
