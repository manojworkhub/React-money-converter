import { useEffect, useState } from "react";
import "./amount.css";
import axios from "axios";

function Amount() {
  const [amount, setAmount] = useState(1);
  const [fromCurrencyr, setFromCurrencyr] = useState("INR");
  const [toCurrencyr, setToCurrencyr] = useState("USD");
  const [converAmount, setConvertAmount] = useState();
  const [amountMult, setAmountmut] = useState();
 
  useEffect(() => {
    const ExchagetheAmount = async () => {
      try {
        const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrencyr}`;
        const response = await axios.get(url);
        setConvertAmount(response.data.rates[toCurrencyr]);
        console.log(response.data.rates[toCurrencyr]);
      } catch (error) {
        console.error(
          "the erroe is from the fetching the data" + error.message
        );
      }
    };
    ExchagetheAmount();
  }, [fromCurrencyr, toCurrencyr]);

  useEffect(() => {
    if (converAmount !== null) {
      setAmountmut((amount *converAmount).toFixed(2));
    }
  }, [amount, converAmount]);

  function sendAmountvalue(e) {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  }
  return (
    <>
      <div className="continer">
        <div className="base">
          <div className="box"></div>
          <div className="headerImage"></div>
          {/* <div className="title">Currency converter</div> */}
          <div class="glitch-wrapper">
   <div class="glitch" data-text="Currency converter">Currency converter</div>
</div>
          <div className="amount">
            <label htmlFor="paica">amount</label>
            <input
              type="text"
              id="paica"
              value={amount}
              onChange={sendAmountvalue}
            />
          </div>
          <div className="fromCurrencyr">
            <label htmlFor="fromcurrnenyCountry">from </label>
            <select
              type="select"
              id="fromcurrnenyCountry"
              value={fromCurrencyr}
              onChange={(e) => {
                setFromCurrencyr(e.target.value);
              }}
            >
              <option value="USD">USD </option>
              <option value="EUR">EUR </option>
              <option value="GBR">GBR </option>
              <option value="JPY">JPY </option>
              <option value="AUD">AUD </option>
              <option value="CAD">CAD </option>
              <option value="CNY">CNY </option>
              <option value="INR">INR </option>
              <option value="BRL">BRL </option>
              <option value="ZAR">ZAR </option>
              <option value="AED">AED </option>
            </select>
          </div>
          <div className="toCurrencyr">
            <label htmlFor="tocurrnenyCountry">to </label>
            <select
              type="select"
              id="tocurrnenyCountry"
              value={toCurrencyr}
              onChange={(e) => {
                setToCurrencyr(e.target.value);
              }}
            >
              <option value="USD">USD </option>
              <option value="EUR">EUR </option>
              <option value="GBR">GBR </option>
              <option value="JPY">JPY </option>
              <option value="AUD">AUD </option>
              <option value="CAD">CAD </option>
              <option value="CNY">CNY </option>
              <option value="INR">INR </option>
              <option value="BRL">BRL </option>
              <option value="ZAR">ZAR </option>
            </select>
          </div>
          <div className="ConvertedAmount">
            <h3>
              {amount} {fromCurrencyr} is equal to {amountMult} {toCurrencyr}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amount;
