Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Fluxo de Trabalho SGPP v2","publishDate":"29/07/2021 17:49:50","pages":[{"id":"d3fb405c-3bde-48bc-8cc3-c574112d3b0b","name":"Diagrama 1","version":"1.0","author":"terc.00692002979","image":"files\\diagrams\\Diagrama_1.png","isSubprocessPage":false,"elements":[{"id":"a862f4f2-d3ae-4690-973f-8b78a2aa5532","name":"FLUXO de trabalho SGPP","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1605.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"ecb9033a-d7ad-422c-afad-e3b7a7060580","name":"Início do projeto estratégico","elementImage":"files\\bpmnElements\\ConditionalStart.png","imageBounds":{"points":[{"x":136.0,"y":137.000031}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"ConditionalStart"},{"id":"c3bc83e8-2c92-4f77-af9c-beb300f13217","name":"Criar Demanda.","description":"","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":208.0,"y":113.0}],"radius":0.0,"height":78.0,"width":95.0,"shape":"rect"},"elementType":"UserTask","properties":[{"id":"d5495d73-5d38-4fbc-9862-4cf503c49a90","name":"Criação de Demanda","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Uma demanda &eacute; uma necessidade que pode se concretizar por meio de um projeto estrat&eacute;gico ou uma a&ccedil;&atilde;o estrat&eacute;gica.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text"},{"id":"8f86eead-ab13-4be6-9012-fe9a69429c3e","name":"Criar Demanda","value":"files\\attachments\\Criar_demanda.JPG","type":"image"}],"presentationAction":{"value":"https://projetos.sefaad.local/demandas/Lists/Demanda/NewForm.aspx?Source=/demandas/SitePages/Gest%C3%A3o%20de%20Demandas.aspx","type":"url"}},{"id":"e333ce1c-0e25-4243-bc4e-e1904a7dc229","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":331.6667,"y":132.333344}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"\rEnviar para Aprovação.","elementType":"SequenceFlow","properties":[]}]},{"id":"042a0273-6c3e-4163-9f8b-b572b0070f46","name":"\rEnviar para Aprovação.","description":"","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":397.0,"y":113.0}],"radius":0.0,"height":79.0,"width":95.0,"shape":"rect"},"elementType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}],"presentationAction":{"value":"https://projetos.sefaad.local/demandas/Lists/Demanda/NewForm.aspx?Source=/demandas/SitePages/Gest%C3%A3o%20de%20Demandas.aspx","type":"url"}},{"id":"2fb7a614-1e7a-49a9-b8a6-f2b8081538c0","name":"Aprova a Demanda?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":486.0,"y":1431.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"sim","elementType":"SequenceFlow","properties":[]},{"name":"não","elementType":"SequenceFlow","properties":[]}]},{"id":"38a29314-9f99-48ab-b490-9976546366c9","name":"Aprova a Demanda?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":566.0,"y":638.800049}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"sim","elementType":"SequenceFlow","properties":[]},{"name":"não","elementType":"SequenceFlow","properties":[]}]},{"id":"ead443ba-a633-4eb0-b60a-bd838c003d47","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":566.0,"y":132.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Fica no banco de demandas.","elementType":"SequenceFlow","properties":[]}]},{"id":"7fb3beb4-2468-4459-870e-4d405d22eee9","name":"Fica no banco de demandas.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":642.0,"y":114.0}],"radius":0.0,"height":76.0,"width":95.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"2f7dab59-c613-4b87-93cf-c62e7ea20afe","name":"Criar o projeto.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":640.0,"y":629.0}],"radius":0.0,"height":59.0,"width":115.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"dac7526a-a4d3-4c6b-8ec9-c08a70a71b40","name":"Preencher as Informações Básicas.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":833.3,"y":114.0}],"radius":0.0,"height":79.0,"width":128.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"bda675fd-9b1a-446d-b8f8-6d2f7e61be6b","name":"Preencher os detalhes do projeto.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":995.3,"y":433.599976}],"radius":0.0,"height":78.0,"width":106.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"848062e8-345c-4d81-bd94-2225f99dac45","name":"Enviar para a próxima fase.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1143.3,"y":114.0}],"radius":0.0,"height":78.0,"width":101.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"da6bafc2-89cd-49f3-882f-1c2b35d4dc35","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1382.9668,"y":673.6}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Criar Análise de Portfólio e Cenários. ","elementType":"SequenceFlow","properties":[]}]},{"id":"651a7a5c-ac12-4bc1-9f40-5ab4163fe849","name":"Criar Análise de Portfólio e Cenários. ","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1450.0,"y":652.0}],"radius":0.0,"height":83.0,"width":126.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"1cd8d8e5-9fb2-4b6d-8301-8e503e522a26","name":"Analisar e aprovar os projetos deste ciclo de desenvolvimento.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1446.0,"y":1015.0}],"radius":0.0,"height":78.0,"width":134.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"a6022ae7-1775-4e89-b89e-789b9cda21f3","name":"Projeto Aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1622.0,"y":1034.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"não","elementType":"SequenceFlow","properties":[]},{"name":"sim","elementType":"SequenceFlow","properties":[]}]},{"id":"6def9940-4201-469c-bb51-e68e06fd811d","name":"Permite Alterar Informações Básicas e Detalhes, porém aguarda Análise de portfólio.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1315.3,"y":114.0}],"radius":0.0,"height":79.0,"width":174.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"4d5f58c0-74d2-438b-9753-dfcd9765958b","name":"Análisar se é um Megaprojeto.","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1722.0,"y":1016.0}],"radius":0.0,"height":76.0,"width":112.0,"shape":"rect"},"elementType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"e388384f-e52f-436f-8419-80157c698ddb","name":"É um megaprojeto?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1868.0,"y":1034.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"sim","elementType":"SequenceFlow","properties":[]},{"name":"não","elementType":"SequenceFlow","properties":[]}]},{"id":"8921f9d7-e6ec-46aa-a810-76e1515dbee3","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1996.7,"y":133.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Elaborar o  ETP","elementType":"SequenceFlow","properties":[]}]},{"id":"ce010d77-aca0-41fc-8107-deaf546b8d79","name":"Elaborar o  ETP","elementImage":"files\\bpmnElements\\BusinessRuleTask.png","imageBounds":{"points":[{"x":2071.0,"y":112.0}],"radius":0.0,"height":82.0,"width":90.0,"shape":"rect"},"elementType":"BusinessRuleTask","properties":[]},{"id":"8bb5d061-3281-4eab-8d37-395b574378ec","name":"Enviar para a próxima fase.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2195.7,"y":114.0}],"radius":0.0,"height":79.0,"width":101.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"8dd30f86-6fe7-4879-bfb4-4c2644955de3","name":"Verificar se o ETP foi criado e anexado em documentos do projeto.","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":2178.7,"y":651.0}],"radius":0.0,"height":82.0,"width":136.0,"shape":"rect"},"elementType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"cb56a39a-ec29-404a-92e7-dfd77aba97b5","name":"ETP criado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2352.7,"y":672.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"não","elementType":"SequenceFlow","properties":[]},{"name":"sim","elementType":"SequenceFlow","properties":[]}]},{"id":"3a851d99-451e-4e02-b0f9-079fcecf0669","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2476.3,"y":133.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Preencher Canvas.","elementType":"SequenceFlow","properties":[]}]},{"id":"c42f2dc0-d3f7-4cac-a9a1-b9867500a9c8","name":"Preencher Canvas.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2557.0,"y":114.0}],"radius":0.0,"height":79.0,"width":105.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"fc2dd411-447b-4b40-aff2-f2bcda87c890","name":"Termo de Abertura(TAP)","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2692.0,"y":113.0}],"radius":0.0,"height":80.0,"width":104.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"a7319ba7-bcc7-4e0d-a55e-185246e680c0","name":"Enviar para a próxima fase.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2829.0,"y":114.0}],"radius":0.0,"height":79.0,"width":101.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"e2119fb9-f8f8-43b3-bdd3-0e6ea4e63d6d","name":"Revisar e aprovar o Canvas e o Termo de Abertura.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2819.0,"y":654.0}],"radius":0.0,"height":82.0,"width":121.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"04d13b65-ad26-4510-9526-2a094bed5d28","name":"TAP Aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2971.0,"y":675.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"sim","elementType":"SequenceFlow","properties":[]},{"name":"não","elementType":"SequenceFlow","properties":[]}]},{"id":"2878c063-5211-4ab1-94bf-3c1edbf6ab2a","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3096.3,"y":133.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Definir os Recursos do Projeto.","elementType":"SequenceFlow","properties":[]}]},{"id":"3703e199-5344-4392-b10b-4bb032c7b3c2","name":"Definir os Recursos do Projeto.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":3183.00024,"y":113.0}],"radius":0.0,"height":81.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"aa4b106f-69d2-4137-b2f2-635d9cd28777","name":"Criar o Cronograma.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":3319.00024,"y":113.0}],"radius":0.0,"height":81.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"760b62cd-9aef-4883-912b-33dd90bf2b0d","name":"Criar o TDR","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":3451.0,"y":114.0}],"radius":0.0,"height":79.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"68c65cf0-bfee-445b-a93e-3431dfc34cd5","name":"Preencher tarefas vinculadas aos pagamentos.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":3581.00024,"y":113.0}],"radius":0.0,"height":81.0,"width":127.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"bc6faaa2-224f-4173-a2da-d41729f10dcd","name":"Definir tarefas alinhadas ao BID.","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":3759.00024,"y":111.0}],"radius":0.0,"height":84.0,"width":104.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"2c445a4a-a4bf-4338-9651-c2a87fb0740e","name":"Cadastrar as partes interessadas.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":3918.00024,"y":113.0}],"radius":0.0,"height":80.0,"width":106.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"1d355e32-d3ba-408d-aafa-16a88ce964f4","name":"Mapear os Riscos.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":4076.00024,"y":113.0}],"radius":0.0,"height":80.0,"width":93.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"eac78a6f-d193-42d8-aba2-9174123ed628","name":"Setar o campo \"cronograma criado\" com valor \"sim\" nas informações básicas  do projeto.","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":4221.3,"y":112.0}],"radius":0.0,"height":82.0,"width":145.0,"shape":"rect"},"elementType":"ManualTask","properties":[]},{"id":"1846441f-3510-4a99-8be0-5329da59b9be","name":"Enviar para próxima fase","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":4421.3,"y":114.0}],"radius":0.0,"height":79.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"1e188717-c691-435c-95fc-3c8e31bb2d67","name":"Revisar  artefatos criados na fase de planejamento.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":4125.40039,"y":653.0}],"radius":0.0,"height":79.0,"width":131.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"f05eac71-877e-47c8-ab48-0a35fe3de622","name":"Definir a linha de base 0.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":4320.3,"y":652.0}],"radius":0.0,"height":80.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"e285d293-6353-4de0-90de-045e11ebaa33","name":"Planejamento Aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":4530.3,"y":672.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"sim","elementType":"SequenceFlow","properties":[]},{"name":"não","elementType":"SequenceFlow","properties":[]},{"name":"sim","elementType":"SequenceFlow","properties":[]}]},{"id":"121ed072-8f31-483d-8b2b-7000643ab2a0","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":4633.0,"y":132.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Inserir Documentos pertinentes ao projeto.","elementType":"SequenceFlow","properties":[]}]},{"id":"0b7fbf64-1b5a-468d-a9c0-707b856e30c5","name":"Inserir Documentos pertinentes ao projeto.","elementImage":"files\\bpmnElements\\BusinessRuleTask.png","imageBounds":{"points":[{"x":4710.0,"y":113.0}],"radius":0.0,"height":79.0,"width":104.0,"shape":"rect"},"elementType":"BusinessRuleTask","properties":[]},{"id":"e73656ae-a7d7-43ae-94d7-8aa32aa694bf","name":"Criar Atas.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":4852.0,"y":112.0}],"radius":0.0,"height":80.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"d1be24a1-e671-4426-91a3-bf13db0aeaa6","name":"Criar Plano de Ação.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":4995.0,"y":110.0}],"radius":0.0,"height":84.0,"width":104.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"d63972d6-0e19-458d-99c5-0feb05c00872","name":"Realizar Solicitações de Mudança.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":5144.0,"y":112.0}],"radius":0.0,"height":81.0,"width":117.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"8a0192d9-23c6-433d-873f-fb58e0f2013b","name":"Atualizar o percentual de conclusão das atividades.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":5311.0,"y":111.0}],"radius":0.0,"height":83.0,"width":117.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"5f0d02dc-52ad-4f0e-b943-39204f5fbc29","name":"Atualizar as tarefas de pagamento conforme são  empenhados.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":5469.0,"y":111.0}],"radius":0.0,"height":83.0,"width":124.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"92651f7b-21b0-4040-bb39-49b04c124b6d","name":"Setar o campo \"cronograma criado\" com valor \"cronograma concluído\" nas informações básicas  do projeto.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":5630.0,"y":110.0}],"radius":0.0,"height":84.0,"width":176.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"da091ef5-860a-41b5-bf9d-72a6acabbe76","name":"Enviar para próxima fase","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":5854.0,"y":111.0}],"radius":0.0,"height":83.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"e4da785a-d0c7-4a6f-8db5-116bfa615c17","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":5643.39941,"y":672.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Preencher os campos referentes ao sucesso do projeto nos Detalhes do projeto.","elementType":"SequenceFlow","properties":[]}]},{"id":"fe1ecde3-00d8-4043-9470-26e6637a4e63","name":"Preencher os campos referentes ao sucesso do projeto nos Detalhes do projeto.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":5741.8,"y":651.0}],"radius":0.0,"height":83.0,"width":164.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"072f0d96-b560-42f4-ac1a-28154652af2f","name":"Planejamento Aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":5966.699,"y":672.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"sim","elementType":"SequenceFlow","properties":[]},{"name":"não","elementType":"SequenceFlow","properties":[]}]},{"id":"01ceacbd-b26a-4e3e-bfd2-a34b61e936b4","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":6145.699,"y":134.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Marcar o Cronograma como concluído.","elementType":"SequenceFlow","properties":[]}]},{"id":"7ca29eab-a1e0-4d8e-b451-a9664921b878","name":"Marcar o Cronograma como concluído.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":6228.699,"y":113.0}],"radius":0.0,"height":82.0,"width":113.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"73907b8a-9c0e-4ab4-bab0-bea6c1e99be5","name":"Enviar para próxima fase","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":6406.299,"y":114.0}],"radius":0.0,"height":80.0,"width":100.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"ae4f22d7-ee94-49a0-bc94-538d3ee50466","name":"Verificar se o cronograma está concluído.","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":6395.699,"y":653.0}],"radius":0.0,"height":80.0,"width":120.0,"shape":"rect"},"elementType":"UserTask","properties":[]},{"id":"32c88651-899a-4f97-93d4-4a0d69589bc6","name":"Planejamento Aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":6554.299,"y":673.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"sim","elementType":"SequenceFlow","properties":[]},{"name":"não","elementType":"SequenceFlow","properties":[]}]},{"id":"543d681b-981b-44b4-b81e-45ff20136cf5","name":"fim do fluxo de projetos estratégicos","elementImage":"files\\bpmnElements\\MessageEnd.png","imageBounds":{"points":[{"x":6737.3,"y":138.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"MessageEnd"},{"id":"05d234d2-94fa-4d2e-91f1-fc4cb85b5cab","name":"Acompanhamento da evolução do projeto.","elementImage":"files\\bpmnElements\\ScriptTask.png","imageBounds":{"points":[{"x":5460.8,"y":653.0}],"radius":0.0,"height":79.0,"width":133.0,"shape":"rect"},"elementType":"ScriptTask","properties":[]},{"id":"2b009ca8-a669-4dc4-b055-98436344f90b","name":"Lider de Projetos","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":353.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0d62f1bf-be99-436b-91f7-dc315930927b","name":"PMO/Líder de projeto","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":373.3}],"radius":0.0,"height":182.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2a9cc7b9-7325-4004-a654-67fce40a20b3","name":"PMO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":555.3}],"radius":0.0,"height":350.4,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b46f163e-6255-46f8-aa1b-d49fa05fd7ea","name":"Comitê de Aprovação de Projetos","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":905.699951}],"radius":0.0,"height":408.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4a176a37-1591-4125-8c24-e94f03cc9c76","name":"Gestor da Área","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1314.0}],"radius":0.0,"height":311.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"48508c0e-e7da-419c-b97e-4e3e4ae7d80e","name":"Demanda","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":30.0,"width":713.3,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"92c6f195-bf9f-4946-bcba-d4fd1b9b64df","name":"Cadastro de Projetos -000","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":783.3,"y":20.0}],"radius":0.0,"height":30.0,"width":515.9,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"82e135e6-3adf-4cee-a0a1-ede7b28aa37e","name":"Banco de Projetos - 001","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":1299.2,"y":20.0}],"radius":0.0,"height":30.0,"width":673.8,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"86c67f9a-6421-4c68-a975-a4243a4e2a6c","name":"Estudo Preliminar - 100","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":1972.99988,"y":20.0}],"radius":0.0,"height":30.0,"width":466.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"636bf9a7-f2bf-4114-b709-bd3d57aaf0e3","name":"Iniciação - 101","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":2439.0,"y":20.0}],"radius":0.0,"height":30.0,"width":610.3,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"9404b048-0c5e-4d3a-8501-e12069634c31","name":"Planejamento - 102","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":3049.3,"y":20.0}],"radius":0.0,"height":30.0,"width":1545.7,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"9dd5efb2-6f50-4b36-81f9-9a3dca9c44b2","name":"Execução e Controle - 103","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":4595.0,"y":20.0}],"radius":0.0,"height":30.0,"width":1505.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"5120eef6-a67c-4b77-873d-401ed65a1d5d","name":"Encerramento - 104","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":6100.0,"y":20.0}],"radius":0.0,"height":30.0,"width":515.3,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"560ad5c6-3ecf-4cb1-92dc-8dfe3ff0f831","name":"Concluído - 108","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":6615.3,"y":20.0}],"radius":0.0,"height":30.0,"width":278.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"d3fb405c-3bde-48bc-8cc3-c574112d3b0b","containerName":"Diagrama 1","isSubprocess":false,"elements":[{"id":"a862f4f2-d3ae-4690-973f-8b78a2aa5532","value":"FLUXO de trabalho SGPP"},{"id":"2b009ca8-a669-4dc4-b055-98436344f90b","value":"Lider de Projetos"},{"id":"0d62f1bf-be99-436b-91f7-dc315930927b","value":"PMO/Líder de projeto"},{"id":"2a9cc7b9-7325-4004-a654-67fce40a20b3","value":"PMO"},{"id":"b46f163e-6255-46f8-aa1b-d49fa05fd7ea","value":"Comitê de Aprovação de Projetos"},{"id":"4a176a37-1591-4125-8c24-e94f03cc9c76","value":"Gestor da Área"},{"id":"48508c0e-e7da-419c-b97e-4e3e4ae7d80e","value":"Demanda"},{"id":"92c6f195-bf9f-4946-bcba-d4fd1b9b64df","value":"Cadastro de Projetos -000"},{"id":"82e135e6-3adf-4cee-a0a1-ede7b28aa37e","value":"Banco de Projetos - 001"},{"id":"86c67f9a-6421-4c68-a975-a4243a4e2a6c","value":"Estudo Preliminar - 100"},{"id":"636bf9a7-f2bf-4114-b709-bd3d57aaf0e3","value":"Iniciação - 101"},{"id":"9404b048-0c5e-4d3a-8501-e12069634c31","value":"Planejamento - 102"},{"id":"9dd5efb2-6f50-4b36-81f9-9a3dca9c44b2","value":"Execução e Controle - 103"},{"id":"5120eef6-a67c-4b77-873d-401ed65a1d5d","value":"Encerramento - 104"},{"id":"560ad5c6-3ecf-4cb1-92dc-8dfe3ff0f831","value":"Concluído - 108"},{"id":"2fb7a614-1e7a-49a9-b8a6-f2b8081538c0","value":"Aprova a Demanda?"},{"id":"38a29314-9f99-48ab-b490-9976546366c9","value":"Aprova a Demanda?"},{"id":"ecb9033a-d7ad-422c-afad-e3b7a7060580","value":"Início do projeto estratégico"},{"id":"c3bc83e8-2c92-4f77-af9c-beb300f13217","value":"Criar Demanda."},{"id":"042a0273-6c3e-4163-9f8b-b572b0070f46","value":"\rEnviar para Aprovação."},{"id":"dac7526a-a4d3-4c6b-8ec9-c08a70a71b40","value":"Preencher as Informações Básicas."},{"id":"a6022ae7-1775-4e89-b89e-789b9cda21f3","value":"Projeto Aprovado?"},{"id":"bda675fd-9b1a-446d-b8f8-6d2f7e61be6b","value":"Preencher os detalhes do projeto."},{"id":"fc2dd411-447b-4b40-aff2-f2bcda87c890","value":"Termo de Abertura(TAP)"},{"id":"c42f2dc0-d3f7-4cac-a9a1-b9867500a9c8","value":"Preencher Canvas."},{"id":"04d13b65-ad26-4510-9526-2a094bed5d28","value":"TAP Aprovado?"},{"id":"eac78a6f-d193-42d8-aba2-9174123ed628","value":"Setar o campo \"cronograma criado\" com valor \"sim\" nas informações básicas  do projeto."},{"id":"1d355e32-d3ba-408d-aafa-16a88ce964f4","value":"Mapear os Riscos."},{"id":"2c445a4a-a4bf-4338-9651-c2a87fb0740e","value":"Cadastrar as partes interessadas."},{"id":"bc6faaa2-224f-4173-a2da-d41729f10dcd","value":"Definir tarefas alinhadas ao BID."},{"id":"68c65cf0-bfee-445b-a93e-3431dfc34cd5","value":"Preencher tarefas vinculadas aos pagamentos."},{"id":"aa4b106f-69d2-4137-b2f2-635d9cd28777","value":"Criar o Cronograma."},{"id":"3703e199-5344-4392-b10b-4bb032c7b3c2","value":"Definir os Recursos do Projeto."},{"id":"651a7a5c-ac12-4bc1-9f40-5ab4163fe849","value":"Criar Análise de Portfólio e Cenários. "},{"id":"2f7dab59-c613-4b87-93cf-c62e7ea20afe","value":"Criar o projeto."},{"id":"e285d293-6353-4de0-90de-045e11ebaa33","value":"Planejamento Aprovado?"},{"id":"0b7fbf64-1b5a-468d-a9c0-707b856e30c5","value":"Inserir Documentos pertinentes ao projeto."},{"id":"e73656ae-a7d7-43ae-94d7-8aa32aa694bf","value":"Criar Atas."},{"id":"d1be24a1-e671-4426-91a3-bf13db0aeaa6","value":"Criar Plano de Ação."},{"id":"d63972d6-0e19-458d-99c5-0feb05c00872","value":"Realizar Solicitações de Mudança."},{"id":"8a0192d9-23c6-433d-873f-fb58e0f2013b","value":"Atualizar o percentual de conclusão das atividades."},{"id":"072f0d96-b560-42f4-ac1a-28154652af2f","value":"Planejamento Aprovado?"},{"id":"7ca29eab-a1e0-4d8e-b451-a9664921b878","value":"Marcar o Cronograma como concluído."},{"id":"32c88651-899a-4f97-93d4-4a0d69589bc6","value":"Planejamento Aprovado?"},{"id":"05d234d2-94fa-4d2e-91f1-fc4cb85b5cab","value":"Acompanhamento da evolução do projeto."},{"id":"543d681b-981b-44b4-b81e-45ff20136cf5","value":"fim do fluxo de projetos estratégicos"},{"id":"ead443ba-a633-4eb0-b60a-bd838c003d47","value":""},{"id":"2878c063-5211-4ab1-94bf-3c1edbf6ab2a","value":""},{"id":"01ceacbd-b26a-4e3e-bfd2-a34b61e936b4","value":""},{"id":"121ed072-8f31-483d-8b2b-7000643ab2a0","value":""},{"id":"e4da785a-d0c7-4a6f-8db5-116bfa615c17","value":""},{"id":"8921f9d7-e6ec-46aa-a810-76e1515dbee3","value":""},{"id":"7fb3beb4-2468-4459-870e-4d405d22eee9","value":"Fica no banco de demandas."},{"id":"848062e8-345c-4d81-bd94-2225f99dac45","value":"Enviar para a próxima fase."},{"id":"a7319ba7-bcc7-4e0d-a55e-185246e680c0","value":"Enviar para a próxima fase."},{"id":"1846441f-3510-4a99-8be0-5329da59b9be","value":"Enviar para próxima fase"},{"id":"da091ef5-860a-41b5-bf9d-72a6acabbe76","value":"Enviar para próxima fase"},{"id":"73907b8a-9c0e-4ab4-bab0-bea6c1e99be5","value":"Enviar para próxima fase"},{"id":"ae4f22d7-ee94-49a0-bc94-538d3ee50466","value":"Verificar se o cronograma está concluído."},{"id":"fe1ecde3-00d8-4043-9470-26e6637a4e63","value":"Preencher os campos referentes ao sucesso do projeto nos Detalhes do projeto."},{"id":"f05eac71-877e-47c8-ab48-0a35fe3de622","value":"Definir a linha de base 0."},{"id":"1e188717-c691-435c-95fc-3c8e31bb2d67","value":"Revisar  artefatos criados na fase de planejamento."},{"id":"e2119fb9-f8f8-43b3-bdd3-0e6ea4e63d6d","value":"Revisar e aprovar o Canvas e o Termo de Abertura."},{"id":"6def9940-4201-469c-bb51-e68e06fd811d","value":"Permite Alterar Informações Básicas e Detalhes, porém aguarda Análise de portfólio."},{"id":"5f0d02dc-52ad-4f0e-b943-39204f5fbc29","value":"Atualizar as tarefas de pagamento conforme são  empenhados."},{"id":"92651f7b-21b0-4040-bb39-49b04c124b6d","value":"Setar o campo \"cronograma criado\" com valor \"cronograma concluído\" nas informações básicas  do projeto."},{"id":"da6bafc2-89cd-49f3-882f-1c2b35d4dc35","value":""},{"id":"e333ce1c-0e25-4243-bc4e-e1904a7dc229","value":""},{"id":"ce010d77-aca0-41fc-8107-deaf546b8d79","value":"Elaborar o  ETP"},{"id":"8bb5d061-3281-4eab-8d37-395b574378ec","value":"Enviar para a próxima fase."},{"id":"cb56a39a-ec29-404a-92e7-dfd77aba97b5","value":"ETP criado?"},{"id":"8dd30f86-6fe7-4879-bfb4-4c2644955de3","value":"Verificar se o ETP foi criado e anexado em documentos do projeto."},{"id":"1cd8d8e5-9fb2-4b6d-8301-8e503e522a26","value":"Analisar e aprovar os projetos deste ciclo de desenvolvimento."},{"id":"e388384f-e52f-436f-8419-80157c698ddb","value":"É um megaprojeto?"},{"id":"3a851d99-451e-4e02-b0f9-079fcecf0669"},{"id":"4d5f58c0-74d2-438b-9753-dfcd9765958b","value":"Análisar se é um Megaprojeto."},{"id":"760b62cd-9aef-4883-912b-33dd90bf2b0d","value":"Criar o TDR"},{"id":"7f077d07-6825-43d8-bb16-a6b31f36aa6a"},{"id":"a361734d-a72b-4c75-9f50-ab3f81fd8c7d"},{"id":"b93a52a9-d240-403b-bddf-06f1e1c50609"},{"id":"c5bdd0ef-d9fd-411e-a2aa-b8a35fd8ca96"},{"id":"9cc4e0c6-e0c8-408a-8b1d-9b969411e1bf"},{"id":"c298c4d4-a1a0-4f5a-8110-3affcadebf00"},{"id":"0868ce8b-fe34-4d97-ab3d-edfd24206779"},{"id":"ff0f2bd1-6fc7-4e6c-a1c9-fa1c2f6907a0"},{"id":"cd97673b-e8b6-4f56-9c60-7adaece38053"}]}]}