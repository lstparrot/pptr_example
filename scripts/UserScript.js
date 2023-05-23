export default class LoginScript{

async generateRandomEmail() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    email = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      email += chars[randomIndex];
    }
    email += '@gmail.com';
    return email;
  }
}