import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="p-8 bg-white rounded shadow-md text-center">
      <h1 className="text-3xl font-bold text-blue-600">Blog</h1>
      <ul className="mt-4 space-y-2">
        <li><Link href="/blog/genai" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">GenAI</Link></li>
        <li><Link href="/blog/python" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Python</Link></li>
        <li><Link href="/blog/data-science" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Data Science</Link></li>
        <li><Link href="/blog/java" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Java</Link></li>
      </ul>
    </div>
  );
}
