import request from "supertest";

import app from "../../src/app";

describe("Todo routes", () => {
  test("Get all todos", async () => {
    const res = await request(app).get("/todos");
    expect(res.body).toEqual(["Todo Name", "Todo Description", "true"]);
  });

  test("Create a new todo", async () => {
    const todoData = {
      name: "New Todo",
      description: "New Todo Description",
      completed: false,
    };

    const res = await request(app)
      .post("/add-todo")
      .send(todoData);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe(todoData.name);
    expect(res.body.description).toBe(todoData.description);
    expect(res.body.completed).toBe(todoData.completed);
  });
});