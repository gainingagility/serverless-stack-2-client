const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-lzf3amqy3ujk"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zs5f96wuyi.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_poYT3zTZJ",
    APP_CLIENT_ID: "60c60062gbl1bilvsuq5as23j",
    IDENTITY_POOL_ID: "us-east-1:8cc4551c-3db1-412d-95d3-bc7f877d299a"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-znmmkiitfcl5"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://arugzigzoc.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_BNsP9WJ7J",
    APP_CLIENT_ID: "5lro9lj0jovidd397r2vf0qq2t",
    IDENTITY_POOL_ID: "us-east-1:6a52ccaa-9bbf-4dae-aded-b9b956bca970"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
