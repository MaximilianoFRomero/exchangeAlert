export class CreateHttpdatumDto {
    fiat: String = "USD";
    page: Number = 1;
    rows: Number = 10;
    tradeType: String = "BUY"; 
    asset: String = "USDT";
    countries: [];
    proMerchantAds: Boolean = false;
    shieldMerchantAds: Boolean = false;
    publisherType: null;
    payTypes: [
        "BANK"
    ];
    classifies: [
        "mass",
        "profession"
    ]
}
