
function UsuarioAjax() { }
UsuarioAjax._path = '/scrcpr2/dwr';

UsuarioAjax.getUsuario = function(p0, p1, callback) {
    DWREngine._execute(UsuarioAjax._path, 'UsuarioAjax', 'getUsuario', p0, p1, callback);
}

UsuarioAjax.selecionaCartaoIndividualExistenteDisponivel = function(p0, callback) {
    DWREngine._execute(UsuarioAjax._path, 'UsuarioAjax', 'selecionaCartaoIndividualExistenteDisponivel', p0, callback);
}

UsuarioAjax.selecionaCartaoIndividualExistenteDisponivelChip = function(p0, callback) {
    DWREngine._execute(UsuarioAjax._path, 'UsuarioAjax', 'selecionaCartaoIndividualExistenteDisponivelChip', p0, callback);
}
