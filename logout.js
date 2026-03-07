// logout.js
export function logout() {
    sessionStorage.removeItem('usuario_actual');
    window.location.href = 'index.html';
}