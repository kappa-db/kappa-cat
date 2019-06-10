#!/usr/bin/env node

let kappa = require('kappa-core');
let minimist = require('minimist');

args = minimist(process.argv.slice(2), {
    boolean: ['p', 'pretty'],
});
path = args._[0];
if (path === undefined) {
    console.log('usage: kappa-cat [-p | --pretty] $LOCAL_PATH');
    console.log('');
    console.log('    Print each message from a kappa-core multifeed.');
    console.log('');
    console.log('    Notes:');
    console.log('');
    console.log("    * Hypercores can only be used by one local process at a time, so");
    console.log("      best to quit other kappa-core programs before running this one.");
    console.log('    * The "key" field in each item is the feed id.');
    console.log('');
    console.log('    -p | --pretty   Pretty-print the json on multiple lines.');
    console.log('    $LOCAL_PATH     Path to local folder where kappa-core data is stored.');
    console.log('                    Might be ~/.cabal/archives/YOURKEY or ~/.cabal-desktop/YOURKEY');
    process.exit(1);
}

let core = kappa(path, { valueEncoding: 'json' });

let logview = {
    api: {},
    map: (msgs, next) => {
        msgs.forEach(msg => {
            let msgString = (args.p || args.pretty) ? JSON.stringify(msg, null, 4) : JSON.stringify(msg, null);
            console.log(msgString);
        });
        next();
    }
};
core.use('logview', logview);
