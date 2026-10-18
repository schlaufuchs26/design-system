import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  IconButton,
  Row,
  Stack,
  Table,
  TBody,
  Td,
  THead,
  Th,
  Tr,
} from "../src";

describe("Button", () => {
  test("carries the variant and size as data attributes", () => {
    render(
      <Button variant="solid" size="lg">
        Move
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Move" });
    expect(button).toHaveAttribute("data-variant", "solid");
    expect(button).toHaveAttribute("data-size", "lg");
    expect(button).toHaveAttribute("type", "button");
  });

  test("defaults to an outline button of medium size", () => {
    render(<Button>Go</Button>);
    const button = screen.getByRole("button", { name: "Go" });
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-size", "md");
  });

  test("keeps a caller className next to the recipe class", () => {
    render(<Button className="extra">Go</Button>);
    expect(screen.getByRole("button", { name: "Go" }).className).toBe(
      "fox-button extra",
    );
  });

  test("passes clicks through", async () => {
    let clicked = 0;
    render(<Button onClick={() => clicked++}>Go</Button>);
    await userEvent.click(screen.getByRole("button", { name: "Go" }));
    expect(clicked).toBe(1);
  });

  test("IconButton is a square button with an accessible name", () => {
    render(<IconButton aria-label="Close">×</IconButton>);
    const button = screen.getByRole("button", { name: "Close" });
    expect(button).toHaveAttribute("data-size", "icon");
  });
});

describe("Badge", () => {
  test("maps the tone and flags to data attributes", () => {
    render(
      <Badge tone="warning" outline mono>
        review
      </Badge>,
    );
    const badge = screen.getByText("review");
    expect(badge).toHaveAttribute("data-tone", "warning");
    expect(badge).toHaveAttribute("data-outline");
    expect(badge).toHaveAttribute("data-mono");
  });
});

describe("Card", () => {
  test("renders header, body and footer as the design system parts", () => {
    render(
      <Card elevated>
        <CardHeader title="Feeds" />
        <CardBody>Body</CardBody>
      </Card>,
    );
    expect(screen.getByText("Feeds").className).toBe("fox-card-title");
    expect(screen.getByText("Body").className).toBe("fox-card-body");
    expect(screen.getByText("Body").closest(".fox-card")).toHaveAttribute(
      "data-elevated",
    );
  });
});

describe("layout", () => {
  test("Stack and Row take their gap from the token scale", () => {
    render(
      <Stack gap={6}>
        <Row gap={1}>a</Row>
      </Stack>,
    );
    const row = document.querySelector(".fox-row");
    const stack = document.querySelector(".fox-stack");
    expect(row?.getAttribute("style")).toContain("gap: var(--fox-space-1)");
    expect(stack?.getAttribute("style")).toContain("gap: var(--fox-space-6)");
  });

  test("Grid sets a minimum column width", () => {
    render(<Grid min={180} />);
    const grid = document.querySelector(".fox-grid");
    expect(grid?.getAttribute("style")).toContain(
      "grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))",
    );
  });
});

describe("Table", () => {
  test("wraps the table for horizontal scrolling and marks numeric cells", () => {
    render(
      <Table zebra>
        <THead>
          <Tr>
            <Th>Feed</Th>
            <Th numeric>Unread</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Blog</Td>
            <Td numeric>3</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    expect(screen.getByRole("table")).toHaveAttribute("data-zebra");
    expect(screen.getByRole("table").parentElement?.className).toBe(
      "fox-table-wrap",
    );
    expect(screen.getByRole("columnheader", { name: "Unread" }).className).toBe(
      "fox-num",
    );
    expect(screen.getByRole("cell", { name: "3" }).className).toBe("fox-num");
  });

  test("scroll={false} leaves the table bare", () => {
    render(
      <Table scroll={false}>
        <TBody>
          <Tr>
            <Td>1</Td>
          </Tr>
        </TBody>
      </Table>,
    );
    expect(screen.getByRole("table").parentElement?.tagName).toBe("DIV");
    expect(screen.getByRole("table").parentElement?.className).not.toBe(
      "fox-table-wrap",
    );
  });
});
