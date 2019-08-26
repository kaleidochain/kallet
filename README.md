<img src="./src/assets/images/short-hand-logo.png" width="300px"/>

Kallet is a wallet for the Kaleidochain, allowing users to manage their own funds without a centralized platform.

Official site is https://kallet.kaleidochain.io .

## Features

- **Easy & free**: Everyone should be able to create a wallet and send KAL & Tokens without additional cost.
- **Offline / Client-Side mode**: User should be able to run locally and offline without issue.
- **Private**: No tracking!!! No emails. No ads. No demographics. We don't even know how many wallets have been generated, let alone who / what / where you are.
- **Open source & auditable**

## Big Thanks to MEW

Kallet is built on MEW, a great ethereum community. We will continue to contribute cryptocurrency wallet, along with MEW and Kallet, by contributing more code, documents and ideas.

## Bug / Feature Request

If you find a bug, or want a new feature added, please submit it on the [Github Issues](https://github.com/MyEtherWallet/MyEtherWallet/issues)

## Getting started

1. Open terminal
2. Clone the repo: `git clone git@github.com:kaleidochain/kallet.git`
3. run `npm i` to install node packages.
4. run `npm run build`. You can also use the offline version by opening the index file from the dist folder with your preferred browser
5. start `npm start`
6. If `npm start` fails and above the error message it states 'new update found' then the package.json version of the indicated packages needs to be updated to match the versions shown in the notice.
7. App should be running in `https://localhost:8080`

## Developers

1. Open terminal
2. Clone the repo: `git clone git@github.com:kaleidochain/kallet.git`
3. run `git checkout develop`
4. run `npm i` to install node packages.
5. run `npm run build`. You can also use the offline version by opening the index file from the dist folder with your preferred browser
6. start `npm run dev`
7. App should be running in `https://localhost:8080`

EACCESS issue can be resolved by running: `sudo chown -R $(whoami) ~/.npm`
For other issues, try the steps shown here: <https://github.com/MyEtherWallet/MyEtherWallet/issues/1182#issuecomment-506342875> by @tomwalton78
