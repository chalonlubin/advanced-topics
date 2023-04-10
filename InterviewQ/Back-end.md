<!-- First attempt, no lookups just raw answers -->
<!-- **After lookup** -->

### What is the call stack?

<!-- The call stack is where functions go when they are being evaluated. FILO structure, where functions are pushed on a popped off. -->

_The call stack is a data structure that manages function calls and their execution context, keeping track of where the program is in its execution flow. It uses a "last-in, first-out" (LIFO) principle to manage the order of function calls and their return points._

### What is Express middleware?

<!-- Express middleware can assigned be run before certain functions. It is often used for authorization and authentication of users. -->

_Express middleware is a series of functions in an Express application that have access to the request and response objects, allowing developers to perform operations like modifying requests, handling authentication, or managing responses before reaching the final route handler or subsequent middleware._

### What is an advantage of using Node.js compared to Python or PHP?

<!-- Node.js is a javascript run time environment. The major benefit is that your entire front end and back end can be in the same language, and it feels a bit more cohesive. -->

_An advantage of using Node.js is its non-blocking, event-driven architecture, which enables efficient handling of numerous simultaneous connections, making it well-suited for scalable, real-time applications and high-performance web services compared to Python or PHP. It also simplifies the development process since there is not a switching of languages._

What is Node.js?

<!-- Node.js is a javascript run time environment. -->

_Node.js is a runtime environment built on the V8 JavaScript engine, enabling developers to create server-side applications using JavaScript. It is known for its non-blocking, event-driven architecture, making it efficient for handling concurrent connections and real-time applications._

### What is Express.js?

<!-- Express is a framework, the most popular framework for node.js as of now. -->

_Express.js is a popular web application framework for Node.js, designed to simplify the process of building web applications and APIs. It provides essential features like routing, middleware support, and easy handling of request and response objects, enabling developers to quickly create and manage server-side applications._

What is the meaning of data redundancy and why is it important to mimic?

<!-- Not sure -->

_Data redundancy refers to the presence of duplicate data within a system, usually as a result of storing the same information in multiple places. It is important to minimize or manage data redundancy in databases to improve efficiency, reduce storage costs, and ensure data consistency. However, in some cases, data redundancy can be intentionally introduced, such as in backup systems, to improve fault tolerance and ensure data availability in the event of data loss or system failure._

### What is DDL and give me some DDL examples?

<!--  I do not recall what DDL stands for. -->

_DDL, or Data Definition Language, is a subset of SQL commands used to create, modify, or delete database structures, such as tables, schemas, and indexes, but not the data within them. Some common DDL examples include:_

CREATE TABLE - creates a new table with specified columns and data types.
ALTER TABLE - modifies an existing table, such as adding, renaming, or dropping columns, or changing column data types.
DROP TABLE - deletes an existing table and all of its data.
CREATE INDEX - creates an index on one or more columns of a table to improve query performance.

### What is a RESTful API / what makes it RESTful?

<!-- A RESTful API is a paradigm of how an API should be accessed, with the goal of having a universal way to access each API across companies / programs. REST API's are structured in a certain way, with CRUD operations structured as PLURAL/SINGULAR/ID (simply put). REST API's are often headless, and can not closely coupled with front-ends. -->

_A RESTful API is an interface that follows the REST architectural principles, featuring stateless communication, client-server architecture, cacheability, a layered system, and a uniform interface. It uses standardized protocols like HTTP and common methods like GET, POST, PUT, and DELETE for interacting with resources._

_In Depth_
A RESTful API is an application programming interface that adheres to the principles of Representational State Transfer (REST) architecture. It is characterized by:

Stateless communication: Each request from a client to a server must contain all the information needed to process that request, without relying on any stored context on the server.
Client-Server architecture: The client and server are separate entities that communicate over a standardized protocol, such as HTTP.
Cacheability: Responses from the server can be cached by the client to improve performance and reduce server load.
Layered system: Components are organized in a layered architecture, where each layer has specific functionality and can be developed independently.
Uniform interface: A consistent set of rules and conventions is used for interacting with resources, including standard HTTP methods like GET, POST, PUT, and DELETE for performing CRUD operations.

### How could I scale my Flask app to handle more traffic?

<!-- * Best Guess: My goal would be to reduce server load by having the browser / front-end do more work, so utilizing caching and storing temporary data in cookies so it can be accessed easily on revisit instead of pinging the server. -->

**To scale a Flask app to handle more traffic, you can:**

