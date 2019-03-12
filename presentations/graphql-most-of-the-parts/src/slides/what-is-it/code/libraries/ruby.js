export default `
# app/graphql/types/profile_type.rb
Types::ProfileType = GraphQL::ObjectType.define do
  name "Profile"
  field :id, !types.ID
  field :name, !types.String
  field :avatar, Types::PhotoType
end
`;
