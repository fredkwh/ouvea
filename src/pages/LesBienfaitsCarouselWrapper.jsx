
import { useEffect, useState } from "react";
import LesBienfaitsCarouselDesktop from "./LesBienfaitsCarouselDesktop";
import LesBienfaitsCarouselMobile from "./LesBienfaitsCarouselMobile";

export default function LesBienfaitsCarouselWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <LesBienfaitsCarouselMobile /> : <LesBienfaitsCarouselDesktop />;
}
