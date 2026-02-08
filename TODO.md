# TODO — Prochaines étapes portfolio lorisdrid.github.io

## 🌐 Configuration nom de domaine OVHcloud

### 1. Acheter le domaine
- Aller sur https://www.ovhcloud.com/fr/domains/
- Rechercher `lorisdrid.com`
- Commander le domaine (~8€ HT/an pour un .com)
- Créer un compte OVHcloud si pas encore fait

### 2. Configurer les DNS chez OVH
Dans l'espace client OVH → Noms de domaine → lorisdrid.com → Zone DNS :
- Supprimer les enregistrements A existants pour `@`
- Ajouter **4 enregistrements A** pour `@` pointant vers GitHub Pages :
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Ajouter **1 enregistrement CNAME** :
  - Nom : `www`
  - Cible : `lorisdrid.github.io.` (avec le point final)

### 3. Configurer GitHub Pages
- Aller sur github.com/LorisDrid/lorisdrid.github.io → Settings → Pages
- Dans "Custom domain" → entrer `lorisdrid.com` → Save
- Cocher "Enforce HTTPS" (disponible après propagation DNS)

### 4. Ajouter le fichier CNAME dans le projet
- Créer le fichier `static/CNAME` contenant uniquement : `lorisdrid.com`
- Ce fichier sera copié dans `public/` à chaque build Zola

### 5. Mettre à jour config.toml
- Changer `base_url = "https://lorisdrid.github.io"` en `base_url = "https://lorisdrid.com"`

### 6. Push et attendre
- `git add . && git commit -m "custom domain" && git push`
- Attendre la propagation DNS (quelques minutes à 24h max)
- Vérifier avec `dig lorisdrid.com` ou https://dnschecker.org

---

## 📸 Images à ajouter
- `static/images/arvard-preview.png` — screenshot du projet ARVARD
- `static/images/per-muvin-preview.png` — screenshot du projet PER-MUVIN  
- `static/images/manga-ocr-preview.png` — screenshot du projet Manga OCR Translator

## 📄 CV à ajouter
- Copier le PDF du CV dans `static/CV_LORIS_DRID.pdf`

## 🏢 Logos entreprises/écoles (optionnel)
- `static/images/sap-logo.png` → décommenter `logo = ...` dans data.toml
- `static/images/dniit-logo.png`
- `static/images/polytech-logo.png`
- `static/images/fauriel-logo.png`

## 🔧 Améliorations possibles
- Ajouter traductions FR pour les pages projets portfolio (markdown)
- Ajouter favicon personnalisé
- Ajouter SEO meta tags (Open Graph image, etc.)
- Optionnel : Cloudflare en proxy (CDN, analytics, protection DDoS) — pas nécessaire pour commencer
