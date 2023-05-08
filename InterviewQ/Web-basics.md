# How the Web Works

### What is JSON and why is it important?

_JSON stands for "JavaScript Object Notation" and it is a lightweight data format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is used to transmit data between servers and applications, an alternative to XML. It is lighter weight than XML, making it the preferred data format for many languages._

### What do the following status code ranges represent: 200-level, 300-level, 400-level, 500-level

- 200 OK
- 300 Redirection
- 400 Client Error
- 500 Server Error

### What's the difference between cookies and localStorage?

- Cookies and localStorage are similar in that they are ways to store temporary data.
- Cookies are stored in a cache that is emptied when the browser window is closed. Cookies are small text files that can contain login info, preferences, and shopping cart items. They can be deleted by the user at any time. Cookies can have an expiration date.
- localStorage will persist until the user manually empties, and can hold more data. Users can clear using localStorage.clear(); or clearing their browser data manually.

### Explain what a single page app is.

- SPA is an application that appears on the "same" page even though the content may change.

### Explain the same-origin policy with regards to JavaScript.

_CORS stands for "Cross-Origin Resource Sharing." It's a security feature in web browsers that restricts websites from making requests to a different domain than the one the website is hosted on. This is to prevent malicious attacks such as cross-site scripting (XSS) and cross-site request forgery (CSRF)._

### What does idempotent mean?

_Lack of side effects, the request will return the result every single time_

### Explain CSRF and how to protect against it

_CSRF stands for cross-site request forgery, which is a form of web attack where a user is tricked unknowingly into making a malicious request._

### What is an HTTP header?

_The header is sent across the protocol as part of the request or response that contains metadata about the contents.The header is used by the server and client to negotiate and establish a connection, transfer data, and ensure proper handling of the request and response_

### What is an HTTP redirect? How does it work?

- A redirect will send a user to a new page instead of showing an error
- It works by sending a response code along with a new url in the response header.

### What happens when I type in google.com in the browser bar and press enter?

- browser checks cache to see if copy is stored locally
- if not, browser will send a request to the DNS server to resolve the domain name into an IP address
- Once the server is resolved, the browser sends a request to the address, asking for the web page
- if successful there is a response
- the response is the webpage
- the web server receives the data needed to display the webpage and important items like cookies
- the webpage is complied and displayed

### What is the difference between GET vs POST?

- GET requests information, idempotent, sent via URL with key-value pairs
- POST sends usually sends data to the server, to update or create a resource. The data is sent in the request body instead of the URL.

### What is a web server?

_Software that serves web content over the internet. It takes a request, gathers the right information, and executes the request. It acts as a buffer between the web browser and the backend server._

### What are the parts of a URL?

- Protocol "HTTPS"
- Hostname "facebook.com"
- Path "/index.html"
- Port "80 / 443"

### When would you use HTTP versus Websockets?

_You would typically use HTTP when you need to request or send data from a server in a one-time transaction, such as retrieving a web page or submitting a form. On the other hand, you would use WebSockets when you need to establish a persistent connection with a server and receive real-time data updates._

### What is the difference between TCP and UDP?

TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are both transport layer protocols used for sending and receiving data over the internet. However, they have some key differences in terms of how they work and when they are best used.

TCP is a connection-oriented protocol that ensures reliable delivery of data by establishing a dedicated connection between the sender and receiver. It provides error checking and flow control mechanisms to ensure that packets are delivered in order and without errors. This reliability comes at the cost of increased overhead and latency, as each packet must be acknowledged by the receiver before the next packet can be sent.

UDP, on the other hand, is a connectionless protocol that does not establish a dedicated connection between the sender and receiver. It is faster and has less overhead than TCP, but it does not guarantee reliable delivery of data. UDP does not have error checking or flow control mechanisms, so packets may be lost, duplicated, or delivered out of order.

In terms of when to use each protocol, TCP is generally used for applications that require reliable data delivery, such as email, file transfers, and web browsing. UDP is used for applications that require low latency and can tolerate some packet loss, such as video streaming, online gaming, and voice over IP (VoIP) communications.

### What is the difference between a statless and stateful protocol? What kind is HTTP?

A stateless protocol is one that does not require the server to retain any information about previous requests from a client. Each request is treated as a new, independent transaction. Stateless protocols are simpler and more scalable than stateful protocols, but they are also less flexible and may require more data to be sent with each request.

In contrast, a stateful protocol is one that requires the server to maintain information about previous requests from a client, so that it can provide context and continuity for subsequent requests. This enables more complex interactions between the client and server, but it also increases the complexity and resource requirements of the server.

### What is CORS? How does it work?

Cross-Origin Resource Sharing (CORS) is a security feature implemented in modern web browsers that controls how web pages can interact with resources from different domains. The same-origin policy implemented by browsers prevents a web page from making requests to a different domain, in order to protect against attacks like Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS).

CORS allows a server to specify which domains are allowed to access its resources, and which HTTP methods are allowed for these resources. This is done through the use of special HTTP headers that are added to the server's responses. The headers are sent by the server to the browser, and the browser enforces the rules specified by the server.

### What is DNS?

_DNS stands for Domain Name System. It is a system used to translate human-readable domain names, such as "google.com" or "facebook.com", into IP addresses that are used by computers to communicate over the internet._

### What is a port?

_In summary, a port is a unique identifier used by programs to specify the specific process or service they want to communicate with on a device within a network._