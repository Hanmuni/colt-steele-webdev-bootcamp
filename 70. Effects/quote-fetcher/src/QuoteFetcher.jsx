import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcherLoader() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  async function fetchQuote() {
    setIsLoading(true);
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    setQuote(jsonResponse.quote);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <button onClick={fetchQuote}>Get Quote</button>
      <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
        Loading...
      </p>

      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
