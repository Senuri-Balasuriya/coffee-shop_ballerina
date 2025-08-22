// AUTO-GENERATED FILE. DO NOT MODIFY.

// This file is an auto-generated file by Ballerina persistence layer for model.
// It should not be modified by hand.

import ballerina/jballerina.java;
import ballerina/persist;
import ballerina/sql;
import ballerinax/mssql;
import ballerinax/mssql.driver as _;
import ballerinax/persist.sql as psql;

const CUSTOMER = "customers";
const PROVIDER = "providers";
const PRODUCT = "products";
const PRODUCT_SIZE = "productsizes";
const CART_ITEM = "cartitems";
const ORDER = "orders";
const ORDER_ITEM = "orderitems";

public isolated client class Client {
    *persist:AbstractPersistClient;

    private final mssql:Client dbClient;

    private final map<psql:SQLClient> persistClients;

    private final record {|psql:SQLMetadata...;|} & readonly metadata = {
        [CUSTOMER]: {
            entityName: "Customer",
            tableName: "Customer",
            fieldMetadata: {
                id: {columnName: "id"},
                name: {columnName: "name"},
                email: {columnName: "email"},
                password: {columnName: "password"},
                role: {columnName: "role"}
            },
            keyFields: ["id"]
        },
        [PROVIDER]: {
            entityName: "Provider",
            tableName: "Provider",
            fieldMetadata: {
                id: {columnName: "id"},
                name: {columnName: "name"},
                email: {columnName: "email"},
                password: {columnName: "password"},
                shopName: {columnName: "shopName"}
            },
            keyFields: ["id"]
        },
        [PRODUCT]: {
            entityName: "Product",
            tableName: "Product",
            fieldMetadata: {
                id: {columnName: "id"},
                name: {columnName: "name"},
                description: {columnName: "description"},
                price: {columnName: "price"},
                providerId: {columnName: "providerId"}
            },
            keyFields: ["id", "providerId"]
        },
        [PRODUCT_SIZE]: {
            entityName: "ProductSize",
            tableName: "ProductSize",
            fieldMetadata: {
                id: {columnName: "id"},
                name: {columnName: "name"},
                price: {columnName: "price"},
                productId: {columnName: "productId"}
            },
            keyFields: ["id", "productId"]
        },
        [CART_ITEM]: {
            entityName: "CartItem",
            tableName: "CartItem",
            fieldMetadata: {
                id: {columnName: "id"},
                customerId: {columnName: "customerId"},
                productId: {columnName: "productId"},
                productSizeId: {columnName: "productSizeId"},
                quantity: {columnName: "quantity"}
            },
            keyFields: ["id", "customerId"]
        },
        [ORDER]: {
            entityName: "Order",
            tableName: "Order",
            fieldMetadata: {
                id: {columnName: "id"},
                customerId: {columnName: "customerId"},
                status: {columnName: "status"},
                orderDate: {columnName: "orderDate"}
            },
            keyFields: ["id", "customerId"]
        },
        [ORDER_ITEM]: {
            entityName: "OrderItem",
            tableName: "OrderItem",
            fieldMetadata: {
                id: {columnName: "id"},
                orderId: {columnName: "orderId"},
                productId: {columnName: "productId"},
                productSizeId: {columnName: "productSizeId"},
                quantity: {columnName: "quantity"},
                price: {columnName: "price"}
            },
            keyFields: ["id", "orderId"]
        }
    };

    public isolated function init() returns persist:Error? {
        mssql:Client|error dbClient = new (host = host, user = user, password = password, database = database, port = port, options = connectionOptions);
        if dbClient is error {
            return <persist:Error>error(dbClient.message());
        }
        self.dbClient = dbClient;
        self.persistClients = {
            [CUSTOMER]: check new (dbClient, self.metadata.get(CUSTOMER), psql:MSSQL_SPECIFICS),
            [PROVIDER]: check new (dbClient, self.metadata.get(PROVIDER), psql:MSSQL_SPECIFICS),
            [PRODUCT]: check new (dbClient, self.metadata.get(PRODUCT), psql:MSSQL_SPECIFICS),
            [PRODUCT_SIZE]: check new (dbClient, self.metadata.get(PRODUCT_SIZE), psql:MSSQL_SPECIFICS),
            [CART_ITEM]: check new (dbClient, self.metadata.get(CART_ITEM), psql:MSSQL_SPECIFICS),
            [ORDER]: check new (dbClient, self.metadata.get(ORDER), psql:MSSQL_SPECIFICS),
            [ORDER_ITEM]: check new (dbClient, self.metadata.get(ORDER_ITEM), psql:MSSQL_SPECIFICS)
        };
    }

    isolated resource function get customers(CustomerTargetType targetType = <>, sql:ParameterizedQuery whereClause = ``, sql:ParameterizedQuery orderByClause = ``, sql:ParameterizedQuery limitClause = ``, sql:ParameterizedQuery groupByClause = ``) returns stream<targetType, persist:Error?> = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "query"
    } external;

    isolated resource function get customers/[int id](CustomerTargetType targetType = <>) returns targetType|persist:Error = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "queryOne"
    } external;

    isolated resource function post customers(CustomerInsert[] data) returns int[]|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(CUSTOMER);
        }
        _ = check sqlClient.runBatchInsertQuery(data);
        return from CustomerInsert inserted in data
            select inserted.id;
    }

    isolated resource function put customers/[int id](CustomerUpdate value) returns Customer|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(CUSTOMER);
        }
        _ = check sqlClient.runUpdateQuery(id, value);
        return self->/customers/[id].get();
    }

    isolated resource function delete customers/[int id]() returns Customer|persist:Error {
        Customer result = check self->/customers/[id].get();
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(CUSTOMER);
        }
        _ = check sqlClient.runDeleteQuery(id);
        return result;
    }

    isolated resource function get providers(ProviderTargetType targetType = <>, sql:ParameterizedQuery whereClause = ``, sql:ParameterizedQuery orderByClause = ``, sql:ParameterizedQuery limitClause = ``, sql:ParameterizedQuery groupByClause = ``) returns stream<targetType, persist:Error?> = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "query"
    } external;

    isolated resource function get providers/[int id](ProviderTargetType targetType = <>) returns targetType|persist:Error = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "queryOne"
    } external;

    isolated resource function post providers(ProviderInsert[] data) returns int[]|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PROVIDER);
        }
        _ = check sqlClient.runBatchInsertQuery(data);
        return from ProviderInsert inserted in data
            select inserted.id;
    }

    isolated resource function put providers/[int id](ProviderUpdate value) returns Provider|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PROVIDER);
        }
        _ = check sqlClient.runUpdateQuery(id, value);
        return self->/providers/[id].get();
    }

    isolated resource function delete providers/[int id]() returns Provider|persist:Error {
        Provider result = check self->/providers/[id].get();
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PROVIDER);
        }
        _ = check sqlClient.runDeleteQuery(id);
        return result;
    }

    isolated resource function get products(ProductTargetType targetType = <>, sql:ParameterizedQuery whereClause = ``, sql:ParameterizedQuery orderByClause = ``, sql:ParameterizedQuery limitClause = ``, sql:ParameterizedQuery groupByClause = ``) returns stream<targetType, persist:Error?> = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "query"
    } external;

    isolated resource function get products/[int id]/[int providerId](ProductTargetType targetType = <>) returns targetType|persist:Error = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "queryOne"
    } external;

    isolated resource function post products(ProductInsert[] data) returns [int, int][]|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PRODUCT);
        }
        _ = check sqlClient.runBatchInsertQuery(data);
        return from ProductInsert inserted in data
            select [inserted.id, inserted.providerId];
    }

    isolated resource function put products/[int id]/[int providerId](ProductUpdate value) returns Product|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PRODUCT);
        }
        _ = check sqlClient.runUpdateQuery({"id": id, "providerId": providerId}, value);
        return self->/products/[id]/[providerId].get();
    }

    isolated resource function delete products/[int id]/[int providerId]() returns Product|persist:Error {
        Product result = check self->/products/[id]/[providerId].get();
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PRODUCT);
        }
        _ = check sqlClient.runDeleteQuery({"id": id, "providerId": providerId});
        return result;
    }

    isolated resource function get productsizes(ProductSizeTargetType targetType = <>, sql:ParameterizedQuery whereClause = ``, sql:ParameterizedQuery orderByClause = ``, sql:ParameterizedQuery limitClause = ``, sql:ParameterizedQuery groupByClause = ``) returns stream<targetType, persist:Error?> = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "query"
    } external;

    isolated resource function get productsizes/[int id]/[int productId](ProductSizeTargetType targetType = <>) returns targetType|persist:Error = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "queryOne"
    } external;

    isolated resource function post productsizes(ProductSizeInsert[] data) returns [int, int][]|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PRODUCT_SIZE);
        }
        _ = check sqlClient.runBatchInsertQuery(data);
        return from ProductSizeInsert inserted in data
            select [inserted.id, inserted.productId];
    }

    isolated resource function put productsizes/[int id]/[int productId](ProductSizeUpdate value) returns ProductSize|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PRODUCT_SIZE);
        }
        _ = check sqlClient.runUpdateQuery({"id": id, "productId": productId}, value);
        return self->/productsizes/[id]/[productId].get();
    }

    isolated resource function delete productsizes/[int id]/[int productId]() returns ProductSize|persist:Error {
        ProductSize result = check self->/productsizes/[id]/[productId].get();
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(PRODUCT_SIZE);
        }
        _ = check sqlClient.runDeleteQuery({"id": id, "productId": productId});
        return result;
    }

    isolated resource function get cartitems(CartItemTargetType targetType = <>, sql:ParameterizedQuery whereClause = ``, sql:ParameterizedQuery orderByClause = ``, sql:ParameterizedQuery limitClause = ``, sql:ParameterizedQuery groupByClause = ``) returns stream<targetType, persist:Error?> = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "query"
    } external;

    isolated resource function get cartitems/[int id]/[int customerId](CartItemTargetType targetType = <>) returns targetType|persist:Error = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "queryOne"
    } external;

    isolated resource function post cartitems(CartItemInsert[] data) returns [int, int][]|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(CART_ITEM);
        }
        _ = check sqlClient.runBatchInsertQuery(data);
        return from CartItemInsert inserted in data
            select [inserted.id, inserted.customerId];
    }

    isolated resource function put cartitems/[int id]/[int customerId](CartItemUpdate value) returns CartItem|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(CART_ITEM);
        }
        _ = check sqlClient.runUpdateQuery({"id": id, "customerId": customerId}, value);
        return self->/cartitems/[id]/[customerId].get();
    }

    isolated resource function delete cartitems/[int id]/[int customerId]() returns CartItem|persist:Error {
        CartItem result = check self->/cartitems/[id]/[customerId].get();
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(CART_ITEM);
        }
        _ = check sqlClient.runDeleteQuery({"id": id, "customerId": customerId});
        return result;
    }

    isolated resource function get orders(OrderTargetType targetType = <>, sql:ParameterizedQuery whereClause = ``, sql:ParameterizedQuery orderByClause = ``, sql:ParameterizedQuery limitClause = ``, sql:ParameterizedQuery groupByClause = ``) returns stream<targetType, persist:Error?> = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "query"
    } external;

    isolated resource function get orders/[int id]/[int customerId](OrderTargetType targetType = <>) returns targetType|persist:Error = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "queryOne"
    } external;

    isolated resource function post orders(OrderInsert[] data) returns [int, int][]|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(ORDER);
        }
        _ = check sqlClient.runBatchInsertQuery(data);
        return from OrderInsert inserted in data
            select [inserted.id, inserted.customerId];
    }

    isolated resource function put orders/[int id]/[int customerId](OrderUpdate value) returns Order|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(ORDER);
        }
        _ = check sqlClient.runUpdateQuery({"id": id, "customerId": customerId}, value);
        return self->/orders/[id]/[customerId].get();
    }

    isolated resource function delete orders/[int id]/[int customerId]() returns Order|persist:Error {
        Order result = check self->/orders/[id]/[customerId].get();
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(ORDER);
        }
        _ = check sqlClient.runDeleteQuery({"id": id, "customerId": customerId});
        return result;
    }

    isolated resource function get orderitems(OrderItemTargetType targetType = <>, sql:ParameterizedQuery whereClause = ``, sql:ParameterizedQuery orderByClause = ``, sql:ParameterizedQuery limitClause = ``, sql:ParameterizedQuery groupByClause = ``) returns stream<targetType, persist:Error?> = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "query"
    } external;

    isolated resource function get orderitems/[int id]/[int orderId](OrderItemTargetType targetType = <>) returns targetType|persist:Error = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor",
        name: "queryOne"
    } external;

    isolated resource function post orderitems(OrderItemInsert[] data) returns [int, int][]|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(ORDER_ITEM);
        }
        _ = check sqlClient.runBatchInsertQuery(data);
        return from OrderItemInsert inserted in data
            select [inserted.id, inserted.orderId];
    }

    isolated resource function put orderitems/[int id]/[int orderId](OrderItemUpdate value) returns OrderItem|persist:Error {
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(ORDER_ITEM);
        }
        _ = check sqlClient.runUpdateQuery({"id": id, "orderId": orderId}, value);
        return self->/orderitems/[id]/[orderId].get();
    }

    isolated resource function delete orderitems/[int id]/[int orderId]() returns OrderItem|persist:Error {
        OrderItem result = check self->/orderitems/[id]/[orderId].get();
        psql:SQLClient sqlClient;
        lock {
            sqlClient = self.persistClients.get(ORDER_ITEM);
        }
        _ = check sqlClient.runDeleteQuery({"id": id, "orderId": orderId});
        return result;
    }

    remote isolated function queryNativeSQL(sql:ParameterizedQuery sqlQuery, typedesc<record {}> rowType = <>) returns stream<rowType, persist:Error?> = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor"
    } external;

    remote isolated function executeNativeSQL(sql:ParameterizedQuery sqlQuery) returns psql:ExecutionResult|persist:Error = @java:Method {
        'class: "io.ballerina.stdlib.persist.sql.datastore.MSSQLProcessor"
    } external;

    public isolated function close() returns persist:Error? {
        error? result = self.dbClient.close();
        if result is error {
            return <persist:Error>error(result.message());
        }
        return result;
    }
}

