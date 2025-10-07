# Steam Widget

A lightweight widget for your personal website that displays the last game you played on Steam along with your hours.

⚠️ Note: Your Steam profile must be public for this to work.

## Example:

![Steam Widget Demo](https://raw.githubusercontent.com/strawberrysnails/steam-widget/refs/heads/main/screenshot.png)

# How to use

## 1. Simple installation:

Paste this code into your website where you want the widget to appear:
```
<script src="https://strawberrysnails.github.io/widgets/js/steam-widget.js?steamid=YOUR_STEAM_ID_HERE"></script>
```

Replace YOUR_STEAM_ID_HERE with your Steam 64-bit ID.

Find your Steam ID here: [steamid.io](https://steamid.io/)

## 2. Optional: Custom Styling
You can change the widget’s look with CSS. Add this to your site’s stylesheet or inside a <style> tag:
```
<style>
.steam-widget {
    background: linear-gradient(180deg,rgba(121, 121, 121, 1)0%,rgba(93, 93, 93, 1) 100%);
    color: #ffffff;
    font-family: "Segoe UI", sans-serif;
    border-radius: 12px;
    padding: 1rem;
    border: 1px solid #fff;
    filter: drop-shadow(5px 5px 4px #202020);
  }

  .steam-widget strong {
    color: #ffffff;
    text-shadow: 1px 1px 2px #000;
  }
</style>
```

Tip: You can target .steam-widget to change fonts, colors, spacing, and more.

# Contact

If you have any questions, comments, feedback, ect please feel free to [email me](mailto:hello@snails.town)!
