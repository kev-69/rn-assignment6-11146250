import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </CartProvider>
  );
}