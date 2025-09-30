export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/steam") {
      const steamId = url.searchParams.get("steamid");
      if (!steamId) {
        return new Response("Missing steamid", {
          status: 400,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      try {
        const res = await fetch(
          `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${env.STEAM_API_KEY}&steamid=${steamId}`,
          { method: "GET" }
        );
        const json = await res.json();

        if (!json.response?.games || json.response.games.length === 0) {
          return new Response(JSON.stringify({ game: null }), {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
        }

        const game = json.response.games[0];
        return new Response(
          JSON.stringify({
            name: game.name,
            hours: (game.playtime_forever / 60).toFixed(1),
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          status: 500,
        });
      }
    }

    return new Response("Not found", {
      status: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  },
};
