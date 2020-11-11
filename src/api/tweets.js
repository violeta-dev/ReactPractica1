import client from './client';

const tweetsBaseUrl = '/api/v1';

export const getLatestTweets = () => {
  const url = `${tweetsBaseUrl}/tweets`;
  return client.get(url);
};
