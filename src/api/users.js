export const newUser = async (body) => {
  const response = await fetch(
    `${process.env.REACT_APP_APIURL}/api/users/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const { data } = await response.json();
  return data;
};

export const LoginUser = async (body) => {
  const response = await fetch(
    `${process.env.REACT_APP_APIURL}/api/users/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  const { data } = await response.json();
  return data;
};
