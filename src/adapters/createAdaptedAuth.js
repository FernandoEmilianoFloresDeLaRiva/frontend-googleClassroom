export const createAdaptedAuth = (resUser) => {
  console.log(resUser);
  const { name, token, id } = resUser;
  const formattedAuth = {
    idUser: id,
    name: name,
    token,
    token,
  };
  return formattedAuth;
};
