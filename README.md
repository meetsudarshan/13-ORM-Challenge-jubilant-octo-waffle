# 13-ORM-Challenge-jubilant-octo-waffle

## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Link to my video
[Click here to watch my video](https://drive.google.com/file/d/1rg9XjCPidBp1NUaQU1pCQZ1YSoQpsAJG/view)


## Steps to execute:
```

  - Git Clone
  - npm i
  - open db folder in terminal
  - perform mysql -u -p and enter your creds
  - perform source schema.sql
  - go to bash and perform node seeds/seed.js and confirm seed is successful
  - go to mysql terminal and use each of the following commands to access your db, then view your tables
    USE ECOMMERCE_DB;
    SHOW TABLES;
    SELECT * FROM <TABLE_NAME>;
```


## Dependencies

I referred to W3 schools heavily, worked with groups from bootcamp to troubleshoot issues and took help from Bootcamp assistant for help address my issues