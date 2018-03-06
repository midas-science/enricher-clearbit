"use strict";
var Clearbit = class Clearbit {

    constructor(rp, inputData, config) {
        //npm request-promise is used for handling requests
        //see: https://github.com/request/request-promise
        this.rp = rp;
        //loads inputData of the target file specified in the source object path in your config
        this.inputData = inputData;
        //loads config for this enrichment
        this.config = config;
    }

    getConfig() {
        return this.config;
    }

    getName() {
        return 'Clearbit';
    }

    setData(inputData) {
        this.inputData = inputData;
    }

    process(inputData) {

        console.log(inputData);

        if (typeof inputData !== 'undefined' && inputData != null) {
            this.inputData = inputData;
        }

        /* Clearbit REST API endpoints
        https://clearbit.com/docs
     
        Email Endpoint
        https://person.clearbit.com/v2/people/find?email=:email
     
        Company Endpoint
        https://company.clearbit.com/v2/companies/find?domain=:domain
     
        */

        let req_url = 'https://company.clearbit.com/v2/companies/find';
        let parameters = {
            email: this.inputData
        }

        let endpoint = this.config.endpoint;
        if (endpoint != null && typeof endpoint != 'undefined') {
            switch (endpoint) {
                case "person":
                    req_url = 'https://person.clearbit.com/v2/people/find'
                    parameters = { email: this.inputData }
                    break;
                case "company":
                    req_url = 'https://company.clearbit.com/v2/companies/find'
                    parameters = { domain: this.inputData }
                    break;
                default:
                    req_url = 'https://person.clearbit.com/v2/people/find'
                    parameters = { email: this.inputData }
                    break;
            }
        } else {
            req_url = 'https://company.clearbit.com/v2/companies/find'
            parameters = { domain: this.inputData }
        }

        let options = {
            uri: req_url,
            qs: parameters,
            headers: {
                'User-Agent': 'midas',
                'Authorization': 'Bearer ' + this.config.api_key
            },
            json: true // Automatically parses the JSON string in the response
        };

        return this.rp(options).then((result) => {
            let _result = [];

            try {
                _result = result;
            } catch (e) {
                _result = null
            }

            return Promise.resolve(_result);
        }).catch((err) => {

            return Promise.resolve('ERROR HAPPENED');
        });

    }
};

module.exports.Clearbit = Clearbit;