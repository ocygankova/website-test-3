import { useRouter } from 'next/router';

function Test() {
  const { query } = useRouter();

  return <div>Test ID: {query.id}</div>;
}

export default Test;
