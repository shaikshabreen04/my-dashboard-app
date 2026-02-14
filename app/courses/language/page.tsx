import Link from "next/link";

type Props = {
  params: {
    language: string;
  };
};

const topics: Record<string, string[]> = {
  python: ["introduction", "data-types"],
  java: ["history", "editions"],
};

export default function LanguagePage({ params }: Props) {
  const language = params.language;
  const languageTopics = topics[language] || [];

  return (
    <div>
      <h1>{language.toUpperCase()} Topics</h1>

      <ul>
        {languageTopics.map((topic) => (
          <li key={topic}>
            <Link href={`/courses/${language}/${topic}`}>
              {topic.replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
