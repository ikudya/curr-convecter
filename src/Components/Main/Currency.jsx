import PropTypes from "prop-types";
import {Input, Select, Wrapper} from "./CurrencyElements";

const CurrencyInput = (props) => {
    return (
        <Wrapper>
            <Input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
            <Select
                value={props.currency}
                onChange={ev => props.onCurrencyChange(ev.target.value)}>
                {props.currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
            </Select>
            </Wrapper>
    );
}


export default CurrencyInput;