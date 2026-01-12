import { column, Schema, Table } from "@powersync/react-native";

const subjects = new Table({
  name: column.text,
});

export const AppSchema = new Schema({
  subjects,
});

export type Database = (typeof AppSchema)["types"];
export type SubjectRecord = Database["subjects"];
