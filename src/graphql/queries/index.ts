import { gql } from "graphql-request";

export const GET_ALL_DATA = gql`
  query {
    skills(stage: PUBLISHED) {
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
