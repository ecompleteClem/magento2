/**
 * @author      MundiPagg Embeddables Team <embeddables@mundipagg.com>
 * @copyright   2017 MundiPagg (http://www.mundipagg.com)
 * @license     http://www.mundipagg.com  Copyright
 *
 * @link        http://www.mundipagg.com
 */
/*browser:true*/
/*global define*/
define(
    [
        'mage/storage',
        'Magento_Checkout/js/model/url-builder'
    ],
    function (
        storage,
        urlBuilder
    ) {

        return function (brand, amount) {
            var serviceUrl;
            serviceUrl = urlBuilder.createUrl('/mundipagg/installments/brandbyamount/' + brand + '/' + amount, {});
            return storage.get(
                serviceUrl, false
            )
        };
    }
);
