export const updateWithoutAuth = async (url, objectReq) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      method: "PUT",
      headers,
      body: JSON.stringify(objectReq),
    };
    const response = await fetch(url, body);
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};
