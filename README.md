# RAVENS R4VS — Website

## Open locally
1. Extract this ZIP.
2. Open the extracted folder in Visual Studio Code.
3. Install the **Live Server** extension.
4. Right-click `index.html` and choose **Open with Live Server**.

## Add your official logo
Create/use the `assets` folder and place your logo there as:
`ravens-logo.png`

The header and homepage automatically hide the image if the file is missing. Use a transparent PNG if possible.

## Important edits before publishing
- In `script.js`, replace `YOUR-EMAIL@example.com` with the club's recruitment email.
- In `join.html`, replace the placeholder email address in the CS2 contact link.
- Add verified player roles, photos, statistics and social links. The site intentionally does not invent these details.
- Add real match dates, opponents and scores when confirmed.

## Pages
- `index.html` — Home
- `roster.html` — Choose a division
- `cs2.html` — Counter-Strike 2 roster and interactive player profiles
- `rocket-league.html` — Rocket League roster, match centre and application form
- `matches.html` — Organization match centre
- `join.html` — Recruitment information

## Notes
The Rocket League application currently prepares an email draft using `mailto:`. It does not store submissions on a server. To receive applications automatically, connect a form service or backend.
