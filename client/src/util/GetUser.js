export function getUserDetails() {
  let user = JSON.parse(localStorage.getItem('todoAppUser'));
    return user;
}