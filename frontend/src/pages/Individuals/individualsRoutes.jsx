import Individuals from "./Individuals";
import Advanced from "./components/Advanced/Advanced";
import BaseApp from "./components/BaseApp/BaseApp";
import CoinbaseOne from "./components/CoinbaseOne/CoinbaseOne";
import Learn from "./components/Learn/Learn";
import CreditCard from "./components/CreditCard/CreditCard";
import DebitCard from "./components/DebitCard/DebitCard";
import Onchain from "./components/Onchain/Onchain";
import Earn from "./components/Earn/Earn";
import PrivateClient from "./components/PrivateClient/PrivateClient";

export const individualsRoutes = [
    { path: "individuals", element: <Individuals /> },
    { path: "advanced", element: <Advanced /> },
    { path: "base-app", element: <BaseApp /> },
    { path: "coinbase-one", element: <CoinbaseOne /> },
    { path: "learn", element: <Learn /> },
    { path: "credit-card", element: <CreditCard /> },
    { path: "debit-card", element: <DebitCard /> },
    { path: "onchain", element: <Onchain /> },
    { path: "earn", element: <Earn /> },
    { path: "private-client", element: <PrivateClient /> },
];
