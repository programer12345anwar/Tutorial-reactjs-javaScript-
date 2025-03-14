import { useEffect, useState } from "react";

function useCurrencyInfo(currency) { // Accept 'currency' as a parameter
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        if (currency) { // Check if 'currency' is provided
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
                .then(res => res.json())
                .then(data => setCurrencyInfo(data[currency])); // Use 'currency' as key in data
                console.log(currencyInfo)
        }
    }, [currency]); // Add 'currency' as dependency
    console.log(currencyInfo)

    return currencyInfo;
}

export default useCurrencyInfo;
