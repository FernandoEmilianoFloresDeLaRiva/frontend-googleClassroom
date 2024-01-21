export const getWithAuth = async (url, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(url, { headers });
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};
