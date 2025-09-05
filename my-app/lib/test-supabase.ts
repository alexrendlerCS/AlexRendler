import { supabase } from "../supabaseClient";
import { logger } from "./logger";

/**
 * Test Supabase connection by retrieving lead_id values from the properties table
 */
export async function testSupabaseConnection() {
  try {
    logger.info("🔌 Testing Supabase connection...");

    // Test 1: Check if we can connect to Supabase
    const { error: connectionError } = await supabase
      .from("properties")
      .select("count")
      .limit(1);

    if (connectionError) {
      logger.error("❌ Failed to connect to Supabase:", connectionError);
      return false;
    }

    logger.info("✅ Successfully connected to Supabase");

    // Test 2: Retrieve lead_id values from properties table
    logger.info("📋 Fetching lead_id values from properties table...");

    const { data: properties, error: fetchError } = await supabase
      .from("properties")
      .select("lead_id")
      .limit(10); // Limit to first 10 records for testing

    if (fetchError) {
      logger.error("❌ Error fetching lead_id values:", fetchError);
      return false;
    }

    if (!properties || properties.length === 0) {
      logger.warn("⚠️ No properties found in the table");
      return true; // Connection works, just no data
    }

    logger.info(`✅ Successfully retrieved ${properties.length} properties`);
    logger.info(
      "📊 Sample lead_id values:",
      properties.map((p) => p.lead_id)
    );

    // Test 3: Get a specific lead_id (first one)
    if (properties.length > 0) {
      const firstLeadId = properties[0].lead_id;
      logger.info(`🎯 Testing retrieval of specific lead_id: ${firstLeadId}`);

      const { data: specificProperty, error: specificError } = await supabase
        .from("properties")
        .select("*")
        .eq("lead_id", firstLeadId)
        .single();

      if (specificError) {
        logger.error("❌ Error fetching specific property:", specificError);
        return false;
      }

      logger.info(
        "✅ Successfully retrieved specific property:",
        specificProperty
      );
    }

    logger.info("🎉 All Supabase connection tests passed!");
    return true;
  } catch (error) {
    logger.error("💥 Unexpected error during Supabase test:", error);
    return false;
  }
}

/**
 * Run the test when this file is executed directly
 * Note: This is for Node.js execution, not browser/Next.js
 */
async function runTestIfMain() {
  // Check if running in Node.js environment
  if (typeof window === 'undefined' && typeof process !== 'undefined') {
    try {
      const success = await testSupabaseConnection();
      if (success) {
        console.log("\n🎉 Supabase connection test completed successfully!");
        process.exit(0);
      } else {
        console.log("\n❌ Supabase connection test failed!");
        process.exit(1);
      }
    } catch (error) {
      console.error("\n💥 Test execution failed:", error);
      process.exit(1);
    }
  }
}

// Only run if this is the main module (for Node.js execution)
if (typeof window === 'undefined' && typeof process !== 'undefined' && process.argv[1]?.includes('test-supabase')) {
  runTestIfMain();
}

