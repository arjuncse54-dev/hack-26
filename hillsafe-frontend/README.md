# HillSafe frontend prototype

A responsive, vanilla HTML/CSS/JavaScript frontend prototype for HillSafe. It includes:
- Login/signup prototype
- Dashboard
- Travel route form and Leaflet/OpenStreetMap map
- Illustrative road-hazard markers and route preview
- Report submission and My Reports
- Comments, helpful reactions, delete-own-report interaction
- Demo moderation status updates and resolved-marker removal
- Offline status / local pending-sync demonstration

## Run it

Because the map and fonts load from CDNs, internet is needed for the map tiles and styling fonts. You can open `index.html` directly in a browser, or run a local server from this folder:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

Demo login:
- Email: `traveller@hillsafe.demo`
- Password: `hillsafe123`

## Important prototype limitations

- All accounts and reports are stored in this browser's `localStorage`; they do not sync between devices.
- This is not connected to Firebase yet. Replace the local authentication and data functions with Firebase Authentication and Cloud Firestore before deployment.
- Moderator access is only a UI demonstration. The Alt-click profile shortcut is intentionally a prototype preview and is NOT secure authorization. In production, moderator roles must be enforced with Firebase custom claims / trusted role assignment and Firestore Security Rules.
- The route line, distances, and incident coordinates are illustrative demo data, not real directions or live road conditions. The route form currently previews a demo route; connect a routing API for real route geometry.
- The report photo field currently stores only the filename. Connect Firebase Storage to upload images.
- Offline report handling is a local prototype only. Use Firestore offline persistence and/or an explicit local queue for reliable offline writes and sync.
- The OpenStreetMap standard tile server requires attribution and must not be bulk-downloaded or used to prefetch offline tiles. Use a suitable tile provider or self-hosted tiles for true offline maps.

## Suggested next step

Connect Firebase Authentication first, then Cloud Firestore for reports/comments/status changes. Keep the existing visual components and replace the demo storage functions in `app.js` with Firebase calls.
