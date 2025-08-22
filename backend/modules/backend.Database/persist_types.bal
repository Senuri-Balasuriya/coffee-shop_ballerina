// AUTO-GENERATED FILE. DO NOT MODIFY.

// This file is an auto-generated file by Ballerina persistence layer for model.
// It should not be modified by hand.

public type Customer record {|
    readonly int id;
    string name;
    string email;
    string password;
    string role;
|};

public type CustomerOptionalized record {|
    int id?;
    string name?;
    string email?;
    string password?;
    string role?;
|};

public type CustomerTargetType typedesc<CustomerOptionalized>;

public type CustomerInsert Customer;

public type CustomerUpdate record {|
    string name?;
    string email?;
    string password?;
    string role?;
|};

public type Provider record {|
    readonly int id;
    string name;
    string email;
    string password;
    string shopName;
|};

public type ProviderOptionalized record {|
    int id?;
    string name?;
    string email?;
    string password?;
    string shopName?;
|};

public type ProviderTargetType typedesc<ProviderOptionalized>;

public type ProviderInsert Provider;

public type ProviderUpdate record {|
    string name?;
    string email?;
    string password?;
    string shopName?;
|};

public type Product record {|
    readonly int id;
    string name;
    string description;
    float price;
    readonly int providerId;
|};

public type ProductOptionalized record {|
    int id?;
    string name?;
    string description?;
    float price?;
    int providerId?;
|};

public type ProductTargetType typedesc<ProductOptionalized>;

public type ProductInsert Product;

public type ProductUpdate record {|
    string name?;
    string description?;
    float price?;
|};

public type ProductSize record {|
    readonly int id;
    string name;
    float price;
    readonly int productId;
|};

public type ProductSizeOptionalized record {|
    int id?;
    string name?;
    float price?;
    int productId?;
|};

public type ProductSizeTargetType typedesc<ProductSizeOptionalized>;

public type ProductSizeInsert ProductSize;

public type ProductSizeUpdate record {|
    string name?;
    float price?;
|};

public type CartItem record {|
    readonly int id;
    readonly int customerId;
    int productId;
    int? productSizeId;
    int quantity;
|};

public type CartItemOptionalized record {|
    int id?;
    int customerId?;
    int productId?;
    int? productSizeId?;
    int quantity?;
|};

public type CartItemTargetType typedesc<CartItemOptionalized>;

public type CartItemInsert CartItem;

public type CartItemUpdate record {|
    int productId?;
    int? productSizeId?;
    int quantity?;
|};

public type Order record {|
    readonly int id;
    readonly int customerId;
    string status;
    string orderDate;
|};

public type OrderOptionalized record {|
    int id?;
    int customerId?;
    string status?;
    string orderDate?;
|};

public type OrderTargetType typedesc<OrderOptionalized>;

public type OrderInsert Order;

public type OrderUpdate record {|
    string status?;
    string orderDate?;
|};

public type OrderItem record {|
    readonly int id;
    readonly int orderId;
    int productId;
    int? productSizeId;
    int quantity;
    float price;
|};

public type OrderItemOptionalized record {|
    int id?;
    int orderId?;
    int productId?;
    int? productSizeId?;
    int quantity?;
    float price?;
|};

public type OrderItemTargetType typedesc<OrderItemOptionalized>;

public type OrderItemInsert OrderItem;

public type OrderItemUpdate record {|
    int productId?;
    int? productSizeId?;
    int quantity?;
    float price?;
|};

