import * as React from "react";

import { useAppContext } from "../contexts/app";

export default function useUpgrades() {
    const upgradesRef = React.useRef<HTMLElement | null>(null);
    const { upgrades } = useAppContext();

    React.useEffect(() => {
        if (!upgradesRef.current) return;

        const childsNumber = upgradesRef.current.childElementCount;
        let currentIndex = 0;
        let currentChild = upgradesRef.current.firstElementChild as HTMLElement;

        currentChild?.focus();

        const handleKeyUp = (e: KeyboardEvent) => {
            e.preventDefault();

            switch (e.key) {
                case "3":
                    if (currentIndex === childsNumber - 1) {
                        currentIndex = 0;
                        currentChild = upgradesRef.current?.firstElementChild as HTMLElement;
                    } else {
                        currentIndex++;
                        currentChild = currentChild?.nextElementSibling as HTMLElement;
                    }
                    break;
                case "6":
                    if (currentIndex === 0) {
                        currentIndex = childsNumber - 1;
                        currentChild = upgradesRef.current?.lastElementChild as HTMLElement;
                    } else {
                        currentIndex--;
                        currentChild = currentChild?.previousElementSibling as HTMLElement;
                    }
                    break;
                default:
                    return;
            }

            currentChild?.focus();
        };

        window.addEventListener("keyup", handleKeyUp);

        return () => window.removeEventListener("keyup", handleKeyUp);
    }, []);

    return { upgradesRef, upgrades };
}
