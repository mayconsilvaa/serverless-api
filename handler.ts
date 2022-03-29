import { APIGatewayEvent } from "aws-lambda";

export const hello = async (event: APIGatewayEvent) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: "Go Serverless v3.0! Your function executed successfully!",
      input: event.queryStringParameters,
    },
    null,
    2
  ),
});
