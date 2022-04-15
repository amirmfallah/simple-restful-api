const server = require("./server");
const supertest = require("supertest");
const request = supertest(server());

describe("Test HealthCheck Endpoint", () => {
  test("GET /healthcheck", (done) => {
    request
      .get("/healthcheck")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        res.body.status = "Operational";
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe("Test Not Existing Endpoint", () => {
  test("GET /not-existing", (done) => {
    request
      .get("/not-existing")
      .expect(404)
      .expect((res) => {
        res.body.status = "Not Found";
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
