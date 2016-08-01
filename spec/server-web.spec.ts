const request = require("request");
const base_url = "http://localhost:3000/";

describe("Web Server", function() {
    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response) {
                expect(error).toBeNull();
                expect(response).toBeDefined();
                if (error) done();
                else {
                    expect(response.statusCode).toBe(200);
                    done();
                }
            });
        });

        it("returns a html document", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(body).toBeDefined();
                expect(body).toContain('html');
                done();
            });
        });
    });
});