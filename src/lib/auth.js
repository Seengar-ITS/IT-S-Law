// IT-S Universe — NO AUTH POLICY — All services are 100% public
// Founder decision: zero login, zero auth, zero sign-up on any service
export const getToken = () => null;
export const getUser = () => ({ id: 'public', email: '', name: 'Guest', avatar: '' });
export const isAuthenticated = () => false;
export const requireAuth = () => true; // Always allow — NO AUTH POLICY
export const logout = () => {};
export const signIn = () => {};
export const signOut = () => {};
