"use server";

import clientPromise from "@/lib/mongodb";

interface LeadInput {
  name: string;
  email: string;
  budget?: string;
  message: string;
}

export async function submitLead(data: LeadInput) {
  try {
    // Simple Server-side Validation
    if (!data.name || !data.name.trim()) {
      return { success: false, error: "Name is required." };
    }
    if (!data.email || !data.email.trim() || !data.email.includes("@")) {
      return { success: false, error: "A valid email address is required." };
    }
    if (!data.message || !data.message.trim()) {
      return { success: false, error: "Project description / message is required." };
    }

    // Connect to database
    const client = await clientPromise;
    const db = client.db("esc"); // Store inside "esc" database
    const collection = db.collection("leads"); // Leads collection

    // Insert lead document
    const result = await collection.insertOne({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      budget: data.budget ? data.budget.trim() : "Not specified",
      message: data.message.trim(),
      createdAt: new Date(),
    });

    console.log(`Lead successfully saved to MongoDB with ID: ${result.insertedId}`);

    return { 
      success: true, 
      id: result.insertedId.toString() 
    };
  } catch (error: any) {
    console.error("Database error during submitLead Server Action:", error);
    return { 
      success: false, 
      error: "An internal server error occurred. Please try again." 
    };
  }
}
