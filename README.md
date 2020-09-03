### Node with Express in TypeScript 1

# Node with Express in TypeScript

## Flow

####  Endpoint: /api

#### Base of the API URL, each request will pass through this route and then will be

#### directed towards router middle-ware which will further direct the route to

#### either v1 or v2 depending upon what is passed in the endpoint.

#### Example: the router will direct request to v2 if /api/v2 is called, similarly for v

####  Endpoint: /api/v1/parse

#### This endpoint will take the request and give a response depending upon the

#### function that is inside it. The interfaces are also linked and the response will

#### be of the data type defined in interface.

## Request (demo)

```
// Request Body
{
"data": "TEST0000USER0009994567"
}
```
## Response

```
// Interface
interface Response {
firstName: string;
lastName: string;
clientId: string;
}
// Final Response
{
statusCode: 200,
result: Response,
}
```

### Node with Express in TypeScript 2

## Lifecycle


