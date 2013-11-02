// Specialty angular conversion functions
DegtoMOA = function(deg) {
    "use strict";
    return deg * 60;
}

function DegtoRad(deg) {
    "use strict";
    return deg * 3.14159265359 / 180;
}

function MOAtoDeg(moa) {
    "use strict";
    return moa / 60;
}

function MOAtoRad(moa) {
    "use strict";
    return moa / 60 * 3.14159265359 / 180;
}

function RadtoDeg(rad) {
    "use strict";
    return rad * 180 / 3.14159265359;
}

function RadtoMOA(rad) {
    "use strict";
    return rad * 60 * 180 / 3.14159265359;
}

