
function RioCardVT() { }
RioCardVT._path = '/vt2/dwr';

RioCardVT.listarOperadorasPorCidade = function(p0, p1, p2, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarOperadorasPorCidade', p0, p1, p2, callback);
}

RioCardVT.listarLinhasPorOperadora = function(p0, p1, p2, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarLinhasPorOperadora', p0, p1, p2, callback);
}

RioCardVT.listarLinhasPorCidade = function(p0, p1, p2, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarLinhasPorCidade', p0, p1, p2, callback);
}

RioCardVT.selecionarCartaoIndividualExistente = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'selecionarCartaoIndividualExistente', p0, callback);
}

RioCardVT.selecionarCartaoIndividualExistenteUsuarioAlteracao = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'selecionarCartaoIndividualExistenteUsuarioAlteracao', p0, p1, callback);
}

RioCardVT.selecionarUsuarioCartao = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'selecionarUsuarioCartao', p0, p1, callback);
}

RioCardVT.listarEnderecosPorCep = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarEnderecosPorCep', p0, callback);
}

RioCardVT.listarMunicipiosPorUf = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarMunicipiosPorUf', p0, callback);
}

RioCardVT.listarBairrosPorMunicipio = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarBairrosPorMunicipio', p0, callback);
}

RioCardVT.listarUFs = function(callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarUFs', callback);
}

RioCardVT.getCompradorByNrDocComprd = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'getCompradorByNrDocComprd', p0, p1, callback);
}

RioCardVT.getLinksComprd = function(callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'getLinksComprd', callback);
}

RioCardVT.updateLinksComprd = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'updateLinksComprd', p0, callback);
}

RioCardVT.validarEmail = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'validarEmail', p0, callback);
}

RioCardVT.listarAgencias = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarAgencias', p0, callback);
}

RioCardVT.getAgencia = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'getAgencia', p0, p1, callback);
}

RioCardVT.selecionarRedeRecargaPorCidade = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'selecionarRedeRecargaPorCidade', p0, callback);
}

RioCardVT.listarUsuarios = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarUsuarios', p0, p1, callback);
}

RioCardVT.listarUsuariosComCartao = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'listarUsuariosComCartao', p0, p1, callback);
}

RioCardVT.getUsuario = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'getUsuario', p0, p1, callback);
}

RioCardVT.selecionarUsuarioByNrCartao = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'selecionarUsuarioByNrCartao', p0, p1, callback);
}

RioCardVT.isCartaoBilheteUnicoEmMigracao = function(p0, p1, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'isCartaoBilheteUnicoEmMigracao', p0, p1, callback);
}

RioCardVT.temBilheteUnicoHabilitado = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'temBilheteUnicoHabilitado', p0, callback);
}

RioCardVT.verificaBUSuspenso = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'verificaBUSuspenso', p0, callback);
}

RioCardVT.verificaCepFriburgo = function(p0, callback) {
    DWREngine._execute(RioCardVT._path, 'RioCardVT', 'verificaCepFriburgo', p0, callback);
}
