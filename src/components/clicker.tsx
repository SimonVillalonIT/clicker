import { useAppContext } from "../contexts/app";

export default function Clicker() {
    const { clickerRef } = useAppContext();

    return (
        <img
            ref={clickerRef}
            src="https://files.cults3d.com/uploaders/24537079/photo-file/420643ff-4934-4dbb-9d04-3eb7d34ef624/GeForce-RTX-4090-Founders-Edition.png"
            className="w-full max-w-sm object-contain transition-transform duration-75"
        />
    );
}
