import { gql } from "graphql-request";

export const GET_ALL_DATA = gql`
  query {
    skills(first:100) {
      image
      title
      link
    }
    projects(stage: PUBLISHED) {
      id
      title
      description
      github
      image {
        url(
          transformation: {
            image: { resize: { width: 700 } }
            validateOptions: true
          }
        )
      }
    }
  }
`;
