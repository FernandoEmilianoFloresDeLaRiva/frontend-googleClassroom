export const postWithoutAuth = async (url, objectReq) => {
  try {
    const headers = {
      "Content-Type": "application/json",
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