- Use a production-ready web server like Gunicorn or uWSGI, and a reverse proxy like Nginx or Apache to handle incoming requests more efficiently.
- Implement caching to reduce server load and improve response times.
- Optimize database queries and utilize indexing to enhance performance.
- Use a load balancer to distribute traffic across multiple instances of your application.
- Consider horizontal scaling by adding more servers or using containerization and orchestration tools like Docker and Kubernetes.

### How is a hash function for a hash table different than a hash function for security?

<!-- * Best guess: Hash function for security involves hashing a password, and comparing hashes. Hash function for a table would involve storing data in an efficient manner, that can recall locations in a map easily but does not manipulate the data in the table. -->

\*_A hash function for a hash table focuses on generating well-distributed hash values for a given set of keys to minimize collisions and provide fast access to the data in the table. It usually aims for speed and simplicity._

\*_A hash function for security, such as a cryptographic hash function, focuses on providing one-way, collision-resistant, and deterministic properties, making it extremely difficult to derive the original input or find two different inputs with the same hash value. It is typically more complex and computationally intensive compared to a hash table's hash function._

### What is caching?

<!-- * Best Guess: Caching is temporarily storing data to make it more readily available and reduce load on servers
  What is docker? -->

\*_Caching is a technique used in computing to store frequently accessed or computed data temporarily in a storage system with fast retrieval times, so that future requests for that data can be served more quickly. By reducing the need for resource-intensive operations, such as database queries or complex calculations, caching can significantly improve the performance, efficiency, and responsiveness of applications or systems._

### What is Docker?

<!-- - Docker is a container for running an application, docker makes it so that many folks can run the app in the same run environment -->

\*_Docker is an open-source platform that simplifies the process of building, deploying, and managing applications using containerization. It allows developers to package applications and their dependencies into lightweight, portable containers that run consistently across different environments, thereby streamlining development, testing, and deployment processes while ensuring application reliability and consistency._

### What is a lambda function?

<!-- An anonymous function  -->

_A lambda function, also known as an anonymous function, is a small, single-use, and inline-defined function that doesn't have a formal name. Lambda functions are commonly used in programming languages like Python, JavaScript, and Java for short operations, often as arguments for higher-order functions that take other functions as input, such as map(), filter(), or reduce()._

### How does python and express differ with respect to managing 3rd party dependencies

<!-- - Express stores instructions in package.json, and are installed there with npm. Python uses an environment and you install it there with a different package manage, pip. -->

_Python:_
Uses the package manager pip to install and manage third-party packages.
Dependencies are specified in a requirements.txt file, listing package names and versions.
The Python Package Index (PyPI) serves as the central repository for third-party packages.

_Express (Node.js):_
Utilizes the package manager npm or yarn to install and manage third-party packages.
Dependencies are specified in a package.json file, containing package names and version ranges.
The npm registry functions as the central repository for third-party packages in the Node.js ecosystem.

### What is difference between SQL Injection and XSS

<!-- * SQL Injection looks to manipulate the database and is a form of cyber attack.
* I do not remember what XSS stands for. -->

_SQL Injection: This vulnerability occurs when an attacker is able to inject malicious SQL code into a query, which is then executed by the database. It usually results from inadequate input validation and can lead to unauthorized access, data manipulation, or data disclosure._

_XSS (Cross-Site Scripting): This vulnerability occurs when an attacker injects malicious scripts (typically JavaScript) into a web application, which then execute within the victim's browser. XSS attacks exploit inadequate output encoding or input validation and can lead to stealing sensitive information, session hijacking, or defacing web pages._

### What are design patterns and give me an example of one

_Design patterns are proven solutions to commonly occurring software design problems. An example of a design pattern is the Observer pattern, which establishes a one-to-many dependency between objects, where a change in one object triggers updates in all its dependent objects. An example of the Observer pattern is a weather monitoring application, where the weather station object is the subject and the display objects are the observers that get notified when there is a weather change._

```
Another popular design pattern is the Model-View-Controller (MVC) pattern. The MVC pattern separates an application into three interconnected components:

Model: Represents the data and the business logic of the application.
View: Presents the data to the user and handles user input.
Controller: Acts as an intermediary between the model and the view, handling user input and updating the model and view accordingly.
```

### What is the purpose of Amazon S3?

<!-- * To store media, text files, and items that would not fit naturally in a database -->

