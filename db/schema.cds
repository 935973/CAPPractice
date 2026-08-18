namespace sap.cap.productshop ;
entity Product
{
    key ID : Integer;
    Name : String(100);
    stock : Integer;
    price : Integer;
    Category : String(100);
}

entity Supplier
{
    key ID : Integer;
    Name : String(100);
    City : String(100);
    phone : String(100);
}
