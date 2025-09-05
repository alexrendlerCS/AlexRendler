// Import fetch polyfill for Node.js if needed
if (typeof fetch === "undefined") {
  global.fetch = require("node-fetch");
}

const { createClient } = require("@supabase/supabase-js");

// Supabase configuration
const supabaseUrl = "https://kvhptwudlvptjqqgwnoz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aHB0d3VkbHZwdGpxcWd3bm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMTg5ODQsImV4cCI6MjA1MDU5NDk4NH0.7FKFA-XOBD8yu0tYQul5OPISfORb75ZvP71FhIW2ZTg";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log("🔌 Testing Supabase connection...\n");

  try {
    // Test 1: Basic connection
    console.log("1️⃣ Testing basic connection...");
    const { data: healthCheck, error: healthError } = await supabase
      .from("properties")
      .select("count")
      .limit(1);

    if (healthError) {
      console.error("❌ Connection failed:", healthError.message);
      return;
    }
    console.log("✅ Connection successful!\n");

    // Test 2: Fetch lead_id values
    console.log("2️⃣ Fetching lead_id values from properties table...");
    const { data: properties, error: fetchError } = await supabase
      .from("properties")
      .select("lead_id, aon, city, state")
      .limit(5);

    if (fetchError) {
      console.error("❌ Fetch failed:", fetchError.message);
      return;
    }

    if (!properties || properties.length === 0) {
      console.log("⚠️ No properties found in the table");
      return;
    }

    console.log(`✅ Found ${properties.length} properties:`);
    properties.forEach((prop, index) => {
      console.log(
        `   ${index + 1}. Lead ID: ${prop.lead_id} | AON: ${
          prop.aon
        } | Location: ${prop.city}, ${prop.state}`
      );
    });
    console.log("");

    // Test 3: Get specific property by lead_id
    const firstLeadId = properties[0].lead_id;
    console.log(`3️⃣ Testing specific lead_id lookup: ${firstLeadId}`);

    const { data: specificProperty, error: specificError } = await supabase
      .from("properties")
      .select("*")
      .eq("lead_id", firstLeadId)
      .single();

    if (specificError) {
      console.error("❌ Specific lookup failed:", specificError.message);
      return;
    }

    console.log("✅ Successfully retrieved specific property:");
    console.log(`   Lead ID: ${specificProperty.lead_id}`);
    console.log(`   AON: ${specificProperty.aon}`);
    console.log(`   Address: ${specificProperty.address}`);
    console.log(
      `   City: ${specificProperty.city}, ${specificProperty.state} ${specificProperty.zip}`
    );
    console.log(`   Property Type: ${specificProperty.property_type}`);
    console.log("");

    console.log(
      "🎉 All tests passed! Supabase connection is working correctly."
    );
  } catch (error) {
    console.error("💥 Unexpected error:", error.message);
  }
}

// Run the test
testConnection();
