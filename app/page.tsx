"use client";

import { Alert } from "flowbite-react";

export default function Home() {
  return (
    <Alert color="info">
      <span className="font-medium">Info alert!</span> Change a few things up
      and try submitting again.
    </Alert>
  );
}
