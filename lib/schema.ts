import {
  mysqlTable,
  int,
  text,
  varchar,
  timestamp,
  date,
  uniqueIndex,
  serial,
  boolean,
  tinyint,
} from "drizzle-orm/mysql-core";

// Users table
export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  profile: varchar("profile", { length: 255 }),
  is_supperadmin: tinyint("is_supperadmin").default(0).notNull(),
  email_verified_at: timestamp("email_verified_at"),
  password: varchar("password", { length: 255 }).notNull(),
  remember_token: varchar("remember_token", { length: 100 }),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
});

export const schema = { users } as const;

// Events table
export const events = mysqlTable("events", {
  id: int("id").primaryKey().autoincrement(),
  img: text("img").notNull(),
  date: date("date").notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  time: varchar("time", { length: 100 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Localized translations table
export const eventTranslations = mysqlTable(
  "event_translations",
  {
    id: int("id").primaryKey().autoincrement(),
    eventId: int("event_id").notNull(),
    locale: varchar("locale", { length: 10 }).notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    details: text("details").notNull(),
  },
  (t) => ({
    uniqueLocale: uniqueIndex("event_locale_unique").on(t.eventId, t.locale),
  })
);

export const testimonialdata = mysqlTable("testimonialdata", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  img: text("img").notNull(),
  position: varchar("position", { length: 255 }).notNull(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const carddata = mysqlTable("carddata", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull(),
  img: text("img").notNull(),
  date: varchar("date", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  time: varchar("time", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const navbar = mysqlTable("navbar", {
  id: serial("id").primaryKey(),
  label: varchar("label", { length: 255 }).notNull(),
  href: varchar("href", { length: 255 }),
  parentId: int("parent_id"),
  order: int("order").default(0),
  isVisible: boolean("is_visible").default(true),
});

export const popupdata = mysqlTable("popupdata", {
  id: serial("id").primaryKey(),
  img: text("img").notNull(),
  link: text("link").notNull(),
});

export const event_category = mysqlTable("event_category", {
  id: int("id").primaryKey().autoincrement(),
  category_en: varchar("title", { length: 255 }).notNull(),
  category_name: varchar("title", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
