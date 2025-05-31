import React, { useEffect, useRef } from "react";

const AdSenseAd = ({
  client = "ca-pub-2266158594940854",
  slot = "3945583432",
  style = { display: "block" },
  format = "fluid",
  layoutKey = "-gw-3+1f-3d+2z"
}) => {
  const adRef = useRef(null);

  useEffect(() => {
    // Only push adsbygoogle once the script is loaded
    try {
      if (window.adsbygoogle && adRef.current) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      // Ignore errors; AdSense script might not be ready yet
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout-key={layoutKey}
      ref={adRef}
    />
  );
};

export default AdSenseAd;