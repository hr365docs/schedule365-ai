import { useEffect, useRef } from "react";

export default function useExitIntent(onExit) {
  const triggered = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!triggered.current && e.clientY <= 5) {
        triggered.current = true;   
        onExit();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [onExit]);
}
