import { makeNewTodo } from "./make-new-todo";

describe("makeNewTodo (unit)", () => {
  test("create a new todo", () => {
    // Arrange -> Cria o que precisa
    const expectTodo = {
      id: expect.any(String),
      description: "my new todo",
      createdAt: expect.any(String),
    };

    // Act
    const newTodo = makeNewTodo("my new todo");

    // Assert
    expect(newTodo.description).toBe(expectTodo.description);
  });
});
