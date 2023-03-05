## Netlify Edge Function + Faker JS 

The function expecting a post request with a category and final api function name and its parameters, all the APIs references can be found here:

**FakerJS API**
https://fakerjs.dev/api/


##Data In-Out
A sample post request body should look like this 

``` json 
{
    "name": {
        "firstName": "",
        "lastName": "female"
    },
    "animal": {
        "bear": ""
    },
    "lorem": {
        "word": 8
    }
}
```
And response : 
```json 
[
    {
        "firstName": "Mossie",
        "lastName": "Cremin",
        "bear": "Spectacled bear",
        "word": "possimus"
    }
]
```

##Query parameters 
The function can accept only one parameter which is **repeat**, the value passed for this parameter will affect the number of results returning, check the below example 

http://function-url/fake-me?repeat=2

Applying this to the first request we sent, we would be expecting a result like this: 

```json
[
    {
        "firstName": "Lorena",
        "lastName": "Lubowitz",
        "bear": "American black bear",
        "word": "repellat"
    },
    {
        "firstName": "Alva",
        "lastName": "Leffler",
        "bear": "American black bear",
        "word": "voluptas"
    }
]
```

##Roadmap 

- Rate limiter 
- Repeat limits 
- Caching 
- Logs and stats 
