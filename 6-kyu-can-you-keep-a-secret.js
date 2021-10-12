// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2

function createSecretHolder(secret) {
    return {
        getSecret: function (){
            return secret;
        },
        setSecret: function (new_secret) {
            secret = new_secret;
        }
    }
}