import { pgTable, varchar,serial, text } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonmockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(), 
    jobDesc: varchar('jobDesc').notNull(), 
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId:varchar('mockId').notNull() 
})