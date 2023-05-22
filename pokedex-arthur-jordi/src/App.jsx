import "@fontsource/poppins";
import "@fontsource/inter";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { PokemonsProvider } from "./context/global";
import { Container } from "./styled";

export default function App() {
  return (
    <Container>
      <PokemonsProvider>
        <RouterProvider router={router} />
      </PokemonsProvider>
    </Container>
  );
}
