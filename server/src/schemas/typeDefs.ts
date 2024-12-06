import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        me: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, password: String!): Auth
        saveJob(input: jobInput!): User
        removeJob(jobId: String!): User
    }

    type User {
        _id: ID
        username: String
        jobCount: Int
        savedJobs: [job]
    }

    type Job {
        jobId: String
        content: String
        jobTitle: String
        datePublished: String
        refs: refs
        levels: [levels]
        locations: [locations]
        company: company
    }

    type Auth {
        token: String
        user: User
    }

    input refsInput {
        landingPage: String
    }

    input levelsInput {
        name: String
    }

    input locationsInput {
        name: String
    }

    input companyInput {
        name: String
    }
    
    input jobInput {
        jobId: String
        content: String
        jobTitle: String
        datePublished: String
        refs: refsInput
        levels: [levelsInput]
        locations: [locationsInput]
        company: companyInput
    }
`;


export default typeDefs;