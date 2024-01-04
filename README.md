# Drive-On - A car question and discussion site 

Made with 
![Code Igniter Logo](https://img.icons8.com/external-those-icons-flat-those-icons/40/external-CodeIgniter-Logo-social-media-those-icons-flat-those-icons.png)
![React Logo](https://img.icons8.com/plasticine/40/react.png)
![Tailwind Logo](https://img.icons8.com/color/40/tailwind_css.png)

Welcome to our web application tailored for vehicle enthusiasts! Here, users can discuss issues with their vehicles, seeking assistance from the community to diagnose problems. 
Fellow members contribute by suggesting interesting ways to identify and fix issues, fostering a collaborative space for automotive problem-solving.
To ensure a secure and personalized experience, users must register before accessing the website. Once registered, they can log in to post and reply to discussions. The application prioritizes user security with protected routes, ensuring that 
only authenticated users can engage in these activities.

## React

The frontend of the application is crafted using React along with the efficiency of Tailwind CSS, providing a visually appealing and user-friendly interface. Users can enhance their discussions by uploading images of their cars, facilitating better assistance
and engagement within the community.

## CodeIgniter

For seamless communication between the frontend and backend, CodeIgniter was employed, following REST API conventions. This allows for standardized and efficient data exchange. MySQL serves as the database backend, chosen for its reliability
and robustness in storing and managing user and discussion-related information.

### JWT - Authentication
Authentication in the application relies on JWT-based authorization. JWT, or JSON Web Token, is employed to securely transmit user information. Upon registration or login, a JWT is generated and issued, encapsulating user credentials. 
This token is then included in subsequent requests, granting access to protected routes. JWT-based authorization enhances security, ensuring only users with valid tokens can perform authorized actions. 
Stored on the client side, the signed token efficiently handles user authentication, maintaining the integrity of credentials.

### React Redux

Redux serves as the state management library in the web application, providing a robust solution for maintaining a global state throughout the entire system. Leveraging Redux enables a centralized store that efficiently manages the application's state,
allowing components to access and update data without passing props through multiple layers. This approach simplifies state management complexities, enhances predictability,and facilitates seamless communication between different parts of the application.
By adopting Redux, the web application achieves a scalable and organized architecture, promoting maintainability and a coherent flow of data across various components.

In summary, the application seamlessly integrates user registration, authentication, and engaging frontend design, creating a platform where automotive enthusiasts can connect, share, and seek assistance in a secure and visually pleasing environment. The combination of React, Tailwind CSS, CodeIgniter, and MySQL ensures a well-rounded and efficient user experience.
