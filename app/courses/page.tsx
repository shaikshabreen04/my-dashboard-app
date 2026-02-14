import Link from "next/link";

export default function CoursesPage() {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        <li>
          <Link href="/courses/python">Python</Link>
        </li>
        <li>
          <Link href="/courses/java">Java</Link>
        </li>
      </ul>
    </div>
  );
}
