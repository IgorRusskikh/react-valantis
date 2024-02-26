import axios from 'axios';

interface fetcherArgs {
  action: string;
  params: {};
}

const fetcher = async ({ action, params }: fetcherArgs) => {
  try {
    if (!action || !params) {
      return null;
    }

    const response = await axios.post(
      "https://api.valantis.store:41000/",
      {
        action: action,
        params: params,
      },
      {
        headers: {
          "x-auth": "cd0bfbcb48b87cbb908ce771120bb507",
        },
      }
    );

    if (response.status !== 200) {
      return null;
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetcher;
