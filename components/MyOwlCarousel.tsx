"use client";

import OwlCarousel from "@ntegral/react-owl-carousel";
import { Card, Button } from "antd"; // Assuming Ant Design is installed and configured
import { useEffect, useState } from "react";

// ... (previous imports and dynamic import)

const MyAntDesignOwlCarousel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <OwlCarousel className="owl-theme" loop margin={10} nav>
      <div className="item">
        <Card title="Product 1">
          <p>Description for Product 1</p>
          <Button type="primary">View Details</Button>
        </Card>
      </div>
      <div className="item">
        <Card title="Product 2">
          <p>Description for Product 2</p>
          <Button type="primary">View Details</Button>
        </Card>
      </div>
      {/* More items with Ant Design components */}
    </OwlCarousel>
  );
};

export default MyAntDesignOwlCarousel;
