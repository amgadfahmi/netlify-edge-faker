## Netlify Edge Function + Faker JS 

The function is heavily depending on FakerJS APIs, its expecting a **POST** request with category and final api function name and its parameters, all the APIs references can be found here:

**FakerJS API**
https://fakerjs.dev/api/


**The Function url** 
https://edge-func-faker.netlify.app/fake-me


##Data In-Out
A sample post request body should look like this 

``` json 
{
  "name": {
    "prefix": "female",
    "fullName": {
      "sex": "female"
    },
    "jobType": "",
    "jobTitle": ""
  },
  "address": {
    "city": "",
    "streetAddress": "",
    "zipCode": "######"
  },
  "internet": {
    "avatar": "",
    "email": "",
    "userName": "Jone"
  },
  "lorem": {
    "word": 8,
    "sentence": 5,
    "paragraph": 2
  }
}

```
And response : 
```json 
[
  {
    "prefix": "Mrs.",
    "fullName": "Kristie Lang",
    "jobType": "Agent",
    "jobTitle": "Central Group Liaison",
    "city": "Baton Rouge",
    "streetAddress": "567 Cole Harbors",
    "zipCode": "896128",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1053.jpg",
    "email": "Craig.Beer13@yahoo.com",
    "userName": "jone.Hoppe84",
    "word": "corporis",
    "sentence": "Unde corporis totam libero dignissimos.",
    "paragraph": "Aut eos vero qui. Omnis sed facilis aliquam. Qui repellat nihil ut eaque facere ut eum. Aliquam iste nihil quo nostrum aut cupiditate."
  }
]
```

##Query parameters 
The function can accept only one parameter which is **repeat** (Default is 1), the value passed for this parameter will affect the number of results returning, check the below example 

https://edge-func-faker.netlify.app/fake-me?repeat=2

Applying this to the first request we sent, we would be expecting a result like this: 

```json
[
  {
    "prefix": "Ms.",
    "fullName": "Marguerite Veum",
    "jobType": "Engineer",
    "jobTitle": "Direct Branding Developer",
    ...
   },
  {
    "prefix": "Mr.",
    "fullName": "Velma Block",
    "jobType": "Liaison",
    "jobTitle": "Dynamic Marketing Supervisor",
    ...
  }
]
```

##Roadmap 

- [x] Repeat limits to 100 result as of now
- [ ] Rate limiter per unique request 
- [ ] Caching for better response 
- [ ] Logs and stats in general
- [ ] Update function home page with a live dynamic example 
