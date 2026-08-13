# Portfolio — Carlo Scimeca

Sito statico (HTML/CSS/JS puro, nessuna build necessaria) pronto per GitHub Pages.

## Struttura

```
index.html
css/style.css
js/script.js
assets/cv/Carlo_Scimeca_CV.pdf        ← bottone "Scarica CV"
assets/projects/*.zip                 ← placeholder, DA SOSTITUIRE con i tuoi file reali
```

## Come pubblicarlo su GitHub Pages

1. Crea un repository su GitHub. Se vuoi che il sito sia raggiungibile su
   `https://<tuo-username>.github.io/`, il repository deve chiamarsi
   esattamente `<tuo-username>.github.io`. In alternativa puoi usare un
   nome qualsiasi (es. `portfolio`) e il sito sarà su
   `https://<tuo-username>.github.io/portfolio/`.
2. Carica tutto il contenuto di questa cartella nella root del repository
   (via web "Add file → Upload files", oppure con git da terminale).
3. Vai su **Settings → Pages** del repository.
4. In "Build and deployment" seleziona come Source: `Deploy from a branch`,
   branch `main`, cartella `/ (root)`. Salva.
5. Dopo 1-2 minuti il sito sarà online all'indirizzo indicato in cima alla
   pagina Settings → Pages.

## Cosa personalizzare prima di pubblicare

- **Link social**: nel file `index.html` cerca `social-list` e sostituisci
  l'URL GitHub/LinkedIn con i tuoi reali.
- **Progetti**: sostituisci gli archivi placeholder in `assets/projects/`
  con i tuoi file veri (stesso nome file o aggiorna il link `href` nella
  sezione "Progetti" di `index.html`), e aggiorna titolo/descrizione/tag
  di ogni card.
- **CV**: se aggiorni il CV, sostituisci il PDF in `assets/cv/` mantenendo
  lo stesso nome file (`Carlo_Scimeca_CV.pdf`), oppure aggiorna il link
  nel file `index.html` (cercare `Carlo_Scimeca_CV.pdf`, presente in due punti).
- **Foto**: al momento l'avatar è un cerchio con le iniziali "CS". Se vuoi
  una tua foto, aggiungi l'immagine in `assets/img/` e sostituisci il div
  `.avatar-mono` in `index.html` con un tag `<img>`.
