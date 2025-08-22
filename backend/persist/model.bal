import ballerina/persist as _;

// Customer model
public type Customer record {|
    readonly int id; // <-- this is the identity (primary key)
    string name;
    string email;
    string password;
     string role; // "customer" or "provider"
|};

// Provider model
public type Provider record {|
    readonly int id;
    string name;
    string email;
    string password;
    string shopName;
|};

// Product model
public type Product record {|
    readonly int id;
    string name;
    string description;
    float price;
    readonly int providerId;
|};

// ProductSize model
public type ProductSize record {|
    readonly int id;
    string name;
    float price;
    readonly int productId;
|};

// CartItem model
public type CartItem record {|
    readonly int id;
    readonly int customerId;
    int productId;
    int? productSizeId;
    int quantity;
|};

// Order model
public type Order record {|
    readonly int id;
    readonly int customerId;
    string status;
    string orderDate;
|};

// OrderItem model
public type OrderItem record {|
    readonly int id;
    readonly int orderId;
    int productId;
    int? productSizeId;
    int quantity;
    float price;
|};
