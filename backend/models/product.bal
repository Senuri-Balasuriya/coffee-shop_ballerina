public type Product record {
    int id;
    string name;
    string description;
    float price;
    string category; // e.g., Coffee, Beverage, Snack
    string imageUrl?;
};
