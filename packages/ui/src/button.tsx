import * as React from "react";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
}