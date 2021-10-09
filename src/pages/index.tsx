import { Button, CircularProgress, Container, Typography } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "@styles/pages/index.styles";
import useIndex from "data/hooks/pages/useIndex.page";
import type { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import TextField from "ui/components/inputs/TextField/TextField";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestante,
  } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os Profissionais"
        subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask="99.999-999"
            label={"Digite seu CEP"}
            fullWidth
            variant="outlined"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>
        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map(
                  (
                    { nome_completo, reputacao, cidade, foto_usuario },
                    index
                  ) => (
                    <UserInformation
                      key={index}
                      name={nome_completo}
                      picture={foto_usuario}
                      rating={reputacao}
                      description={cidade}
                    />
                  )
                )}
              </ProfissionaisContainer>
              <Container sx={{ textAlign: "center" }}>
                {diaristasRestante > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ... e mais {diaristasRestante}{" "}
                    {diaristasRestante > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço
                  </Typography>
                )}

                <Button>Contratar um profissional</Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align="center" color="textPrimary">
              Ainda não temos nenhuma diarista disponível na sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
