import React from "react";
import { Button, Typography } from "~/components";

function Home() {
  return (
    <div>
      <Button variant="primary">Themed</Button>
      <Typography.Display1 color="dark500">Display 1</Typography.Display1>
      <Typography.Display2 color="dark500">Display 2</Typography.Display2>
      <Typography.H1 color="dark500">H1 Headline</Typography.H1>
    </div>
  );
}

export default Home;
