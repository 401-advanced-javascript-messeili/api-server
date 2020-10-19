# API-Server

welcome to this api app please follow these steps to run this app:

1. in you terminal `npm i -g json-server`
2. in you terminal type the following command and hit enter `json-server --id=_id --watch ./data/db.json --routes ./data routs.json`
3. you can change your port by adding a new parameter `--port <your port>`
4. run [swagger inspector](https://inspector.swagger.io/builder) then enter your link as follows: ` http://localhost:<your local host port>/products` make sure to choose the get method, you will fetch your API data in the products section

## How to use this api server

`https://api-server-messeili.herokuapp.com/<placeholder>`

you can use the below endpoint for this api server, change the placeholder into `categories` or `products`
you can use postman to hit the api to either get or update or delete or even add data into it
here a quick brief of how you can use the server:

1. to get all data from the api select `get` method and this this endpoint for Ex:
   [https://api-server-messeili.herokuapp.com/products](https://api-server-messeili.herokuapp.com/products)
   you will git all the data inside the api server

2- to get specific product also select the `get` method and hit the following endpoint with an id of the requested entry for example:
[https://api-server-messeili.herokuapp.com/products/1](https://api-server-messeili.herokuapp.com/products/1)

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

`https://api-server-messeili.herokuapp.com/products/:id`

[Swagger hub link](https://app.swaggerhub.com/apis/messeili/api-server/0.1)

![img](/assets/app-server-2.jpg)
