import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    podcasts: defineTable({
        user: v.id("users"),
        podcastTitle: v.string(),
        podcastDescription: v.string(),
        audioUrl: v.optional(v.string()),
        audioStorageId: v.optional(v.id("_storage")),
        imgUrl: v.optional(v.string()),
        imgStorageId: v.optional(v.id("_storage")),
        author: v.string(),
        authorId: v.string(),
        authorImgUrl: v.string(),
        imgPrompt: v.string(),
        voicePrompt: v.string(),
        voiceType: v.string(),
        audioDuration: v.number(),
        views: v.number(),
    }).
        searchIndex("search_author", { searchField: "author" }).
        searchIndex("search_title", { searchField: "podcastTitle" }).
        searchIndex("search_body", { searchField: "podcastDescription" }),
    users: defineTable({
        email: v.string(),
        imgUrl: v.string(),
        clerkId: v.string(),
        username: v.string(),
    })
})