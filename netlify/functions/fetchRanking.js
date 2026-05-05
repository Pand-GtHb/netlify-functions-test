exports.handler = async () => {
  try {
    const url = "https://initiald.sega.jp/inidac/json/ranking/v1/roundPoint/rp_round-72_area-all.json";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`SEGA API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: true,
        message: error.message
      })
    };
  }
};
