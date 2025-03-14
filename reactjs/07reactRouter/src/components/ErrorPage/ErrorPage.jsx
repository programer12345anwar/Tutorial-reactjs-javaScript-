import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-700 mt-4">We couldnt find the page you were looking for.</p>
            
            {error && (
                <pre className="bg-gray-200 rounded p-4 mt-4 text-sm text-gray-600">
                    {error.statusText || error.message}
                </pre>
            )}

            <a href="/" className="mt-6 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition">
                Go back to Home
            </a>
        </div>
    );
}


