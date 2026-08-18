using { sap.cap.productshop as my } from '../db/schema';

service productshop
{
    entity product as
        projection on my.Product;

    @cds.redirection.target
    @odata.draft.enabled
    entity Supplier as
        projection on my.Supplier;
}
