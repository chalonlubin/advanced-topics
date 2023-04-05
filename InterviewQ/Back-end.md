<!-- First attempt, no lookups just raw answers -->
What is the call stack?
  The call stack is where functions go when they are being evaluated. FILO structure, where functions are pushed on a popped off.
What is Express middleware?
  Express middleware can assigned be run before certain functions. It is often used for authorization and authentication of users.
What is an advantage of using Node.js compared to Python or PHP?
  Node.js is a javascript run time environment. The major benefit is that your entire front end and back end can be in the same language, and it feels a bit more cohesive.
What is Node.js? /What is Express.js?
  Node.js is a javascript run time environment. Express is a framework, the most popular framework for node.js as of now.
What is the meaning of data redundancy and why is it important to mimic?
  * Not sure
What is DDL and give me some DDL examples?
  * I do not recall what DDL stands for.
What is a RESTful API / what makes it RESTful?
  A RESTful API is a paradigm of how an API should be accessed, with the goal of having a universal way to access each API across companies / programs.  REST API's are structured in a certain way, with CRUD operations structured as PLURAL/SINGULAR/ID (simply put). REST API's are often headless, and can not closely coupled with front-ends.
How could I scale my Flask app to handle more traffic?
  * Not sure
  - Best Guess: My goal would be to reduce server load by having the browser / front-end do more work, so utilizing caching and storing temporay data in cookies so it can be accessed easily on revisit instead of pinging the server.
How is a hash function for a hash table different than a hash function for security?
  * Not confident here
  - Best guess: Hash function for security involves hashing a password, and comparing hashes. Hash function for a table would involve storing data in an efficient manner, that can recall locations in a map easily but does not manipulate the data in the table.
What is caching?
  * Not confident
  - Best Guess: Caching is temporarily storing data to make it more readily available and reduce load on servers
What is docker?
  * Docker is a container for running an application, docker makes it so that many folks can run the app in the same run environment
What is a lambda function?
  * Not sure
  - Best Guess: I remember lecture mentioning it had something to do with python's way of async calls but I'm not certain.
How does python and express differ with respect to managing 3rd party dependencies
  - Express stores instructions in package.json, and are installed there with npm. Python uses an environment and you install it there with a different package manage, pip.
What is difference between SQL Injection and XSS
  * Not confident
  - SQL Injection looks to manipulate the database and is a form of cyber attack.
  - I do not remember what XSS stands for.
What are design patterns and give me an example of one
  * Not confident
  - Design patterns are ways of organizing an application. A common design pattern would be a RESTful or SOAP API.
What is the purpose of Amazon S3?
  * Not confident
  - To store media, text files, and items that would not fit naturally in a database
How have you deployed applications?
  - I have deployed applications in several ways. First, I run the build command and correct errors. Then I grab the .env variables that may be hidden on the repo, and plug them into the deployment application I am using. If this is backend, I will also upload the current data to a cloud based storage center so I can access it that way. I then deploy the backend, and connect the frontend if required, which usually is through another deployment venue. I've used Surge, Render, Heroku, Railway, and Netlify. I've also used Elephant SQL.
What is a load balancer?
  * Not confident
  - A load balancer acts as a traffic director for your server, and distributes the load however it was programmed to.
If you wanted to limit the number of API requests to a particular endpoint for a particular user, how would you do that?
  * Not confident
  - I could probably limit by IP address, and track how many requests they have done in total on the backend. I don't know exactly what the code looks like, but I was part of a sprint where that was a ticket, and I don't remember it being incredibly difficult. I am confident I would be able to figure it out in a short amount of time.
If you wanted to develop a fault tolerant system, what things would you have to consider?
  * Not confident
  - Many things. You would need to consider area of users, average load, common times for extreme loads (holidays, sales?), make sure it was tested correctly, and how we backup the data.
What are some differences between MongoDB and Postgres?
  * Not confident
  - MongoDB is a NoSQL framework, data is stored in JSON like objects. Postgres is great for relational databases, and utilizes SQL for queries, which can be a bit harder to work with but much more powerful than NoSQL.
What is the purpose of a database like Redis or Memcached?
  * Not sure
  - Best Guess: Redis iirc is a great way to backup or store cached data?
What is the difference between horizontal and vertical scaling?
  * Not confident
  - horizontal in a backend context would mean adding more servers. Vertical scaling would be improving tech of what you currently have.
How can you reduce the load time of a web page?
  * Not confident
  - SSR is faster than JS compiling. You can also reduce the size of images and optimize them for the web.
What is a CDN?
  * I do not recall what CDN stands for.
What is a "primary key" in a database?
  * Needs work
  - A primary key is used as a unique identifier
What are Constraints and give me two examples
  Constraints are limits of what a key can be. For example, a unique constraint only allows for one row of data to contain "chalon@gmail.com" or whatever that key data may have.
What are some drawbacks of Server Side Rendering?
  * Not confident
  - More load on the server
What is an advantage of building my back-end as an API?
  * Not confident
  - It is headless, can can be interacted with in many ways through many applications. It allows for versatility.

<!-- Second attempt, after researching unclear answers and waiting a day.  -->
What is the call stack?
What is Express middleware?
What is an advantage of using Node.js compared to Python or PHP?
What is Node.js? /What is Express.js?
What is the meaning of data redundancy and why is it important to mimic?
What is DDL and give me some DDL examples?
What is a RESTful API / what makes it RESTful?
How could I scale my Flask app to handle more traffic?
How is a hash function for a hash table different than a hash function for security?
What is caching?
What is docker?
What is a lambda function?
How does python and express differ with respect to managing 3rd party dependencies
What is difference between SQL Injection and XSS
What are design patterns and give me an example of one
What is the purpose of Amazon S3?
How have you deployed applications?
What is a load balancer?
If you wanted to limit the number of API requests to a particular endpoint for a particular user, how would you do that?
If you wanted to develop a fault tolerant system, what things would you have to consider?
What are some differences between MongoDB and Postgres?
What is the purpose of a database like Redis or Memcached?
What is the difference between horizontal and vertical scaling?
How can you reduce the load time of a web page?
What is a CDN?
What is a "primary key" in a database?
What are Constraints and give me two examples
What are some drawbacks of Server Side Rendering?
What is an advantage of building my back-end as an API?