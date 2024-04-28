import "./FetchResult.css";

const FetchResult = ({ loading, error, fetchResult }: { loading: boolean; error: string | null; fetchResult: string | null }) => {
  return (
    <div className="fetch-result-container">
      {loading && <div className="fetching-container">Fetching...</div>}
      {error && <div className="error-container">Error: {error}</div>}
      {fetchResult && <div className="success-container">{fetchResult}</div>}
    </div>
  );
};

export default FetchResult;
