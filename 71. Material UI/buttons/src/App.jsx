import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

function App() {
  return (
    <>
      <p>
        <Button variant="text" color="success">
          Text
        </Button>
      </p>
      <p>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
      </p>
      <p>
        <Button variant="outlined" color="info">
          Outlined
        </Button>
      </p>
      <p>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
      </p>
      <p>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
      </p>
    </>
  );
}

export default App;
