import Business from "./components/Business/Business";
import AssetListings from "./components/AssetListings/AssetListings";
import Payments from "./components/Payments/Payments";
import TokenManager from "./components/TokenManager/TokenManager";

export const businessesRoutes = [
    { path: "business", element: <Business /> },
    { path: "asset-listings", element: <AssetListings /> },
    { path: "payments", element: <Payments /> },
    { path: "token-manager", element: <TokenManager /> },
];
