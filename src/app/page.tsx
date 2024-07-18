"use client";
export default function Home() {
  return (
    <div className="flex gap-4 mb-4">
      <button
        onClick={() => {
          fetch("/api/set-test-cookie");
        }}
      >
        🍪 Set test cookie
      </button>
      <button
        onClick={() => {
          fetch("/api/clear-test-cookie");
        }}
      >
        🗑️ Clear test cookie
      </button>
    </div>
  );
}
