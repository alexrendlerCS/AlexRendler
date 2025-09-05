"use client";

import { useState } from "react";
import { supabase } from "../../supabaseClient";

interface TestResults {
  success: boolean;
  message: string;
  properties?: Array<{
    lead_id: string;
    aon: string;
    city: string;
    state: string;
    property_type: string;
  }>;
  results?: {
    connectionTest: string;
    propertiesFound: number;
    sampleProperties: Array<{
      lead_id: string;
      aon: string;
      city: string;
      state: string;
      property_type: string;
    }>;
    specificPropertyTest: {
      lead_id: string;
      aon: string;
      address: string;
      city: string;
      state: string;
      zip: string;
      property_type: string;
    };
  };
}

export default function TestSupabasePage() {
  const [testResults, setTestResults] = useState<TestResults | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runTest = async () => {
    setLoading(true);
    setError(null);
    setTestResults(null);

    try {
      console.log("🔌 Testing Supabase connection...");

      // Test 1: Basic connection test
      console.log("1️⃣ Testing basic connection...");
      const { error: healthError } = await supabase
        .from("properties")
        .select("count")
        .limit(1);

      if (healthError) {
        throw new Error(`Connection failed: ${healthError.message}`);
      }

      console.log("✅ Connection successful!");

      // Test 2: Fetch lead_id values
      console.log("2️⃣ Fetching lead_id values from properties table...");
      const { data: properties, error: fetchError } = await supabase
        .from("properties")
        .select("lead_id, aon, city, state, property_type")
        .limit(5);

      if (fetchError) {
        throw new Error(`Fetch failed: ${fetchError.message}`);
      }

      if (!properties || properties.length === 0) {
        setTestResults({
          success: true,
          message: "Connection successful but no properties found",
          properties: [],
        });
        return;
      }

      console.log(`✅ Found ${properties.length} properties`);

      // Test 3: Get specific property by lead_id
      const firstLeadId = properties[0].lead_id;
      console.log(`3️⃣ Testing specific lead_id lookup: ${firstLeadId}`);

      const { data: specificProperty, error: specificError } = await supabase
        .from("properties")
        .select("*")
        .eq("lead_id", firstLeadId)
        .single();

      if (specificError) {
        throw new Error(`Specific lookup failed: ${specificError.message}`);
      }

      console.log("✅ Successfully retrieved specific property");
      console.log("🎉 All tests passed!");

      setTestResults({
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
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      console.error("💥 Test failed:", errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Supabase Connection Test</h1>

      <div className="mb-6">
        <button
          onClick={runTest}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg font-medium"
        >
          {loading ? "Testing..." : "Run Supabase Test"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong>Error:</strong> {error}
        </div>
      )}

      {testResults && (
        <div className="bg-white border rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            ✅ Test Results
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Status:</h3>
              <p className="text-green-600">{testResults.message}</p>
            </div>

            {testResults.results && (
              <>
                <div>
                  <h3 className="font-medium text-gray-700">
                    Properties Found:
                  </h3>
                  <p className="text-gray-600">
                    {testResults.results.propertiesFound}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700">
                    Sample Properties:
                  </h3>
                  <div className="bg-gray-50 p-4 rounded mt-2">
                    {testResults.results.sampleProperties.map(
                      (prop, index: number) => (
                        <div
                          key={index}
                          className="mb-2 p-2 bg-white rounded border"
                        >
                          <p>
                            <strong>Lead ID:</strong> {prop.lead_id}
                          </p>
                          <p>
                            <strong>AON:</strong> {prop.aon}
                          </p>
                          <p>
                            <strong>Location:</strong> {prop.city}, {prop.state}
                          </p>
                          <p>
                            <strong>Type:</strong> {prop.property_type}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700">
                    Specific Property Test:
                  </h3>
                  <div className="bg-gray-50 p-4 rounded mt-2">
                    <div className="bg-white p-3 rounded border">
                      <p>
                        <strong>Lead ID:</strong>{" "}
                        {testResults.results.specificPropertyTest.lead_id}
                      </p>
                      <p>
                        <strong>AON:</strong>{" "}
                        {testResults.results.specificPropertyTest.aon}
                      </p>
                      <p>
                        <strong>Address:</strong>{" "}
                        {testResults.results.specificPropertyTest.address}
                      </p>
                      <p>
                        <strong>Location:</strong>{" "}
                        {testResults.results.specificPropertyTest.city},{" "}
                        {testResults.results.specificPropertyTest.state}{" "}
                        {testResults.results.specificPropertyTest.zip}
                      </p>
                      <p>
                        <strong>Type:</strong>{" "}
                        {testResults.results.specificPropertyTest.property_type}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
