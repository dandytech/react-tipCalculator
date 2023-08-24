import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <h2>Tip Calculator</h2>
      <TipsCalculator />
    </div>
  );
}

function TipsCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}>
        How much was the Bill?
      </BillInput>

      <SelectPercent percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercent>

      <SelectPercent percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercent>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />

          <Reset onRest={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ children, bill, onSetBill }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercent({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Disatsifactory(0%)</option>
        <option value="5">It was Ok(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amasing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ${bill + tip} (${bill} + ${tip})
      </h3>
    </div>
  );
}

function Reset({ onRest }) {
  return <button onClick={onRest}> Reset</button>;
}
