import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post("http://127.0.0.1:8000/tools", {
      text: text,
    });
    setResult(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI CRM - Log Interaction</h2>

      <textarea
        rows="4"
        cols="50"
        placeholder="Enter interaction..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;