# Serverless Framework Node REST API on AWS

This template demonstrates how to make a simple REST API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

## Usage

- Serverless Framework ✔
- Typescript ✔
- AWS ✔
- Jest (Pending)

### Deployment

```
$ serverless deploy
```

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/dev
```

Which should result in response similar to the following.

```json
{
  "message": "Serverless is Running"
}
```
