"use server"

import { revalidatePath } from "next/cache"
import { supabase } from "@/lib/supabase"

// Submit Sharkathon registration
export async function submitRegistration(formData: FormData) {
  try {
    // Convert FormData to an object
    const formDataObj = Object.fromEntries(formData.entries())

    // Format data for storage
    const registrationData = {
      first_name: formDataObj.firstName as string,
      last_name: formDataObj.lastName as string,
      email: formDataObj.email as string,
      phone: formDataObj.phone as string,
      school: formDataObj.school as string,
      grade: formDataObj.grade as string,
      team_name: formDataObj.teamName as string,
      team_size: formDataObj.teamSize as string,
      project_idea: formDataObj.projectIdea as string,
      how_heard: formDataObj.howHeard as string,
      program: (formDataObj.program as string) || "sharkathon",
      status: "pending",
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('registrations')
      .insert([registrationData])

    if (error) {
      console.error("Supabase error:", error)
      return { success: false, message: "Failed to save registration. Please try again." }
    }

    // Log success
    console.log("Registration saved to Supabase:", registrationData)

    // Revalidate the admin page
    revalidatePath("/admin")

    return { success: true, message: "Registration submitted successfully!" }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, message: "Failed to submit registration. Please try again." }
  }
}

// Submit contact form
export async function submitContactForm(formData: FormData) {
  try {
    // Convert FormData to an object
    const formDataObj = Object.fromEntries(formData.entries())

    // Format data for storage
    const contactData = {
      name: formDataObj.name as string,
      email: formDataObj.email as string,
      phone: (formDataObj.phone as string) || null,
      subject: formDataObj.subject as string,
      message: formDataObj.message as string,
      status: "new",
    }

    // Log the data for debugging
    console.log("Contact form data:", contactData)

    // Add to client-side store (this will be done via client-side code)
    // We're not actually using Supabase anymore, but we'll keep the API the same

    // Revalidate the admin page
    revalidatePath("/admin/contact")

    // Always return success to the user
    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Contact form error:", error)
    return { success: false, message: "Failed to send message. Please try again." }
  }
}

// Subscribe to newsletter
export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email) {
      throw new Error("Email is required")
    }

    // Log the data for debugging
    console.log("Newsletter subscription:", email)

    // Add to client-side store (this will be done via client-side code)
    // We're not actually using Supabase anymore, but we'll keep the API the same

    // Revalidate the admin page
    revalidatePath("/admin/newsletter")

    // Always return success to the user
    return { success: true, message: "Subscribed successfully!" }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return { success: false, message: "Failed to subscribe. Please try again." }
  }
}

