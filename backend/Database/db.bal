import  ballerinax/mssql;
    
mssql:Client|error dbClient = new(
    host = "localhost\\SQLEXPRESS02",
    database = "coffeeshop",
    port = 1433,
    options = {
        // Add supported options here if needed
    }
);
