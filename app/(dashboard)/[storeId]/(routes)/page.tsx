interface Props {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<Props> = async ({ params }) => {
  return <div>{params.storeId}</div>;
};

export default DashboardPage;
