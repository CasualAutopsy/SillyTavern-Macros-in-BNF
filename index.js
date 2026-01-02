import {event_types, eventSource, substituteParams} from '../../../../script.js';


function substituteBNFMacros(args) {
    let new_bnf = "";

    if (args["grammar"]) {
        new_bnf = substituteParams(args["grammar"]);
    } else {
        return;
    }

    Object.assign(args, {
        "grammar": new_bnf,
        "grammar_string": new_bnf
    });
}

//Listeners
function registerEvents() {
    eventSource.on(event_types.TEXT_COMPLETION_SETTINGS_READY, substituteBNFMacros);
}

jQuery(async () => {
    // JQuery Events
    registerEvents();
});
