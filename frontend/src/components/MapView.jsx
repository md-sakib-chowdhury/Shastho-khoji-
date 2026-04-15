import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView({ doctors }) {
    return (
        <MapContainer center={[23.8103, 90.4125]} zoom={7} style={{ height: "400px", width: "100%" }} className="rounded-xl">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {doctors?.map((doc) =>
                doc.location?.coordinates[0] !== 0 ? (
                    <Marker key={doc._id} position={[doc.location.coordinates[1], doc.location.coordinates[0]]}>
                        <Popup>
                            <strong>ডা. {doc.name}</strong><br />
                            {doc.specialization}<br />
                            {doc.district}
                        </Popup>
                    </Marker>
                ) : null
            )}
        </MapContainer>
    );
}