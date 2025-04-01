import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Quizes = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Button
      variant="contained"
      color="primary"
      className="generate-btn"
      onClick={() => navigate("/")}
      sx={{
        mt: 4,
        display: "block",
        mx: "auto",
        px: 4,
        py: 1.5,
        fontSize: "1.1rem",
        transition:"smooth",
      }}
    >
      Generate Quiz
    </Button>
  );
};

export default Quizes;
