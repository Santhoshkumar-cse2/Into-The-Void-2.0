// =========================
// BLACK HOLE ARCHIVE
// INSANE DOM CTF
// =========================

const galaxies = {
    milkyway: "Safe Galaxy",
    andromeda: "Safe Galaxy",
    sombrero: "Safe Galaxy"
};

// =========================
// SEARCH FUNCTION
// =========================

function searchGalaxy() {

    let value =
        location.hash.substring(1) ||
        document.getElementById("search").value;

    document.getElementById("output").textContent =
        galaxies[value] || "Galaxy Not Found";
}

// =========================
// MESSAGE LISTENER
// =========================

window.addEventListener("message", (e) => {

    if (e.origin !== location.origin)
        return;

    document.getElementById("output").textContent =
        e.data;
});

// =========================
// FAKE FLAGS
// =========================

const fakeFlags = [
    "expX{wrong_singularity}",
    "expX{dom_xss_is_not_enough}",
    "expX{almost_beyond_the_horizon}",
    "expX{prototype_pollution_master}",
    "expX{black_hole_escape}",
    "expX{event_horizon_decoy}"
];

// TODO: remove expX{keep_searching_explorer}

const archive = {
    backup1: "expX{false_positive_detected}",
    backup2: "expX{nothing_to_see_here}",
    backup3: "expX{black_hole_decoy}"
};

function secretFlag() {
    return "expX{wrong_singularity}";
}

function oldArchive() {
    return "expX{event_horizon_decoy}";
}

// =========================
// DECOY BASE64 FLAGS
// =========================

const encodedFlags = [
    "ZXhwWHt3cm9uZ19zaW5ndWxhcml0eX0=",
    "ZXhwWHtldmVudF9ob3Jpem9uX2RlY295fQ==",
    "ZXhwWHtibGFja19ob2xlX2VzY2FwZX0="
];

// =========================
// PROTOTYPE POLLUTION
// =========================

Object.prototype.admin = false;

const settings = JSON.parse(
    localStorage.getItem("settings") || "{}"
);

Object.assign(Object.prototype, settings);

// =========================
// REAL FLAG (HIDDEN)
// =========================

Object.defineProperty(
    Object.prototype,
    "flag",
    {
        value: atob(
            "ZXhwWHtiZXlvbmRfdGhlX2V2ZW50X2hvcml6b259"
        ),
        enumerable: false,
        writable: false,
        configurable: false
    }
);

// =========================
// FLAG FUNCTION
// =========================

function getFlag() {

    if (Object.prototype.admin === true) {
        return Object.prototype.flag;
    }

    return "Access Denied";
}

// =========================
// MISLEADING CONSOLE LOGS
// =========================

console.log(
    "Recovered flag: ExpX{keep_searching_explorer}"
);

console.log(
    "Archive integrity verified."
);

console.log(
    "Nothing interesting here."
);

// =========================
// EXTRA RABBIT HOLE
// =========================

const debug = {
    access: false,
    hint: "Flags are not always what they seem."
};

