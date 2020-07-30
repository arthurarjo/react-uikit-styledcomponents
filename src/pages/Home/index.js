import React from "react";
import { Button, Typography, Blockquote } from "~/components";

function Home() {
  return (
    <div>
      <Button variant="primary">Themed</Button>
      <Typography.Display1 color="dark500">Display 1</Typography.Display1>
      <Typography.Display2 color="dark500">Display 2</Typography.Display2>
      <Blockquote color="dark500">Blockquote</Blockquote>
    </div>
  );
}

export default Home;
