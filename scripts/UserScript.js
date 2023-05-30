
export function generateRandomEmail() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let email = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      email += chars[randomIndex];
    }
    email += '@gmail.com';
    return email;
  }

  export function generateRandomNameCommunities() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let comname = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      comname += chars[randomIndex];
    }
    return comname;
  }
