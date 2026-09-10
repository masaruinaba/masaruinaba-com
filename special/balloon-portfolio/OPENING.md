# Opening

`opening.js` and `opening.css` implement the six Figma compositions as a DOM layer over the existing WebGL experience. Each visit chooses one character and its authored colors. Text enters in clipped, staggered words; the character rotates in. After at least 2.8 seconds and WebGL readiness, the background dissolves and the existing crowd burst starts underneath the exiting character. The opening is removed after 900 ms, and controls become interactive again.

Reduced motion shows the composition without rotation and moves directly into the scene. Image decode has a five-second upper bound; scene initialization failure removes the opening and displays the existing error message.

To inspect a specific composition, use `?opening=blue` (or triangle, star, flower, coil, round). In development only, append `&openingPreview=1` to hold the composition for layout review. Production ignores this hold flag. Without parameters the selection is random.

Source assets and Figma attribution: `public/opening/SOURCE.md`.
