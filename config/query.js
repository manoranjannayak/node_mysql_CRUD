module.exports.insertOrUpdate = " SET @product_id = ?;\
                SET @product_name = ?;\
                SET @product_price = ?;\
                SET @product_quantity = ?;\
                SET @product_added = ?;\
                CALL inserOrUpdate(@product_id,@product_name,@product_price,@product_quantity,@product_added);\
                ";