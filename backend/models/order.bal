public type Order record {
    int id;
    int customerId;
    int providerId?;
    float total;
    string status; // Pending, Preparing, Delivered
    string paymentMethod;
    string deliveryAddress?;
    string createdAt;
};
