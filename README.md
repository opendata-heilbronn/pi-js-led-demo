# pi-js-led-demo

Kleines Demo Projekt um das Blinken einer LED auf dem Raspberry PI zu demonstrieren

# Installation

Nachdem der PI mit dem Netzwerk verbunden wurde muss NodeJS installiert werden.

```bash
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

danach einfach in dem Projektverzeichnis die onoff Dependency installieren und das Projekt starten mit:

```bash
npm install
node sos.js
```

