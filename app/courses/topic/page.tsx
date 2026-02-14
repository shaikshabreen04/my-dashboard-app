type Props = {
  params: {
    language: string;
    topic: string;
  };
};

export default function TopicPage({ params }: Props) {
  return (
    <div>
      <h1>{params.language.toUpperCase()}</h1>
      <h2>{params.topic.replace("-", " ")}</h2>

      <p>
        This page dynamically renders content for{" "}
        <strong>{params.topic}</strong> in{" "}
        <strong>{params.language}</strong>.
      </p>
    </div>
  );
}


