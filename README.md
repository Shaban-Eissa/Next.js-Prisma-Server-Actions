
# Next.js + Server Actions + Prisma + MongoDB 

<img src="https://github.com/Shaban-Eissa/Next.js-Prisma-Server-Actions/assets/49924090/78a51d45-ecf4-4e62-9145-f04f2eeb4a30" width="900" height="450" />

A Fullstack built with Next.js, Server Actions, Prisma, and MongoDB.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)


## Features

- **Create:** Allow users to create items that stored on mongoDB.
- **Delete:** Allow users to delete items that stored on mongoDB.


## Demo

<img src="https://github.com/Shaban-Eissa/Next.js-Prisma-Server-Actions/assets/49924090/19cafb89-9d48-4092-834f-14993c9d9251" width="900" height="400" />


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shaban-Eissa/Next.js-Prisma-Server-Actions
   ```

2. Navigate to the project directory:
    
    ```bash
    cd Next.js-Prisma-Server-Actions
    ```
    
3. Install dependencies:
    
    ```bash
    npm install
    ```

5. Create .env file in root directory:
    ```bash
    DATABASE_URL=your_mongodb_url
    ```

5. Open terminal and write ```npx prisma db push```. used to update the database schema to match your Prisma schema.
   It creates tables in the database if they don't exist, and updates existing tables if they are different.

6. Open terminal and write ```npx prisma generate```. used to generate the Prisma Client based on your Prisma schema.

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. To access React application visit [http://localhost:3000](http://localhost:3000).


## Technologies

This project utilizes a robust stack of modern technologies for efficient development and optimal user experience:

- Next.js
- Typescript
- Server Actions
- Prisma
- MongoDB
- Tailwind CSS
  
## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

