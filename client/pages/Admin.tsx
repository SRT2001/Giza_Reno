import { useEffect, useState } from "react";

interface AdminProps {
  title: string;
}

export default function Admin({ title }: AdminProps) {
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    // Redirect to the static admin page
    window.location.replace("/admin/index.html");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {isRedirecting ? (
          <p>Redirecting to CMS...</p>
        ) : (
          <p>
            If you are not redirected,{" "}
            <a href="/admin/index.html" className="text-blue-600 underline">
              click here
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
