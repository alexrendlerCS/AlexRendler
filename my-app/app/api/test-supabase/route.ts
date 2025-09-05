import { NextResponse } from "next/server";
import { supabase } from "../../../supabaseClient";

export async function GET() {
  try {
    console.log("🔌 Testing Supabase connection...");

    // Test 1: Basic connection test
    const { error: healthError } = await supabase
      .from("properties")
      .select("count")
      .limit(1);

    if (healthError) {
      console.error("❌ Connection failed:", healthError);
      return NextResponse.json(
        {
          success: false,
          error: "Connection failed",
          details: healthError,
        },
        { status: 500 }
      );
    }

    console.log("✅ Connection successful!");

    // Test 2: Fetch lead_id values
    console.log("📋 Fetching lead_id values from properties table...");

    const { data: properties, error: fetchError } = await supabase
      .from("properties")
      .select("lead_id, aon, city, state, property_type")
      .limit(5);

    if (fetchError) {
      console.error("❌ Fetch failed:", fetchError);
      return NextResponse.json(
        {
          success: false,
          error: "Fetch failed",
          details: fetchError,
        },
        { status: 500 }
      );
    }

    if (!properties || properties.length === 0) {
      console.log("⚠️ No properties found in the table");
      return NextResponse.json({
        success: true,
        message: "Connection successful but no properties found",
        properties: [],
      });
    }

    console.log(`✅ Found ${properties.length} properties`);

    // Test 3: Get specific property by lead_id
    const firstLeadId = properties[0].lead_id;
    console.log(`🎯 Testing specific lead_id lookup: ${firstLeadId}`);

    const { data: specificProperty, error: specificError } = await supabase
      .from("properties")
      .select("*")
      .eq("lead_id", firstLeadId)
      .single();

    if (specificError) {
      console.error("❌ Specific lookup failed:", specificError);
      return NextResponse.json(
        {
          success: false,
          error: "Specific lookup failed",
          details: specificError,
        },
        { status: 500 }
      );
    }

    console.log("✅ Successfully retrieved specific property");
    console.log("🎉 All tests passed!");

    return NextResponse.json({
      success: true,
      message: "All Supabase connection tests passed!",
      results: {
        connectionTest: "passed",
        propertiesFound: properties.length,
        sampleProperties: properties.map((p) => ({
          lead_id: p.lead_id,
          aon: p.aon,
          city: p.city,
          state: p.state,
          property_type: p.property_type,
        })),
        specificPropertyTest: {
          lead_id: specificProperty.lead_id,
          aon: specificProperty.aon,
          address: specificProperty.address,
          city: specificProperty.city,
          state: specificProperty.state,
          zip: specificProperty.zip,
          property_type: specificProperty.property_type,
        },
      },
    });
  } catch (error) {
    console.error("💥 Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unexpected error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

