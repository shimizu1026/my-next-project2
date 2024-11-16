import { getNewsDetail } from "@/app/_libs/microcms";

type Props = {
  prams: {
    slug: string;
  };
};

export default async function Page(Props: Props) {
  const data = await getNewsDetail(params.slug);
  return <div>{data.title}</div>;
}
