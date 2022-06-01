export const getPosts = async () => {
  const response = await fetch(`${process.env.REACT_APP_APIURL}/api/posts`);
  const { data } = await response.json();
  return data;
};
