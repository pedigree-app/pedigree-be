import { t } from "elysia";

export const getTreeQuery = t.Object({
	level: t.Number(),
	animal_id_eq: t.String(),
	visited_ids: t.Optional(t.Array(t.String())),
});
