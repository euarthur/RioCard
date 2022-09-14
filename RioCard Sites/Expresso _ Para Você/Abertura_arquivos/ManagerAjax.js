
function ManagerAjax() { }
ManagerAjax._path = '/scrcpr2/dwr';

ManagerAjax.listarEnderecosPorCep = function(p0, callback) {
    DWREngine._execute(ManagerAjax._path, 'ManagerAjax', 'listarEnderecosPorCep', p0, callback);
}

ManagerAjax.listarUFs = function(callback) {
    DWREngine._execute(ManagerAjax._path, 'ManagerAjax', 'listarUFs', callback);
}

ManagerAjax.listarCidades = function(p0, callback) {
    DWREngine._execute(ManagerAjax._path, 'ManagerAjax', 'listarCidades', p0, callback);
}

ManagerAjax.listarBairros = function(p0, callback) {
    DWREngine._execute(ManagerAjax._path, 'ManagerAjax', 'listarBairros', p0, callback);
}
