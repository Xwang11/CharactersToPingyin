import React, { useState } from "react";
import pinyin from "pinyin";

const PinyinConverter = () => {
  const [text, setText] = useState("");
  const [converted, setConverted] = useState([]);

  const handleConvert = () => {
    const pinyinArray = pinyin(text, { style: pinyin.STYLE_TONE1 });
    setConverted(pinyinArray);
  };

  return (
    <div class="container">
      <h2>Chinese to Pinyin Converter</h2>
      <textarea
        rows="3"
        placeholder="Enter Chinese characters..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleConvert}>Convert</button>
      <div style={{ marginTop: "10px", whiteSpace:"pre-wrap" }}>
        {text.split("").map((char, index) => (
          <div key={index} style={{ display: "inline-block", textAlign: "center", margin: "5px" }}>
            <div>{char}</div>
            <div style={{ fontSize: "12px", color: "gray" }}>{converted[index] || ""}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinyinConverter;