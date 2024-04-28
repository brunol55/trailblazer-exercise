import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import MethodButton from "../MethodButton";
import "./URLQueryComponent.css";
import FetchResult from "../FetchResult";

const URLQueryComponent: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [selectedHttpMethod, setSelectedHttpMethod] = useState<string>("GET");

  const { loading, error, fetchResult, fetchData } = useFetch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData(url, selectedHttpMethod);
  };

  const handleMethodSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, httpMethod: string) => {
    event.preventDefault();
    setSelectedHttpMethod(httpMethod);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="method-row">
        <MethodButton httpMethod="GET" handleMethodSelect={handleMethodSelect} selectedHttpMethod={selectedHttpMethod} />
        <MethodButton httpMethod="POST" handleMethodSelect={handleMethodSelect} selectedHttpMethod={selectedHttpMethod} />
        <MethodButton httpMethod="PATCH" handleMethodSelect={handleMethodSelect} selectedHttpMethod={selectedHttpMethod} />
        <MethodButton httpMethod="DELETE" handleMethodSelect={handleMethodSelect} selectedHttpMethod={selectedHttpMethod} />
      </div>
      <input className="url-row" type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" required />
      <div className="fetch-row">
        <FetchResult loading={loading} error={error} fetchResult={fetchResult} />
        <button className="fetch-button" type="submit" disabled={loading}>
          Fetch
        </button>
      </div>
    </form>
  );
};

export default URLQueryComponent;
