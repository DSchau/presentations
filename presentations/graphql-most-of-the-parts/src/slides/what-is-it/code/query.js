export default `
query GetUserById($id: Int!) {
  user(id: $id) {
    age
    name
    title
  }
}
`;
