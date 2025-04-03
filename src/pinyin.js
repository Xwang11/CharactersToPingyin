import React, { useState } from "react";
import pinyin from "pinyin";

const PinyinConverter = () => {
    const [text, setText] = useState("");
    const [converted, setConverted] = useState([]);

    const handleConvert = () => {
        // Split the text into lines
        const lines = text.split("\n");

        // Convert each line to pinyin
        const pinyinArray = lines.map((line) =>
            pinyin(line, { style: pinyin.STYLE_TONE1 })
        );

        // Set converted as an array of arrays, preserving line structure
        setConverted(pinyinArray);
    };


    return (
        <div className="container">
            <h2>Chinese to Pinyin Converter</h2>
            <textarea
                rows="5"
                placeholder="Enter Chinese characters..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button onClick={handleConvert}>Convert</button>
            <div style={{ marginTop: "10px", whiteSpace: "pre-wrap" }}>
                {text.split("\n").map((line, lineIndex) => (
                    <div key={lineIndex} style={{ marginBottom: "10px" }}>
                        {line.split("").map((char, charIndex) => (
                            <div
                                key={charIndex}
                                style={{
                                    display: "inline-block",
                                    textAlign: "center",
                                    margin: "5px",
                                }}
                            >
                                <div>{char}</div>
                                <div style={{ fontSize: "12px", color: "gray" }}>
                                    {converted[lineIndex]?.[charIndex]?.[0] || ""}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );

};

export default PinyinConverter;