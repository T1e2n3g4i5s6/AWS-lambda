const AWS  = require("aws-sdk");
exports.handler = async (event) => {
    const STS = new AWS.STS();
    const Account = await STS.getCallerIdentity({}).promise();
    
    


    return Account.Account;
};

