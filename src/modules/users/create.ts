export const createuser = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "CreateUser",
    }),
  };
};
