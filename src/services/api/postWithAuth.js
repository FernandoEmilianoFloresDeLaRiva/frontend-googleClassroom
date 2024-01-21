export const postWithAuth = async (url, token, objectReq) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = {
      method: "POST",
      headers,
      body: JSON.stringify(objectReq),
    };
    const response = await fetch(url, body);
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};
