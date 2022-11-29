import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ITestItem } from 'types';
import { API_HOST } from 'utils/consts';

function Dynamic({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <ul>
        {data &&
          data.map(({ id, title, img }) => (
            <li key={id} style={{ padding: '20px' }}>
              <Link href={`dynamic-route-test/${id}`}>
                <Image src={img} alt={title} width={200} height={100} />
                <p>{title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Dynamic;

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${API_HOST}/test`);
    const data: ITestItem[] = await res.json();

    if (!data || !data.length) {
      return {
        notFound: true
      };
    }

    return {
      props: { data }
    };
  } catch {
    return {
      props: { data: null }
    };
  }
};