_Amazon S3 (Simple Storage Service) is a highly scalable cloud-based storage service provided by Amazon Web Services (AWS). Its purpose is to provide developers and businesses with a simple, durable, and cost-effective way to store and retrieve any amount of data, at any time and from anywhere on the web._

### How have you deployed applications?

- I have deployed applications in several ways. First, I run the build command and correct errors. Then I grab the .env variables that may be hidden on the repo, and plug them into the deployment application I am using. If this is backend, I will also upload the current data to a cloud based storage center so I can access it that way. I then deploy the backend, and connect the frontend if required, which usually is through another deployment venue. I've used Surge, Render, Heroku, Railway, and Netlify. I've also used Elephant SQL.

### What is a load balancer?

<!-- * A load balancer acts as a traffic director for your server, and distributes the load however it was programmed to. -->

**A load balancer is a device or software that distributes incoming network traffic across multiple servers, preventing server overloads and improving application performance, reliability, and availability.**

### If you wanted to limit the number of API requests to a particular endpoint for a particular user, how would you do that?

<!-- * I could probably limit by IP address, and track how many requests they have done in total on the backend. I don't know exactly what the code looks like, but I was part of a sprint where that was a ticket, and I don't remember it being incredibly difficult. I am confident I would be able to figure it out in a short amount of time. -->

**You can limit the number of API requests to a particular endpoint for a particular user by implementing rate limiting. This involves setting a maximum number of requests that a user can make within a specific time period, such as 100 requests per minute, and responding with an error if the limit is exceeded. You can also use API keys or tokens to track usage and restrict access if necessary.**

### If you wanted to develop a fault tolerant system, what things would you have to consider?

<!-- * Many things. You would need to consider area of users, average load, common times for extreme loads (holidays, sales?), make sure it was tested correctly, and how we backup the data. -->

_To develop a fault-tolerant system, you need to consider redundancy, error handling, load balancing, scalability, security, and testing. You should design the system with redundant components, implement error handling and recovery mechanisms, use load balancing techniques, ensure scalability, implement security measures, and test the system under various failure scenarios._

```
To develop a fault-tolerant system, you need to consider several key factors:

Redundancy: You should design the system with redundant components, such as multiple servers, databases, and network connections, so that if one component fails, the others can take over without disruption.

Error handling: You should implement error handling and recovery mechanisms that can detect errors, isolate faults, and recover from failures. This may include automatic failover, backup and restore procedures, and monitoring and logging tools.

Load balancing: You should use load balancing techniques, such as round-robin, random, or weighted distribution, to distribute traffic evenly across the redundant components and prevent overloading.

Scalability: You should design the system to be scalable, so that it can handle increases in traffic and load without performance degradation or failure. This may include horizontal scaling, vertical scaling, or auto-scaling techniques.

Security: You should implement security measures to protect the system from malicious attacks, such as denial of service, injection, or intrusion. This may include authentication, authorization, encryption, and intrusion detection and prevention.

Testing: You should thoroughly test the system under various failure scenarios, such as component failures, network outages, or high loads, to ensure that it can withstand and recover from such failures.

Developing a fault-tolerant system requires careful consideration of the specific requirements, constraints, and risks of the system, and may involve trade-offs between cost, complexity, and performance.
```

### What are some differences between MongoDB and Postgres?

<!-- * MongoDB is a NoSQL framework, data is stored in JSON like objects. Postgres is great for relational databases, and utilizes SQL for queries, which can be a bit harder to work with but much more powerful than NoSQL. -->

_MongoDB is a NoSQL database that stores data in flexible, semi-structured documents, while Postgres is a relational database that stores data in tables with strict schemas and relationships. MongoDB is designed for horizontal scalability, while Postgres is designed for vertical scalability and has stronger consistency guarantees._

**MongoDB** _is a good choice for applications that require flexible and scalable data storage, especially for unstructured or semi-structured data, such as content management systems, real-time analytics, IoT, and mobile/web applications._

**Postgres** _is a good choice for applications that require strict data consistency, complex transactions, and advanced SQL features, especially for relational or structured data, such as financial applications, e-commerce applications, business intelligence applications, and legacy applications._

### What is the purpose of a database like Redis or Memcached?

<!-- * Best Guess: Redis iirc is a great way to backup or store cached data? -->

_Redis and Memcached are in-memory key-value stores used for caching and high-performance data storage. They are used to provide fast and efficient access to frequently used data, reducing the need to query slower databases or services._

What is the difference between horizontal and vertical scaling?

