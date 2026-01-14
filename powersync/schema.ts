import { createId } from "@paralleldrive/cuid2";
import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

// PowerSync/SQLite compatible UTC ISO string
const utcNow = sql`(STRFTIME('%Y-%m-%dT%H:%M:%fZ', 'NOW'))`;

// 1. Define your tables
export const subjects = sqliteTable("subjects", {
  id: text("id").primaryKey().$defaultFn(createId), // PowerSync expects a text 'id' (UUID)
  name: text("name").notNull(),
  teacherName: text("teacher_name").notNull(),
  roomNumber: text("room_number").notNull(),

  // Store as text for cross-db compatibility
  createdAt: text("created_at").notNull().default(utcNow),
  updatedAt: text("updated_at").notNull().default(utcNow),

  clientCreatedAt: text("client_created_at").notNull().default(utcNow),
  clientUpdatedAt: text("client_updated_at")
    .notNull()
    .default(utcNow)
    .$onUpdateFn(() => new Date().toISOString()),
});

// 2. Define other tables here...
// export const tasks = sqliteTable("tasks", { ... });

// 3. Export the schema object for Drizzle
export const drizzleSchema = { subjects };

// 4. Export Types for use in your UI components
export type Subject = InferSelectModel<typeof subjects>;
export type NewSubject = InferInsertModel<typeof subjects>;
