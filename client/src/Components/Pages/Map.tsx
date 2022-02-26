import { Suspense } from "react";
// import MapOptionTemplate from "@Templates/MapOption";
import MapContainer from "@Templates/Map";

const MapPage = () => {
  return (
    <Suspense fallback={null}>
      <MapContainer />
      {/* <MapOptionTemplate /> */}
    </Suspense>
  );
};

export default MapPage;
