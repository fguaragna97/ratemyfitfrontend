export const getPosts = async () => {
  const response = await fetch(`${process.env.REACT_APP_APIURL}/api/posts`);
  const { data } = await response.json();
  return data;
};

export const newPost = async (body) => {
  const response = await fetch(`${process.env.REACT_APP_APIURL}/api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const { data } = await response.json();
  return data;
};
