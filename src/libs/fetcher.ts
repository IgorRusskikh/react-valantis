import cryptoJS from 'crypto-js';

interface fetcherArgs {
  action: string;
  params: {};
}

const BASE_URL = "https://api.valantis.store:41000/";

const fetcher = async ({ action, params }: fetcherArgs) => {
  try {
    if (!action || !params) {
      return null;
    }

    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const authToken = cryptoJS.MD5(`Valantis_${timestamp}`).toString();

    const response = await fetch(BASE_URL, {
      cache: "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth": authToken,
      },
      body: JSON.stringify({
        action: action,
        params: params,
      }),
    });

    if (response.status !== 200) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetcher;
