import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <Button variant="text">
          Astro
        </Button>
      </Link>
      <Link to="/beer">
        <Button variant="text" >
          Beer
        </Button>
      </Link>
    </div>
  );
}
