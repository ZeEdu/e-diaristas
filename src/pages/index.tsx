import type { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os Profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
      />

      <UserInformation
        name="Eduardo"
        picture="https://github.com/ZeEdu.png"
        rating={3}
        description="São Paulo"
      />
    </div>
  );
};

export default Home;
