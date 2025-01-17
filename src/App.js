import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [chat, setChat] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = async () => {
    if (inputText.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: inputText,
    };

    setChat((prevChat) => [...prevChat, userMessage]);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/ask/", {
        query: inputText,
      });
      console.log(response);
      const botMessage = {
        sender: "bot",
        text: response.data,
      };
      setChat((prevChat) => [...prevChat, botMessage]);
    } catch (error) {
      console.error("Error making request:", error);
      const botMessage = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again later.",
      };
      setChat((prevChat) => [...prevChat, botMessage]);
    }

    setInputText("");
  };

  return (
    <div className="App">
      <svg
        viewBox="0 0 935.08 354.94"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "200px", height: "auto" }}
      >
        <defs>
          <style>
            {`
          .cls-1 { fill: #6f9286; }
          .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9 { stroke-width: 0px; }
          .cls-2 { fill: #edfeff; }
          .cls-3 { fill: #017f8f; }
          .cls-4 { fill: #006579; }
          .cls-5 { fill: #52761f; }
          .cls-6 { fill: #22adc1; }
          .cls-7 { fill: #f6d250; }
          .cls-8 { fill: #fcfdfd; }
          .cls-9 { fill: #712846; }
          `}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path
              className="cls-8"
              d="M164.65,0c10.47,7.88,22.46,27.13,24.24,27.59,4.35,1.1,36.85-14.41,68.55,10.03,8.29,6.4,16.27,19.03,17.55,19.23,2.47.38,30.71-14.46,48.07-10.45,9.61,87.37-57.9,72.14-13.79,94.04,14.5,12.2,20,28.39,21.32,29.68,4.91,4.78,8.37-4.91,10.03,9.2C352.79,394,27.4,420.72,1.23,210.23c-4.7-80.36,1.62-104.6,63.95-126.64,11.2-46.59,52.97-43.14,67.71-5.85,1.24.24,10.34-9.93,23.41-7.52-3.84-23.62-1.3-48.27,8.36-70.22Z"
            />
            <g>
              <path
                className="cls-9"
                d="M8.33,225.7c36.39-1.4,22.69.74,36.36,21.32,49.93,75.12,174.14,40.8,250.78,49.32C212.13,387.33,30.21,353.79,8.33,225.7Z"
              />
              <path
                className="cls-4"
                d="M58.49,231.55c68.91,35.77,173.09-12.45,219.43,43.05-67.14-4.62-183.81,20.8-219.43-43.05Z"
              />
              <path
                className="cls-7"
                d="M96.94,52.66c14.2-.77,26.34,10.58,29.68,23.82-18.43.56-36.64.89-54.75,4.6-.91-13.23,11.68-27.7,25.08-28.42Z"
              />
              <g>
                <path
                  className="cls-5"
                  d="M319.3,48.48c5.24,43.78-14.31,73.76-54.34,90.28-25.31-17.82,10.46-17.82,22.99-24.66q-14.63,3.34-29.26,6.69,4.81-7.31,9.61-14.63c35.41-10.08,45.89-14.6,2.09-2.93,3.47-3.48,6.81-12.24,10.45-14.63,3.34-2.19,55.29-23.16,3.34-2.51l-1.25-1.25c13.22-14.61,43.51-43.63,8.78-12.96l-.84-9.2c-1.98,11.22-5.87,16.04-13.37,24.24q-1.04-6.9-2.09-13.79c-3.62-4.15.29,14.14,0,15.88-.2,1.19-11.25,17.38-12.96,20.48-.13-37.03-3.06-24.56-2.93,5.43q-3.13,6.48-6.27,12.96c-7.78-3.66-12.25-11.35-20.48-13.79,6.1-41.58,48.54-61.32,86.52-65.62Z"
                />
                <path
                  className="cls-7"
                  d="M203.1,27.59c28.28-3.64,51.57,6.96,67.29,30.51.16,3.5-29.8,13.42-42.21,53.92-2.89-3.34-27.61-14.73-28-16.3-.8-3.21,9.03-36.23-10.03-63.53.21-.93,11.43-4.4,12.96-4.6Z"
                />
                <path
                  className="cls-5"
                  d="M279.17,136.26c22.09-2.7,39.65,15.24,46.39,34.69-50.95,2.47-26.06,1.89-58.52-29.26,0-1.63,10.51-5.24,12.12-5.43Z"
                />
                <g>
                  <path
                    className="cls-3"
                    d="M168.41,85.26v-41.38c8.78,5.48,13.7,30.03,12.54,16.72-.81-9.34-11.03-41.78-15.88-52.25l2.51-2.09c23.25,26.69,38.61,51.5,28.84,88.19-9.83-5.52-24.07-7.58-28-9.2Z"
                  />
                  <path
                    className="cls-6"
                    d="M168.41,85.26c-16.22-15.38-9.94-57.04-3.34-76.91,4.86,10.46,15.07,42.91,15.88,52.25,1.16,13.32-3.76-11.24-12.54-16.72v41.38Z"
                  />
                </g>
              </g>
              <path
                className="cls-7"
                d="M147.1,73.56c8.09-.77,16.09,8.92,8.36,8.36-.77-.06-4.93-2.99-15.05-3.34-2.68-1.74,5.87-4.94,6.69-5.02Z"
              />
              <path
                className="cls-1"
                d="M315.95,195.61l1.25.42c-7.12,8.57-9.87,4.9-1.25-.42Z"
              />
              <g>
                <path
                  className="cls-4"
                  d="M106.97,96.97c82.95-2.97,173.08,57.61,191.85,140.85-34.64,3.87-39.93-4.69-53.08-7.94-57.2-14.12-167.99,16.72-211.91-40.54C-.33,144.8,40.86,99.34,106.97,96.97Z"
                />
                <g>
                  <path
                    className="cls-6"
                    d="M85.24,137.93l13.79,12.12-10.45,12.96c-18.85-11.6-20.86-10.06-3.34-25.08Z"
                  />
                  <path
                    className="cls-7"
                    d="M208.96,161.33c1.7.04,10.53,10.47,10.45,11.29q-5.64,5.64-11.29,11.29c-27.12-14.62-.97-22.61.84-22.57Z"
                  />
                  <path
                    className="cls-7"
                    d="M164.65,125.39c1.77-.18,9.96,9.7,12.12,11.29l-11.29,12.12q-6.9-6.48-13.79-12.96c9.05-5,12.12-10.36,12.96-10.45Z"
                  />
                  <path
                    className="cls-7"
                    d="M245.74,184.74c13.42-1.18,14.9,20.9-1.67,17.55-9.59-1.94-7.68-16.73,1.67-17.55Z"
                  />
                  <path
                    className="cls-6"
                    d="M113.66,161.33c15.8-3.79,14.68,22.79-.84,15.88-6.26-2.79-6.07-14.23.84-15.88Z"
                  />
                  <path
                    className="cls-2"
                    d="M192.24,193.1c8.67.02,3.58,11.09-2.09,4.6l2.09-4.6Z"
                  />
                  <path
                    className="cls-2"
                    d="M147.93,160.5l4.6,1.25c-.28,8.97-10.99,5.02-4.6-1.25Z"
                  />
                  <path
                    className="cls-2"
                    d="M173.01,180.56l3.76,1.25c.75,9.67-11.78,4.8-3.76-1.25Z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g>
            <path
              className="cls-4"
              d="M460.86,226.36c-1.64,15.05-7.02,26.56-16.14,34.55-9.13,7.98-21.28,11.97-36.46,11.97-10.6,0-19.97-2.65-28.12-7.95-8.15-5.3-14.44-12.81-18.89-22.52-4.45-9.72-6.71-20.82-6.77-33.32v-18.55c0-12.69,2.22-23.95,6.67-33.76,4.45-9.81,10.84-17.39,19.19-22.72,8.34-5.33,17.94-8,28.8-8,15.31,0,27.4,4.12,36.26,12.37,8.87,8.24,14.02,19.66,15.46,34.25h-12.17c-3.01-24.27-16.19-36.41-39.55-36.41-12.96,0-23.28,4.85-30.96,14.54-7.69,9.69-11.53,23.08-11.53,40.17v17.48c0,16.5,3.74,29.66,11.24,39.48,7.49,9.82,17.62,14.73,30.38,14.73s22.15-3.03,28.56-9.08c6.41-6.05,10.37-15.13,11.88-27.23h12.17Z"
            />
            <path
              className="cls-4"
              d="M500.61,270.92h-11.78V120.17h11.78v150.75Z"
            />
            <path
              className="cls-4"
              d="M531.81,134.06c0-2.21.72-4.08,2.16-5.61,1.44-1.53,3.4-2.29,5.89-2.29s4.47.77,5.94,2.29c1.47,1.53,2.21,3.4,2.21,5.61s-.74,4.06-2.21,5.56c-1.47,1.5-3.45,2.24-5.94,2.24s-4.45-.75-5.89-2.24c-1.44-1.5-2.16-3.35-2.16-5.56ZM545.65,270.92h-11.78v-106.19h11.78v106.19Z"
            />
            <path
              className="cls-4"
              d="M588.74,164.73l.39,18.16c3.99-6.54,8.96-11.53,14.92-14.97,5.95-3.44,12.53-5.15,19.73-5.15,11.38,0,19.86,3.21,25.42,9.62,5.56,6.41,8.37,16.03,8.44,28.85v69.68h-11.68v-69.78c-.07-9.49-2.08-16.55-6.04-21.2-3.96-4.64-10.29-6.97-18.99-6.97-7.26,0-13.69,2.27-19.29,6.82-5.59,4.55-9.73,10.68-12.42,18.4v72.72h-11.68v-106.19h11.19Z"
            />
            <path
              className="cls-4"
              d="M729.08,272.88c-9.03,0-17.19-2.22-24.49-6.67-7.3-4.45-12.97-10.65-17.03-18.6-4.06-7.95-6.08-16.86-6.08-26.74v-4.22c0-10.21,1.98-19.4,5.94-27.58,3.96-8.18,9.47-14.61,16.54-19.29,7.07-4.68,14.72-7.02,22.96-7.02,12.89,0,23.11,4.4,30.67,13.2,7.56,8.8,11.33,20.82,11.33,36.07v6.58h-75.77v2.26c0,12.04,3.45,22.07,10.35,30.08,6.9,8.02,15.59,12.02,26.06,12.02,6.28,0,11.83-1.14,16.63-3.44,4.81-2.29,9.18-5.95,13.1-10.99l7.36,5.59c-8.64,12.5-21.17,18.75-37.59,18.75ZM726.92,172.77c-8.83,0-16.28,3.24-22.33,9.72-6.05,6.48-9.73,15.18-11.04,26.11h63.69v-1.28c-.33-10.21-3.24-18.52-8.73-24.93-5.5-6.41-12.69-9.62-21.59-9.62Z"
            />
            <path
              className="cls-4"
              d="M840.86,174.74c-2.49-.46-5.14-.69-7.95-.69-7.33,0-13.53,2.05-18.6,6.13-5.07,4.09-8.69,10.03-10.84,17.81v72.92h-11.68v-106.19h11.48l.2,16.88c6.21-12.56,16.19-18.84,29.93-18.84,3.27,0,5.85.43,7.75,1.28l-.29,10.7Z"
            />
            <path
              className="cls-4"
              d="M922.52,270.92c-1.18-3.34-1.93-8.28-2.26-14.82-4.12,5.37-9.37,9.5-15.75,12.42-6.38,2.91-13.14,4.37-20.27,4.37-10.21,0-18.47-2.85-24.78-8.54-6.32-5.69-9.47-12.89-9.47-21.59,0-10.34,4.3-18.51,12.91-24.54,8.6-6.02,20.59-9.03,35.97-9.03h21.3v-12.07c0-7.59-2.34-13.56-7.02-17.91-4.68-4.35-11.5-6.53-20.46-6.53-8.18,0-14.95,2.09-20.32,6.28-5.37,4.19-8.05,9.23-8.05,15.11l-11.78-.1c0-8.44,3.93-15.75,11.78-21.94,7.85-6.18,17.5-9.27,28.95-9.27s21.18,2.96,28.02,8.88c6.84,5.92,10.35,14.18,10.55,24.78v50.25c0,10.27,1.08,17.96,3.24,23.06v1.18h-12.56ZM885.62,262.48c7.85,0,14.87-1.9,21.05-5.69,6.18-3.79,10.68-8.86,13.5-15.21v-23.36h-21c-11.71.13-20.87,2.27-27.48,6.43-6.61,4.16-9.91,9.86-9.91,17.13,0,5.96,2.21,10.89,6.62,14.82s10.16,5.89,17.22,5.89Z"
            />
          </g>
        </g>
      </svg>
      <div className="chat-container">
        {chat.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            <ReactMarkdown>{message.text}</ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