<!-- * horizontal in a backend context would mean adding more servers. Vertical scaling would be improving tech of what you currently have. -->

_Horizontal scaling involves adding more servers or nodes to a system to handle increasing load, while vertical scaling involves adding more resources, such as CPU or memory, to a single server or node. Horizontal scaling is preferred for large-scale and highly available systems, while vertical scaling is often simpler and more cost-effective for small to medium-sized systems._

### How can you reduce the load time of a web page?

<!-- * SSR is faster than JS compiling. You can also reduce the size of images and optimize them for the web. -->

_To reduce the load time of a web page, you can optimize images, minify code, use caching, reduce HTTP requests, and optimize server response time. By doing so, you can improve performance and provide a better user experience._

### What is a CDN?

_A CDN (Content Delivery Network) is a network of servers that work together to provide fast delivery of web content to users. It reduces latency and improves load times by delivering content from the server closest to the user, reducing the distance the data has to travel. CDNs are particularly useful for large-scale websites that serve a global audience and for delivering static content, such as images and videos, which can be cached at the CDN's edge servers._

### What is a "primary key" in a database?

_A primary key is a unique identifier for a record in a database table. It is a column or set of columns that uniquely identifies each row in the table and is used to enforce data integrity and facilitate efficient data retrieval._

### What are Constraints and give me two examples

<!-- Constraints are limits of what a key can be. For example, a unique constraint only allows for one row of data to contain "chalon@gmail.com" or whatever that key data may have. -->

_Constraints are rules that are applied to a database table to ensure data accuracy, consistency, and integrity. They define the acceptable values that can be inserted, updated, or deleted from a table. Two examples of constraints are:_

_NOT NULL constraint: This requires a column to have a value and prevents null values from being inserted into a table._

_UNIQUE constraint: This ensures that a column or set of columns contains unique values and prevents duplicate values from being inserted into a table._

### What are some drawbacks of Server Side Rendering?
```
Some drawbacks of Server Side Rendering (SSR) are:

Increased server load: SSR requires the server to generate HTML for each request, which can increase server load and reduce scalability.

Slower initial load time: Since the server must generate HTML for each request, the initial load time can be slower compared to client-side rendering (CSR).

More complex server setup: SSR requires a more complex server setup compared to CSR, as it requires a web server that can generate HTML.

Limited interactivity: SSR is less interactive compared to CSR, as most of the code is executed on the server side and there is less opportunity for client-side code execution.

Overall, while SSR can provide benefits in terms of SEO and initial load time, it may not be the best choice for all applications, particularly those that require high scalability and interactivity.
```

### What are some drawbacks of Client Side Rendering?
```
Some drawbacks of Client Side Rendering (CSR) are:

Poor SEO: Search engine crawlers may have difficulty indexing content rendered by JavaScript, which can negatively impact SEO.

Slow time-to-first-byte (TTFB): The initial page load can be slower with CSR, as the server sends a minimal HTML page and the browser must wait for the JavaScript to download and execute before rendering the page.

Limited accessibility: Users with slow internet connections or devices may have difficulty accessing the website, as the initial load time can be slower and JavaScript-heavy websites may not be accessible on older devices.

Increased client load: CSR can put a heavy load on the client-side device, as all the code is executed on the client side and can consume significant memory and processing power.

Overall, while CSR can provide benefits in terms of interactivity and fast subsequent page loads, it may not be the best choice for all applications, particularly those that require high SEO and initial load time.
```

### What is an advantage of building my back-end as an API?
<!-- * It is headless, can can be interacted with in many ways through many applications. It allows for versatility. -->
```
Building your back-end as an API can provide several advantages, such as:

Platform independence: APIs allow clients to access your back-end using a standardized interface, which makes it platform independent and accessible from a wide range of devices and programming languages.

Scalability: APIs can be easily scaled to handle large volumes of requests by adding more servers or by using cloud-based solutions.

Modular design: An API-based back-end allows for modular design, where different services can be developed independently and combined together through the API.

Security: APIs can provide a secure way to access your back-end, as you can control access through authentication and authorization mechanisms.

Reusability: An API-based back-end can be reused across multiple applications, reducing development time and costs.

Overall, building your back-end as an API can provide significant advantages in terms of scalability, modularity, security, and reusability, making it a popular choice for modern web and mobile applications.
```



<!-- Second attempt, after researching unclear answers and waiting a few days. In my own words, no lookup allowed.  -->

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
