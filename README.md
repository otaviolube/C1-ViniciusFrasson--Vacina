# C1-ViniciusFrasson--Vacina


## Rotas para API de Produçao 
# Rota banco de Dados postgress

# Cadastrar   localhost:3000/api/Cadastrarpessoa
# Body 
{
       "pessoa_nome":"claudia ramos",
       "cpf_pessoa": "000.000.000-05",
        "data_nascimento": "01/02/2002",
        "telefone_pessoa": "(27)99721-7421",
        "grupo_prioritario": false,
        "endereco_pessoa":" Rua xyz , n 500, bairro abcsdf",
        "email_pessoa": "mail@mail.com"
}
Pesquisar localhost:3000/api/ListarVariaspessoas
Encontrar uma  localhost:3000/api/ListarUmapessoa/:cpf
Deletar  localhost:3000/api/RemoverPessoa/:cpf
Atualizar localhost:3000/api/AtualizarPessoa/:cpf
Body:
{    
       "pessoa_nome":"claudiaS",
        "data_nascimento": "01/02/1940",
        "telefone_pessoa": "(27)99721-7000",
        "grupo_prioritario": false,
        "endereco_pessoa":" Rua xyz , n 500, bairro abcsdf",
        "email_pessoa": "mail@mail.com"
}




Unidade de Saúde 

Cadastrar  localhost:3000/api/CadastrarUnidadeSaude
Encontrar  localhost:3000/api/ListarUnidadesSaude
Encontrar Uma  localhost:3000/api/ListarUmaUnidadeSaude/:id
Deletar  localhost:3000/api/RemoverUnidade/:id
Atualizar - localhost:3000/api/AtualizarUnidade/:id
{
       "nome_unidade": "TEST UPDATES",
        "descricao_unidade": "tes desc",
        "endereco_unidade": "test endereco",
        "telefone_unidade": "(27)98832-4848",
        "email_unidade": "mail.com.br",
        "latlong_unidade": "788855,558888"
}

Agendamento

Cadastrar  localhost:3000/api/CadastrarAtendimento/:idPessoa/:idUnidadeSaude
Body
{
	      "data_hora_agendamento": "2021-05-04",
        "necessidades_especiais": false,
        "observacoes_agendamento": "test endereco"
        
}

Encontrar  localhost:3000/api/ListarVariosAtendimentos
Encontrar Uma  localhost:3000/api/ListarUmAtendimento/:id
Deletar  localhost:3000/api/RemoverAtendimento/:id
Atualizar - localhost:3000/api/AtualizarAtendimento/:data               ( formato banco)
Body
{
	      
        "data_hora_agendamento": "2021/07/03",
        "necessidades_especiais": false,
        "observacoes_agendamento": "test endereco 55500"
}


Rotas MongoDB
Pessoa

Cadastrar   localhost:3000/api/cadastro
Body 
{
      "nome_pessoa": "Cristina",
        "cpf_pessoa": "000.000.000-02",
        "data_nascimento_pessoa": "03/12/1994",
        "telefone_pessoa": "(27)99721-7421",
        "grupo_prioritario":false,
        "endereco_pessoa": " Rua xyz , n 500, bairro abcsdf",
	      "email_pessoa":"teste@gmail.com"
}
Pesquisar  localhost:3000/api/listar
Encontrar uma  localhost:3000/api/listar/:cpf
Deletar  localhost:3000/api/deletar/cpf
Atualizar  localhost:3000/api/atualizar/:cpf
{
	      "nome_pessoa": "Cristina Silva amaro",
	      "cpf_pessoa": "000.000.000-01",
        "data_nascimento_pessoa": "03/12/1994",
        "telefone_pessoa": "(27)99721-7421",
        "grupo_prioritario":false,
        "endereco_pessoa": " Rua xyz , n 500, bairro abcsdf",
	      "email_pessoa":"teste@gmail.com"
}



Unidade de Saúde 

Cadastrar  localhost:3000/api/cadastrarUnidade
Body{
       "nome_unidade":"test12345",
        "descricao_unidade": "tes desc",
        "endereco_unidade": "test endereco",
        "telefone_unidade": "(27)98832-4848",
        "email_unidade": "mail.com.br",
        "latlong": "788855,558888"  
}
Encontrar  localhost:3000/api/listarUnidade
Encontrar Uma  localhost:3000/api/listarUnidade/:nomeunidade
Deletar  localhost:3000/api/unidade/:nomeunidade
Atualizar - localhost:3000/api/unidade/:nomeunidade
{
	      "nome_unidade": "TEST UPDATEs1234",
        "descricao_unidade": "tes desc",
        "endereco_unidade": "test endessssreco",
        "telefone_unidade": "(27)98832-4848",
        "email_unidade": "mail.com.br",
        "latlong_unidade": "788855,558888"
}
Agendamento

Cadastrar  localhost:3000/api/agendamento/:idUnidade/:idPessoa
 Body
{
      "data_hora_agendamento": "2021/05/03",
        "necessidades_especiais": false,
        "observacoes_agendamento": "test endereco"
        
}
Encontrar  localhost:3000/api/agendamento/listar 
Encontrar Uma  localhost:3000/api/agendamento/listar/:id
Deletar  localhost:3000/api/agendamento/:id
Atualizar -localhost:3000/api/agendamento/:id
Body
{
          data_hora_agendamento": "2021/07/03",
        "necessidades_especiais": false,
        "observacoes_agendamento": "test endereco 55500"
}





