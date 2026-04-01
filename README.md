# Mise en oeuvre de CI/CD avec Jest et Cypress

Application web Node.js avec Express, intégrant des tests unitaires (Jest) et des tests e2e (Cypress), automatisés via GitHub Actions.

## Installation

```bash
npm install
```

## Lancer le serveur

```bash
node server.js
```

Le serveur démarre sur http://localhost:3000

## Lancer les tests

### Tests unitaires (Jest)

```bash
npm test
```

### Tests e2e (Cypress)

Lancer le serveur puis :

```bash
npx cypress open
```

Ou en mode headless :

```bash
npx cypress run
```

### Tests Python (pytest)

```bash
pip install pytest
pytest test_calculator.py -v
```

## CI/CD

Le projet utilise GitHub Actions avec les workflows suivants :

- **github-actions-demo.yml** : workflow de démonstration
- **app.yml** : exécution des tests Python avec pytest
- **cypress-tests.yml** : exécution des tests Cypress
- **ci-cd.yml** : pipeline complet (Jest + Cypress)
