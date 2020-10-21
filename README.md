# API-Server

welcome to this api app please follow these steps to run this app:

## How to use this API server

`https://api-server-messeili.herokuapp.com/api/v1/<placeholder>`

you can use the above endpoint for this api server, change the placeholder into `categories` or `products`
you can use postman to hit the api to either get or update or delete or even add data into it
here a quick brief of how you can use the server:

1. to get all data from the api select `get` method and this this endpoint for Ex:
   [https://api-server-messeili.herokuapp.com/api/v1/products](https://api-server-messeili.herokuapp.com/api/v1/products)
   you will git all the data inside the api server

2- to get specific product also select the `get` method and hit the following endpoint with an id of the requested entry for example:
[https://api-server-messeili.herokuapp.com/api/v1/products/1](https://api-server-messeili.herokuapp.com/api/v1/products/1)

3. to add new products or categories you can select the `post` method then add a valid JSON for a new product with the following syntax :

```
{
    name: 'Huawei mate 8',
    display_name: 'Huawei',
    description: '7 inch screen 6 GB Ram 128GB storage',
    category: 'smart phones',
    id: 2,
  }
```

4. to delete or update any product you have to select `put` or `delete` method and hit the and point following by the id of that product like this:

`https://api-server-messeili.herokuapp.com/api/v1/products/:id`

[Swagger hub link](https://app.swaggerhub.com/apis/messeili/api-server/0.1)

## Visual UML

![img](/assets/app-server-lab09.jpg)
