import { setupServer } from "msw/node";
import { rest } from "msw";

const handlers = [
  rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "https://images.dog.ceo/breeds/bulldog-english/mami.jpg",
      })
    );
  }),
];

const server = setupServer(...handlers);

// Export the server only once
export { server };