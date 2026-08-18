sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"productshop/test/integration/pages/productList.gen",
	"productshop/test/integration/pages/productObjectPage.gen"
], function (JourneyRunner, productListGenerated, productObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('productshop') + '/test/flp.html#app-preview',
        pages: {
			onTheproductListGenerated: productListGenerated,
			onTheproductObjectPageGenerated: productObjectPageGenerated
        },
        async: true
    });

    return runner;
});

