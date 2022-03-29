export const healthz = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverless is Running",
    }),
  };
};
