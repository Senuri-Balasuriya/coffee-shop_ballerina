public type OrderItem record {
    int id;
    int orderId;
    int productId;
    int quantity;
    float price;
    int? productSizeId;
};
