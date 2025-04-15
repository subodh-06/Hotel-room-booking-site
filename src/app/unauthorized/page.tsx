// src/app/unauthorized/page.tsx
export default function UnauthorizedPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-red-500">
        <h1 className="text-4xl font-bold">Unauthorized</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }
  