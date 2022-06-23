import './App.css';
import CurrencyInput from "./Components/Main/Currency";
import {useState, useEffect} from "react";
import {Header} from "./Components/Header/Header";

function App() {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('UAH');
    const [rates, setRates] = useState([]);
    const [usd, setUsd] = useState('USD')
    const [eur, setEur] = useState('EUR')


    useEffect(() => {
        fetch('https://api.apilayer.com/fixer/latest?base=uah&apikey=1z6eH0RvYgLOzJ7PIRFNwj3GwtKUfUsO')
            .then(res => res.json())
            .then(data => {
                setRates(data.rates);
                setUsd((1/data.rates.USD).toFixed(2));
                setEur((1/data.rates.EUR).toFixed(2));
            })
    }, []);
    useEffect(() => {
        if (!!rates) {
            function init() {
                handleAmount1Change(1);
            }
            init();
        }
    }, [rates]);
    function format(number) {
        return number.toFixed(4);
    }
    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }
    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }
    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
    }
    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
    }
    function usdTouah(number) {

    }

    return (
        <div>
            <Header format={format}
                    usd={usd}
                    eur={eur}
            />

                <CurrencyInput
                    onAmountChange={handleAmount1Change}
                    onCurrencyChange={handleCurrency1Change}
                    currencies={Object.keys(rates)}
                    amount={amount1}
                    currency={currency1}
                />
                <CurrencyInput
                    onAmountChange={handleAmount2Change}
                    onCurrencyChange={handleCurrency2Change}
                    currencies={Object.keys(rates)}
                    amount={amount2}
                    currency={currency2}
                />
        </div>
    );
}

export default App;